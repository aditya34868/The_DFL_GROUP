import React, { useState } from "react";
import { keyAdvantages, transportModes, routingOptions } from "../data/siteData";
import { 
  FiTruck as IconTruck, 
  FiMapPin as IconMapPin, 
  FiNavigation as IconNavigation, 
  FiShield as IconShield, 
  FiBox as IconBox, 
  FiCheckCircle as IconCheckCircle, 
  FiArrowRight as IconArrowRight, 
  FiGlobe as IconGlobe, 
  FiTrendingUp as IconTrendingUp, 
  FiChevronRight as IconChevronRight, 
  FiPhoneCall as IconPhoneCall 
} from "react-icons/fi";

export default function InlandTransport() {
  const [activeMode, setActiveMode] = useState("FTL");

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden px-6 py-20 md:px-8 pt-28 font-sans">
      
      {/* BACKGROUND FLOATING GLOW ELEMENTS */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-amber-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* HERO HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-orange-100/80 border border-orange-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#E66E19] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
            </span>
            Surface Transport Services
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl leading-tight font-display">
            Elevate Your Logistics Operations with Expert <span className="text-[#E66E19]">Inland Transport</span>
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 font-medium">
            Road transport is the heartbeat of inland logistics, offering unmatched flexibility and nationwide connectivity. At <strong className="text-slate-900 font-bold">The DFL Group</strong>, we deliver robust, door-to-door surface transport solutions tailored to your supply chain demands.
          </p>

          {/* LIVE ROUTE INDICATOR */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 px-1">
              <span>Consignment Hub</span>
              <span className="text-[#E66E19] flex items-center gap-1">
                <IconTruck className="inline h-3.5 w-3.5" /> Active Route
              </span>
              <span>Destination Terminal</span>
            </div>
            
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200">
              <div className="absolute top-0 h-full w-16 rounded-full bg-gradient-to-r from-orange-400 via-[#E66E19] to-amber-500 shadow-md shadow-orange-500/50" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="group flex items-center gap-2.5 rounded-full bg-[#E66E19] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#d55f0f] hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0">
              <span>Book Consignment</span>
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-400">
              <IconPhoneCall className="h-4 w-4 text-[#E66E19]" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>

        {/* IMAGE GALLERY BANNER */}
        <div className="mb-24 relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="relative h-64 md:h-96 group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" 
                alt="Highway Logistics Truck" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm tracking-wide bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  Highway Freight Transit
                </span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 group overflow-hidden border-t md:border-t-0 md:border-l border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                alt="Warehouse Loading Terminal" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm tracking-wide bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  Smart Hub Consignment
                </span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 group overflow-hidden border-t md:border-t-0 md:border-l border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" 
                alt="Fleet Transportation" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm tracking-wide bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  Nationwide Express Fleet
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* OVERVIEW SECTION */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Inland Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl font-display leading-tight">
              Why Road Transport is Essential for Modern Business
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Road transport is a vital component of inland logistics, allowing goods to be moved seamlessly across land using extensive highway networks. This mode offers unmatched flexibility with minimal geographical restrictions.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Whether you are dispatching urgent small consignments or heavy industrial raw materials, road freight provides direct access to locations where rail, sea, or air freight cannot directly reach.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                <div className="text-2xl font-black text-[#E66E19] font-display">100%</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Door-to-Door Access</div>
              </div>
              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                <div className="text-2xl font-black text-[#E66E19] font-display">24/7</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">On-Demand Dispatch</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1000&q=80" 
                alt="Cargo Logistics Road Network" 
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-8 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-100 text-[#E66E19]">
                      <IconBox className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 font-display">FTL & LTL Optimization</h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">Custom load-balancing for every shipment scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSPORT MODES SECTION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Flexible Capacity
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl font-display">
              Tailored Road Transport Options
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-medium max-w-xl mx-auto">
              Choose between full vehicle dedication or shared space options to maximize budget efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportModes.map((mode, index) => (
              <div 
                key={index}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-[#E66E19] group"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-100 text-[#E66E19] text-xs font-bold px-3 py-1">
                    {mode.badge}
                  </span>
                  <IconTruck className="h-6 w-6 text-slate-400 group-hover:text-[#E66E19] transition-colors" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900 font-display">{mode.title}</h3>
                <p className="text-xs font-bold text-[#E66E19] uppercase tracking-wider mt-1">{mode.subtitle}</p>
                
                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">
                  {mode.description}
                </p>

                <ul className="mt-6 space-y-3 pt-6 border-t border-slate-100">
                  {mode.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <IconCheckCircle className="h-4 w-4 text-[#E66E19] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* KEY ADVANTAGES SECTION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Core Features
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl font-display">
              Key Advantages of Road Freight
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAdvantages.map((adv, idx) => {
              const IconComponent = adv.icon;
              return (
                <div 
                  key={idx}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E66E19] hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#E66E19] border border-orange-100 transition-all duration-300 group-hover:bg-[#E66E19] group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900 font-display group-hover:text-[#E66E19] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROUTING OPTIONS / WHY US CTA SECTION */}
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-gradient-to-bl from-orange-500/20 to-transparent blur-3xl rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="rounded-full bg-orange-500/20 border border-orange-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
                Why The DFL Group?
              </span>
              <h2 className="text-3xl font-black md:text-4xl leading-tight font-display text-white">
                Seamless & Simplified Road Transport Logistics
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                The DFL Group provides seamless, door-to-door road transport services, simplifying the entire supply chain process for our customers. Our state-of-the-art platform allows you to book pick-ups and drop-offs effortlessly.
              </p>

              <div className="space-y-4 pt-2">
                {routingOptions.map((opt, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-[#E66E19] text-white shrink-0 mt-0.5">
                      <IconChevronRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">{opt.title}</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Fleet Logistics Management" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-6 text-center">
                  <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 max-w-sm">
                    <IconShield className="h-10 w-10 text-[#E66E19] mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white font-display">Verified Fleet & Driver Standards</h3>
                    <p className="text-xs text-slate-300 mt-2 font-medium">
                      Eliminate the need for multiple local transport providers with DFL’s unified nationwide service network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}