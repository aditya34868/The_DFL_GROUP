import React, { useRef } from 'react'
import InteractiveLogo from '../components/InteractiveLogo'

const Dfl_It = () => {
  const contactBtnRef = useRef(null);

  return (
    <div className="pt-20 min-h-screen bg-white relative overflow-hidden">
      
      {/* ======================================================== */}
      {/* BACKGROUND INTERACTIVE CANVAS */}
      {/* Particles start exactly at the right side of Contact Us button */}
      {/* Logo forms right on the right side where it was forming */}
      {/* ======================================================== */}
      <div className="absolute inset-0 top-20 w-full h-[calc(100vh-5rem)] pointer-events-auto">
        <InteractiveLogo
          align="right"
          maxSize={1400}
          originRef={contactBtnRef}
        />
      </div>

      {/* ======================================================== */}
      {/* FOREGROUND HERO CONTENT (Left text area) */}
      {/* ======================================================== */}
      <main className="relative z-10 mx-auto max-w-7xl xl:max-w-[1600px] px-6 sm:px-10 lg:px-12 min-h-[calc(100vh-5rem)] flex items-center pointer-events-none">
        
        {/* LEFT SECTION: Yahan aap apna Text / Content likh sakte hain */}
        <div className="w-full lg:w-1/2 pointer-events-auto py-12 flex flex-col justify-center">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-orange-100 text-[#E66E19] border border-orange-200/80 w-fit mb-5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E66E19] animate-pulse" />
            DFL IT Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Next-Gen <span className="text-[#E66E19]">Tech-Driven</span> Logistics
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
            Empowering modern supply chains with cutting-edge IT infrastructure, real-time analytics, and automated tracking systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="px-7 py-3.5 rounded-2xl bg-[#E66E19] hover:bg-[#d05f12] text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Explore Services
            </button>
            <button
              ref={contactBtnRef}
              className="px-7 py-3.5 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Contact Us
            </button>
          </div>

        </div>

      </main>

    </div>
  )
}

export default Dfl_It
