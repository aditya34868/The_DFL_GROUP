import React, { useState, useEffect, useRef } from 'react';
import { dflItShowcaseData } from '../data/siteData';

/**
 * DflItScrollShowcase
 * Standalone Sticky Split-Screen Scroll Showcase component for DFL IT.
 * Features an IntersectionObserver-driven left text column with an ultra-smooth
 * position:sticky visual stage on the right, displaying live active service capabilities.
 */
const DflItScrollShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef([]);

  // Track the centered block in viewport using IntersectionObserver
  useEffect(() => {
    const observers = [];

    blockRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          rootMargin: '-35% 0px -35% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const activeData = dflItShowcaseData[activeIndex] || dflItShowcaseData[0];
  const progressPercent = ((activeIndex + 1) / dflItShowcaseData.length) * 100;

  return (
    <section
      aria-label="DFL IT Capabilities & Solutions Showcase"
      className="relative z-10 w-full bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 pt-4 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12">
        {/* 2-Column Grid: Left Scroll Text | Right Sticky Visual Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: SCROLLABLE SERVICE BLOCKS (col-span-6)      */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col">
            {dflItShowcaseData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  ref={(el) => (blockRefs.current[index] = el)}
                  className={`lg:min-h-[80vh] flex flex-col justify-center ${
                    index === 0
                      ? 'pt-2 sm:pt-4 lg:pt-0 pb-12 lg:pb-16'
                      : 'py-12 lg:py-16'
                  } transition-opacity duration-500 ease-out ${
                    isActive ? 'lg:opacity-100' : 'lg:opacity-35'
                  }`}
                >
                  {/* Monospace Step Counter & Tag */}
                  <div className="flex items-center gap-3 font-mono text-xs sm:text-sm font-semibold tracking-widest text-neutral-400 uppercase mb-3">
                    <span className="text-neutral-500">{item.step}</span>
                    <span className="h-px w-6 bg-neutral-300 inline-block" />
                    <span className="text-[11px] sm:text-xs font-bold text-[#E66E19] tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bold Dark Heading */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-neutral-900 tracking-tight leading-[1.15]">
                    {item.title}
                  </h3>

                  {/* Paragraph Description */}
                  <p className="text-neutral-600 mt-4 max-w-xl text-base sm:text-lg leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* 2-Column Feature List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-neutral-200/70">
                    {item.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="group flex items-center gap-3 text-sm sm:text-[15px] font-medium text-neutral-700 transition-colors duration-200 hover:text-[#E66E19] cursor-default"
                      >
                        {/* Glowing Orange Accent Dot */}
                        <span className="w-2 h-2 rounded-full bg-[#E66E19] shrink-0 shadow-[0_0_8px_rgba(230,110,25,0.6)] group-hover:scale-125 transition-transform duration-200" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile / Tablet Inlined Visual Stage (< lg only) */}
                  <div className="block lg:hidden mt-8">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: STICKY VISUAL STAGE (col-span-6, lg+ only) */}
          {/* ======================================================== */}
          <div className="hidden lg:flex lg:col-span-6 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] flex-col justify-between py-2">
            
            {/* Visual Stage - Clean Image Only (No borders, frames, or overlays) */}
            <div className="relative flex-1 w-full rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center">
              {dflItShowcaseData.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto z-10'
                        : 'opacity-0 scale-95 translate-y-6 pointer-events-none z-0'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Status & Progress Bar */}
            <div className="mt-6 pt-5 border-t border-neutral-200/80 flex items-center justify-between text-xs sm:text-sm font-mono text-neutral-500 select-none">
              {/* Active Step */}
              <span className="font-semibold text-neutral-700 shrink-0">
                {activeData.step}
              </span>

              {/* Glowing Orange Progress Bar */}
              <div className="flex-1 mx-4 sm:mx-6 h-1.5 bg-neutral-200/80 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E66E19] rounded-full transition-all duration-500 ease-out shadow-[0_0_6px_rgba(230,110,25,0.4)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Active Tag */}
              <span className="font-bold text-neutral-800 tracking-wider uppercase text-[11px] sm:text-xs shrink-0">
                {activeData.tag}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DflItScrollShowcase;
