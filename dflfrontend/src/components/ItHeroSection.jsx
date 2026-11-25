import React, { useRef, useEffect, useState } from 'react';
import { FiArrowRight, FiZap } from 'react-icons/fi';
import TechIconsArc from './TechIconsArc';

const TYPEWRITER_PHRASES = [
  'Custom Software',
  'CRM & HRMS Platforms',
  'Cloud Infrastructure',
  'Analytics Dashboards',
  'Mobile Apps',
];

const ItHeroSection = ({ scrollToProcess }) => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // Reduced motion preference detection
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener?.('change', handler);
    return () => mediaQuery.removeEventListener?.('change', handler);
  }, []);

  // ----------------------------------------------------
  // 1. TYPEWRITER EFFECT (CYCLES 5 PHRASES WITH BLINKING CURSOR)
  // ----------------------------------------------------
  const [typedText, setTypedText] = useState(() =>
    prefersReducedMotion
      ? 'Custom Software & Enterprise Platforms'
      : 'Custom Software'
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timeout;

    if (!isDeleting && typedText === currentPhrase) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText === '') {
      // Move to next word
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      timeout = setTimeout(() => {}, 300);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, prefersReducedMotion]);

  // ----------------------------------------------------
  // 2. LIVE CONTROL CENTER STATS (SIMULATED TELEMETRY)
  // ----------------------------------------------------
  const [requestsPerMin, setRequestsPerMin] = useState(1242);
  const [apiUptime, setApiUptime] = useState('99.98%');
  const [deploysToday, setDeploysToday] = useState(12);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Requests per min fluctuates every 2 seconds around ~1240
    const reqInterval = setInterval(() => {
      const variation = Math.floor(Math.random() * 21) - 10; // -10 to +10
      setRequestsPerMin(1240 + variation);
    }, 2000);

    // API Uptime subtle micro-shift
    const uptimeInterval = setInterval(() => {
      const options = ['99.98%', '99.99%', '99.97%', '100.0%'];
      const chosen = options[Math.floor(Math.random() * options.length)];
      setApiUptime(chosen);
    }, 8000);

    // Deploys today occasionally +1 (12 -> 13)
    const deployInterval = setInterval(() => {
      setDeploysToday((prev) => (prev === 12 ? 13 : 12));
    }, 14000);

    return () => {
      clearInterval(reqInterval);
      clearInterval(uptimeInterval);
      clearInterval(deployInterval);
    };
  }, [prefersReducedMotion]);

  // ----------------------------------------------------
  // 3. BACKGROUND CANVAS NETWORK (26 TO 80 POINTS, 18% ORANGE, MOUSE INTERACTION)
  // ----------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = hero.clientWidth);
    let height = (canvas.height = hero.clientHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Point count based on area (drifting across the whole hero background)
    const count = Math.min(65, Math.max(26, Math.floor((width * height) / 15000)));

    const points = [];
    for (let i = 0; i < count; i++) {
      const isOrange = Math.random() < 0.18; // ~18% orange, rest subtle neutral
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: isOrange ? 2.5 : 1.9,
        isOrange,
        color: isOrange ? 'rgba(255, 122, 26, 0.65)' : 'rgba(150, 125, 110, 0.55)',
      });
    }

    // Mouse tracking relative to hero section
    let mouse = { x: -9999, y: -9999 };

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    hero.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const handleResize = () => {
      if (!canvas || !hero) return;
      width = canvas.width = hero.clientWidth;
      height = canvas.height = hero.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Single static frame renderer for reduced motion
    const drawNetworkFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDist = 130;
      const mouseMaxDist = 140;

      // Draw ultra-light subtle connection lines (soft background ambience)
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 0.9;

            if (p1.isOrange || p2.isOrange) {
              ctx.strokeStyle = `rgba(255, 122, 26, ${alpha * 0.32})`; // Crisp soft orange
            } else {
              ctx.strokeStyle = `rgba(150, 125, 110, ${alpha * 0.25})`; // Defined warm neutral
            }
            ctx.stroke();
          }
        }

        // Connect to mouse in warm orange
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < mouseMaxDist) {
            const mAlpha = 1 - mdist / mouseMaxDist;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.lineWidth = 0.9;
            ctx.strokeStyle = `rgba(255, 122, 26, ${mAlpha * 0.42})`;
            ctx.stroke();
          }
        }
      }

      // Draw subtle small points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      drawNetworkFrame();
      return () => {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', handleResize);
      };
    }

    // Animation Loop
    const animate = () => {
      // Update physics and bounce off canvas edges
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;
      }

      drawNetworkFrame();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  // Smooth scroll handler helper
  const handleScrollTo = (id) => {
    if (id === 'process' && scrollToProcess) {
      scrollToProcess();
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      aria-label="DFL IT Solutions Hero"
      className="relative w-full bg-white text-[#22150d] overflow-hidden select-none pt-[72px] pb-2 sm:pb-4 lg:pt-[72px] lg:pb-6"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Dynamic Keyframes & Component Scoped Styles */}
      <style>{`
        @keyframes sheenFlow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes heroCardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes chipBobA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes chipBobB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
        @keyframes flowDashes {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes gatewayBorderPulse {
          0%, 100% {
            stroke: #ff7a1a;
            filter: drop-shadow(0 0 2px rgba(255, 122, 26, 0.3));
          }
          50% {
            stroke: #ff4d00;
            filter: drop-shadow(0 0 8px rgba(255, 77, 0, 0.65));
          }
        }
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroSlideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes techArcFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .sheen-text {
          background: linear-gradient(
            90deg,
            #ff4d00 0%,
            #ff7a1a 35%,
            #ffba8a 50%,
            #ff7a1a 65%,
            #ff4d00 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sheenFlow 8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sheen-text {
            animation: none;
            background: linear-gradient(90deg, #ff4d00, #ff7a1a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .animate-float-card,
          .animate-chip-a,
          .animate-chip-b,
          .flow-dash-line,
          .animate-tech-arc {
            animation: none !important;
          }
        }
      `}</style>

      {/* ======================================================== */}
      {/* BACKGROUND CANVAS NETWORK (HERO ONLY, BOUND TO HERO SECTION) */}
      {/* ======================================================== */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* ======================================================== */}
      {/* MAIN TWO-COLUMN CONTAINER */}
      {/* ======================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl xl:max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-start">
          
          {/* ---------------------------------------------------- */}
          {/* LEFT COLUMN: HERO TEXT & ACTIONS (STAGGERED LOAD) */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center relative z-10">
            
            {/* 1. Eyebrow pill */}
            <div
              className="w-fit"
              style={{
                animation: prefersReducedMotion
                  ? 'none'
                  : 'heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0ms forwards',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff8f3] text-[#c2540a] border border-[#ff7a1a]/30 shadow-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7a1a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7a1a]"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  DFL IT SOLUTIONS
                </span>
              </div>
            </div>

            {/* 2. H1 Headline */}
            <h1
              className="mt-5 text-[clamp(2.5rem,5.2vw,4.7rem)] font-extrabold text-[#22150d] tracking-tight leading-[1.08]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                animation: prefersReducedMotion
                  ? 'none'
                  : 'heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 80ms forwards',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              Next-Gen{' '}
              <span className="sheen-text inline-block">
                Tech-Driven
              </span>{' '}
              IT & Software Solutions
            </h1>

            {/* 3. Paragraph */}
            <p
              className="mt-5 text-base sm:text-lg lg:text-[1.125rem] text-[#6a5444] font-normal leading-relaxed max-w-xl"
              style={{
                animation: prefersReducedMotion
                  ? 'none'
                  : 'heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 160ms forwards',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              Empowering modern digital enterprises with cutting-edge IT
              infrastructure, custom software engineering, and seamless digital
              transformation.
            </p>

            {/* 4. Mono Line with Typewriter Cycling */}
            <div
              className="mt-6 w-fit max-w-full"
              style={{
                animation: prefersReducedMotion
                  ? 'none'
                  : 'heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 240ms forwards',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#fff8f3] border border-[#ff7a1a]/25 text-[#22150d] text-xs sm:text-sm font-semibold shadow-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-[#c2540a] font-bold select-none">$</span>
                <span className="text-[#6a5444]">we build</span>
                <span className="text-[#c2540a] font-bold tracking-tight">
                  {typedText}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block w-2 h-4 sm:h-4.5 bg-[#ff7a1a] ml-0.5 animate-pulse"
                />
              </div>
            </div>

            {/* 5. Buttons */}
            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{
                animation: prefersReducedMotion
                  ? 'none'
                  : 'heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 320ms forwards',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              {/* Primary Orange Button */}
              <button
                onClick={() => handleScrollTo('process')}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-[#ff7a1a]/25 hover:shadow-[#ff7a1a]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7a1a]"
                style={{
                  background: 'linear-gradient(135deg, #ff7a1a 0%, #ff4d00 100%)',
                }}
              >
                <span>Explore Process</span>
                <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary White Outline Button */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-[#fff8f3] text-[#22150d] font-bold text-sm sm:text-base border border-[#ff7a1a]/30 hover:border-[#ff7a1a]/60 shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7a1a]"
              >
                Contact Us
              </button>
            </div>

            {/* 6. Trust Row with Green Check Icons */}
            <div
              className="mt-9 pt-7 border-t border-[#ff7a1a]/15 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{
                animation: prefersReducedMotion
                  ? 'none'
                  : 'heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              {[
                'Enterprise-grade security',
                'Agile delivery',
                '4 global offices',
              ].map((label, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#6a5444]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ---------------------------------------------------- */}
          {/* RIGHT COLUMN: LIVE "CONTROL CENTER" CARD */}
          {/* ---------------------------------------------------- */}
          <div
            className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center w-full lg:pt-2 xl:pt-3"
            style={{
              animation: prefersReducedMotion
                ? 'none'
                : 'heroSlideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards',
              opacity: prefersReducedMotion ? 1 : 0,
            }}
          >
            {/* The Main Control Center Card */}
            <div
              className="animate-float-card relative w-full max-w-[540px] bg-white rounded-[22px] border border-[#ff7a1a]/20 p-4 sm:p-6 lg:p-6 shadow-[0_20px_50px_rgba(255,122,26,0.08),0_4px_16px_rgba(34,21,13,0.04)]"
              style={{
                animation: prefersReducedMotion
                  ? 'none'
                  : 'heroCardFloat 7s ease-in-out infinite',
              }}
            >
              
              {/* Floating Chip 1: Top-Right Corner (Realtime Monitoring) */}
              <div
                className="animate-chip-a hidden sm:flex absolute -top-5 -right-2 sm:-top-6 sm:-right-3 z-30 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#ff7a1a]/30 shadow-md shadow-[#ff7a1a]/15 text-xs font-bold text-[#22150d]"
                style={{
                  animation: prefersReducedMotion
                    ? 'none'
                    : 'chipBobA 5s ease-in-out infinite',
                }}
              >
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-orange-100 text-[#ff7a1a]">
                  <FiZap className="w-2.5 h-2.5 fill-[#ff7a1a]" />
                </span>
                <span>Realtime monitoring</span>
              </div>

              {/* Floating Chip 2: Overlapping Lower-Left Edge (Deploy Successful) */}
              <div
                className="animate-chip-b hidden sm:flex absolute -bottom-3.5 -left-3 sm:-bottom-4 sm:-left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200 shadow-md shadow-emerald-500/10 text-xs font-bold text-[#22150d]"
                style={{
                  animation: prefersReducedMotion
                    ? 'none'
                    : 'chipBobB 6s ease-in-out infinite 0.5s',
                }}
              >
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-2.5 h-2.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Deploy successful</span>
              </div>

              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#ff7a1a]/15">
                {/* Window Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                  <span
                    className="ml-2 text-[11px] font-semibold text-[#6a5444]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    sys.cluster.dfl/live
                  </span>
                </div>

                {/* Blinking "LIVE" label */}
                <div
                  className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span>LIVE</span>
                </div>
              </div>

              {/* Animated SVG Architecture Diagram Panel */}
              <div
                className="relative rounded-2xl border border-[#ff7a1a]/20 p-3 sm:p-4 overflow-hidden bg-[#fff9f5]"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(255, 122, 26, 0.16) 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                }}
              >
                <svg
                  viewBox="0 0 520 230"
                  className="w-full h-auto drop-shadow-xs"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Enterprise System Architecture Diagram showing Web App, Mobile App, and Admin clients connecting through an API Gateway to Services, Database, and Cloud infrastructure"
                >
                  <title>Architecture Overview Diagram</title>
                  <desc>
                    Three client nodes connecting to an animated API Gateway, routed to backend services, database, and cloud servers.
                  </desc>

                  <defs>
                    {/* Pulsing Gateway Glow Filter */}
                    <filter
                      id="gatewayGlow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="3"
                        floodColor="#ff7a1a"
                        floodOpacity="0.45"
                      />
                    </filter>
                    <linearGradient
                      id="gatewayGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#fff8f3" />
                      <stop offset="100%" stopColor="#ffede0" />
                    </linearGradient>
                  </defs>

                  {/* ------------------------------------------- */}
                  {/* CONNECTION PATHS (FLOWING DASHED ORANGE LINES) */}
                  {/* ------------------------------------------- */}
                  {/* Left Connection Paths */}
                  {/* 1. Web App -> Gateway */}
                  <path
                    id="pathWebGateway"
                    d="M 115,39 C 158,39 158,95 195,95"
                    stroke="#ff7a1a"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="flow-dash-line"
                    style={{ animation: 'flowDashes 1.2s linear infinite' }}
                  />
                  {/* 2. Mobile App -> Gateway */}
                  <path
                    id="pathMobileGateway"
                    d="M 115,110 L 195,110"
                    stroke="#ff7a1a"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="flow-dash-line"
                    style={{ animation: 'flowDashes 1.2s linear infinite' }}
                  />
                  {/* 3. Admin -> Gateway */}
                  <path
                    id="pathAdminGateway"
                    d="M 115,181 C 158,181 158,125 195,125"
                    stroke="#ff7a1a"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="flow-dash-line"
                    style={{ animation: 'flowDashes 1.2s linear infinite' }}
                  />

                  {/* Right Connection Paths */}
                  {/* 4. Gateway -> Services */}
                  <path
                    id="pathGatewayServices"
                    d="M 325,95 C 362,95 362,39 405,39"
                    stroke="#ff7a1a"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="flow-dash-line"
                    style={{ animation: 'flowDashes 1.2s linear infinite' }}
                  />
                  {/* 5. Gateway -> Database */}
                  <path
                    id="pathGatewayDatabase"
                    d="M 325,110 L 405,110"
                    stroke="#ff7a1a"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="flow-dash-line"
                    style={{ animation: 'flowDashes 1.2s linear infinite' }}
                  />
                  {/* 6. Gateway -> Cloud */}
                  <path
                    id="pathGatewayCloud"
                    d="M 325,125 C 362,125 362,181 405,181"
                    stroke="#ff7a1a"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="flow-dash-line"
                    style={{ animation: 'flowDashes 1.2s linear infinite' }}
                  />

                  {/* ------------------------------------------- */}
                  {/* STAGGERED TRAVELING DATA PACKETS (CIRCLES) */}
                  {/* ------------------------------------------- */}
                  {!prefersReducedMotion && (
                    <>
                      {/* Packet 1: Web App -> Gateway */}
                      <circle r="3.2" fill="#ff4d00">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="0s"
                          path="M 115,39 C 158,39 158,95 195,95"
                        />
                      </circle>
                      <circle r="3.2" fill="#ff7a1a">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="1.1s"
                          path="M 115,39 C 158,39 158,95 195,95"
                        />
                      </circle>

                      {/* Packet 2: Mobile App -> Gateway */}
                      <circle r="3.2" fill="#ff4d00">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="0.4s"
                          path="M 115,110 L 195,110"
                        />
                      </circle>
                      <circle r="3.2" fill="#ff7a1a">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="1.5s"
                          path="M 115,110 L 195,110"
                        />
                      </circle>

                      {/* Packet 3: Admin -> Gateway */}
                      <circle r="3.2" fill="#ff4d00">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="0.8s"
                          path="M 115,181 C 158,181 158,125 195,125"
                        />
                      </circle>
                      <circle r="3.2" fill="#ff7a1a">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="1.9s"
                          path="M 115,181 C 158,181 158,125 195,125"
                        />
                      </circle>

                      {/* Packet 4: Gateway -> Services */}
                      <circle r="3.2" fill="#ff4d00">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="0.3s"
                          path="M 325,95 C 362,95 362,39 405,39"
                        />
                      </circle>
                      <circle r="3.2" fill="#ff7a1a">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="1.4s"
                          path="M 325,95 C 362,95 362,39 405,39"
                        />
                      </circle>

                      {/* Packet 5: Gateway -> Database */}
                      <circle r="3.2" fill="#ff4d00">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="0.7s"
                          path="M 325,110 L 405,110"
                        />
                      </circle>
                      <circle r="3.2" fill="#ff7a1a">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="1.8s"
                          path="M 325,110 L 405,110"
                        />
                      </circle>

                      {/* Packet 6: Gateway -> Cloud */}
                      <circle r="3.2" fill="#ff4d00">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="1.1s"
                          path="M 325,125 C 362,125 362,181 405,181"
                        />
                      </circle>
                      <circle r="3.2" fill="#ff7a1a">
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          begin="0.0s"
                          path="M 325,125 C 362,125 362,181 405,181"
                        />
                      </circle>
                    </>
                  )}

                  {/* ------------------------------------------- */}
                  {/* THREE CLIENT BOXES (LEFT SIDE) */}
                  {/* ------------------------------------------- */}
                  {/* 1. Web App */}
                  <g>
                    <rect
                      x="15"
                      y="20"
                      width="100"
                      height="38"
                      rx="8"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="1.4"
                    />
                    <circle cx="33" cy="39" r="8" fill="#fff4ed" />
                    <path
                      d="M29 36h8M29 39h5M29 42h8"
                      stroke="#ff7a1a"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <text
                      x="48"
                      y="43"
                      fill="#22150d"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="'Inter', sans-serif"
                    >
                      Web App
                    </text>
                  </g>

                  {/* 2. Mobile App */}
                  <g>
                    <rect
                      x="15"
                      y="91"
                      width="100"
                      height="38"
                      rx="8"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="1.4"
                    />
                    <circle cx="33" cy="110" r="8" fill="#fff4ed" />
                    <rect
                      x="30"
                      y="104"
                      width="6"
                      height="12"
                      rx="1.5"
                      stroke="#ff7a1a"
                      strokeWidth="1.2"
                    />
                    <text
                      x="48"
                      y="114"
                      fill="#22150d"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="'Inter', sans-serif"
                    >
                      Mobile App
                    </text>
                  </g>

                  {/* 3. Admin */}
                  <g>
                    <rect
                      x="15"
                      y="162"
                      width="100"
                      height="38"
                      rx="8"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="1.4"
                    />
                    <circle cx="33" cy="181" r="8" fill="#fff4ed" />
                    <path
                      d="M33 175l4 2v4c0 3-4 5-4 5s-4-2-4-5v-4l4-2z"
                      stroke="#ff7a1a"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <text
                      x="48"
                      y="185"
                      fill="#22150d"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="'Inter', sans-serif"
                    >
                      Admin
                    </text>
                  </g>

                  {/* ------------------------------------------- */}
                  {/* CENTRAL API GATEWAY BOX (PULSING BORDER) */}
                  {/* ------------------------------------------- */}
                  <g>
                    <rect
                      x="195"
                      y="75"
                      width="130"
                      height="70"
                      rx="10"
                      fill="url(#gatewayGradient)"
                      stroke="#ff7a1a"
                      strokeWidth="2"
                      filter="url(#gatewayGlow)"
                      style={{
                        animation: prefersReducedMotion
                          ? 'none'
                          : 'gatewayBorderPulse 3s ease-in-out infinite',
                      }}
                    />
                    {/* Gateway Inner Badge */}
                    <rect
                      x="207"
                      y="85"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#ff7a1a"
                    />
                    <path
                      d="M211 94h10M216 89v10M221 91l-2 3 2 3"
                      stroke="#ffffff"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text
                      x="232"
                      y="98"
                      fill="#22150d"
                      fontSize="12"
                      fontWeight="800"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      API Gateway
                    </text>
                    <text
                      x="207"
                      y="118"
                      fill="#6a5444"
                      fontSize="9.5"
                      fontWeight="600"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      v2.4 • Auth & Route
                    </text>
                    <circle cx="212" cy="132" r="3" fill="#10b981" />
                    <text
                      x="220"
                      y="134"
                      fill="#10b981"
                      fontSize="8.5"
                      fontWeight="700"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      ACTIVE CLUSTER
                    </text>
                  </g>

                  {/* ------------------------------------------- */}
                  {/* THREE DESTINATION BOXES (RIGHT SIDE) */}
                  {/* ------------------------------------------- */}
                  {/* 1. Services */}
                  <g>
                    <rect
                      x="405"
                      y="20"
                      width="100"
                      height="38"
                      rx="8"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="1.4"
                    />
                    <circle cx="423" cy="39" r="8" fill="#fff4ed" />
                    <path
                      d="M420 36l3-1.5 3 1.5v3l-3 1.5-3-1.5v-3z"
                      stroke="#ff7a1a"
                      strokeWidth="1.2"
                    />
                    <text
                      x="438"
                      y="43"
                      fill="#22150d"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="'Inter', sans-serif"
                    >
                      Services
                    </text>
                  </g>

                  {/* 2. Database */}
                  <g>
                    <rect
                      x="405"
                      y="91"
                      width="100"
                      height="38"
                      rx="8"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="1.4"
                    />
                    <circle cx="423" cy="110" r="8" fill="#fff4ed" />
                    <path
                      d="M420 106c0-1.2 1.8-2 3.5-2s3.5.8 3.5 2v8c0 1.2-1.8 2-3.5 2s-3.5-.8-3.5-2v-8z M420 110c0 1.2 1.8 2 3.5 2s3.5-.8 3.5-2"
                      stroke="#ff7a1a"
                      strokeWidth="1.2"
                    />
                    <text
                      x="438"
                      y="114"
                      fill="#22150d"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="'Inter', sans-serif"
                    >
                      Database
                    </text>
                  </g>

                  {/* 3. Cloud */}
                  <g>
                    <rect
                      x="405"
                      y="162"
                      width="100"
                      height="38"
                      rx="8"
                      fill="#ffffff"
                      stroke="#e2e8f0"
                      strokeWidth="1.4"
                    />
                    <circle cx="423" cy="181" r="8" fill="#fff4ed" />
                    <path
                      d="M420 184a2.5 2.5 0 01-1-4.8 3.5 3.5 0 016.5-1.5 3 3 0 012.5 4.3h-8z"
                      stroke="#ff7a1a"
                      strokeWidth="1.2"
                    />
                    <text
                      x="438"
                      y="185"
                      fill="#22150d"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="'Inter', sans-serif"
                    >
                      Cloud
                    </text>
                  </g>
                </svg>
              </div>

              {/* Three Mini Stat Tiles */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                {/* Tile 1: Requests / min */}
                <div className="bg-[#fff9f5] border border-[#ff7a1a]/15 rounded-xl p-2 sm:p-2.5 text-center">
                  <div className="text-[10px] sm:text-[11px] text-[#6a5444] font-medium truncate">
                    Requests / min
                  </div>
                  <div
                    className="mt-0.5 text-xs sm:text-sm lg:text-base font-bold text-[#22150d] tracking-tight"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {requestsPerMin.toLocaleString()}
                  </div>
                </div>

                {/* Tile 2: API uptime */}
                <div className="bg-[#fff9f5] border border-[#ff7a1a]/15 rounded-xl p-2 sm:p-2.5 text-center">
                  <div className="text-[10px] sm:text-[11px] text-[#6a5444] font-medium truncate">
                    API uptime
                  </div>
                  <div
                    className="mt-0.5 text-xs sm:text-sm lg:text-base font-bold text-emerald-600 tracking-tight"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {apiUptime}
                  </div>
                </div>

                {/* Tile 3: Deploys today */}
                <div className="bg-[#fff9f5] border border-[#ff7a1a]/15 rounded-xl p-2 sm:p-2.5 text-center">
                  <div className="text-[10px] sm:text-[11px] text-[#6a5444] font-medium truncate">
                    Deploys today
                  </div>
                  <div
                    className="mt-0.5 text-xs sm:text-sm lg:text-base font-bold text-[#22150d] tracking-tight"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {deploysToday}
                  </div>
                </div>
              </div>

              {/* Tiny Caption Bottom Right */}
              <div
                className="text-right text-[10px] text-[#6a5444] font-medium mt-2.5 pr-1 select-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Sample data for demo
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* FULL-WIDTH CENTERED FLOATING TECH ICONS ARC (PAGE SPAN) */}
      {/* ======================================================== */}
      <div
        className="mt-4 sm:mt-6 mb-0 w-full flex flex-col items-center justify-center relative z-20"
        style={{
          animation: prefersReducedMotion
            ? 'none'
            : 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 300ms forwards',
          opacity: prefersReducedMotion ? 1 : 0,
        }}
      >
        <TechIconsArc />
      </div>
    </section>
  );
};

export default ItHeroSection;
