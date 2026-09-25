import React from "react";
import { useTalkModal } from "../context/TalkModalContext";
import { keyAdvantages, transportModes, routingOptions } from "../data/siteData";
import { 
  FiTruck, 
  FiBox, 
  FiCheckCircle, 
  FiArrowRight, 
  FiChevronRight, 
  FiPhoneCall,
  FiShield 
} from "react-icons/fi";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    alt: "Highway Logistics Truck",
    label: "Highway Freight Transit",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    alt: "Warehouse Loading Terminal",
    label: "Smart Hub Consignment",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    alt: "Fleet Transportation",
    label: "Nationwide Express Fleet",
  },
];

export default function InlandTransport() {

     const homepage = () => {
    window.location.href = "https://thedflexpress.in/";
  };
  const {openModal} = useTalkModal();

  return (
    <div className="relative overflow-hidden min-h-screen bg-white text-slate-800 px-6 py-16 md:px-8 pt-24 font-sans">

      {/* BACKGROUND ANIMATED GLOW BLOBS */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-orange-50/80 blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* HERO SECTION */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-orange-100/80 border border-orange-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#E66E19] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
            </span>
            Surface Transport Services
          </span>

          <h1 className="mt-6 text-3xl font-black text-slate-900 md:text-5xl leading-tight tracking-tight">
            Elevate Your Logistics Operations with Expert <span className="text-[#E66E19]">Inland Transport</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
            Road transport is the heartbeat of inland logistics, offering unmatched flexibility and nationwide connectivity. At <strong className="text-slate-900">The DFL Group</strong>, we deliver robust, door-to-door surface transport solutions.
          </p>

          {/* LIVE ROUTE INDICATOR (SCANNING BAR RESTORED) */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-1">
              <span>Consignment Hub</span>
              <span className="text-[#E66E19] flex items-center gap-1 font-extrabold">
                <FiTruck className="inline h-3.5 w-3.5 animate-bounce" /> Active Route
              </span>
              <span>Destination Terminal</span>
            </div>
            
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200">
              <div className="absolute top-1 bottom-0 w-1/4 h-2 animate-scan rounded-full bg-gradient-to-r from-orange-400 via-[#E66E19] to-amber-500 shadow-md shadow-orange-500/50" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={homepage}
              className="group flex items-center gap-2.5 rounded-full bg-[#E66E19] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#d55f0f] hover:shadow-orange-500/35 active:scale-95"
            >
              <span>Book Consignment</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button 
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 active:scale-95" onClick={openModal}
            >
              <FiPhoneCall className="h-4 w-4 text-[#E66E19]" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>

        {/* IMAGE GALLERY BANNER */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-slate-200 shadow-xl grid grid-cols-1 md:grid-cols-3">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="relative h-64 group overflow-hidden border-b md:border-b-0 md:border-r last:border-0 border-slate-200">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-bold bg-black/40 px-3.5 py-1.5 rounded-lg backdrop-blur-md border border-white/20">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* OVERVIEW SECTION */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Inland Advantage
            </span>
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              Why Road Transport is Essential for Modern Business
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
              Road transport allows goods to be moved seamlessly across land using extensive highway networks. This mode offers unmatched flexibility with minimal geographical restrictions.
            </p>
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
              Whether dispatching small consignments or heavy industrial materials, road freight provides direct access to locations where rail, sea, or air freight cannot directly reach.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                <div className="text-2xl font-black text-[#E66E19]">100%</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Door-to-Door Access</div>
              </div>
              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                <div className="text-2xl font-black text-[#E66E19]">24/7</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">On-Demand Dispatch</div>
              </div>
            </div>
          </div>

          <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1000&q=80" 
              alt="Cargo Logistics Road Network" 
              className="w-full h-80 md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-100 text-[#E66E19] shrink-0">
                <FiBox className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">FTL & LTL Optimization</h4>
                <p className="text-xs text-slate-600 font-medium">Custom load-balancing for every shipment scale</p>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSPORT MODES SECTION */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Flexible Capacity
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">
              Tailored Road Transport Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportModes.map((mode, index) => (
              <div 
                key={index} 
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[#E66E19] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-100 text-[#E66E19] text-xs font-bold px-3 py-1">
                    {mode.badge}
                  </span>
                  <FiTruck className="h-5 w-5 text-slate-400 group-hover:text-[#E66E19] transition-colors" />
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">{mode.title}</h3>
                <p className="text-xs font-bold text-[#E66E19] uppercase tracking-wider mt-0.5">{mode.subtitle}</p>
                <p className="mt-3 text-xs md:text-sm text-slate-600 font-medium leading-relaxed">{mode.description}</p>

                <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-100">
                  {mode.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-slate-700">
                      <FiCheckCircle className="h-4 w-4 text-[#E66E19] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* KEY ADVANTAGES SECTION */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Core Features
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">
              Key Advantages of Road Freight
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAdvantages.map((adv, idx) => {
              const IconComponent = adv.icon;
              return (
                <div 
                  key={idx} 
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#E66E19] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#E66E19] border border-orange-100 group-hover:bg-[#E66E19] group-hover:text-white transition-colors">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{adv.title}</h3>
                  <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHY US CTA SECTION */}
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#E66E19]/10 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="rounded-full bg-orange-500/20 border border-orange-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
                Why The DFL Group?
              </span>
              <h2 className="text-2xl font-black md:text-3xl leading-tight">
                Seamless & Simplified Road Transport Logistics
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                The DFL Group provides seamless, door-to-door road transport services, simplifying the entire supply chain process for our customers.
              </p>

              <div className="space-y-3 pt-2">
                {routingOptions.map((opt, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-1.5 rounded-lg bg-[#E66E19] text-white shrink-0 mt-0.5">
                      <FiChevronRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs md:text-sm">{opt.title}</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Fleet Management" 
                className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center p-6 text-center">
                <div className="bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm shadow-2xl">
                  <FiShield className="h-8 w-8 text-[#E66E19] mx-auto mb-2 animate-pulse" />
                  <h3 className="text-sm font-bold text-white">Verified Fleet & Driver Standards</h3>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    Eliminate the need for multiple local transport providers with DFL’s unified nationwide network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}