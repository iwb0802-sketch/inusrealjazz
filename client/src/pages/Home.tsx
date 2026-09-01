/**
 * INUSMUSIC - 웨딩 재즈 라이브 연주 랜딩페이지
 * Design: Midnight Jazz Lounge — Art Deco + Premium Jazz Club Mood
 * Colors: Deep Navy (#0A1628) + Warm Gold (#C9A96E) + Mint (#7ECEC1) accent
 * Typography: Playfair Display (display) + Cormorant Garamond (serif) + Noto Sans KR (sans)
 */

import { useEffect, useRef, useState } from "react";
import InusCardPopup from "@/components/InusCardPopup";
import FloatingButtons from "@/components/FloatingButtons";
import QuickNav from "@/components/QuickNav";

// ===== Asset URLs =====
const HERO_IMG = '/images/jazz/hero-jazz.webp';
const INSTRUMENTS_IMG = '/images/jazz/jazz-instruments.webp';
const PERFORMANCE_IMG = '/images/jazz/jazz-performance.webp';
const WEDDING_HALL_IMG = '/images/jazz/wedding-hall-jazz.webp';
const ABSTRACT_IMG = '/images/jazz/jazz-abstract-gold.webp';

const REVIEWS = [
  '/images/reviews/review-1.webp',
  '/images/reviews/review-2.webp',
  '/images/reviews/review-3.webp',
  '/images/reviews/review-4.webp',
  '/images/reviews/review-5.webp',
  '/images/reviews/review-6.webp',
];

// 서비스 드롭다운 항목
const SERVICE_ITEMS = [
  { label: '결혼식사회', url: 'https://inusmc.co.kr' },
  { label: '클래식연주', url: 'https://www.inusclassic.kr/' },
  { label: '뮤지컬웨딩', url: 'https://inusmw.kr/' },
  { label: '축가', url: 'https://inusmusic.kr/' },
  { label: '모바일청첩장', url: 'https://inuscard.com' },
  { label: '완성패키지', url: 'https://blog.naver.com/inusmusics/220652965646' },
];

// ===== Hooks =====
function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in-section, .stagger-children').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

// ===== Accordion Component =====
function Accordion({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="art-deco-frame bg-[#1A2332]/50 rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-6 flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A96E]/20 flex items-center justify-center">
            {icon}
          </span>
          <span className="font-sans text-white text-sm md:text-base font-medium">{title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-[#C9A96E] transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

// ===== QnA Accordion =====
function QnaItem({ question, children }: { question: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="art-deco-frame bg-[#1A2332]/50 rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-6 flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A96E]/20 flex items-center justify-center font-['Playfair_Display'] text-[#C9A96E] font-bold text-sm">Q</span>
          <span className="font-sans text-white text-sm md:text-base font-medium">{question}</span>
        </div>
        <svg
          className={`w-5 h-5 text-[#C9A96E] transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

// ===== Video Card =====
function VideoCard({ thumbnail, title, subtitle, youtubeId }: { thumbnail: string; title: string; subtitle: string; youtubeId: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="art-deco-frame rounded-lg overflow-hidden bg-[#1A2332]/60">
      <div className="aspect-video bg-[#122240] flex items-center justify-center relative group cursor-pointer" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <img src={thumbnail} alt={title} className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-[#0A1628]/50 group-hover:bg-[#0A1628]/30 transition-all duration-300" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-[#C9A96E]/80 flex items-center justify-center group-hover:bg-[#C9A96E] transition-all duration-300">
              <svg className="w-6 h-6 text-[#0A1628] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <p className="font-sans text-[#F5E6C8]/80 text-sm font-medium">{title}</p>
        <p className="font-sans text-[#F5E6C8]/40 text-xs mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

// ===== Main Component =====
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [floatingVisible, setFloatingVisible] = useState(false);
  const [extraServicesOpen, setExtraServicesOpen] = useState(true);
  const [videoFabOpen, setVideoFabOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const reviewScrollRef = useRef<HTMLDivElement>(null);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver();

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero intersection for floating buttons
  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setFloatingVisible(!entry.isIntersecting);
      });
    }, { threshold: 0.3 });
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Review auto-slide
  useEffect(() => {
    const reviewScroll = reviewScrollRef.current;
    if (!reviewScroll) return;
    const SLIDE_INTERVAL = 4000;
    const SLIDE_AMOUNT = 340;
    let paused = false;

    const interval = setInterval(() => {
      if (paused) return;
      const maxScroll = reviewScroll.scrollWidth - reviewScroll.clientWidth;
      if (reviewScroll.scrollLeft >= maxScroll - 10) {
        reviewScroll.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        reviewScroll.scrollBy({ left: SLIDE_AMOUNT, behavior: 'smooth' });
      }
    }, SLIDE_INTERVAL);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    reviewScroll.addEventListener('mouseenter', pause);
    reviewScroll.addEventListener('mouseleave', resume);
    reviewScroll.addEventListener('touchstart', pause, { passive: true });
    reviewScroll.addEventListener('touchend', () => setTimeout(resume, 2000));

    return () => clearInterval(interval);
  }, []);

  // 비디오 FAB 외부 클릭 시 닫기
  useEffect(() => {
    if (!videoFabOpen) return;
    const handler = () => setVideoFabOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [videoFabOpen]);

  // 서비스 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    if (!serviceDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(e.target as Node)) {
        setServiceDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [serviceDropdownOpen]);

  // Smooth scroll
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-[#F5E6C8]">

      {/* 팝업 */}
      <InusCardPopup />

      {/* ============ HEADER / NAV ============ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        id="main-header"
        style={{
          background: headerScrolled ? 'rgba(10, 22, 40, 0.95)' : 'transparent',
          backdropFilter: headerScrolled ? 'blur(10px)' : 'none',
          boxShadow: headerScrolled ? '0 1px 0 rgba(201, 169, 110, 0.1)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
            <span className="font-['Playfair_Display'] text-[#C9A96E] text-xl md:text-2xl font-bold tracking-wider">INUSMUSIC</span>
            <span className="hidden sm:inline text-[#F5E6C8]/60 text-xs font-sans tracking-widest uppercase">Jazz Wedding</span>
          </a>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: '소개', href: '#jazz-info' },
              { label: '영상', href: '#videos' },
              { label: '후기', href: '#reviews' },
              { label: '견적', href: '#pricing' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[#F5E6C8]/70 hover:text-[#C9A96E] text-sm transition-colors duration-300"
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              >
                {item.label}
              </a>
            ))}

            {/* 서비스 드롭다운 */}
            <div className="relative" ref={serviceDropdownRef}>
              <button
                className="flex items-center gap-1 font-sans text-[#F5E6C8]/70 hover:text-[#C9A96E] text-sm transition-colors duration-300"
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
              >
                서비스
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${serviceDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {serviceDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 rounded-lg overflow-hidden shadow-2xl border border-[#C9A96E]/20 z-50"
                  style={{ background: 'rgba(10, 22, 40, 0.97)', backdropFilter: 'blur(12px)' }}
                >
                  {SERVICE_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 font-sans text-[#F5E6C8]/70 hover:text-[#C9A96E] hover:bg-[#C9A96E]/10 text-sm transition-all duration-200"
                      onClick={() => setServiceDropdownOpen(false)}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C9A96E]/50 flex-shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            id="menu-toggle"
            className={`relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 z-[60] rounded-full border border-[#C9A96E]/50 bg-[#1A2332]/30 backdrop-blur-sm menu-btn-pulse ${menuOpen ? 'menu-open' : ''}`}
            aria-label="메뉴"
            onClick={() => { const next = !menuOpen; setMenuOpen(next); window.dispatchEvent(new CustomEvent("mainNavToggle", { detail: { open: next } })); }}
          >
            <span className="menu-bar w-6 h-[2px] bg-[#C9A96E] transition-all duration-500 origin-center" />
            <span className="menu-bar w-4 h-[2px] bg-[#C9A96E] transition-all duration-500 origin-center" />
            <span className="menu-bar w-6 h-[2px] bg-[#C9A96E] transition-all duration-500 origin-center" />
          </button>
        </div>
      </header>

      {/* ============ FULLSCREEN MENU OVERLAY ============ */}
      <div
        id="menu-overlay"
        className={`fixed inset-0 z-[55] transition-opacity duration-700 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-[#0A1628]/97 backdrop-blur-md" />
        <button
          id="menu-close"
          className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center group cursor-pointer"
          aria-label="메뉴 닫기"
          onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent("mainNavToggle", { detail: { open: false } })); }}
        >
          <span className="absolute w-8 h-[2px] bg-[#C9A96E] rotate-45 transition-all duration-300 group-hover:bg-[#F5E6C8] group-hover:w-9" />
          <span className="absolute w-8 h-[2px] bg-[#C9A96E] -rotate-45 transition-all duration-300 group-hover:bg-[#F5E6C8] group-hover:w-9" />
        </button>
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-1">
            {[
              { label: '메인', href: '#hero' },
              { label: '소개', href: '#jazz-info' },
              { label: '영상', href: '#videos' },
              { label: '후기', href: '#reviews' },
              { label: '견적', href: '#pricing' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="menu-item font-['Noto_Serif_KR'] text-4xl md:text-6xl font-medium text-[#F5E6C8]/30 hover:text-[#C9A96E] transition-all duration-500 py-3 tracking-wider"
                data-text={item.label}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              >
                <span className="menu-item-text">{item.label}</span>
              </a>
            ))}

            {/* 서비스 드롭다운 */}
            <div className="flex flex-col items-center">
              <button
                className="menu-item font-['Noto_Serif_KR'] text-4xl md:text-6xl font-medium text-[#F5E6C8]/30 hover:text-[#C9A96E] transition-all duration-500 py-3 tracking-wider flex items-center gap-3"
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              >
                <span className="menu-item-text">서비스</span>
                <svg
                  className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 text-[#C9A96E]/60 ${mobileServiceOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServiceOpen && (
                <div className="flex flex-col items-center gap-1 pb-2">
                  {SERVICE_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Noto_Serif_KR'] text-[#F5E6C8]/50 hover:text-[#C9A96E] text-xl md:text-2xl font-medium tracking-widest transition-colors duration-300 py-1.5"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <div className="gold-line w-20 mt-10 mb-6" />
          <a href="https://pf.kakao.com/_wxovaM/chat" target="_blank" rel="noopener" className="font-sans text-[#C9A96E]/60 text-sm tracking-widest hover:text-[#C9A96E] transition-colors duration-300">
            KAKAO TALK CONSULTATION
          </a>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero" ref={heroRef}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Jazz Wedding" className="w-full h-full object-cover object-[center_30%] sm:object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="font-['Cormorant_Garamond'] text-[#E8D5A8] text-lg md:text-xl tracking-[0.3em] mb-4 uppercase">Premium Jazz Wedding</p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)' }}>
            특별한 순간을<br />
            <span className="text-[#C9A96E]">재즈의 무드</span>로<br />
            완성합니다
          </h1>
          <p className="font-sans text-[#F5E6C8]/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            식전연주부터 행진까지,<br className="sm:hidden" />
            자연스럽게 흐르는 음악으로<br />
            하객의 몰입도를 끌어올리는<br className="sm:hidden" />
            프리미엄 재즈 라이브 연주
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://pf.kakao.com/_wxovaM/chat" target="_blank" rel="noopener" className="bg-[#C9A96E] hover:bg-[#E8D5A8] text-[#0A1628] font-sans font-medium px-8 py-3.5 rounded transition-all duration-300 text-base">
              카톡 상담하기
            </a>
            <a href="#about" className="border border-[#C9A96E]/50 hover:border-[#C9A96E] text-[#C9A96E] font-sans font-medium px-8 py-3.5 rounded transition-all duration-300 text-base" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>
              자세한 내용보기
            </a>
          </div>
          <div className="gold-line w-24 mx-auto mt-12" />
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>
          <span className="text-[#C9A96E]/50 text-xs font-sans tracking-widest">SCROLL</span>
          <svg className="w-4 h-4 text-[#C9A96E]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </a>
      </section>

      {/* ============ 1. 이너스 연혁 ============ */}
      <section className="py-20 md:py-28 relative" id="about">
        <div className="max-w-5xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-16">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Since 2015</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">10년의 신뢰,<br />40,000쌍의 감동</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
            {[
              { num: '2015', label: '설립연도' },
              { num: '10년+', label: '웨딩 진행 경험' },
              { num: '2,500건+', label: '본식 후기' },
              { num: '40,000쌍+', label: '진행 실적' },
            ].map((item) => (
              <div key={item.label} className="art-deco-frame p-6 text-center bg-[#1A2332]/50 rounded">
                <p className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#C9A96E] mb-2">{item.num}</p>
                <p className="font-sans text-[#F5E6C8]/60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. 재즈 설명 ============ */}
      <section className="py-20 md:py-28 relative" id="jazz-info">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Jazz Performance</p>
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
                단순한 배경음이 아닌<br />
                공간의 분위기를 완성하는<br />
                <span className="text-[#C9A96E]">감각적인 연주</span>
              </h2>
              <p className="font-sans text-[#F5E6C8]/60 text-sm leading-relaxed mb-8">
                <span className="block">식전연주부터 행진까지,</span>
                <span className="block">자연스럽게 흐르는 음악으로</span>
                <span className="block">하객의 몰입도를 끌어올리는</span>
                <span className="block">프리미엄 재즈 연주.</span>
                <span className="block mt-2">연간 5,000건 이상의 예식 경험이</span>
                <span className="block">만들어낸 완성도를 경험하세요.</span>
              </p>
              <div className="space-y-3 stagger-children">
                {[
                  '외국인 연주자 구성 가능',
                  '명문 음대 출신 & 현역 연주자 구성',
                  '학생 연주자 없이 검증된 인원 운영',
                  '예식 주간 사전 체크 + 당일 리허설 진행',
                  '공간과 분위기에 맞춘 맞춤 연주 제안',
                  '전속 계약 시 No-show 걱정 없음',
                  '1부 클래식 / 2부 재즈 등 유연한 구성 가능',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#C9A96E] mt-0.5">✓</span>
                    <span className="font-sans text-[#F5E6C8]/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-section">
              <div className="art-deco-frame rounded-lg overflow-hidden">
                <img src={INSTRUMENTS_IMG} alt="재즈 악기" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. 강점 + 추천 + 시스템 (통합) ============ */}
      <section className="py-20 md:py-28 bg-[#1A2332]/30 relative">
        <div className="max-w-5xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-12">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Why INUSMUSIC</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-3 whitespace-nowrap">합리적인 선택, 확실한 차이</h2>
            <p className="font-sans text-[#F5E6C8]/60 text-sm leading-relaxed mt-5 max-w-xl mx-auto">
              호텔 · 하우스웨딩 등 <span className="text-[#C9A96E]">공간의 분위기와 완성도</span>를 중요하게 생각하신다면,
              재즈 연주는 가장 많이 선택하시는 구성이며 실제 만족도가 높은 연출 방식입니다.
            </p>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            <div className="art-deco-frame p-8 bg-[#1A2332]/60 rounded gold-glow transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-[#C9A96E]/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#C9A96E] mb-3">합리적인 가격,<br className="md:hidden" /> 검증된 완성도</h3>
              <p className="font-sans text-[#F5E6C8]/60 text-sm leading-relaxed">시장 평균 대비 효율적인 비용으로 4만 쌍 이상의 데이터로 검증된 완성도를 제공합니다.</p>
            </div>
            <div className="art-deco-frame p-8 bg-[#1A2332]/60 rounded gold-glow transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-[#C9A96E]/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#C9A96E] mb-3">운영 시스템 기반의<br className="md:hidden" /> 안정성</h3>
              <p className="font-sans text-[#F5E6C8]/60 text-sm leading-relaxed">사전 미팅 이중 체크 → 이너스뮤직 운영 시스템 → 당일 현장 이중 체크로 완벽한 진행을 보장합니다.</p>
            </div>
            <div className="art-deco-frame p-8 bg-[#1A2332]/60 rounded gold-glow transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-[#C9A96E]/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#C9A96E] mb-3">클래스가 다른<br className="md:hidden" /> 프리미엄 연주</h3>
              <p className="font-sans text-[#F5E6C8]/60 text-sm leading-relaxed">클래식의 우아함, 재즈의 세련됨, 중창의 풍성함 — 예식에 맞는 최적의 구성을 제안합니다.</p>
            </div>
          </div>
          <div className="mt-12 art-deco-frame p-6 md:p-8 bg-[#1A2332]/60 rounded fade-in-section">
            <p className="text-center font-['Playfair_Display'] text-lg md:text-xl text-white font-semibold mb-2">
              예식 당일의 변수까지 <span className="text-[#7ECEC1]">시스템</span>으로 대비합니다
            </p>
            <p className="text-center font-sans text-[#F5E6C8]/50 text-xs mb-7">혹시 모를 변수나 당일 진행에 대한 불안감 없이</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { title: '전속 계약 진행', sub: 'No-show 걱정 없음' },
                { title: '이중 체크', sub: '예식 2시간 전 / 1시간 전' },
                { title: '예비 연주자 대기', sub: '만일의 상황 대비' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 justify-center sm:justify-start">
                  <span className="text-[#7ECEC1] text-sm mt-0.5">✓</span>
                  <div>
                    <p className="font-sans text-white text-sm font-medium">{item.title}</p>
                    <p className="font-sans text-[#F5E6C8]/50 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. 완성형 웨딩 패키지 ============ */}
      <section className="py-20 md:py-28 bg-[#1A2332]/30">
        <div className="max-w-5xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Complete Package</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">완성형 웨딩 패키지</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="art-deco-frame p-10 md:p-14 bg-[#1A2332]/60 rounded text-center">
              <div className="w-14 h-14 rounded-full bg-[#7ECEC1]/10 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-7 h-7 text-[#7ECEC1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <p className="font-sans text-[#F5E6C8]/70 text-base leading-relaxed mb-2">
                사회 · 축가 · 연주 · 뮤지컬웨딩을<br />각각 따로 준비하지 마세요.
              </p>
              <div className="gold-line w-12 mx-auto my-6" />
              <p className="font-sans text-white text-base leading-relaxed mb-2 font-medium">
                하나로 설계될 때<br />예식의 흐름과 완성도가 달라집니다.
              </p>
              <p className="font-sans text-[#C9A96E] text-sm mt-4 mb-8">가장 만족도가 높은 구성으로 추천드립니다</p>
              <a href="https://blog.naver.com/inusmusics/220652965646" target="_blank" rel="noopener" className="inline-block bg-[#C9A96E] hover:bg-[#E8D5A8] text-[#0A1628] font-sans font-medium px-8 py-3 rounded transition-all duration-300 text-sm">
                완성형 패키지 자세히 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. 연주 영상 ============ */}
      <section className="py-20 md:py-28" id="videos">
        <div className="max-w-5xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Performance Video</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">재즈 연주 영상</h2>
            <p className="font-sans text-[#F5E6C8]/50 text-sm mt-3">실제 예식에서 진행된 재즈 라이브 연주를 확인해보세요.</p>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6 stagger-children">
            <VideoCard thumbnail={PERFORMANCE_IMG} title="재즈3중주 식전연주" subtitle="식전연주" youtubeId="uoECPC4tqFo" />
            <VideoCard thumbnail={WEDDING_HALL_IMG} title="재즈4중주 + 싱어" subtitle="본식 연주" youtubeId="10dA7Bc-BvA" />
            <VideoCard thumbnail={HERO_IMG} title="재즈3중주" subtitle="재즈 라이브" youtubeId="JpVwJJ5REKg" />
            <VideoCard thumbnail={INSTRUMENTS_IMG} title="재즈4중주 신랑입장" subtitle="신랑입장" youtubeId="TXJ-7dZZ7G0" />
          </div>
        </div>
      </section>

      {/* ============ 7. 후기 ============ */}
      <section className="py-20 md:py-28 bg-[#1A2332]/30" id="reviews">
        <div className="max-w-6xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Real Reviews</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">실제 고객 후기</h2>
            <p className="font-sans text-[#F5E6C8]/50 text-sm mt-3">이너스뮤직 재즈 연주를 경험하신 고객님들의 생생한 후기입니다.</p>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="relative">
            <div className="review-scroll flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" id="review-scroll" ref={reviewScrollRef}>
              {REVIEWS.map((src, i) => (
                <div key={i} className="flex-shrink-0 w-72 md:w-80 snap-center">
                  <div className="art-deco-frame rounded-lg overflow-hidden bg-[#1A2332]/60 gold-glow transition-all duration-500">
                    <img src={src} alt={`재즈 연주 후기 ${i + 1}`} className="w-full h-auto" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => reviewScrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-[#1A2332]/80 border border-[#C9A96E]/30 items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E]/20 transition-all duration-300 hidden md:flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => reviewScrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-[#1A2332]/80 border border-[#C9A96E]/30 items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E]/20 transition-all duration-300 hidden md:flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="text-center mt-8">
            <a href="http://musicin.godohosting.com/bbs/board.php?bo_table=forum" target="_blank" rel="noopener" className="inline-block border border-[#C9A96E]/50 hover:border-[#C9A96E] text-[#C9A96E] font-sans font-medium px-8 py-3 rounded transition-all duration-300 text-sm">
              실제 고객 후기 전체보기
            </a>
          </div>
        </div>
      </section>

      {/* ============ 8. 재즈 진행 안내 ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-16">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Process</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">재즈 연주 진행 안내</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="hidden md:grid md:grid-cols-5 gap-4 stagger-children">
            {[
              { num: '01', title: '상담하기', desc: '금액 및 상담' },
              { num: '02', title: '주문하기', desc: '결정 후 계약체결' },
              { num: '03', title: '컨설팅', desc: '곡리스트 결정' },
              { num: '04', title: '최종확인', desc: '4~5일 전 안심전화' },
              { num: '05', title: '행사진행', desc: '당일 50분 전 도착' },
            ].map((s) => (
              <div key={s.num} className="art-deco-frame p-5 text-center bg-[#1A2332]/50 rounded">
                <p className="font-['Playfair_Display'] text-2xl font-bold text-[#C9A96E] mb-2">{s.num}</p>
                <p className="font-sans text-white text-sm font-medium mb-1">{s.title}</p>
                <p className="font-sans text-[#F5E6C8]/50 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden stagger-children">
            <div className="grid grid-cols-3 gap-3 mb-3">
              {[
                { num: '01', title: '상담하기', desc: '금액 및 상담' },
                { num: '02', title: '주문하기', desc: '결정 후 계약체결' },
                { num: '03', title: '컨설팅', desc: '곡리스트 결정' },
              ].map((s) => (
                <div key={s.num} className="art-deco-frame p-4 text-center bg-[#1A2332]/50 rounded">
                  <p className="font-['Playfair_Display'] text-xl font-bold text-[#C9A96E] mb-1">{s.num}</p>
                  <p className="font-sans text-white text-xs font-medium mb-0.5">{s.title}</p>
                  <p className="font-sans text-[#F5E6C8]/50 text-[10px]">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-[66%] mx-auto">
              {[
                { num: '04', title: '최종확인', desc: '4~5일 전 안심전화' },
                { num: '05', title: '행사진행', desc: '당일 50분 전 도착' },
              ].map((s) => (
                <div key={s.num} className="art-deco-frame p-4 text-center bg-[#1A2332]/50 rounded">
                  <p className="font-['Playfair_Display'] text-xl font-bold text-[#C9A96E] mb-1">{s.num}</p>
                  <p className="font-sans text-white text-xs font-medium mb-0.5">{s.title}</p>
                  <p className="font-sans text-[#F5E6C8]/50 text-[10px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9. 재즈 악기 구성 안내 ============ */}
      <section className="py-20 md:py-28 bg-[#1A2332]/30">
        <div className="max-w-5xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Ensemble</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">재즈 악기 구성 안내</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              { title: '재즈 3중주', sub: 'Trio', instruments: '재즈피아노 · 콘트라베이스 · 드럼' },
              { title: '재즈 4중주', sub: 'Quartet', instruments: '재즈피아노 · 콘트라베이스 · 드럼 · 색소폰' },
              { title: '재즈 5중주', sub: 'Quintet', instruments: '재즈피아노 · 드럼 · 콘트라베이스 · 색소폰1 · 색소폰2' },
              { title: '외국인 재즈밴드', sub: 'Foreign Band', instruments: '외국인 연주자 요청 시 추가금액' },
              { title: '재즈팀 + 재즈싱어', sub: 'Jazz Vocal', instruments: '연주팀 + 재즈 보컬리스트' },
            ].map((s) => (
              <div key={s.title} className="art-deco-frame p-6 bg-[#1A2332]/60 rounded gold-glow transition-all duration-500">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C9A96E]"><path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#C9A96E]">{s.title}</h3>
                <p className="font-['Cormorant_Garamond'] text-[#F5E6C8]/40 text-xs tracking-wider uppercase mb-3">{s.sub}</p>
                <p className="font-sans text-[#F5E6C8]/60 text-sm">{s.instruments}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. 재즈 곡 리스트 ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Song List</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">재즈 곡 리스트</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="space-y-4">
            <Accordion title="재즈 곡 리스트" icon={<svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>}>
              <div className="px-4 pb-6 overflow-x-auto">
                <table className="w-full text-left font-sans text-sm">
                  <thead>
                    <tr className="border-b border-[#C9A96E]/30">
                      <th className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">식순</th>
                      <th className="py-3 px-3 text-[#C9A96E] font-medium">재즈연주곡</th>
                      <th className="py-3 px-3 text-[#C9A96E] font-medium">영화음악</th>
                      <th className="py-3 px-3 text-[#C9A96E] font-medium">가요/팝송</th>
                      <th className="py-3 px-3 text-[#C9A96E] font-medium">애니/드라마OST</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#F5E6C8]/60">
                    <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">화촉점화</td><td className="py-3 px-3 text-xs">Locky Sothem, Meditation, Desafinado, Blue Bossa, Autumn Leaves, Wave</td><td className="py-3 px-3 text-xs">I Will(러브어페어), I Will Wait For You(쉘브르의 우산), 하울의 움직이는 성</td><td className="py-3 px-3 text-xs">You Are The Sunshine Of My Life, 가을이 오면, 청혼, Je Te Veux, Love Me Tender</td><td className="py-3 px-3 text-xs">꽃날(황진이OST), 봄날 벚꽃 그리고 너, 봄바람</td></tr>
                    <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">신랑입장</td><td className="py-3 px-3 text-xs">Take Five, Mo Better Blues, Wave, Blue Bossa</td><td className="py-3 px-3 text-xs">Raiders March(인디아나존스), Departure(굿럭), He's Pirate(캐리비안해적)</td><td className="py-3 px-3 text-xs">Mai Piu, My Way, Can't Take My Eyes Off You, Viva La Vida</td><td className="py-3 px-3 text-xs">Take Five, Flying</td></tr>
                    <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">신부입장</td><td className="py-3 px-3 text-xs">Loving You(Kenny G), Child Is Born, Alice In Wonderland</td><td className="py-3 px-3 text-xs">She(노팅힐), All I Ask Of You(오페라의 유령), Bridal Waltz</td><td className="py-3 px-3 text-xs">Beauty And The Beast, The Rose, A Whole New World(알라딘)</td><td className="py-3 px-3 text-xs">Someday My Prince Will Come, Can't Help Falling In Love, Isn't She Lovely</td></tr>
                    <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">내빈인사</td><td className="py-3 px-3 text-xs">Misty, When I Fall In Love, Someday My Prince Will Come</td><td className="py-3 px-3 text-xs">The Whole Nine Yards(냉정과 열정사이), I Will(러브어페어)</td><td className="py-3 px-3 text-xs">사랑의 서약, 감사(김동률), Open Arms, Perhaps Love</td><td className="py-3 px-3 text-xs">또 다시(센과 치히로), When You Wish Upon A Star, Over The Rainbow, Moonriver</td></tr>
                    <tr><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">행진</td><td className="py-3 px-3 text-xs">Feel So Good, All Of Me, Cheek To Cheek, Let There Be Love</td><td className="py-3 px-3 text-xs">Departure(굿럭), A Lover's Concerto(접속), Another Day Of Sun(라라랜드)</td><td className="py-3 px-3 text-xs">Isn't She Lovely, Je T'aime, LOVE(나탈리콜), 축혼행진곡(재즈ver.)</td><td className="py-3 px-3 text-xs">Let There Be Love, Dream A Little Dream Of Me</td></tr>
                  </tbody>
                </table>
              </div>
            </Accordion>
            <Accordion title="재즈팀 + 재즈싱어" icon={<svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>}>
              <div className="px-4 pb-6">
                <div className="art-deco-frame p-4 bg-[#1A2332]/40 rounded mb-4">
                  <p className="font-sans text-[#F5E6C8]/60 text-sm">화촉점화/신랑/신부/행진 4부분을 노래로 진행 (선택사항 - 축가 서비스 진행)</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-sm">
                    <thead>
                      <tr className="border-b border-[#C9A96E]/30">
                        <th className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">식순</th>
                        <th className="py-3 px-3 text-[#C9A96E] font-medium">재즈연주곡</th>
                        <th className="py-3 px-3 text-[#C9A96E] font-medium">가요/팝송</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#F5E6C8]/60">
                      <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">화촉점화</td><td className="py-3 px-3 text-xs">At Last, Fly Me To The Moon, Autumn Leaves</td><td className="py-3 px-3 text-xs">가을이 오면, 청혼, Love Me Tender</td></tr>
                      <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">신랑입장</td><td className="py-3 px-3 text-xs">Feeling Good, All Of Me, L-O-V-E</td><td className="py-3 px-3 text-xs">My Way, Can't Take My Eyes Off You</td></tr>
                      <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">신부입장</td><td className="py-3 px-3 text-xs">The Way You Look Tonight, My Funny Valentine</td><td className="py-3 px-3 text-xs">Beauty And The Beast, A Whole New World</td></tr>
                      <tr className="border-b border-[#C9A96E]/10"><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">축가</td><td className="py-3 px-3 text-xs">What A Wonderful World, Dream A Little Dream Of Me</td><td className="py-3 px-3 text-xs">사랑의 서약, Perhaps Love</td></tr>
                      <tr><td className="py-3 px-3 text-[#C9A96E] font-medium whitespace-nowrap">행진</td><td className="py-3 px-3 text-xs">Cheek To Cheek, Let There Be Love</td><td className="py-3 px-3 text-xs">Isn't She Lovely, 축혼행진곡(재즈ver.)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="mt-8 max-w-2xl mx-auto art-deco-frame p-6 bg-[#1A2332]/40 rounded text-center fade-in-section">
            <p className="font-sans text-[#F5E6C8]/60 text-sm leading-relaxed">
              예약 후 <span className="text-[#C9A96E] font-medium">곡리스트 외의 곡</span>도 신청주시면
              <span className="text-[#C9A96E] font-medium"> 악보가 있는 연주곡이면 연주 가능</span>합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 11. 연주 순서 ============ */}
      <section className="py-20 md:py-28 bg-[#1A2332]/30">
        <div className="max-w-4xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Performance Order</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">연주 순서</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <Accordion title="전체 연주 순서 보기" icon={<svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>}>
            <div className="px-4 pb-6">
              {[
                { num: '1', title: '식전연주', desc: '예식 15분 전부터 클래식 소품곡, 영화음악OST, 팝송, 재즈 등 조용하고 잔잔한 분위기 연출' },
                { num: '2', title: '화촉점화', desc: '양가 어머니의 촛불점화 시 잔잔한 곡 연주' },
                { num: '3', title: '신랑입장', desc: '신랑입장에 맞는 웅장한 곡 연주' },
                { num: '4', title: '신부입장', desc: '신부입장에 맞는 선율이 아름다운 곡 연주' },
                { num: '5', title: '예물교환', desc: '피아노 독주로 잔잔한 곡 연주' },
                { num: '6', title: '축가 & 축주', desc: '축가반주 서비스(반주 가능한 곡에 한함), 축하연주 서비스(신청자에 한함)' },
                { num: '7', title: '양가부모님 & 내빈인사', desc: '피아노 독주로 잔잔한 곡 연주' },
                { num: '8', title: '행진', desc: '행진에 맞는 웅장한 곡 연주' },
                { num: '9', title: '식후곡', desc: '분위기 정돈을 위해 1곡 연주' },
                { num: '10', title: '피로연연주', desc: '1부 퇴장 시부터 식사시간/2부 재입장/케이크커팅/샴페인샤워까지 약 1시간 연주 (추가비용)' },
              ].map((s) => (
                <div key={s.num} className="flex gap-4 md:gap-6 py-4 border-b border-[#C9A96E]/10 hover:bg-[#1A2332]/30 transition-colors px-2 rounded">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center">
                    <span className="font-['Playfair_Display'] text-[#C9A96E] text-sm font-bold">{s.num}</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-white text-sm font-medium mb-1">{s.title}</h4>
                    <p className="font-sans text-[#F5E6C8]/50 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </section>

      {/* ============ 12-13. 연주자 프로필 ============ */}
      <section className="py-20 md:py-28" id="profiles">
        <div className="max-w-6xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Our Musicians</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">재즈 연주자 프로필</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="art-deco-frame p-8 md:p-10 bg-[#1A2332]/50 rounded-lg mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#C9A96E]/40 overflow-hidden">
                <img src="/images/artists/jung-wooyeon.webp" alt="정우연" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#C9A96E]">Jeong, Woo-Yeon</h3>
                  <span className="bg-[#C9A96E]/20 text-[#C9A96E] text-xs font-sans px-2 py-0.5 rounded">재즈팀장</span>
                </div>
                <p className="font-sans text-[#F5E6C8]/40 text-sm mb-1">정우연</p>
                <p className="font-['Cormorant_Garamond'] text-[#F5E6C8]/60 text-sm italic mb-4">"고급스러운 재즈선율과 세련된 반주는 역시 이너스뮤직 재즈팀이 최고죠~!"</p>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-1 font-sans text-[#F5E6C8]/50 text-xs">
                  <p>· 백제예술대학 실용음악과 졸업</p>
                  <p>· Piano Skills Certificate 1 Grade 소지</p>
                  <p>· 대전 Pops Orchestra 협연</p>
                  <p>· 재즈페스티벌 자라섬 Off Band 연주</p>
                  <p>· 2014년 자라섬 재즈공쿨 본선진출</p>
                  <p>· 크라우스마파이 세미나 Trio 초청연주</p>
                  <p>· 다수 재즈클럽 트리오/쿼텟/퀸텟 연주</p>
                  <p>· JJK Trio 1집 Live at Club JAZ 발매</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              { img: '/images/artists/nam-seungyeon.webp', name: 'Nam, Seung-Yeon', nameKo: '남승연 · 재즈피아노', career: ['동아방송대 실용음악과 졸업', '인천 펜타포트 음악축제 세션 참여', '국악 퓨전 공연 피아노 세션', '선데이재즈브런치 피아노 연주자', '재즈밴드 활동 및 재즈클럽 공연 다수'] },
              { img: '/images/artists/kim-hyunbae.webp', name: 'Kim, Hyun-Bae', nameKo: '김현배 · 콘트라베이스', career: ['재능대 재즈음악과 재즈 베이스 전공', '모스틀리 팝스 오케스트라 세션', '제천국제음악영화제 준우승/관객투표상', '일본 Kanazawa Jazz Street 초청 공연', '미국대사관 독립기념일 행사 초청'] },
              { img: '/images/artists/joo-hyojin.webp', name: 'Joo, Hyo-Jin', nameKo: '주효진 · 드러머', career: ['숭실대 콘서바토리 실용음악과 졸업', '용산구청장 표창장 수상', '평택 미군기지 캠프 험프리스 공연', '재즈밴드 New Traditional Ensemble', '부기우기, 숨길 등 재즈클럽 연주 다수'] },
            ].map((p) => (
              <div key={p.name} className="art-deco-frame p-6 bg-[#1A2332]/50 rounded gold-glow transition-all duration-500">
                <div className="w-14 h-14 rounded-full border border-[#C9A96E]/30 overflow-hidden mb-4 mx-auto">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#C9A96E]">{p.name}</h3>
                  <p className="font-sans text-[#F5E6C8]/40 text-xs">{p.nameKo}</p>
                </div>
                <div className="space-y-1 font-sans text-[#F5E6C8]/50 text-xs">
                  {p.career.map((c) => <p key={c}>· {c}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 14-15. 가격 안내 ============ */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="pricing">
        <div className="absolute inset-0">
          <img src={ABSTRACT_IMG} alt="배경" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-[#0A1628]/90" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Pricing</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">본식 연주 금액안내</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="hidden md:grid md:grid-cols-5 gap-4 mb-10 stagger-children">
            {[
              { name: 'Piano Solo', price: '100,000' },
              { name: 'Duo (2중주)', price: '180,000' },
              { name: 'Trio (3중주)', price: '260,000' },
              { name: 'Quartet (4중주)', price: '340,000' },
              { name: 'Quintet (5중주)', price: '420,000' },
            ].map((p) => (
              <div key={p.name} className="price-highlight p-5 rounded text-center gold-glow transition-all duration-500">
                <p className="font-['Playfair_Display'] text-sm text-[#C9A96E] font-semibold mb-2">{p.name}</p>
                <p className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-white">{p.price}<span className="text-sm text-[#F5E6C8]/60">원</span></p>
              </div>
            ))}
          </div>
          <div className="md:hidden mb-10 stagger-children">
            <div className="grid grid-cols-3 gap-3 mb-3">
              {[
                { name: 'Piano Solo', price: '100,000' },
                { name: 'Duo (2중주)', price: '180,000' },
                { name: 'Trio (3중주)', price: '260,000' },
              ].map((p) => (
                <div key={p.name} className="price-highlight p-4 rounded text-center">
                  <p className="font-['Playfair_Display'] text-xs text-[#C9A96E] font-semibold mb-1">{p.name}</p>
                  <p className="font-['Playfair_Display'] text-lg font-bold text-white">{p.price}<span className="text-[10px] text-[#F5E6C8]/60">원</span></p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-[66%] mx-auto">
              {[
                { name: 'Quartet (4중주)', price: '340,000' },
                { name: 'Quintet (5중주)', price: '420,000' },
              ].map((p) => (
                <div key={p.name} className="price-highlight p-4 rounded text-center">
                  <p className="font-['Playfair_Display'] text-xs text-[#C9A96E] font-semibold mb-1">{p.name}</p>
                  <p className="font-['Playfair_Display'] text-lg font-bold text-white">{p.price}<span className="text-[10px] text-[#F5E6C8]/60">원</span></p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="art-deco-frame p-6 bg-[#1A2332]/50 rounded">
              <h4 className="font-['Playfair_Display'] text-[#C9A96E] text-base font-semibold mb-3">Foreign Musician Option</h4>
              <p className="font-sans text-[#F5E6C8]/60 text-sm">외국인 연주자 1인 추가 <span className="text-[#C9A96E] font-bold">+50,000원</span></p>
              <p className="font-sans text-[#F5E6C8]/40 text-xs mt-1">최대 1~2인까지 추가 가능 (재즈3중주부터)</p>
            </div>
            <div className="art-deco-frame p-6 bg-[#1A2332]/50 rounded">
              <h4 className="font-['Playfair_Display'] text-[#C9A96E] text-base font-semibold mb-3">Jazz Vocal (재즈 싱어)</h4>
              <p className="font-sans text-[#F5E6C8]/60 text-sm">본식 5곡 구성 <span className="text-[#C9A96E] font-bold">200,000원</span></p>
              <p className="font-sans text-[#F5E6C8]/40 text-xs mt-1">화촉점화/신랑입장/신부입장/축가 서비스/행진</p>
            </div>
          </div>
          <div className="art-deco-frame p-6 bg-[#1A2332]/50 rounded mb-10">
            <h4 className="font-['Playfair_Display'] text-[#C9A96E] text-base font-semibold mb-3">Reception Live (피로연 재즈 보컬)</h4>
            <p className="font-sans text-[#F5E6C8]/60 text-sm">5~6곡 구성 <span className="text-[#C9A96E] font-bold">+100,000원</span></p>
            <p className="font-sans text-[#F5E6C8]/40 text-xs mt-1">식사 및 리셉션 분위기에 맞춘 라이브 진행</p>
          </div>
          <div className="text-center mb-10">
            <div className="gold-line-thick w-24 mx-auto mb-8" />
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-4">피로연 연주 금액안내</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="art-deco-frame p-6 bg-[#1A2332]/50 rounded text-center">
              <p className="font-sans text-[#F5E6C8]/60 text-sm mb-2">2부 피로연 연주 요청 시</p>
              <p className="font-['Playfair_Display'] text-2xl font-bold text-[#C9A96E]">1인당 50,000<span className="text-sm text-[#F5E6C8]/60">원</span></p>
              <p className="font-sans text-[#F5E6C8]/40 text-xs mt-1">추가</p>
            </div>
            <div className="art-deco-frame p-6 bg-[#1A2332]/50 rounded text-center">
              <p className="font-sans text-[#F5E6C8]/60 text-sm mb-2">기본 연주 범위</p>
              <p className="font-sans text-[#F5E6C8]/70 text-sm">사진 촬영 종료 후부터<br />내빈 인사 전까지</p>
            </div>
            <div className="art-deco-frame p-6 bg-[#1A2332]/50 rounded text-center">
              <p className="font-sans text-[#F5E6C8]/60 text-sm mb-2">연장 진행 시</p>
              <p className="font-['Playfair_Display'] text-2xl font-bold text-[#C9A96E]">1인당 30,000<span className="text-sm text-[#F5E6C8]/60">원</span></p>
              <p className="font-sans text-[#F5E6C8]/40 text-xs mt-2">내빈인사까지 연주 진행을<br />원하실 경우 추가</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E]/80 text-sm italic">"여유롭고 품격 있는 연주로,<br className="sm:hidden" /> 특별한 순간을 더욱 빛내드립니다."</p>
          </div>
        </div>
      </section>

      {/* ============ 18. 퀵 메뉴 ============ */}
      <section className="py-16 md:py-20" id="contact">
        <div className="max-w-3xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-10">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Quick Menu</p>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-4">바로가기</h2>
            <div className="gold-line w-16 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto stagger-children">
            {[
              { label: '재즈 영상보기', desc: '실제 예식 재즈 연주 영상', url: 'https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=24' },
              { label: '외국인밴드 영상', desc: '외국인 연주자 구성 영상', url: 'https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=67' },
              { label: '이너스 예약현황', desc: '실시간 예약 가능 일정 확인', url: 'https://www.inusmc.co.kr/weekend-performance' },
              { label: '카톡 상담하기', desc: '가장 빠른 상담 · 견적 문의', url: 'https://pf.kakao.com/_wxovaM/chat' },
            ].map((m) => (
              <a key={m.label} href={m.url} target="_blank" rel="noopener" className="art-deco-frame flex items-center gap-4 px-6 py-6 bg-[#1A2332]/50 rounded gold-glow transition-all duration-500 hover:bg-[#1A2332]/80 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E]/20 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div className="text-left">
                  <p className="font-sans text-white text-base font-medium group-hover:text-[#C9A96E] transition-colors duration-300">{m.label}</p>
                  <p className="font-sans text-[#F5E6C8]/50 text-xs mt-1">{m.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Q&A ============ */}
      <section className="py-20 md:py-28 bg-[#1A2332]/30" id="qna">
        <div className="max-w-4xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Q & A</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">자주 묻는 질문</h2>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="space-y-4">
            <QnaItem question="당일날 펑크날까봐 걱정돼요...">
              <div className="px-6 pb-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7ECEC1]/20 flex items-center justify-center font-['Playfair_Display'] text-[#7ECEC1] font-bold text-sm">A</span>
                  <div>
                    <p className="font-sans text-white text-sm font-medium mb-3">걱정하지 않으셔도 됩니다.</p>
                    <div className="space-y-2 font-sans text-[#F5E6C8]/60 text-sm mb-4">
                      <p className="flex items-start gap-2"><span className="text-[#C9A96E]">◆</span> 예식 당일 2시간 전, 연주자 준비 상태 1차 체크</p>
                      <p className="flex items-start gap-2"><span className="text-[#C9A96E]">◆</span> 예식 1시간 전, 현장 도착 여부 2차 확인</p>
                      <p className="flex items-start gap-2"><span className="text-[#C9A96E]">◆</span> 만일의 상황 대비, 예비 연주자 대기</p>
                    </div>
                    <p className="font-sans text-[#F5E6C8]/50 text-xs mb-4">또한 모든 연주자는 업체와 전속 계약 체결 후 진행되며, 사전 관리 시스템을 통해 철저히 관리됩니다.</p>
                    <div className="bg-[#1A2332]/60 rounded p-4 text-center">
                      <p className="font-sans text-[#F5E6C8]/60 text-xs mb-1">그 결과, 지금까지</p>
                      <p className="font-['Playfair_Display'] text-3xl font-bold text-[#C9A96E]">0<span className="text-lg">%</span></p>
                      <p className="font-sans text-[#F5E6C8]/40 text-xs">PUNCTUALITY — 펑크율 0% 유지</p>
                    </div>
                  </div>
                </div>
              </div>
            </QnaItem>
            <QnaItem question="연주자들은 학생인가요?">
              <div className="px-6 pb-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7ECEC1]/20 flex items-center justify-center font-['Playfair_Display'] text-[#7ECEC1] font-bold text-sm">A</span>
                  <div>
                    <p className="font-sans text-white text-sm font-medium mb-3">아닙니다.</p>
                    <div className="space-y-2 font-sans text-[#F5E6C8]/60 text-sm mb-4">
                      <p className="flex items-start gap-2"><span className="text-[#C9A96E] flex-shrink-0">✓</span><span>명문 실용음대 출신 연주자들로 구성</span></p>
                      <p className="flex items-start gap-2"><span className="text-[#C9A96E] flex-shrink-0">✓</span><span>현재 행사 연주 및 재즈바에서 활동 중인 현역 연주자들로만 선별하여 진행</span></p>
                      <p className="flex items-start gap-2"><span className="text-[#C9A96E] flex-shrink-0">✓</span><span>학생 연주자는 등용하지 않으며 내부 기준과 오디션을 통해 검증된 인원만 배정</span></p>
                    </div>
                    <p className="font-sans text-[#F5E6C8]/50 text-sm mb-4">또한 <span className="text-[#C9A96E] font-medium">100명 이상</span>의 연주자 풀을 보유하고 있어 예식 일정에 맞춰 안정적인 진행이 가능합니다.</p>
                    <div className="bg-[#7ECEC1]/10 border border-[#7ECEC1]/30 rounded p-4 text-center">
                      <p className="font-sans text-[#7ECEC1] text-sm font-medium">모든 연주는 예식 분위기에 맞춰 완성도 높은 퀄리티로 진행됩니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </QnaItem>
          </div>
        </div>
      </section>

      {/* ============ 이벤트 ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 fade-in-section">
          <div className="text-center mb-14">
            <p className="font-['Cormorant_Garamond'] text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-3">Special Event</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">이너스뮤직 특별 이벤트</h2>
            <p className="font-sans text-[#F5E6C8]/50 text-sm mt-3">예식을 준비하시는 고객님들께 실질적으로 도움이 되는 혜택을 함께 제공합니다.</p>
            <div className="gold-line w-16 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="art-deco-frame p-8 bg-[#1A2332]/60 rounded">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#C9A96E]">01</span>
                <h3 className="font-sans text-white text-base font-medium">숨고 리뷰 이벤트 참여 혜택</h3>
              </div>
              <ul className="space-y-2 font-sans text-[#F5E6C8]/60 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#7ECEC1] mt-0.5">✓</span><span>숨고 리뷰 작성 시 <span className="text-[#C9A96E] font-medium">최대 2만원 할인</span> 혜택</span></li>
                <li className="flex items-start gap-2"><span className="text-[#7ECEC1] mt-0.5">✓</span><span>결혼 준비에 꼭 필요한 <span className="text-[#C9A96E] font-medium">웨딩 준비 체크리스트</span> 제공</span></li>
              </ul>
            </div>
            <div className="art-deco-frame p-8 bg-[#1A2332]/60 rounded">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#C9A96E]">02</span>
                <h3 className="font-sans text-white text-base font-medium">블로그 후기 참여 혜택</h3>
              </div>
              <p className="font-sans text-[#F5E6C8]/60 text-sm">블로그 후기 작성 시 <span className="text-[#C9A96E] font-medium">추가 혜택</span>을 제공합니다.</p>
              <p className="font-sans text-[#C9A96E] text-sm mt-3 font-medium">추가 혜택 제공</p>
              <a href="https://blog.naver.com/inusmusics/220652958346" target="_blank" rel="noopener" className="inline-block mt-4 border border-[#C9A96E]/50 hover:border-[#C9A96E] text-[#C9A96E] font-sans text-xs px-5 py-2 rounded transition-all duration-300">
                자세히 알아보기
              </a>
            </div>
          </div>
          <div className="mt-6 art-deco-frame p-8 bg-[#1A2332]/60 rounded" id="extra-services">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-['Playfair_Display'] text-2xl font-bold text-[#C9A96E]">03</span>
              <h3 className="font-sans text-white text-base font-medium">재즈 예약 시 함께 이용하는 서비스</h3>
            </div>
            <p className="font-sans text-[#F5E6C8]/50 text-sm mb-6">사회 · 클래식 · 뮤지컬웨딩 · 축가 · 모바일청첩장까지 한 번에 준비하실 수 있습니다.</p>
          <div className="text-center mb-8">
            <button
              onClick={() => setExtraServicesOpen(!extraServicesOpen)}
              className="inline-flex items-center gap-2 border border-[#C9A96E]/50 hover:border-[#C9A96E] text-[#C9A96E] font-sans font-medium px-6 py-3 rounded transition-all duration-300 text-sm"
            >
              <span>{extraServicesOpen ? '접기' : '서비스 보기'}</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${extraServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          {extraServicesOpen && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                {
                  label: '결혼식사회',
                  url: 'https://inusmc.co.kr',
                  icon: <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                },
                {
                  label: '클래식연주',
                  url: 'https://www.inusclassic.kr/',
                  icon: <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                },
                {
                  label: '뮤지컬웨딩',
                  url: 'https://inusmw.kr/',
                  icon: <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                },
                {
                  label: '축가',
                  url: 'https://inusmusic.kr/',
                  icon: <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                },
                {
                  label: '모바일청첩장',
                  url: 'https://inuscard.com',
                  icon: <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                },
                {
                  label: '완성 패키지',
                  url: 'https://blog.naver.com/inusmusics/220652965646',
                  icon: <svg className="w-7 h-7 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                },
              ].map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener" className="art-deco-frame p-6 bg-[#1A2332]/60 rounded text-center gold-glow transition-all duration-500 hover:bg-[#1A2332]/80 group">
                  <div className="w-14 h-14 rounded-full bg-[#C9A96E]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A96E]/20 transition-all duration-300">
                    {s.icon}
                  </div>
                  <p className="font-sans text-[#F5E6C8]/80 text-sm font-medium group-hover:text-[#C9A96E] transition-colors duration-300">{s.label}</p>
                </a>
              ))}
            </div>
          )}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-12 border-t border-[#C9A96E]/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-['Playfair_Display'] text-[#C9A96E] text-xl font-bold tracking-wider mb-3">INUSMUSIC</p>
          <p className="font-['Cormorant_Garamond'] text-[#F5E6C8]/40 text-sm tracking-wider uppercase mb-6">Premium Jazz Wedding Live</p>
          <div className="gold-line w-12 mx-auto mb-6" />
          <div className="font-sans text-[#F5E6C8]/40 text-xs leading-relaxed space-y-1 mb-6">
            <p>대표자: 신유진 &nbsp;|&nbsp; 사업자번호: 299-90-00178</p>
            <p>사무실 주소: 서울 광진구 자양로 165 4층</p>
            <p>TEL: <a href="tel:02-423-2772" className="hover:text-[#C9A96E] transition-colors duration-300">02-423-2772</a></p>
          </div>
          <p className="font-sans text-[#F5E6C8]/30 text-xs">© 2015-2025 INUSMUSIC. All rights reserved.</p>
        </div>
      </footer>

            {/* ============ Floating Buttons (하단 바) ============ */}
      <FloatingButtons />

      {/* ============ Side QuickNav (오른쪽 사이드 메뉴) ============ */}
      <QuickNav />

    </div>
  );
}
