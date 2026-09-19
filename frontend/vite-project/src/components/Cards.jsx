import React, { useState, useEffect } from "react";

export default function Cards({ services = [], onInquire }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const extendedServices = [
    ...services,
    ...services.slice(0, visibleCards),
  ];

  useEffect(() => {
    if (services.length <= visibleCards) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3500);
      
    return () => clearInterval(timer);
  }, [services.length, visibleCards]);
   
  const handleTransitionEnd = () => {
    if (currentIndex >= services.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div className="relative mt-12 w-full overflow-hidden">
      {/* Dynamic Sliding Track */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex  ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
        }}
      >
        {extendedServices.map((service, idx) => (
          <div
            key={`${service.id}-${idx}`}
            style={{ flex: `0 0 ${100 / visibleCards}%` }}
            className="px-2.5" // Gap flex box ki jagah padding se manage karein
          >
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E66E19]/40 hover:shadow-xl">
              {/* Top Orange Highlight */}
              <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-[#E66E19] to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute right-3 top-3 rounded-full bg-[#0B132A]/85 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                  {service.tag}
                </span>
              </div>

              {/* Content Details */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#E66E19]">
                    <span>SERVICES // {service.id}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-[#0B132A] transition-colors group-hover:text-[#E66E19]">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
                    {service.description}
                  </p>

                  {service.features?.length > 0 && (
                    <ul className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-700">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-1.5 truncate">
                          <span className="text-[#E66E19]">✓</span>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <button
                    onClick={() => onInquire?.(service)}
                    className="group/btn flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-xs font-bold text-[#0B132A] transition-all hover:bg-[#E66E19] hover:text-white"
                  >
                    <span>Inquire Service</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}