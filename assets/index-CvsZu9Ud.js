(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}})();const g="images/hero-jazz-6FWZ6GDQDwHmgJxN6p3FiX.webp",v="images/jazz-instruments-WKCCiDfwLuHWzKy6QDMgTa.webp",u="images/jazz-performance-mtJTDxZvdrFUMhLMHhZ82v.webp",f="images/wedding-hall-jazz-J2yk3iSGnqMH3qHcoE3suY.webp",h="images/jazz-abstract-gold-L5q6pp5Hi9jFqhJyKkQ9zd.webp",b=["images/axRkrSZkphxkkEWg.jpg","images/JRUmHxySXDQwJcAs.jpg","images/OoKMsdGvQlcpXrYJ.jpg","images/deCYtxfuChxJnOtM.jpg","images/FuEPeLdpXImaJhpa.jpg"];document.getElementById("app").innerHTML=`

<!-- ============ HEADER / NAV ============ -->
<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" id="main-header">
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="#hero" class="flex items-center gap-2 nav-link">
      <span class="font-display text-gold text-xl md:text-2xl font-bold tracking-wider">INUSMUSIC</span>
      <span class="hidden sm:inline text-champagne/60 text-xs font-sans tracking-widest uppercase">Jazz Wedding</span>
    </a>
    <button id="menu-toggle" class="relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 z-[60] rounded-full border border-gold/50 bg-navy-surface/30 backdrop-blur-sm menu-btn-pulse" aria-label="메뉴">
      <span class="menu-bar w-6 h-[2px] bg-gold transition-all duration-500 origin-center"></span>
      <span class="menu-bar w-4 h-[2px] bg-gold transition-all duration-500 origin-center"></span>
      <span class="menu-bar w-6 h-[2px] bg-gold transition-all duration-500 origin-center"></span>
    </button>
  </div>
</header>
<!-- ============ FULLSCREEN MENU OVERLAY ============ -->
<div id="menu-overlay" class="fixed inset-0 z-[55] pointer-events-none opacity-0 transition-opacity duration-700">
  <div class="absolute inset-0 bg-navy/97 backdrop-blur-md"></div>
  <!-- X 닫기 버튼 (오른쪽 상단) -->
  <button id="menu-close" class="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center group cursor-pointer" aria-label="메뉴 닫기">
    <span class="absolute w-8 h-[2px] bg-gold rotate-45 transition-all duration-300 group-hover:bg-champagne group-hover:w-9"></span>
    <span class="absolute w-8 h-[2px] bg-gold -rotate-45 transition-all duration-300 group-hover:bg-champagne group-hover:w-9"></span>
  </button>
  <div class="relative z-10 h-full flex flex-col items-center justify-center">
    <nav class="flex flex-col items-center gap-1">
      <a href="#hero" class="menu-item nav-link font-display text-4xl md:text-6xl font-bold text-champagne/30 hover:text-gold transition-all duration-500 py-3 tracking-wider" data-text="메인">
        <span class="menu-item-text">메인</span>
      </a>
      <a href="#jazz-info" class="menu-item nav-link font-display text-4xl md:text-6xl font-bold text-champagne/30 hover:text-gold transition-all duration-500 py-3 tracking-wider" data-text="소개">
        <span class="menu-item-text">소개</span>
      </a>
      <a href="#videos" class="menu-item nav-link font-display text-4xl md:text-6xl font-bold text-champagne/30 hover:text-gold transition-all duration-500 py-3 tracking-wider" data-text="영상">
        <span class="menu-item-text">영상</span>
      </a>
      <a href="#extra-services" class="menu-item nav-link font-display text-4xl md:text-6xl font-bold text-champagne/30 hover:text-gold transition-all duration-500 py-3 tracking-wider" data-text="서비스">
        <span class="menu-item-text">서비스</span>
      </a>
      <a href="#reviews" class="menu-item nav-link font-display text-4xl md:text-6xl font-bold text-champagne/30 hover:text-gold transition-all duration-500 py-3 tracking-wider" data-text="후기">
        <span class="menu-item-text">후기</span>
      </a>
      <a href="#pricing" class="menu-item nav-link font-display text-4xl md:text-6xl font-bold text-champagne/30 hover:text-gold transition-all duration-500 py-3 tracking-wider" data-text="견적">
        <span class="menu-item-text">견적</span>
      </a>
    </nav>
    <div class="gold-line w-20 mt-10 mb-6"></div>
    <a href="https://pf.kakao.com/_wxovaM/chat" target="_blank" rel="noopener" class="font-sans text-gold/60 text-sm tracking-widest hover:text-gold transition-colors duration-300">KAKAO TALK CONSULTATION</a>
  </div>
</div>

<!-- ============ HERO ============ -->
<!-- #1 모바일에서 이미지 전체 보이게 object-contain 적용 -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
  <div class="absolute inset-0">
    <img src="${g}" alt="Jazz Wedding" class="w-full h-full object-cover object-[center_30%] sm:object-center" />
    <div class="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy"></div>
  </div>
  <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <div class="gold-line w-24 mx-auto mb-8"></div>
    <p class="font-serif text-gold-light text-lg md:text-xl tracking-[0.3em] mb-4 uppercase">Premium Jazz Wedding</p>
    <!-- #4 문구 변경 -->
    <h1 class="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style="text-shadow: 0 2px 8px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4);">
      특별한 순간을<br/>
      <span class="text-gold">재즈의 무드</span>로<br/>
      완성합니다
    </h1>
    <p class="font-sans text-champagne/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
      식전연주부터 행진까지,<br class="sm:hidden"/>
      자연스럽게 흐르는 음악으로<br/>
      하객의 몰입도를 끌어올리는<br class="sm:hidden"/>
      프리미엄 재즈 라이브 연주
    </p>
    <!-- #2 카톡상담하기 + #3 자세한 내용보기 -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://pf.kakao.com/_wxovaM/chat" target="_blank" rel="noopener" class="bg-gold hover:bg-gold-light text-navy font-sans font-medium px-8 py-3.5 rounded transition-all duration-300 text-base">
        카톡 상담하기
      </a>
      <a href="#about" class="border border-gold/50 hover:border-gold text-gold font-sans font-medium px-8 py-3.5 rounded transition-all duration-300 text-base">
        자세한 내용보기
      </a>
    </div>
    <div class="gold-line w-24 mx-auto mt-12"></div>
  </div>
  <!-- #3 Scroll indicator - 클릭 시 바로 아래로 이동 -->
  <a href="#about" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
    <span class="text-gold/50 text-xs font-sans tracking-widest">SCROLL</span>
    <svg class="w-4 h-4 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
  </a>
</section>

<!-- ============ 1. 이너스 연혁 ============ -->
<section class="py-20 md:py-28 relative" id="about">
  <div class="max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-16">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Since 2015</p>
      <!-- #5 소제목 줄바꿈 -->
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">10년의 신뢰,<br/>40,000쌍의 감동</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
      <div class="art-deco-frame p-6 text-center bg-navy-surface/50 rounded">
        <p class="font-display text-3xl md:text-4xl font-bold text-gold mb-2">2015</p>
        <p class="font-sans text-champagne/60 text-sm">설립연도</p>
      </div>
      <div class="art-deco-frame p-6 text-center bg-navy-surface/50 rounded">
        <p class="font-display text-3xl md:text-4xl font-bold text-gold mb-2">10<span class="text-xl">년+</span></p>
        <p class="font-sans text-champagne/60 text-sm">웨딩 진행 경험</p>
      </div>
      <div class="art-deco-frame p-6 text-center bg-navy-surface/50 rounded">
        <p class="font-display text-3xl md:text-4xl font-bold text-gold mb-2">1,000<span class="text-xl">건+</span></p>
        <p class="font-sans text-champagne/60 text-sm">본식 후기</p>
      </div>
      <div class="art-deco-frame p-6 text-center bg-navy-surface/50 rounded">
        <p class="font-display text-3xl md:text-4xl font-bold text-gold mb-2">40,000<span class="text-xl">쌍+</span></p>
        <p class="font-sans text-champagne/60 text-sm">진행 실적</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ 2. 이너스 강점 ============ -->
<!-- #6 설명 문구 삭제 / #7 모바일 줄바꿈 개선 -->
<section class="py-20 md:py-28 bg-navy-surface/30 relative">
  <div class="max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-16">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Why INUSMUSIC</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-3 whitespace-nowrap">합리적인 선택, 확실한 차이</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="grid md:grid-cols-3 gap-8 stagger-children">
      <div class="art-deco-frame p-8 bg-navy-surface/60 rounded gold-glow transition-all duration-500">
        <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
          <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="font-display text-xl font-semibold text-gold mb-3">합리적인 가격,<br class="md:hidden"/> 검증된 완성도</h3>
        <p class="font-sans text-champagne/60 text-sm leading-relaxed">시장 평균 대비 효율적인 비용으로<br class="sm:hidden"/> 4만 쌍 이상의 데이터로<br class="sm:hidden"/> 검증된 완성도를 제공합니다.</p>
      </div>
      <div class="art-deco-frame p-8 bg-navy-surface/60 rounded gold-glow transition-all duration-500">
        <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
          <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        <h3 class="font-display text-xl font-semibold text-gold mb-3">운영 시스템 기반의<br class="md:hidden"/> 안정성</h3>
        <p class="font-sans text-champagne/60 text-sm leading-relaxed">사전 미팅 이중 체크 →<br class="sm:hidden"/> 이너스뮤직 운영 시스템 →<br class="sm:hidden"/> 당일 현장 이중 체크로<br class="sm:hidden"/> 완벽한 진행을 보장합니다.</p>
      </div>
      <div class="art-deco-frame p-8 bg-navy-surface/60 rounded gold-glow transition-all duration-500">
        <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
          <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
        </div>
        <h3 class="font-display text-xl font-semibold text-gold mb-3">클래스가 다른<br class="md:hidden"/> 프리미엄 연주</h3>
        <p class="font-sans text-champagne/60 text-sm leading-relaxed">클래식의 우아함,<br class="sm:hidden"/> 재즈의 세련됨, 중창의 풍성함 —<br class="sm:hidden"/> 예식에 맞는 최적의 구성을<br class="sm:hidden"/> 제안합니다.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ 3. 재즈 설명 ============ -->
<section class="py-20 md:py-28 relative" id="jazz-info">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="fade-in-section">
        <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Jazz Performance</p>
        <h2 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
          단순한 배경음이 아닌<br/>
          공간의 분위기를 완성하는<br/>
          <span class="text-gold">감각적인 연주</span>
        </h2>
        <p class="font-sans text-champagne/60 text-sm leading-relaxed mb-8">
          <span class="block">식전연주부터 행진까지,</span>
          <span class="block">자연스럽게 흐르는 음악으로</span>
          <span class="block">하객의 몰입도를 끌어올리는</span>
          <span class="block">프리미엄 재즈 연주.</span>
          <span class="block mt-2">연간 5,000건 이상의 예식 경험이</span>
          <span class="block">만들어낸 완성도를 경험하세요.</span>
        </p>
        <div class="space-y-3 stagger-children">
          <div class="flex items-start gap-3"><span class="text-gold mt-0.5">&#10003;</span><span class="font-sans text-champagne/70 text-sm">외국인 연주자 구성 가능</span></div>
          <div class="flex items-start gap-3"><span class="text-gold mt-0.5">&#10003;</span><span class="font-sans text-champagne/70 text-sm">명문 음대 출신 & 현역 연주자 구성</span></div>
          <div class="flex items-start gap-3"><span class="text-gold mt-0.5">&#10003;</span><span class="font-sans text-champagne/70 text-sm">학생 연주자 없이 검증된 인원 운영</span></div>
          <div class="flex items-start gap-3"><span class="text-gold mt-0.5">&#10003;</span><span class="font-sans text-champagne/70 text-sm">예식 주간 사전 체크 + 당일 리허설 진행</span></div>
          <div class="flex items-start gap-3"><span class="text-gold mt-0.5">&#10003;</span><span class="font-sans text-champagne/70 text-sm">공간과 분위기에 맞춘 맞춤 연주 제안</span></div>
          <div class="flex items-start gap-3"><span class="text-gold mt-0.5">&#10003;</span><span class="font-sans text-champagne/70 text-sm">전속 계약 시스템으로<br class="md:hidden"/> No-show 걱정 없는<br class="md:hidden"/> 안정적인 진행</span></div>
          <div class="flex items-start gap-3"><span class="text-gold mt-0.5">&#10003;</span><span class="font-sans text-champagne/70 text-sm">1부 클래식 / 2부 재즈 등 유연한 구성 가능</span></div>
        </div>
      </div>
      <div class="fade-in-section">
        <div class="art-deco-frame rounded-lg overflow-hidden">
          <img src="${v}" alt="재즈 악기" class="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 4. 재즈 추천 ============ -->
<section class="py-16 md:py-24 relative overflow-hidden">
  <div class="absolute inset-0">
    <img src="${u}" alt="재즈 연주" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-navy/85"></div>
  </div>
  <div class="relative z-10 max-w-4xl mx-auto px-4 text-center fade-in-section">
    <div class="art-deco-frame p-10 md:p-16 bg-navy/60 backdrop-blur-sm rounded-lg">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-4">Recommendation</p>
      <h2 class="font-display text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
        호텔 · 하우스웨딩 등<br/>
        공간의 분위기와<br class="md:hidden"/> 완성도를<br class="hidden md:inline"/>
        중요하게 생각하신다면
      </h2>
      <p class="font-sans text-champagne/60 text-sm leading-relaxed max-w-xl mx-auto">
        재즈 연주를 가장 많이 선택하시는 구성이며, 실제 만족도가 높은 연출 방식입니다.
      </p>
      <div class="gold-line w-16 mx-auto mt-8"></div>
    </div>
  </div>
</section>

<!-- ============ 5. 완성형 웨딩 패키지 ============ -->
<!-- #8 제목 변경, 예약 시 제공자료 삭제, 내용 변경, 자세히 보기 버튼 추가 -->
<section class="py-20 md:py-28 bg-navy-surface/30">
  <div class="max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Complete Package</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">완성형 웨딩 패키지</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="max-w-2xl mx-auto">
      <div class="art-deco-frame p-10 md:p-14 bg-navy-surface/60 rounded text-center">
        <div class="w-14 h-14 rounded-full bg-mint/10 flex items-center justify-center mb-6 mx-auto">
          <svg class="w-7 h-7 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
        </div>
        <p class="font-sans text-champagne/70 text-base leading-relaxed mb-2">
          사회 · 축가 · 연주 · 뮤지컬웨딩을<br/>각각 따로 준비하지 마세요.
        </p>
        <div class="gold-line w-12 mx-auto my-6"></div>
        <p class="font-sans text-white text-base leading-relaxed mb-2 font-medium">
          하나로 설계될 때<br/>예식의 흐름과 완성도가 달라집니다.
        </p>
        <p class="font-sans text-gold text-sm mt-4 mb-8">
          가장 만족도가 높은 구성으로 추천드립니다
        </p>
        <a href="https://blog.naver.com/inusmusics/220652965646" target="_blank" rel="noopener" class="inline-block bg-gold hover:bg-gold-light text-navy font-sans font-medium px-8 py-3 rounded transition-all duration-300 text-sm">
          완성형 패키지 자세히 보기
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ============ 6. 연주 영상 ============ -->
<!-- #9 4가지 영상 링크 반영 -->
<section class="py-20 md:py-28" id="videos">
  <div class="max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Performance Video</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">재즈 연주 영상</h2>
      <p class="font-sans text-champagne/50 text-sm mt-3">실제 예식에서 진행된 재즈 라이브 연주를 확인해보세요.</p>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="grid sm:grid-cols-2 gap-6 stagger-children">
      <div class="art-deco-frame rounded-lg overflow-hidden bg-navy-surface/60">
        <div class="aspect-video bg-navy-light flex items-center justify-center relative group cursor-pointer" onclick="this.innerHTML='<iframe src=\\'https://www.youtube.com/embed/uoECPC4tqFo\\' class=\\'w-full h-full\\' frameborder=\\'0\\' allow=\\'autoplay; encrypted-media\\' allowfullscreen></iframe>'">
          <img src="${u}" alt="재즈3중주 식전연주" class="w-full h-full object-cover absolute inset-0" />
          <div class="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-all duration-300"></div>
          <div class="relative z-10 w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
            <svg class="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="p-4">
          <p class="font-sans text-champagne/80 text-sm font-medium">재즈3중주 식전연주</p>
          <p class="font-sans text-champagne/40 text-xs mt-1">식전연주</p>
        </div>
      </div>
      <div class="art-deco-frame rounded-lg overflow-hidden bg-navy-surface/60">
        <div class="aspect-video bg-navy-light flex items-center justify-center relative group cursor-pointer" onclick="this.innerHTML='<iframe src=\\'https://www.youtube.com/embed/10dA7Bc-BvA\\' class=\\'w-full h-full\\' frameborder=\\'0\\' allow=\\'autoplay; encrypted-media\\' allowfullscreen></iframe>'">
          <img src="${f}" alt="재즈4중주+싱어" class="w-full h-full object-cover absolute inset-0" />
          <div class="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-all duration-300"></div>
          <div class="relative z-10 w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
            <svg class="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="p-4">
          <p class="font-sans text-champagne/80 text-sm font-medium">재즈4중주 + 싱어</p>
          <p class="font-sans text-champagne/40 text-xs mt-1">본식 연주</p>
        </div>
      </div>
      <div class="art-deco-frame rounded-lg overflow-hidden bg-navy-surface/60">
        <div class="aspect-video bg-navy-light flex items-center justify-center relative group cursor-pointer" onclick="this.innerHTML='<iframe src=\\'https://www.youtube.com/embed/JpVwJJ5REKg\\' class=\\'w-full h-full\\' frameborder=\\'0\\' allow=\\'autoplay; encrypted-media\\' allowfullscreen></iframe>'">
          <img src="${g}" alt="재즈3중주" class="w-full h-full object-cover absolute inset-0" />
          <div class="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-all duration-300"></div>
          <div class="relative z-10 w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
            <svg class="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="p-4">
          <p class="font-sans text-champagne/80 text-sm font-medium">재즈3중주</p>
          <p class="font-sans text-champagne/40 text-xs mt-1">재즈 라이브</p>
        </div>
      </div>
      <div class="art-deco-frame rounded-lg overflow-hidden bg-navy-surface/60">
        <div class="aspect-video bg-navy-light flex items-center justify-center relative group cursor-pointer" onclick="this.innerHTML='<iframe src=\\'https://www.youtube.com/embed/TXJ-7dZZ7G0\\' class=\\'w-full h-full\\' frameborder=\\'0\\' allow=\\'autoplay; encrypted-media\\' allowfullscreen></iframe>'">
          <img src="${v}" alt="재즈4중주 신랑입장" class="w-full h-full object-cover absolute inset-0" />
          <div class="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-all duration-300"></div>
          <div class="relative z-10 w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
            <svg class="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="p-4">
          <p class="font-sans text-champagne/80 text-sm font-medium">재즈4중주 신랑입장</p>
          <p class="font-sans text-champagne/40 text-xs mt-1">신랑입장</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 7. 후기 ============ -->
<!-- #10 후기 이미지 URL 수정 + 전체보기 버튼 추가 -->
<section class="py-20 md:py-28 bg-navy-surface/30" id="reviews">
  <div class="max-w-6xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Real Reviews</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">실제 고객 후기</h2>
      <p class="font-sans text-champagne/50 text-sm mt-3">이너스뮤직 재즈 연주를 경험하신 고객님들의 생생한 후기입니다.</p>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="relative">
      <div class="review-scroll flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" id="review-scroll">
        ${b.map((t,e)=>`
        <div class="flex-shrink-0 w-72 md:w-80 snap-center">
          <div class="art-deco-frame rounded-lg overflow-hidden bg-navy-surface/60 gold-glow transition-all duration-500">
            <img src="${t}" alt="재즈 연주 후기 ${e+1}" class="w-full h-auto" loading="lazy" />
          </div>
        </div>
        `).join("")}
      </div>
      <button onclick="document.getElementById('review-scroll').scrollBy({left:-320,behavior:'smooth'})" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-navy-surface/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/20 transition-all duration-300 hidden md:flex">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onclick="document.getElementById('review-scroll').scrollBy({left:320,behavior:'smooth'})" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-navy-surface/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/20 transition-all duration-300 hidden md:flex">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
    <div class="text-center mt-8">
      <a href="http://musicin.godohosting.com/bbs/board.php?bo_table=forum" target="_blank" rel="noopener" class="inline-block border border-gold/50 hover:border-gold text-gold font-sans font-medium px-8 py-3 rounded transition-all duration-300 text-sm">
        실제 고객 후기 전체보기
      </a>
    </div>
  </div>
</section>

<!-- ============ 8. 재즈 진행 안내 ============ -->
<!-- #11 모바일에서 홀수 구성 개선 - 3+2 레이아웃 -->
<section class="py-20 md:py-28">
  <div class="max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-16">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Process</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">재즈 연주 진행 안내</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="hidden md:grid md:grid-cols-5 gap-4 stagger-children">
      ${[{num:"01",title:"상담하기",desc:"금액 및 상담"},{num:"02",title:"주문하기",desc:"결정 후 계약체결"},{num:"03",title:"컨설팅",desc:"곡리스트 결정"},{num:"04",title:"최종확인",desc:"4~5일 전 안심전화"},{num:"05",title:"행사진행",desc:"당일 50분 전 도착"}].map(t=>`
      <div class="art-deco-frame p-5 text-center bg-navy-surface/50 rounded">
        <p class="font-display text-2xl font-bold text-gold mb-2">${t.num}</p>
        <p class="font-sans text-white text-sm font-medium mb-1">${t.title}</p>
        <p class="font-sans text-champagne/50 text-xs">${t.desc}</p>
      </div>
      `).join("")}
    </div>
    <!-- 모바일: 상단 3개 + 하단 2개 중앙 정렬 -->
    <div class="md:hidden stagger-children">
      <div class="grid grid-cols-3 gap-3 mb-3">
        ${[{num:"01",title:"상담하기",desc:"금액 및 상담"},{num:"02",title:"주문하기",desc:"결정 후 계약체결"},{num:"03",title:"컨설팅",desc:"곡리스트 결정"}].map(t=>`
        <div class="art-deco-frame p-4 text-center bg-navy-surface/50 rounded">
          <p class="font-display text-xl font-bold text-gold mb-1">${t.num}</p>
          <p class="font-sans text-white text-xs font-medium mb-0.5">${t.title}</p>
          <p class="font-sans text-champagne/50 text-[10px]">${t.desc}</p>
        </div>
        `).join("")}
      </div>
      <div class="grid grid-cols-2 gap-3 max-w-[66%] mx-auto">
        ${[{num:"04",title:"최종확인",desc:"4~5일 전 안심전화"},{num:"05",title:"행사진행",desc:"당일 50분 전 도착"}].map(t=>`
        <div class="art-deco-frame p-4 text-center bg-navy-surface/50 rounded">
          <p class="font-display text-xl font-bold text-gold mb-1">${t.num}</p>
          <p class="font-sans text-white text-xs font-medium mb-0.5">${t.title}</p>
          <p class="font-sans text-champagne/50 text-[10px]">${t.desc}</p>
        </div>
        `).join("")}
      </div>
    </div>
  </div>
</section>

<!-- ============ 9. 재즈 악기 구성 안내 ============ -->
<section class="py-20 md:py-28 bg-navy-surface/30">
  <div class="max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Ensemble</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">재즈 악기 구성 안내</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      ${[{title:"재즈 3중주",sub:"Trio",instruments:"재즈피아노 · 콘트라베이스 · 드럼",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M3 18V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 11h6"/><path d="M15 6v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2z"/></svg>'},{title:"재즈 4중주",sub:"Quartet",instruments:'재즈피아노 · 콘트라베이스<br class="md:hidden"/> · 드럼 · 색소폰',icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M2 16V8a2 2 0 0 1 2-2h1.5a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 5.5 18H4a2 2 0 0 1-2-2z"/><path d="M9 6c0-1 .6-2 2-2s2 1 2 2v3c0 1.7-1 3-2 4"/><path d="M11 13v5a2 2 0 0 0 4 0v-1"/><path d="M17 10a3 3 0 0 1 3 3v1a3 3 0 0 1-6 0v-1a3 3 0 0 1 3-3z"/></svg>'},{title:"재즈 5중주",sub:"Quintet",instruments:'재즈피아노 · 드럼<br class="md:hidden"/> · 콘트라베이스<br class="md:hidden"/> · 색소폰1 · 색소폰2',icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="12" cy="12" r="4"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>'},{title:"외국인 재즈밴드",sub:"Foreign Band",instruments:"외국인 연주자 요청 시 추가금액",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'},{title:"재즈팀 + 재즈싱어",sub:"Jazz Vocal",instruments:"연주팀 + 재즈 보컬리스트",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>'}].map(t=>`
      <div class="art-deco-frame p-6 bg-navy-surface/60 rounded gold-glow transition-all duration-500">
        <div class="mb-3">${t.icon}</div>
        <h3 class="font-display text-lg font-semibold text-gold">${t.title}</h3>
        <p class="font-serif text-champagne/40 text-xs tracking-wider uppercase mb-3">${t.sub}</p>
        <p class="font-sans text-champagne/60 text-sm">${t.instruments}</p>
      </div>
      `).join("")}
    </div>
  </div>
</section>

<!-- ============ 10. 재즈 곡 리스트 ============ -->
<!-- #12 클릭 시 곡리스트 보이게 (아코디언 방식) -->
<section class="py-20 md:py-28">
  <div class="max-w-6xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Song List</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">재즈 곡 리스트</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>

    <!-- 재즈 곡 리스트 아코디언 -->
    <div class="space-y-4">
      <div class="art-deco-frame bg-navy-surface/50 rounded-lg overflow-hidden">
        <button class="w-full text-left p-6 flex items-center justify-between" onclick="this.nextElementSibling.classList.toggle('open'); this.querySelector('.list-arrow').classList.toggle('rotate-180')">
          <div class="flex items-center gap-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
            </span>
            <span class="font-sans text-white text-sm md:text-base font-medium">재즈 곡 리스트</span>
          </div>
          <svg class="list-arrow w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="accordion-content">
          <div class="px-4 pb-6 overflow-x-auto">
            <table class="w-full text-left font-sans text-sm">
              <thead>
                <tr class="border-b border-gold/30">
                  <th class="py-3 px-3 text-gold font-medium whitespace-nowrap">식순</th>
                  <th class="py-3 px-3 text-gold font-medium">재즈연주곡</th>
                  <th class="py-3 px-3 text-gold font-medium">영화음악</th>
                  <th class="py-3 px-3 text-gold font-medium">가요/팝송</th>
                  <th class="py-3 px-3 text-gold font-medium">애니/드라마OST</th>
                </tr>
              </thead>
              <tbody class="text-champagne/60">
                <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">화촉점화</td><td class="py-3 px-3 text-xs">Locky Sothem, Meditation, Desafinado, Blue Bossa, Autumn Leaves, Wave</td><td class="py-3 px-3 text-xs">I Will(러브어페어), I Will Wait For You(쉘브르의 우산), 하울의 움직이는 성</td><td class="py-3 px-3 text-xs">You Are The Sunshine Of My Life, 가을이 오면, 청혼, Je Te Veux, Love Me Tender</td><td class="py-3 px-3 text-xs">꽃날(황진이OST), 봄날 벚꽃 그리고 너, 봄바람</td></tr>
                <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">신랑입장</td><td class="py-3 px-3 text-xs">Take Five, Mo Better Blues, Wave, Blue Bossa</td><td class="py-3 px-3 text-xs">Raiders March(인디아나존스), Departure(굿럭), He's Pirate(캐리비안해적)</td><td class="py-3 px-3 text-xs">Mai Piu, My Way, Can't Take My Eyes Off You, Viva La Vida</td><td class="py-3 px-3 text-xs">Take Five, Flying</td></tr>
                <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">신부입장</td><td class="py-3 px-3 text-xs">Loving You(Kenny G), Child Is Born, Alice In Wonderland</td><td class="py-3 px-3 text-xs">She(노팅힐), All I Ask Of You(오페라의 유령), Bridal Waltz</td><td class="py-3 px-3 text-xs">Beauty And The Beast, The Rose, A Whole New World(알라딘)</td><td class="py-3 px-3 text-xs">Someday My Prince Will Come, Can't Help Falling In Love, Isn't She Lovely</td></tr>
                <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">내빈인사</td><td class="py-3 px-3 text-xs">Misty, When I Fall In Love, Someday My Prince Will Come</td><td class="py-3 px-3 text-xs">The Whole Nine Yards(냉정과 열정사이), I Will(러브어페어)</td><td class="py-3 px-3 text-xs">사랑의 서약, 감사(김동률), Open Arms, Perhaps Love</td><td class="py-3 px-3 text-xs">또 다시(센과 치히로), When You Wish Upon A Star, Over The Rainbow, Moonriver</td></tr>
                <tr><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">행진</td><td class="py-3 px-3 text-xs">Feel So Good, All Of Me, Cheek To Cheek, Let There Be Love</td><td class="py-3 px-3 text-xs">Departure(굿럭), A Lover's Concerto(접속), Another Day Of Sun(라라랜드)</td><td class="py-3 px-3 text-xs">Isn't She Lovely, Je T'aime, LOVE(나탈리콜), 축혼행진곡(재즈ver.)</td><td class="py-3 px-3 text-xs">Let There Be Love, Dream A Little Dream Of Me</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 재즈팀+재즈싱어 곡 리스트 아코디언 -->
      <div class="art-deco-frame bg-navy-surface/50 rounded-lg overflow-hidden">
        <button class="w-full text-left p-6 flex items-center justify-between" onclick="this.nextElementSibling.classList.toggle('open'); this.querySelector('.list-arrow').classList.toggle('rotate-180')">
          <div class="flex items-center gap-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
            </span>
            <span class="font-sans text-white text-sm md:text-base font-medium">재즈팀 + 재즈싱어</span>
          </div>
          <svg class="list-arrow w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="accordion-content">
          <div class="px-4 pb-6">
            <div class="art-deco-frame p-4 bg-navy-surface/40 rounded mb-4">
              <p class="font-sans text-champagne/60 text-sm">화촉점화/신랑/신부/행진 4부분을 노래로 진행 (선택사항 - 축가 서비스 진행)</p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left font-sans text-sm">
                <thead>
                  <tr class="border-b border-gold/30">
                    <th class="py-3 px-3 text-gold font-medium whitespace-nowrap">식순</th>
                    <th class="py-3 px-3 text-gold font-medium">재즈연주곡</th>
                    <th class="py-3 px-3 text-gold font-medium">가요/팝송</th>
                  </tr>
                </thead>
                <tbody class="text-champagne/60">
                  <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">화촉점화</td><td class="py-3 px-3 text-xs">At Last, Fly Me To The Moon, Autumn Leaves</td><td class="py-3 px-3 text-xs">가을이 오면, 청혼, Love Me Tender</td></tr>
                  <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">신랑입장</td><td class="py-3 px-3 text-xs">Feeling Good, All Of Me, L-O-V-E</td><td class="py-3 px-3 text-xs">My Way, Can't Take My Eyes Off You</td></tr>
                  <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">신부입장</td><td class="py-3 px-3 text-xs">The Way You Look Tonight, My Funny Valentine</td><td class="py-3 px-3 text-xs">Beauty And The Beast, A Whole New World</td></tr>
                  <tr class="border-b border-gold/10"><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">축가</td><td class="py-3 px-3 text-xs">What A Wonderful World, Dream A Little Dream Of Me</td><td class="py-3 px-3 text-xs">사랑의 서약, Perhaps Love</td></tr>
                  <tr><td class="py-3 px-3 text-gold font-medium whitespace-nowrap">행진</td><td class="py-3 px-3 text-xs">Cheek To Cheek, Let There Be Love</td><td class="py-3 px-3 text-xs">Isn't She Lovely, 축혼행진곡(재즈ver.)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 11. 연주 순서 ============ -->
<!-- #13 클릭 시 전체 연주순서 보이게 (아코디언) -->
<section class="py-20 md:py-28 bg-navy-surface/30">
  <div class="max-w-4xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Performance Order</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">연주 순서</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="art-deco-frame bg-navy-surface/50 rounded-lg overflow-hidden">
      <button class="w-full text-left p-6 flex items-center justify-between" onclick="this.nextElementSibling.classList.toggle('open'); this.querySelector('.list-arrow').classList.toggle('rotate-180')">
        <div class="flex items-center gap-4">
          <span class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
          </span>
          <span class="font-sans text-white text-sm md:text-base font-medium">전체 연주 순서 보기</span>
        </div>
        <svg class="list-arrow w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="accordion-content">
        <div class="px-4 pb-6">
          ${[{num:"1",title:"식전연주",desc:"예식 15분 전부터 클래식 소품곡, 영화음악OST, 팝송, 재즈 등 조용하고 잔잔한 분위기 연출"},{num:"2",title:"화촉점화",desc:"양가 어머니의 촛불점화 시 잔잔한 곡 연주"},{num:"3",title:"신랑입장",desc:"신랑입장에 맞는 웅장한 곡 연주"},{num:"4",title:"신부입장",desc:"신부입장에 맞는 선율이 아름다운 곡 연주"},{num:"5",title:"예물교환",desc:"피아노 독주로 잔잔한 곡 연주"},{num:"6",title:"축가 & 축주",desc:"축가반주 서비스(반주 가능한 곡에 한함), 축하연주 서비스(신청자에 한함)"},{num:"7",title:"양가부모님 & 내빈인사",desc:"피아노 독주로 잔잔한 곡 연주"},{num:"8",title:"행진",desc:"행진에 맞는 웅장한 곡 연주"},{num:"9",title:"식후곡",desc:"분위기 정돈을 위해 1곡 연주"},{num:"10",title:"피로연연주",desc:"1부 퇴장 시부터 식사시간/2부 재입장/케이크커팅/샴페인샤워까지 약 1시간 연주 (추가비용)"}].map(t=>`
          <div class="flex gap-4 md:gap-6 py-4 border-b border-gold/10 hover:bg-navy-surface/30 transition-colors px-2 rounded">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <span class="font-display text-gold text-sm font-bold">${t.num}</span>
            </div>
            <div>
              <h4 class="font-sans text-white text-sm font-medium mb-1">${t.title}</h4>
              <p class="font-sans text-champagne/50 text-xs leading-relaxed">${t.desc}</p>
            </div>
          </div>
          `).join("")}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 12-13. 연주자 프로필 ============ -->
<!-- #14 프로필 사진 작게 처리 -->
<section class="py-20 md:py-28" id="profiles">
  <div class="max-w-6xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Our Musicians</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">재즈 연주자 프로필</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>

    <!-- 팀장 프로필 -->
    <div class="art-deco-frame p-8 md:p-10 bg-navy-surface/50 rounded-lg mb-10">
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <div class="flex-shrink-0 w-20 h-20 rounded-full border-2 border-gold/40 overflow-hidden">
          <img src="images/FOVfQLNnuupjPsPj.jpg" alt="정우연" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="font-display text-xl font-bold text-gold">Jeong, Woo-Yeon</h3>
            <span class="bg-gold/20 text-gold text-xs font-sans px-2 py-0.5 rounded">재즈팀장</span>
          </div>
          <p class="font-sans text-champagne/40 text-sm mb-1">정우연</p>
          <p class="font-serif text-champagne/60 text-sm italic mb-4">"고급스러운 재즈선율과 세련된 반주는 역시 이너스뮤직 재즈팀이 최고죠~!"</p>
          <div class="grid md:grid-cols-2 gap-x-6 gap-y-1 font-sans text-champagne/50 text-xs">
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

    <!-- 연주자 프로필 -->
    <div class="grid md:grid-cols-3 gap-6 stagger-children">
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded gold-glow transition-all duration-500">
        <div class="w-14 h-14 rounded-full border border-gold/30 overflow-hidden mb-4 mx-auto">
          <img src="images/KjHyordSoIxTaUHp.jpg" alt="남승연" class="w-full h-full object-cover" />
        </div>
        <div class="text-center mb-4">
          <h3 class="font-display text-lg font-semibold text-gold">Nam, Seung-Yeon</h3>
          <p class="font-sans text-champagne/40 text-xs">남승연 · 재즈피아노</p>
        </div>
        <div class="space-y-1 font-sans text-champagne/50 text-xs">
          <p>· 동아방송대 실용음악과 졸업</p>
          <p>· 인천 펜타포트 음악축제 세션 참여</p>
          <p>· 국악 퓨전 공연 피아노 세션</p>
          <p>· 선데이재즈브런치 피아노 연주자</p>
          <p>· 재즈밴드 활동 및 재즈클럽 공연 다수</p>
        </div>
      </div>
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded gold-glow transition-all duration-500">
        <div class="w-14 h-14 rounded-full border border-gold/30 overflow-hidden mb-4 mx-auto">
          <img src="images/nzcHJvLzcbBEWBdP.jpg" alt="김현배" class="w-full h-full object-cover" />
        </div>
        <div class="text-center mb-4">
          <h3 class="font-display text-lg font-semibold text-gold">Kim, Hyun-Bae</h3>
          <p class="font-sans text-champagne/40 text-xs">김현배 · 콘트라베이스</p>
        </div>
        <div class="space-y-1 font-sans text-champagne/50 text-xs">
          <p>· 재능대 재즈음악과 재즈 베이스 전공</p>
          <p>· 모스틀리 팝스 오케스트라 세션</p>
          <p>· 제천국제음악영화제 준우승/관객투표상</p>
          <p>· 일본 Kanazawa Jazz Street 초청 공연</p>
          <p>· 미국대사관 독립기념일 행사 초청</p>
        </div>
      </div>
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded gold-glow transition-all duration-500">
        <div class="w-14 h-14 rounded-full border border-gold/30 overflow-hidden mb-4 mx-auto">
          <img src="images/aYRcoCyonibrMoqB.jpg" alt="주효진" class="w-full h-full object-cover" />
        </div>
        <div class="text-center mb-4">
          <h3 class="font-display text-lg font-semibold text-gold">Joo, Hyo-Jin</h3>
          <p class="font-sans text-champagne/40 text-xs">주효진 · 드러머</p>
        </div>
        <div class="space-y-1 font-sans text-champagne/50 text-xs">
          <p>· 숭실대 콘서바토리 실용음악과 졸업</p>
          <p>· 용산구청장 표창장 수상</p>
          <p>· 평택 미군기지 캠프 험프리스 공연</p>
          <p>· 재즈밴드 New Traditional Ensemble</p>
          <p>· 부기우기, 숨길 등 재즈클럽 연주 다수</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 14-15. 가격 안내 ============ -->
<!-- #15 모바일 홀수 구성 개선 / #16 연장 진행 시 내빈인사 내용 추가 -->
<section class="py-20 md:py-28 relative overflow-hidden" id="pricing">
  <div class="absolute inset-0">
    <img src="${h}" alt="배경" class="w-full h-full object-cover opacity-15" />
    <div class="absolute inset-0 bg-navy/90"></div>
  </div>
  <div class="relative z-10 max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Pricing</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">본식 연주 금액안내</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>

    <!-- 본식 가격: 데스크탑 5열, 모바일 3+2 -->
    <div class="hidden md:grid md:grid-cols-5 gap-4 mb-10 stagger-children">
      ${[{name:"Piano Solo",price:"100,000"},{name:"Duo (2중주)",price:"180,000"},{name:"Trio (3중주)",price:"260,000"},{name:"Quartet (4중주)",price:"340,000"},{name:"Quintet (5중주)",price:"420,000"}].map(t=>`
      <div class="price-highlight p-5 rounded text-center gold-glow transition-all duration-500">
        <p class="font-display text-sm text-gold font-semibold mb-2">${t.name}</p>
        <p class="font-display text-xl md:text-2xl font-bold text-white">${t.price}<span class="text-sm text-champagne/60">원</span></p>
      </div>
      `).join("")}
    </div>
    <!-- 모바일: 3+2 레이아웃 -->
    <div class="md:hidden mb-10 stagger-children">
      <div class="grid grid-cols-3 gap-3 mb-3">
        ${[{name:"Piano Solo",price:"100,000"},{name:"Duo (2중주)",price:"180,000"},{name:"Trio (3중주)",price:"260,000"}].map(t=>`
        <div class="price-highlight p-4 rounded text-center">
          <p class="font-display text-xs text-gold font-semibold mb-1">${t.name}</p>
          <p class="font-display text-lg font-bold text-white">${t.price}<span class="text-[10px] text-champagne/60">원</span></p>
        </div>
        `).join("")}
      </div>
      <div class="grid grid-cols-2 gap-3 max-w-[66%] mx-auto">
        ${[{name:"Quartet (4중주)",price:"340,000"},{name:"Quintet (5중주)",price:"420,000"}].map(t=>`
        <div class="price-highlight p-4 rounded text-center">
          <p class="font-display text-xs text-gold font-semibold mb-1">${t.name}</p>
          <p class="font-display text-lg font-bold text-white">${t.price}<span class="text-[10px] text-champagne/60">원</span></p>
        </div>
        `).join("")}
      </div>
    </div>

    <!-- 추가 옵션 -->
    <div class="grid md:grid-cols-2 gap-6 mb-10">
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded">
        <h4 class="font-display text-gold text-base font-semibold mb-3">Foreign Musician Option</h4>
        <p class="font-sans text-champagne/60 text-sm">외국인 연주자 1인 추가 <span class="text-gold font-bold">+50,000원</span></p>
        <p class="font-sans text-champagne/40 text-xs mt-1">최대 1~2인까지 추가 가능 (재즈3중주부터)</p>
      </div>
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded">
        <h4 class="font-display text-gold text-base font-semibold mb-3">Jazz Vocal (재즈 싱어)</h4>
        <p class="font-sans text-champagne/60 text-sm">본식 5곡 구성 <span class="text-gold font-bold">200,000원</span></p>
        <p class="font-sans text-champagne/40 text-xs mt-1">화촉점화/신랑입장/신부입장/축가 서비스/행진</p>
      </div>
    </div>

    <div class="art-deco-frame p-6 bg-navy-surface/50 rounded mb-10">
      <h4 class="font-display text-gold text-base font-semibold mb-3">Reception Live (피로연 재즈 보컬)</h4>
      <p class="font-sans text-champagne/60 text-sm">5~6곡 구성 <span class="text-gold font-bold">+100,000원</span></p>
      <p class="font-sans text-champagne/40 text-xs mt-1">식사 및 리셉션 분위기에 맞춘 라이브 진행</p>
    </div>

    <!-- 피로연 가격 -->
    <div class="text-center mb-10">
      <div class="gold-line-thick w-24 mx-auto mb-8"></div>
      <h3 class="font-display text-2xl md:text-3xl font-bold text-white mb-4">피로연 연주 금액안내</h3>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded text-center">
        <p class="font-sans text-champagne/60 text-sm mb-2">2부 피로연 연주 요청 시</p>
        <p class="font-display text-2xl font-bold text-gold">1인당 50,000<span class="text-sm text-champagne/60">원</span></p>
        <p class="font-sans text-champagne/40 text-xs mt-1">추가</p>
      </div>
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded text-center">
        <p class="font-sans text-champagne/60 text-sm mb-2">기본 연주 범위</p>
        <p class="font-sans text-champagne/70 text-sm">사진 촬영 종료 후부터<br/>내빈 인사 전까지</p>
      </div>
      <div class="art-deco-frame p-6 bg-navy-surface/50 rounded text-center">
        <p class="font-sans text-champagne/60 text-sm mb-2">연장 진행 시</p>
        <p class="font-display text-2xl font-bold text-gold">1인당 30,000<span class="text-sm text-champagne/60">원</span></p>
        <p class="font-sans text-champagne/40 text-xs mt-2">내빈인사까지 연주 진행을<br/>원하실 경우 추가</p>
      </div>
    </div>
    <div class="text-center mt-8">
      <p class="font-serif text-gold/80 text-sm italic">"여유롭고 품격 있는 연주로,<br class="sm:hidden"/> 특별한 순간을 더욱 빛내드립니다."</p>
    </div>
  </div>
</section>

<!-- ============ 16. 다양한 곡 안내 ============ -->
<section class="py-16 md:py-20">
  <div class="max-w-3xl mx-auto px-4 text-center fade-in-section">
    <div class="art-deco-frame p-8 md:p-12 bg-navy-surface/40 rounded-lg">
      <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
        <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
      </div>
      <h3 class="font-display text-xl md:text-2xl font-bold text-white mb-4">다양한 곡 안내</h3>
      <p class="font-sans text-champagne/60 text-sm leading-relaxed mb-4">
        예약 후 <span class="text-gold font-medium">곡리스트 외에 있는 곡</span>도 신청주시면<br/>
        <span class="text-gold font-medium">악보가 있는 연주곡이면 연주가능</span>합니다.
      </p>
      <div class="gold-line w-12 mx-auto my-5"></div>
      <p class="font-serif text-champagne/50 text-sm italic">
        <span class="block">고객님의 특별한 순간을</span><span class="block">더욱 빛내드리기 위해</span><span class="block">다양한 곡으로 함께하겠습니다.</span>
      </p>
    </div>
  </div>
</section>

<!-- ============ 17. 이중 체킹 ============ -->
<!-- #17 모바일 줄바꿈 개선 -->
<section class="py-20 md:py-28 bg-navy-surface/30">
  <div class="max-w-5xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <div class="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
        <svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h2 class="font-display text-2xl md:text-3xl font-bold text-white mb-3">예식 당일, <span class="text-gold">가장 걱정되는 부분</span></h2>
      <p class="font-sans text-champagne/50 text-sm">혹시 모를 변수나 당일 진행에 대한 불안감</p>
      <div class="gold-line w-16 mx-auto mt-6 mb-3"></div>
      <p class="font-display text-xl text-white font-semibold mt-6">이너스뮤직은 <span class="text-mint">시스템</span>으로 대비합니다.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-6 stagger-children">
      <div class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center">
        <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <h4 class="font-sans text-white text-sm font-medium mb-2">전속 계약 진행</h4>
        <p class="font-sans text-champagne/50 text-xs">No-show 걱정 없음</p>
      </div>
      <div class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center">
        <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h4 class="font-sans text-white text-sm font-medium mb-2">이중 체크</h4>
        <p class="font-sans text-champagne/50 text-xs">예식 2시간 전 / 1시간 전</p>
      </div>
      <div class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center">
        <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <h4 class="font-sans text-white text-sm font-medium mb-2">예비 연주자 대기</h4>
        <p class="font-sans text-champagne/50 text-xs">만일의 상황 대비</p>
      </div>
    </div>
    <div class="text-center mt-10">
      <p class="font-serif text-champagne/50 text-sm italic leading-relaxed">
        "마지막까지 안정적으로 완성되는<br class="sm:hidden"/>
        예식을 직접 경험하실 수 있습니다."
      </p>
    </div>
  </div>
</section>

<!-- ============ 18. 퀵 메뉴 ============ -->
<!-- #18 세부 메뉴 링크 설정 -->
<section class="py-16 md:py-20" id="contact">
  <div class="max-w-4xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-10">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Quick Menu</p>
      <h2 class="font-display text-2xl md:text-3xl font-bold text-white mb-4">바로가기</h2>
      <div class="gold-line w-16 mx-auto mt-4"></div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
      ${[{icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>',label:"재즈 영상보기",url:"https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=24"},{icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>',label:"외국인밴드 영상",url:"https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=67"},{icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',label:"상품 문의하기",url:"http://inusmusics.dothome.co.kr/xe/inusmusic/"},{icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',label:"이너스 예약하기",url:"https://blog.naver.com/inusmusics/223023961320"},{icon:'<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C6.5 3 2 6.58 2 11c0 2.83 1.82 5.32 4.56 6.72l-.96 3.56a.5.5 0 00.74.56l4.01-2.44c.54.07 1.09.1 1.65.1 5.5 0 10-3.58 10-8s-4.5-8-10-8z"/></svg>',label:"카톡 상담하기",url:"https://pf.kakao.com/_wxovaM/chat"},{icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',label:"후기글 보기",url:"http://musicin.godohosting.com/bbs/board.php?bo_table=forum"},{icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',label:"이너스 진행이력",url:"https://blog.naver.com/inusmusics/221231802647"},{icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',label:"이너스 예약현황",url:"http://inusmusics.dothome.co.kr/xe/board_nOmW18/"}].map(t=>`
      <a href="${t.url}" target="_blank" rel="noopener" class="art-deco-frame p-4 bg-navy-surface/50 rounded text-center gold-glow transition-all duration-500 hover:bg-navy-surface/80 group">
        <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 text-gold group-hover:bg-gold/20 transition-all duration-300">
          ${t.icon}
        </div>
        <p class="font-sans text-champagne/70 text-xs group-hover:text-gold transition-colors duration-300">${t.label}</p>
      </a>
      `).join("")}
    </div>
  </div>
</section>

<!-- ============ 20-21. Q&A ============ -->
<!-- #20 QnA를 이벤트 위로 이동 -->
<section class="py-20 md:py-28 bg-navy-surface/30" id="qna">
  <div class="max-w-4xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Q & A</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">자주 묻는 질문</h2>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="space-y-4">
      <div class="art-deco-frame bg-navy-surface/50 rounded-lg overflow-hidden">
        <button class="w-full text-left p-6 flex items-center justify-between" onclick="this.nextElementSibling.classList.toggle('open'); this.querySelector('.qna-arrow').classList.toggle('rotate-180')">
          <div class="flex items-center gap-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display text-gold font-bold text-sm">Q</span>
            <span class="font-sans text-white text-sm md:text-base font-medium">당일날 펑크날까봐 걱정돼요...</span>
          </div>
          <svg class="qna-arrow w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="accordion-content">
          <div class="px-6 pb-6">
            <div class="flex items-start gap-4">
              <span class="flex-shrink-0 w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center font-display text-mint font-bold text-sm">A</span>
              <div>
                <p class="font-sans text-white text-sm font-medium mb-3">걱정하지 않으셔도 됩니다.</p>
                <div class="space-y-2 font-sans text-champagne/60 text-sm mb-4">
                  <p class="flex items-start gap-2"><span class="text-gold">&#9670;</span> 예식 당일 2시간 전, 연주자 준비 상태 1차 체크</p>
                  <p class="flex items-start gap-2"><span class="text-gold">&#9670;</span> 예식 1시간 전, 현장 도착 여부 2차 확인</p>
                  <p class="flex items-start gap-2"><span class="text-gold">&#9670;</span> 만일의 상황 대비, 예비 연주자 대기</p>
                </div>
                <p class="font-sans text-champagne/50 text-xs mb-4">또한 모든 연주자는 업체와 전속 계약 체결 후 진행되며, 사전 관리 시스템을 통해 철저히 관리됩니다.</p>
                <div class="bg-navy-surface/60 rounded p-4 text-center">
                  <p class="font-sans text-champagne/60 text-xs mb-1">그 결과, 지금까지</p>
                  <p class="font-display text-3xl font-bold text-gold">0<span class="text-lg">%</span></p>
                  <p class="font-sans text-champagne/40 text-xs">PUNCTUALITY — 펑크율 0% 유지</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="art-deco-frame bg-navy-surface/50 rounded-lg overflow-hidden">
        <button class="w-full text-left p-6 flex items-center justify-between" onclick="this.nextElementSibling.classList.toggle('open'); this.querySelector('.qna-arrow').classList.toggle('rotate-180')">
          <div class="flex items-center gap-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display text-gold font-bold text-sm">Q</span>
            <span class="font-sans text-white text-sm md:text-base font-medium">연주자들은 학생인가요?</span>
          </div>
          <svg class="qna-arrow w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="accordion-content">
          <div class="px-6 pb-6">
            <div class="flex items-start gap-4">
              <span class="flex-shrink-0 w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center font-display text-mint font-bold text-sm">A</span>
              <div>
                <p class="font-sans text-white text-sm font-medium mb-3">아닙니다.</p>
                <div class="space-y-2 font-sans text-champagne/60 text-sm mb-4">
                  <p class="flex items-start gap-2"><span class="text-gold flex-shrink-0">&#10003;</span><span>명문 실용음대 출신 연주자들로 구성</span></p>
                  <p class="flex items-start gap-2"><span class="text-gold flex-shrink-0">&#10003;</span><span>현재 행사 연주 및 재즈바에서 활동 중인 현역 연주자들로만 선별하여 진행</span></p>
                  <p class="flex items-start gap-2"><span class="text-gold flex-shrink-0">&#10003;</span><span>학생 연주자는 등용하지 않으며 내부 기준과 오디션을 통해 검증된 인원만 배정</span></p>
                </div>
                <p class="font-sans text-champagne/50 text-sm mb-4">또한 <span class="text-gold font-medium">100명 이상</span>의 연주자 풀을 보유하고 있어 예식 일정에 맞춰 안정적인 진행이 가능합니다.</p>
                <div class="bg-mint/10 border border-mint/30 rounded p-4 text-center">
                  <p class="font-sans text-mint text-sm font-medium">모든 연주는 예식 분위기에 맞춰 완성도 높은 퀄리티로 진행됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 19. 이벤트 ============ -->
<!-- #19 문구 줄바꿈, 블로그 후기 혜택 문구 변경, 자세히 알아보기 링크 -->
<section class="py-20 md:py-28">
  <div class="max-w-4xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">Special Event</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">이너스뮤직 특별 이벤트</h2>
      <p class="font-sans text-champagne/50 text-sm mt-3">예식을 준비하시는 고객님들께<br class="sm:hidden"/> 실질적으로 도움이 되는<br class="sm:hidden"/> 혜택을 함께 제공합니다.</p>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="art-deco-frame p-8 bg-navy-surface/60 rounded">
        <div class="flex items-center gap-3 mb-4">
          <span class="font-display text-2xl font-bold text-gold">01</span>
          <h3 class="font-sans text-white text-base font-medium">숨고 리뷰 이벤트 참여 혜택</h3>
        </div>
        <ul class="space-y-2 font-sans text-champagne/60 text-sm">
          <li class="flex items-start gap-2"><span class="text-mint mt-0.5">&#10003;</span><span>숨고 리뷰 작성 시<br class="md:hidden"/> <span class="text-gold font-medium">최대 2만원 할인</span> 혜택</span></li>
          <li class="flex items-start gap-2"><span class="text-mint mt-0.5">&#10003;</span><span>결혼 준비에 꼭 필요한<br class="md:hidden"/> <span class="text-gold font-medium">웨딩 준비 체크리스트</span> 제공</span></li>
        </ul>
      </div>
      <div class="art-deco-frame p-8 bg-navy-surface/60 rounded">
        <div class="flex items-center gap-3 mb-4">
          <span class="font-display text-2xl font-bold text-gold">02</span>
          <h3 class="font-sans text-white text-base font-medium">블로그 후기 참여 혜택</h3>
        </div>
        <p class="font-sans text-champagne/60 text-sm">블로그 후기 작성 시 <span class="text-gold font-medium">추가 혜택</span>을 제공합니다.</p>
        <p class="font-sans text-gold text-sm mt-3 font-medium">추가 혜택 제공</p>
        <a href="https://blog.naver.com/inusmusics/220652958346" target="_blank" rel="noopener" class="inline-block mt-4 border border-gold/50 hover:border-gold text-gold font-sans text-xs px-5 py-2 rounded transition-all duration-300">
          자세히 알아보기
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ============ 추가 옵션 서비스 ============ -->
<section class="py-20 md:py-28 bg-navy-surface/30" id="extra-services">
  <div class="max-w-4xl mx-auto px-4 fade-in-section">
    <div class="text-center mb-14">
      <p class="font-serif text-gold text-sm tracking-[0.3em] uppercase mb-3">More Services</p>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">추가 옵션 서비스</h2>
      <p class="font-sans text-champagne/50 text-sm mt-3">이너스뮤직의 다양한 웨딩 서비스를 확인해보세요.</p>
      <div class="gold-line w-16 mx-auto mt-6"></div>
    </div>
    <!-- 토글 버튼 -->
    <div class="text-center mb-8">
      <button id="extra-services-toggle" class="inline-flex items-center gap-2 border border-gold/50 hover:border-gold text-gold font-sans font-medium px-6 py-3 rounded transition-all duration-300 text-sm">
        <span>서비스 보기</span>
        <svg class="w-4 h-4 transition-transform duration-300" id="extra-services-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
    </div>
    <!-- 서비스 그리드 (토글) -->
    <div id="extra-services-grid" class="hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children max-w-2xl mx-auto">
        <a href="https://inusclassic.kr/" target="_blank" rel="noopener" class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center gold-glow transition-all duration-500 hover:bg-navy-surface/80 group">
          <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
            <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
          </div>
          <p class="font-sans text-champagne/80 text-sm font-medium group-hover:text-gold transition-colors duration-300">클래식</p>
        </a>
        <a href="https://blog.naver.com/inusmusics/220622621535" target="_blank" rel="noopener" class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center gold-glow transition-all duration-500 hover:bg-navy-surface/80 group">
          <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
            <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
          </div>
          <p class="font-sans text-champagne/80 text-sm font-medium group-hover:text-gold transition-colors duration-300">중창팝페라</p>
        </a>
        <a href="https://inusmw.kr/" target="_blank" rel="noopener" class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center gold-glow transition-all duration-500 hover:bg-navy-surface/80 group">
          <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
            <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <p class="font-sans text-champagne/80 text-sm font-medium group-hover:text-gold transition-colors duration-300">뮤지컬웨딩</p>
        </a>
        <a href="https://inusmc.co.kr/" target="_blank" rel="noopener" class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center gold-glow transition-all duration-500 hover:bg-navy-surface/80 group">
          <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
            <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </div>
          <p class="font-sans text-champagne/80 text-sm font-medium group-hover:text-gold transition-colors duration-300">사회</p>
        </a>
        <a href="https://inusmusic.kr/" target="_blank" rel="noopener" class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center gold-glow transition-all duration-500 hover:bg-navy-surface/80 group">
          <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
            <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
          </div>
          <p class="font-sans text-champagne/80 text-sm font-medium group-hover:text-gold transition-colors duration-300">축가</p>
        </a>
        <!-- 완성 패키지 항목 - 6개 그리드 맞춤 (3열 x 2행, 모바일 2열 x 3행) -->
        <a href="https://blog.naver.com/inusmusics/220652965646" target="_blank" rel="noopener" class="art-deco-frame p-6 bg-navy-surface/60 rounded text-center gold-glow transition-all duration-500 hover:bg-navy-surface/80 group">
          <div class="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
            <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <p class="font-sans text-champagne/80 text-sm font-medium group-hover:text-gold transition-colors duration-300">완성 패키지</p>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="py-12 border-t border-gold/10">
  <div class="max-w-5xl mx-auto px-4 text-center">
    <p class="font-display text-gold text-xl font-bold tracking-wider mb-3">INUSMUSIC</p>
    <p class="font-serif text-champagne/40 text-sm tracking-wider uppercase mb-6">Premium Jazz Wedding Live</p>
    <div class="gold-line w-12 mx-auto mb-6"></div>
    <div class="font-sans text-champagne/40 text-xs leading-relaxed space-y-1 mb-6">
      <p>대표자: 신유진 &nbsp;|&nbsp; 사업자번호: 299-90-00178</p>
      <p>사무실 주소: 서울 광진구 자양로 165 4층</p>
      <p>TEL: <a href="tel:02-423-2772" class="hover:text-gold transition-colors duration-300">02-423-2772</a></p>
    </div>
    <p class="font-sans text-champagne/30 text-xs">&copy; 2015-2025 INUSMUSIC. All rights reserved.</p>
  </div>
</footer>

<!-- Floating CTA - Right (상담하기) -->
<div class="floating-cta floating-btn-hidden" id="floating-right">
  <a href="https://pf.kakao.com/_wxovaM/chat" target="_blank" rel="noopener" class="flex items-center gap-2 bg-mint hover:bg-mint-dark text-navy font-sans font-medium text-sm px-5 py-3 rounded-full shadow-lg shadow-mint/20 transition-all duration-300">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    상담하기
  </a>
</div>
<!-- Floating CTA - Left (영상보기) -->
<div class="floating-video floating-btn-hidden" id="floating-left">
  <button id="video-fab-toggle" class="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-sans font-medium text-sm px-5 py-3 rounded-full shadow-lg shadow-gold/20 transition-all duration-300">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    영상보기
  </button>
  <div id="video-fab-menu" class="hidden absolute bottom-full left-0 mb-3 flex flex-col gap-2">
    <a href="https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=24" target="_blank" rel="noopener" class="whitespace-nowrap flex items-center gap-2 bg-navy-light border border-gold/30 text-champagne font-sans text-sm px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:border-gold hover:text-gold">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
      재즈 영상보기
    </a>
    <a href="https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=67" target="_blank" rel="noopener" class="whitespace-nowrap flex items-center gap-2 bg-navy-light border border-gold/30 text-champagne font-sans text-sm px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:border-gold hover:text-gold">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
      외국인밴드 영상
    </a>
  </div>
</div>

`;const w=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".fade-in-section, .stagger-children").forEach(t=>{w.observe(t)});const i=document.getElementById("main-header");window.addEventListener("scroll",()=>{window.scrollY>80?(i.style.background="rgba(10, 22, 40, 0.95)",i.style.backdropFilter="blur(10px)",i.style.boxShadow="0 1px 0 rgba(201, 169, 110, 0.1)"):(i.style.background="transparent",i.style.backdropFilter="none",i.style.boxShadow="none")});const d=document.getElementById("menu-toggle"),o=document.getElementById("menu-overlay");let c=!1;if(d&&o){d.addEventListener("click",()=>{c=!c,c?(o.classList.remove("pointer-events-none","opacity-0"),o.classList.add("pointer-events-auto","opacity-100"),d.classList.add("menu-open"),document.body.style.overflow="hidden"):(o.classList.add("pointer-events-none","opacity-0"),o.classList.remove("pointer-events-auto","opacity-100"),d.classList.remove("menu-open"),document.body.style.overflow="")});const t=document.getElementById("menu-close");t&&t.addEventListener("click",()=>{c=!1,o.classList.add("pointer-events-none","opacity-0"),o.classList.remove("pointer-events-auto","opacity-100"),d.classList.remove("menu-open"),document.body.style.overflow=""}),o.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{c=!1,o.classList.add("pointer-events-none","opacity-0"),o.classList.remove("pointer-events-auto","opacity-100"),d.classList.remove("menu-open"),document.body.style.overflow=""})})}const p=document.getElementById("extra-services-toggle"),m=document.getElementById("extra-services-grid"),x=document.getElementById("extra-services-arrow");p&&m&&p.addEventListener("click",()=>{m.classList.contains("hidden")?(m.classList.remove("hidden"),p.querySelector("span").textContent="접기",x&&(x.style.transform="rotate(180deg)")):(m.classList.add("hidden"),p.querySelector("span").textContent="서비스 보기",x&&(x.style.transform="rotate(0deg)"))});(function(){const t=document.getElementById("review-scroll");if(!t)return;let e;const a=4e3,n=340;function s(){e=setInterval(()=>{const r=t.scrollWidth-t.clientWidth;t.scrollLeft>=r-10?t.scrollTo({left:0,behavior:"smooth"}):t.scrollBy({left:n,behavior:"smooth"})},a)}function l(){clearInterval(e)}s(),t.addEventListener("mouseenter",l),t.addEventListener("mouseleave",s),t.addEventListener("touchstart",l,{passive:!0}),t.addEventListener("touchend",()=>{setTimeout(s,2e3)})})();document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const a=document.querySelector(this.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth",block:"start"})})});(function(){const t=document.getElementById("hero"),e=document.getElementById("floating-right"),a=document.getElementById("floating-left");if(!t||!e||!a)return;new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting?(e.classList.add("floating-btn-hidden"),e.classList.remove("floating-btn-visible"),a.classList.add("floating-btn-hidden"),a.classList.remove("floating-btn-visible")):(e.classList.remove("floating-btn-hidden"),e.classList.add("floating-btn-visible"),a.classList.remove("floating-btn-hidden"),a.classList.add("floating-btn-visible"))})},{threshold:.3}).observe(t)})();(function(){const t=document.getElementById("video-fab-toggle"),e=document.getElementById("video-fab-menu");if(!t||!e)return;let a=!1;t.addEventListener("click",n=>{n.stopPropagation(),a=!a,a?(e.classList.remove("hidden"),e.style.opacity="0",e.style.transform="translateY(10px)",requestAnimationFrame(()=>{e.style.transition="opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",e.style.opacity="1",e.style.transform="translateY(0)"})):(e.style.opacity="0",e.style.transform="translateY(10px)",setTimeout(()=>e.classList.add("hidden"),300))}),document.addEventListener("click",()=>{a&&(a=!1,e.style.opacity="0",e.style.transform="translateY(10px)",setTimeout(()=>e.classList.add("hidden"),300))})})();
