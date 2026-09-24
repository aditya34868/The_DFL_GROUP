import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Cards({ services = [], onInquire }) {
  const cardRefs = useRef([]);
  const [scales, setScales] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const newScales = {};
      cardRefs.current.forEach((el, i) => {
        const nextEl = cardRefs.current[i + 1];
        if (nextEl) {
          const nextTop = nextEl.getBoundingClientRect().top;
          const offset = 80 + (i + 1) * 40;
          const dist = nextTop - offset;
          // Scale 1 se reduce hokar 0.93 hoga jab next card touch karega
          const scale = dist < 250 ? Math.max(0.85, 0.85 + (dist / 250) * 0.07) : 1;
          newScales[i] = scale;
        }
      });
      setScales(newScales);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services.length]);

  return (
    <div className="relative my-8 w-full pb-24">
      {services.map((service, index) => {
        const tabOffset = 80 + index * 40;
        const scale = scales[index] ?? 1;

        return (
          <div
            key={service.id || index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="sticky my-4 origin-top transition-transform duration-100 ease-out"
            style={{
              top: `${tabOffset}px`,
              zIndex: index + 1,
              transform: `scale(${scale})`,
            }}
          >
            {/* Card Main Container with Solid White Background */}
            <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem]  bg-white shadow-2xl">
              
              {/* Header Tab */}
              <div className="flex items-center justify-between  bg-white px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-black text-slate-800">
                    {index + 1}/{services.length || 4}
                  </span>
                  <h4 className="text-xs font-extrabold uppercase text-slate-900 md:text-sm">
                    {service.name}
                  </h4>
                </div>
                {service.tag && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[11px] font-bold text-slate-700">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 lg:p-10 bg-white">
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                  
                  {/* Left Content */}
                  <div className="flex-1 pr-0 md:pr-8">
                    <h3 className="text-2xl font-black text-[#0B132A] hover:text-[#E66E19] md:text-3xl">
                      <Link to={service.path || "#"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        {service.name}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 md:text-base">
                      {service.description}
                    </p>

                    {service.features?.length > 0 && (
                      <ul className="mt-5 grid grid-cols-1 gap-2 text-xs font-bold text-slate-700 sm:grid-cols-2 md:text-sm">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E66E19]/10 text-[10px] font-black text-[#E66E19]">✓</span>
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        to={service.path || "#"}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="rounded-xl bg-[#0B132A] px-6 py-3 text-xs font-bold text-white hover:bg-[#E66E19] md:text-sm"
                      >
                        Explore Service →
                      </Link>
                      <button
                        onClick={() => onInquire && onInquire(service)}
                        className="rounded-xl bg-slate-100 px-5 py-3 text-xs font-bold text-[#0B132A] hover:bg-slate-200 md:text-sm"
                      >
                        Get Instant Quote
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  {service.image && (
                    <div className="mt-6 h-56 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 md:mt-0 md:h-64 md:w-72 lg:w-80">
                      <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}