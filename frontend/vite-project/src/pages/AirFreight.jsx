import React from "react";
import { FaPlane } from "react-icons/fa";
import {
  AirFreightkeyAdvantages,
  endToEndServices,
  visionHighlights,
  galleryImages,
} from "../data/siteData";

import {
  FiCheckCircle,
  FiArrowRight,
  FiChevronRight,
  FiPhoneCall,
  FiZap,
} from "react-icons/fi";

const badgeClass =
  "rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]";

export default function AirFreight() {
  return (
    <div className="relative overflow-hidden bg-white  px-6 py-20 md:px-10 md:py-28">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* HERO HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className={`${badgeClass} inline-flex items-center gap-2.5 shadow-sm`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
            </span>
            Air Freight Forwarding Services
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl leading-tight">
            Discover Quickest & Most Reliable <span className="text-[#E66E19]">Air Freight Solutions</span>
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 font-medium">
            Discover the quickest and most reliable air freight solutions with <strong className="text-slate-900 font-bold">The DFL Group</strong>. Air freight offers unmatched speed, global accessibility, and supreme reliability.
          </p>

          {/* FLIGHT PATH INDICATOR */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 px-1">
              <span>Origin Terminal</span>
              <span className="text-[#E66E19] flex items-center gap-1">
                <FaPlane className="h-3.5 w-3.5 rotate-45" /> Live Route
              </span>
              <span>Destination Terminal</span>
            </div>
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200">
              <div className="absolute top-0 h-full w-24 rounded-full bg-gradient-to-r from-orange-400 via-[#E66E19] to-amber-500 shadow-md shadow-orange-500/50" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="group flex items-center gap-2.5 rounded-full bg-[#E66E19] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#d55f0f] hover:shadow-orange-500/35 hover:-translate-y-0.5 cursor-pointer">
              <span>Book Air Shipment</span>
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 cursor-pointer">
              <FiPhoneCall className="h-4 w-4 text-[#E66E19]" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>

        {/* IMAGE GALLERY BANNER */}
        <div className="mb-24 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl grid grid-cols-1 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div key={i} className={`relative h-64 md:h-96 group overflow-hidden ${i > 0 ? "border-t md:border-t-0 md:border-l border-white/20" : ""}`}>
              <img src={img.src} alt={img.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent p-6 flex items-end">
                <span className="text-white font-bold text-sm bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* OVERVIEW SECTION */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className={badgeClass}>Air Freight Superiority</span>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl leading-tight">Speed, Accessibility, & Unmatched Reliability</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Air freight significantly reduces delivery times, making it the preferred choice for urgent global shipments, perishable items, and high-value cargo. It contributes to <strong>35% of global trade by value</strong>.
            </p>

            <div className="pt-2 grid grid-cols-3 gap-4">
              {[
                { value: "35%", label: "Global Trade Value" },
                { value: "100%", label: "Digital Paperwork" },
                { value: "24/7", label: "Airport Hub Ops" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                  <div className="text-2xl font-black text-[#E66E19]">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" alt="Air Cargo Forwarding" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent p-8 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-100 text-[#E66E19]"><FaPlane className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">Multi-Airline Global Network</h4>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">Optimized routes and direct flights to reduce total transit time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className={badgeClass}>Domestic & International Solutions</span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">The DFL Group as Your Air Freight Forwarder</h2>
            <p className="mt-2 text-sm text-slate-600 font-medium max-w-2xl mx-auto">We offer a complete suite of domestic and international air freight forwarding services tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {endToEndServices.map((service, index) => (
              <div key={index} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-[#E66E19] group">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-100 text-[#E66E19] text-xs font-bold px-3 py-1">{service.badge}</span>
                  <FaPlane className="h-6 w-6 text-slate-400 group-hover:text-[#E66E19] transition-colors" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-slate-900">{service.title}</h3>
                <p className="text-xs font-bold text-[#E66E19] uppercase tracking-wider mt-1">{service.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">{service.description}</p>
                <ul className="mt-6 space-y-3 pt-6 border-t border-slate-100">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <FiCheckCircle className="h-4 w-4 text-[#E66E19] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* KEY ADVANTAGES GRID */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className={badgeClass}>Smart & Efficient</span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">Smart, Faster, & Efficient Air Freight</h2>
            <p className="mt-2 text-sm text-slate-600 font-medium max-w-xl mx-auto">How The DFL Group uses technology and strategic positioning to eliminate delays.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AirFreightkeyAdvantages.map((adv, idx) => {
              const IconComponent = adv.icon; // Component Dynamic Render
              return (
                <div key={idx} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E66E19] hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#E66E19] border border-orange-100 transition-all duration-300 group-hover:bg-[#E66E19] group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-[#E66E19] transition-colors">{adv.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM FEATURE DARK BANNER */}
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-gradient-to-bl from-orange-500/20 to-transparent blur-3xl rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="rounded-full bg-orange-500/20 border border-orange-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">The DFL Vision</span>
              <h2 className="text-3xl font-black md:text-4xl leading-tight text-white">End-to-End Solutions with Smart Suggestions</h2>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Coupled with digitized documentation and our <strong>Smart Suggestions</strong> algorithm, we pinpoint the optimal transport solution for every single dispatch.
              </p>

              <div className="space-y-4 pt-2">
                {visionHighlights.map((opt, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-[#E66E19] text-white shrink-0 mt-0.5"><FiChevronRight className="h-4 w-4" /></div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{opt.title}</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80" alt="Modern Air Cargo Management" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6 text-center">
                  <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 max-w-sm">
                    <FiZap className="h-10 w-10 text-[#E66E19] mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white">Multi-Airline Strategic Partnerships</h3>
                    <p className="text-xs text-slate-300 mt-2 font-medium">Leverage our airline network to secure cost-effective air freight capacity.</p>
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