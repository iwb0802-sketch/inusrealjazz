/**
 * 재즈 페이지 오른쪽 사이드 퀵 네비게이션
 * Design: Midnight Jazz Lounge — Deep Navy (#0A1628) + Gold (#C9A96E) + Mint (#7ECEC1)
 * - 평소: 오른쪽에 얇은 세로 탭 (반투명)
 * - 클릭: 왼쪽으로 슬라이드하며 메뉴 항목 펼침
 * - 현재 섹션 자동 하이라이트 (IntersectionObserver)
 */
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuItems = [
  { id: "about",          label: "소개" },
  { id: "jazz-info",      label: "특징" },
  { id: "videos",         label: "영상" },
  { id: "reviews",        label: "후기" },
  { id: "profiles",       label: "아티스트" },
  { id: "pricing",        label: "요금" },
  { id: "contact",        label: "문의" },
  { id: "qna",            label: "Q&A" },
];

export default function QuickNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // 히어로 지나면 나타남
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메인 메뉴 열릴 때 숨기기
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setNavMenuOpen(detail.open);
      if (detail.open) setOpen(false);
    };
    window.addEventListener("mainNavToggle", handler);
    return () => window.removeEventListener("mainNavToggle", handler);
  }, []);

  // 현재 섹션 감지
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionMap = new Map<string, number>();

    menuItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            sectionMap.set(id, entry.intersectionRatio);
          } else {
            sectionMap.delete(id);
          }
          let maxRatio = 0;
          let maxId = "";
          sectionMap.forEach((ratio, sid) => {
            if (ratio > maxRatio) { maxRatio = ratio; maxId = sid; }
          });
          if (maxId) setActiveId(maxId);
        },
        { threshold: [0.1, 0.3, 0.5], rootMargin: "-10% 0px -10% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // 바깥 클릭 시 닫기
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <div
      ref={panelRef}
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-500 ${
        (visible && !navMenuOpen) ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* 메뉴 패널 */}
      <div
        className={`flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "w-28 opacity-100" : "w-0 opacity-0"
        }`}
        style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans KR', serif" }}
      >
        <div className="bg-[#0A1628]/95 backdrop-blur-md border border-[#C9A96E]/20 border-r-0 shadow-2xl shadow-black/50 py-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-4 py-2.5 text-xs tracking-wide transition-all duration-200 whitespace-nowrap
                ${
                  activeId === item.id
                    ? "text-[#7ECEC1] bg-[#7ECEC1]/10 border-l-2 border-[#7ECEC1]"
                    : "text-[#f0ece4]/55 hover:text-[#C9A96E] hover:bg-[#C9A96E]/8"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 토글 탭 */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex flex-col items-center justify-center gap-1 px-1.5 py-5
          bg-[#0A1628]/70 backdrop-blur-sm border border-[#C9A96E]/20
          hover:bg-[#0A1628]/90 hover:border-[#C9A96E]/40
          transition-all duration-300 shadow-lg shadow-black/40 group
          ${open ? "border-l-0" : ""}`}
        style={{ borderRadius: open ? "0 4px 4px 0" : "4px 0 0 4px" }}
        aria-label="퀵 메뉴"
      >
        {open ? (
          <ChevronRight className="w-3 h-3 text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors" strokeWidth={1.5} />
        ) : (
          <>
            <ChevronLeft className="w-3 h-3 text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors" strokeWidth={1.5} />
            <span
              className="text-[#C9A96E]/60 group-hover:text-[#C9A96E]/90 transition-colors"
              style={{
                fontSize: "9px",
                letterSpacing: "0.15em",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              메뉴
            </span>
          </>
        )}
      </button>
    </div>
  );
}
