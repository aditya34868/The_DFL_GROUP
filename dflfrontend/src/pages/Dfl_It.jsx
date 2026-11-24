import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTalkModal } from '../context/TalkModalContext';
import InteractiveLogo from '../components/InteractiveLogo';
import OrbitAnimation from '../components/OrbitAnimation';
import DocumentSearchAnimation from '../components/DocumentSearchAnimation';
import DesignWorkspaceAnimation from '../components/DesignWorkspaceAnimation';
import AppDevAnimation from '../components/AppDevAnimation';
import CloudServerAnimation from '../components/CloudServerAnimation';
import video1 from "../assets/QB_March6_Final_ compressed.mp4";
import { itWorkflowSteps } from '../data/siteData';
import {
  FiArrowRight,
  FiZap,
  FiShield,
  FiCloud,
} from 'react-icons/fi';

const Dfl_It = () => {
  const contactBtnRef = useRef(null);
  const processSectionRef = useRef(null);
  const videoRef = useRef(null);
  const { openModal } = useTalkModal();

  // Ensure video autoplays continuously and smoothly in muted loop across all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
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
    <div className="pt-20 min-h-screen bg-white relative overflow-hidden font-sans">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION WITH INTERACTIVE LOGO CANVAS */}
      {/* ======================================================== */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center">
        {/* Background Interactive Canvas */}
        <div className="absolute inset-0 top-0 w-full h-full pointer-events-auto">
          <InteractiveLogo
            align="right"
            maxSize={1400}
            originRef={contactBtnRef}
          />
        </div>

        {/* Foreground Content */}
        <main className="relative z-10 mx-auto max-w-7xl xl:max-w-[1600px] px-6 sm:px-10 lg:px-12 w-full py-12 flex items-center pointer-events-none">
          <div className="w-full lg:w-1/2 pointer-events-auto py-12 flex flex-col justify-center">
            
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-orange-100 text-[#E66E19] border border-orange-200/80 w-fit mb-5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#E66E19] animate-pulse" />
              DFL IT Solutions
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Next-Gen <span className="text-[#E66E19]">Tech-Driven</span> Logistics & Software
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
              Empowering modern supply chains and digital enterprises with cutting-edge IT infrastructure, custom software engineering, and seamless digital transformation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProcess}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#E66E19] hover:bg-[#d05f12] text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Process</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contactUs"
                ref={contactBtnRef}
                className="px-7 py-3.5 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </main>
      </section>

      {/* ======================================================== */}
      {/* 2. VISION & CINEMATIC AUTOPLAY VIDEO (MUTED, NO BORDER, WITH SIDE GAPS) */}
      {/* ======================================================== */}
      <section className="relative z-10 w-full pt-20 sm:pt-28 pb-16 sm:pb-24 bg-white overflow-hidden">
        
        {/* Section Header Text */}
        <div className="mx-auto max-w-5xl px-6 sm:px-10 text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-orange-100 text-[#E66E19] border border-orange-200/80 mb-5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E66E19] animate-pulse" />
            The DFL IT Mindset
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.25]">
            At DFL, IT is more than technology — it’s a{" "}
            <span className="text-[#E66E19]">mindset</span> that inspires innovation, cultivates talent, and drives transformative experiences for clients across industries.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Watch how our cross-functional technology teams turn complex enterprise challenges into intuitive, high-velocity digital solutions.
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
      {/* 3. "HOW IT WORKS" - 5 STEP ONBOARDING PROCESS */}
      {/* ======================================================== */}
      <section
        ref={processSectionRef}
        className="relative z-10 py-20 sm:py-28 lg:py-32 bg-slate-50/70 border-t border-slate-200/70 overflow-hidden"
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

          {/* 5 Step Cards (Compact size & minimal top/bottom padding) */}
          <div className="mt-12 sm:mt-16 max-w-5xl xl:max-w-6xl mx-auto space-y-5 sm:space-y-6">
            {itWorkflowSteps.map((step) => (
              <div
                key={step.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 py-5 px-5 sm:py-6 sm:px-8 lg:py-6 lg:px-9 shadow-sm hover:shadow-xl hover:border-[#E66E19]/60 transition-all duration-300 min-h-[290px] sm:min-h-[310px] lg:min-h-[300px] flex flex-col justify-center overflow-hidden"
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full my-auto">
                  
                  {/* Left Column: Text Content */}
                  <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center order-2 lg:order-1">
                    
                    {/* Badge and Tagline */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-100 text-[#E66E19] border border-orange-200 shadow-xs">
                        {step.step}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {step.tagline}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#E66E19] transition-colors duration-200">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-1.5 text-xs sm:text-[13px] lg:text-sm text-slate-600 font-medium leading-relaxed">
                      {step.description}
                    </p>

                    {/* Highlights bullet chips */}
                    <div className="mt-3.5 pt-3.5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg"
                        >
                          <span className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] shrink-0 font-black">
                            ✓
                          </span>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Animation Canvas (Uniform across all cards) */}
                  <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center order-1 lg:order-2 h-[250px] sm:h-[260px] lg:h-[265px]">
                    <div className="w-full h-full flex items-center justify-center scale-90 sm:scale-100 origin-center transition-transform duration-300">
                      {renderStepAnimation(step.id)}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Interactive CTA Card */}
          <div className="mt-16 sm:mt-20 max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-700">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E66E19]">
                  Ready to Build Something Extraordinary?
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                  Let’s Turn Your Digital Ideas Into Reality
                </h3>
                <p className="text-sm text-slate-300 font-medium">
                  Connect with our lead architects and engineers to kickstart your customized digital solution.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
                <button
                  onClick={openModal}
                  className="px-7 py-4 rounded-xl bg-[#E66E19] hover:bg-[#d05f12] text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Schedule a Consultation
                </button>
                <Link
                  to="/contactUs"
                  className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Contact DFL IT
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Dfl_It;
