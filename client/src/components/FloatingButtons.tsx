/**
 * 하단 플로팅 버튼
 * 한 줄: [ ▶ 실황영상보기 ] [ 홈페이지·인스타·유튜브 pill ] [ 💬 카톡상담하기 ]
 * 히어로 섹션(100vh) 지나면 나타남
 * Design: Midnight Jazz Lounge — Deep Navy (#0A1628) + Gold (#C9A96E) 테마
 */
import { useState, useEffect } from "react";
import { MessageCircle, Play, Globe } from "lucide-react";

// 네이버 블로그 아이콘 (SVG)
const NaverBlogIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24">
    <path
      d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"
      fill="none"
      stroke="rgba(201,169,110,0.8)"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"
      fill="currentColor"
    />
  </svg>
);

// 유튜브 아이콘 (SVG)
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="none"
      stroke="rgba(255,80,80,0.85)"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="currentColor"
    />
  </svg>
);

// 인스타그램 아이콘
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad-float" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="url(#ig-grad-float)" />
    <rect x="7" y="7" width="10" height="10" rx="3" ry="3" fill="none" stroke="white" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2.5" fill="none" stroke="white" strokeWidth="1.5" />
    <circle cx="16.5" cy="7.5" r="0.8" fill="white" />
  </svg>
);

// INUSMUSIC SNS 링크
const snsLinks = [
  {
    label: "홈페이지",
    href: "http://inusmusic.com/",
    icon: Globe,
    isLucide: true,
  },
  {
    label: "인스타그램",
    href: "https://www.instagram.com/inusmusic/",
    icon: InstagramIcon,
    isLucide: false,
  },
  {
    label: "유튜브",
    href: "https://www.youtube.com/channel/UC1zF6ZTCwMxzK9fEqI9ESLA",
    icon: YoutubeIcon,
    isLucide: false,
  },
];

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [videoMenuOpen, setVideoMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 1.0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* 배경 그라데이션 — 페이지 하단 콘텐츠와 자연스럽게 분리 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent pointer-events-none" />

      {/* 한 줄: 영상보기 | SNS 아이콘 | 카톡상담 - 가운데 정렬 */}
      <div className="relative flex justify-center items-stretch px-4 pb-5 pt-3 gap-0">

        {/* 영상 서브메뉴 팝업 */}
        {videoMenuOpen && (
          <div
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex flex-col gap-1.5 z-50 pointer-events-auto"
            style={{ transform: 'translateX(calc(-50% - 60px))' }}
          >
            <a
              href="https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=24"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setVideoMenuOpen(false)}
              className="whitespace-nowrap flex items-center gap-2 bg-[#0A1628] border border-[#C9A96E]/40 text-[#F5E6C8]/80 hover:text-[#C9A96E] hover:bg-[#122240] hover:border-[#C9A96E]/70 text-xs px-4 py-2.5 transition-all duration-200 shadow-xl shadow-black/40"
              style={{ borderRadius: '4px', fontFamily: "'Noto Serif KR', serif" }}
            >
              <Play className="w-3 h-3 text-[#C9A96E] flex-shrink-0" strokeWidth={2} />
              재즈 영상보기
            </a>
            <a
              href="https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=67"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setVideoMenuOpen(false)}
              className="whitespace-nowrap flex items-center gap-2 bg-[#0A1628] border border-[#C9A96E]/40 text-[#F5E6C8]/80 hover:text-[#C9A96E] hover:bg-[#122240] hover:border-[#C9A96E]/70 text-xs px-4 py-2.5 transition-all duration-200 shadow-xl shadow-black/40"
              style={{ borderRadius: '4px', fontFamily: "'Noto Serif KR', serif" }}
            >
              <Play className="w-3 h-3 text-[#C9A96E] flex-shrink-0" strokeWidth={2} />
              외국인재즈 영상보기
            </a>
          </div>
        )}

        {/* 왼쪽: 실황영상보기 (토글 버튼) */}
        <button
          onClick={() => setVideoMenuOpen(!videoMenuOpen)}
          className={`${visible ? 'pointer-events-auto' : 'pointer-events-none'} flex items-center gap-2 px-5 py-3 bg-[#0A1628] border border-[#C9A96E]/40 border-r-0 text-[#F5E6C8]/80 hover:text-[#F5E6C8] hover:bg-[#122240] hover:border-[#C9A96E]/70 transition-all duration-300 shadow-xl shadow-black/40 group shrink-0 ${videoMenuOpen ? 'bg-[#122240] border-[#C9A96E]/70' : ''}`}
          style={{ borderRadius: '4px 0 0 4px' }}
        >
          <Play className={`w-3.5 h-3.5 text-[#C9A96E] transition-transform duration-300 flex-shrink-0 ${videoMenuOpen ? 'scale-110' : 'group-hover:scale-110'}`} strokeWidth={2} />
          <span className="text-xs tracking-wider whitespace-nowrap" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            실황영상보기
          </span>
          <svg className={`w-3 h-3 text-[#C9A96E]/60 transition-transform duration-300 flex-shrink-0 ${videoMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>

        {/* 가운데: SNS 아이콘 */}
        <div className={`${visible ? 'pointer-events-auto' : 'pointer-events-none'} flex items-center bg-[#0A1628] border border-[#C9A96E]/40 shadow-xl shadow-black/40 shrink-0`}>
          {snsLinks.map((sns, i) => (
            <a
              key={sns.label}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.label}
              className={`flex items-center justify-center w-10 h-full text-[#C9A96E]/60 hover:text-[#C9A96E] hover:bg-[#122240] transition-all duration-200 active:scale-95 ${
                i < snsLinks.length - 1 ? "border-r border-[#C9A96E]/20" : ""
              }`}
            >
              {sns.isLucide
                ? <sns.icon className="w-[13px] h-[13px]" strokeWidth={1.5} />
                : <sns.icon />
              }
            </a>
          ))}
        </div>

        {/* 오른쪽: 카톡상담하기 — Gold 강조 */}
        <a
          href="https://pf.kakao.com/_wxovaM/chat"
          target="_blank"
          rel="noopener noreferrer"
          className={`${visible ? 'pointer-events-auto' : 'pointer-events-none'} flex items-center gap-2 px-5 py-3 bg-[#C9A96E] text-[#0A1628] hover:bg-[#E8D5A8] border border-[#C9A96E] transition-all duration-300 shadow-xl shadow-[#C9A96E]/20 group shrink-0 font-medium`}
          style={{ borderRadius: '0 4px 4px 0' }}
        >
          <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" strokeWidth={2} />
          <span className="text-xs tracking-wider whitespace-nowrap" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            카톡상담하기
          </span>
        </a>

      </div>
    </div>
  );
}
