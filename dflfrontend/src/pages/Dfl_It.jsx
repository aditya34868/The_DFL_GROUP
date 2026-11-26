import React, { useRef, useEffect, useState } from 'react';
import ItHeroSection from '../components/ItHeroSection';
import DflItFutureReady from '../components/DflItFutureReady';
import RecommendedBrandsSection from '../components/RecommendedBrandsSection';
import DflItScrollShowcase from '../components/DflItScrollShowcase';
import OrbitAnimation from '../components/OrbitAnimation';
import DocumentSearchAnimation from '../components/DocumentSearchAnimation';
import DesignWorkspaceAnimation from '../components/DesignWorkspaceAnimation';
import AppDevAnimation from '../components/AppDevAnimation';
import CloudServerAnimation from '../components/CloudServerAnimation';
import video1 from "../assets/QB_March6_Final_ compressed.mp4";
import { itWorkflowSteps } from '../data/siteData';
import {
  FiZap,
  FiShield,
  FiCloud,
} from 'react-icons/fi';

const Dfl_It = () => {
  const processSectionRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const videoRef = useRef(null);

  // Ensure video autoplays continuously and smoothly in muted loop across all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  // Butter-smooth 60fps scroll tracking synchronized precisely from Node 1 to Node 5
  useEffect(() => {
    let rafId = null;

    const updateTimeline = () => {
      const n1 = nodeRefs.current[0];
      const n5 = nodeRefs.current[4];
      if (!n1 || !n5) return;

      const windowHeight = window.innerHeight;
      // Focal point in viewport where user reads the card (48% of screen)
      const focalPoint = windowHeight * 0.48;

      const n1Rect = n1.getBoundingClientRect();
      const n5Rect = n5.getBoundingClientRect();

      const n1Center = n1Rect.top + n1Rect.height / 2;
      const n5Center = n5Rect.top + n5Rect.height / 2;
      const totalDistance = n5Center - n1Center;

      if (totalDistance > 0) {
        const currentDistance = focalPoint - n1Center;
        const progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
        setScrollProgress(progress);
      }

      // Determine active step based on which node has crossed the focal threshold
      let currentStep = 1;
      nodeRefs.current.forEach((el, idx) => {
        if (el) {
          const elRect = el.getBoundingClientRect();
          const center = elRect.top + elRect.height / 2;
          if (center <= focalPoint + 40) {
            currentStep = idx + 1;
          }
        }
      });
      setActiveStep(currentStep);
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateTimeline();
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateTimeline();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToProcess = () => {
    processSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderStepAnimation = (id) => {
    switch (id) {
      case 1:
        return <OrbitAnimation scale={0.88} />;
      case 2:
        return <DocumentSearchAnimation scale={1.05} />;
      case 3:
        return <DesignWorkspaceAnimation scale={1.05} />;
      case 4:
        return <AppDevAnimation scale={1.05} />;
      case 5:
        return <CloudServerAnimation scale={1.05} />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white relative overflow-x-clip font-sans">

      {/* ======================================================== */}
      {/* 1. TOP HERO SECTION */}
      {/* ======================================================== */}
      <ItHeroSection scrollToProcess={scrollToProcess} />

      {/* ======================================================== */}
      {/* 2. VISION & CINEMATIC AUTOPLAY VIDEO (MUTED, NO BORDER, WITH SIDE GAPS) */}
      {/* ======================================================== */}

      <section className="relative z-10 w-full pt-4 sm:pt-6 pb-8 sm:pb-12 bg-white overflow-hidden">
        <style>{`
          @keyframes sheenFlow {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
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
            animation: sheenFlow 6s ease-in-out infinite;
          }
        `}</style>

        {/* Section Header Text */}
        <div className="mx-auto max-w-5xl px-6 sm:px-10 text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff8f3] text-[#c2540a] border border-[#ff7a1a]/30 shadow-xs mb-5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7a1a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7a1a]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              THE DFL IT MINDSET
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#22150d] tracking-tight leading-[1.2] max-w-4xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            At DFL, IT is More Than Technology — It’s an{' '}
            <span className="sheen-text inline-block">
              Innovation Mindset
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Inspiring breakthrough ideas, cultivating top engineering talent, and delivering transformative digital experiences across industries.
          </p>
        </div>

        {/* Video Container with Left/Right Gaps, Rounded Corners, Zero Border, Muted Autoplay Loop */}
        <div className="mx-auto max-w-7xl xl:max-w-[1600px] px-6 sm:px-10 lg:px-12">
          <div className="relative w-full aspect-video sm:aspect-[21/9] lg:min-h-[70vh] lg:max-h-[82vh] rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-2xl">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 3 Value Highlights Below Video */}
        <div className="mx-auto max-w-7xl xl:max-w-[1600px] px-6 sm:px-10 lg:px-12 mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
            <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-orange-100 text-[#E66E19] flex items-center justify-center shrink-0 font-bold">
                <FiZap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">Agile Engineering</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Rapid prototyping to production</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                <FiShield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">Enterprise Security</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Robust data protection & encryption</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                <FiCloud className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">Scalable Cloud</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">High-availability architecture</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. DFL IT CORE SERVICES - STICKY SPLIT-SCREEN SCROLL SHOWCASE */}
      {/* ======================================================== */}
      <DflItScrollShowcase />

      {/* ======================================================== */}
      {/* 4. "HOW IT WORKS" - 5 STEP ONBOARDING PROCESS */}
      {/* ======================================================== */}
      <section
        id="process"
        ref={processSectionRef}
        className="relative z-10 pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-24 lg:pb-28 bg-white border-t border-slate-100/80 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-orange-100 text-[#E66E19] border border-orange-200/80 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#E66E19] animate-ping" />
              HOW IT WORKS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              What happens when you <span className="text-[#E66E19]">come onboard</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
              The DFL Group delivers cutting-edge IT solutions tailored to modern business needs, including custom full-stack web development, enterprise CRM and HRMS platforms, UI/UX design, and scalable cloud architecture. We empower organizations to streamline operations and accelerate growth through reliable digital transformation.
            </p>
          </div>

          {/* 5 Step Cards with Scroll-Tracking Interactive Timeline (1, 2, 3, 4, 5) */}
          <div ref={stepsContainerRef} className="relative mt-14 sm:mt-20 max-w-5xl xl:max-w-6xl mx-auto">

            {/* The Continuous Vertical Background Track Line */}
            <div className="absolute left-[16px] sm:left-[18px] top-[28px] sm:top-[32px] bottom-[28px] sm:bottom-[32px] w-[2px] bg-slate-200 -translate-x-1/2 rounded-full" />

            {/* The Animated Orange Scroll Progress Line (GPU-accelerated scaleY, 60fps butter-smooth) */}
            <div
              className="absolute left-[16px] sm:left-[18px] top-[28px] sm:top-[32px] bottom-[28px] sm:bottom-[32px] w-[2px] bg-[#E66E19] -translate-x-1/2 rounded-full shadow-xs shadow-orange-500/20 pointer-events-none"
              style={{
                transformOrigin: 'top',
                transform: `scaleY(${scrollProgress})`,
                willChange: 'transform',
              }}
            />

            {/* Steps List with Spacious Gaps (Like in reference video) */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {itWorkflowSteps.map((step, index) => {
                const isActive = activeStep >= step.id;
                const isCurrent = activeStep === step.id;

                return (
                  <div
                    key={step.id}
                    className="relative flex items-start gap-3 sm:gap-6 lg:gap-8"
                  >
                    {/* Left Timeline Node (1, 2, 3, 4, 5) - Sleek, Professional & Refined */}
                    <div className="relative z-10 shrink-0 pt-2 sm:pt-3">
                      <div
                        ref={(el) => (nodeRefs.current[index] = el)}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-[13px] font-black select-none transition-all duration-300 ${isActive
                          ? 'bg-[#E66E19] text-white shadow-sm shadow-orange-500/25 ring-[3px] ring-orange-100 border border-white'
                          : 'bg-white text-slate-400 border border-slate-200 shadow-2xs'
                          } ${isCurrent ? 'scale-105' : 'scale-100'}`}
                      >
                        <span>{step.id}</span>
                      </div>
                    </div>

                    {/* Step Card with Bold Typography & Spacious Padding */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`group relative rounded-3xl overflow-hidden transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-xl ${isCurrent
                          ? 'border border-[#E66E19] ring-2 ring-[#E66E19]/40 shadow-2xl shadow-orange-500/15'
                          : 'border border-slate-700/60 hover:border-[#E66E19]/60 hover:shadow-2xl hover:shadow-black/30'
                          }`}
                        style={{
                          background: 'linear-gradient(135deg, #0B132A 0%, #0E1A38 52%, #2A1507 100%)',
                        }}
                      >
                        {/* Ambient Orange & Deep Navy Glow Lights inside Card */}
                        <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#E66E19]/15 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 right-1/4 w-52 h-52 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute top-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

                          {/* Left Column: Bold Text Content */}
                          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center order-2 lg:order-1">

                            {/* Step Tagline / Eyebrow */}
                            <div className="flex flex-wrap items-center gap-2 mb-2.5">
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#E66E19]/20 text-[#FF8533] border border-[#E66E19]/40 shadow-xs">
                                {step.step}
                              </span>
                              <span className="text-xs text-slate-500 font-bold">•</span>
                              <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                                {step.tagline}
                              </span>
                            </div>

                            {/* Step Title (Bold typography) */}
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight group-hover:text-[#FF8533] transition-colors duration-200">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2.5 text-xs sm:text-sm lg:text-[15px] text-slate-300 font-normal leading-relaxed">
                              {step.description}
                            </p>

                            {/* Highlights in 2x2 grid with bold styling */}
                            <div className="mt-5 sm:mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                              {step.highlights.map((item, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3 py-2 rounded-xl transition-all duration-200 group-hover:border-[#E66E19]/40"
                                >
                                  <span className="h-5 w-5 rounded-full bg-[#E66E19]/25 text-[#FF8533] border border-[#E66E19]/40 flex items-center justify-center text-[10px] shrink-0 font-black shadow-xs">
                                    ✓
                                  </span>
                                  <span className="truncate">{item}</span>
                                </div>
                              ))}
                            </div>

                          </div>

                          {/* Right Column: Animation Canvas */}
                          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center order-1 lg:order-2 min-h-[220px] sm:min-h-[250px]">
                            <div className="w-full h-full flex items-center justify-center scale-90 sm:scale-100 origin-center transition-transform duration-300">
                              {renderStepAnimation(step.id)}
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. BRANDS THAT DFL GOT RECOMMENDED                      */}
      {/* ======================================================== */}
      <RecommendedBrandsSection />

      {/* ======================================================== */}
      {/* 6. DFL IT FUTURE-READY INTERACTIVE LOGO FINALE          */}
      {/* ======================================================== */}
      <DflItFutureReady />

    </div>
  );
};

export default Dfl_It;
