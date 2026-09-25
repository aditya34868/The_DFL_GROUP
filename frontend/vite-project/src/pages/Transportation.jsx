import React from "react";
import { Link } from "react-router-dom";
import {TransportKeyAdvantages,serviceModels} from "../data/siteData"
import {
  FiTruck,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
  FiBox,
  FiActivity,
} from "react-icons/fi";

export default function Transportation() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20 px-4 sm:px-6 md:px-12 font-sans">
      {/* KEYFRAME ANIMATION FOR TRUCK MOVEMENT */}

      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* TOP LIVE TRACKING STRIP */}
        <div className="relative w-full rounded-2xl bg-white p-4 text-slate-700 shadow-md border border-slate-200">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 px-2">
            <span className="flex items-center gap-1.5 text-[#E66E19]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E66E19]"></span>
              </span>
              Surface Transit Monitor
            </span>
            <span className="font-bold text-slate-600">Active Route: Delhi NCR → Mumbai Freight Corridor</span>
          </div>

          {/* ANIMATION TRACK */}
          <div className="relative h-9 w-full rounded-xl bg-orange-50/60 border border-orange-100 overflow-hidden flex items-center px-3">
            <div className="w-full border-b border-dashed border-orange-300 absolute left-0 top-1/2 -translate-y-1/2"></div>
            
            {/* MOVING TRUCK ELEMENT */}
            <div className="absolute top-7 -translate-y-1/2 animate-scan z-10 flex items-center gap-2 bg-[#E66E19] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md shadow-orange-500/20 whitespace-nowrap">
              <FiTruck className="h-3.5 w-3.5" />
              <span>In-Transit Truckload</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-white text-slate-800 p-6 sm:p-10 md:p-14 shadow-xl border border-slate-200">
          <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#E66E19]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E66E19]">
                <FiTruck className="h-3.5 w-3.5" />
                Surface Transport Service
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
                Elevate Your Logistics with Expert Inland Transport by{" "}
                <span className="text-[#E66E19]">The DFL Group</span>
              </h1>

              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                Road transport is a vital component of inland logistics, allowing goods to be moved across land using extensive road networks. Offering maximum flexibility and minimal geographical restrictions, we cater to both small and large shipments seamlessly.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#E66E19] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95"
                >
                  <span>Book Road Freight</span>
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* HERO IMAGE CONTAINER */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-md transition-all duration-500 hover:border-[#E66E19] hover:shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80"
                    alt="Logistics Truck on Highway"
                    className="h-64 sm:h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-2 pb-1">
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Express Highway Fleet</span>
                    <span className="text-[11px] text-slate-500 font-medium">Pan-India Network Coverage</span>
                  </div>
                  <FiActivity className="h-5 w-5 text-[#E66E19]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY ROAD TRANSPORT & WHY DFL */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Why Choose Road Logistics?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug">
              Flexible & Cost-Effective Inland Freight Solutions
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
              Road logistics provides the ideal balance between cost and speed. Whether you need an entire vehicle or just shared space, our specialized solutions keep your supply chain running smoothly.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#E66E19] transition-colors">
                <FiBox className="h-6 w-6 text-[#E66E19] mb-2" />
                <h4 className="font-bold text-sm text-slate-800">Full Truckload (FTL)</h4>
                <p className="text-xs text-slate-500 mt-1">Single shipper using the entire truck capacity.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#E66E19] transition-colors">
                <FiShield className="h-6 w-6 text-[#E66E19] mb-2" />
                <h4 className="font-bold text-sm text-slate-800">Less-than-Truckload (LTL)</h4>
                <p className="text-xs text-slate-500 mt-1">Shared truck space reducing total transit cost.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white p-3 transition-all duration-500 hover:shadow-xl hover:border-[#E66E19]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                  alt="Warehouse Logistics and Transportation"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs font-bold text-[#E66E19] uppercase tracking-wider">Seamless Operations</p>
                <p className="text-sm font-bold text-slate-800">Integrated Door-to-Door Pickup & Dispatch</p>
              </div>
            </div>
          </div>
        </section>
{/* SECTION 3: KEY ADVANTAGES (FIXED ICONS & HOVER) */}
<section className="space-y-10">
  <div className="text-center max-w-2xl mx-auto space-y-3">
    <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
      Key Advantages
    </span>
    <h2 className="text-3xl font-black text-slate-900">
      Why Transport with The DFL Group?
    </h2>
    <p className="text-sm text-slate-600 font-medium">
      We eliminate the need for multiple local transport providers by providing a single, highly reliable inland transit network.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {TransportKeyAdvantages.map((item, idx) => {
      // Dynamic Component Check for icon
      const IconComponent = typeof item.icon === "function" ? item.icon : null;

      return (
        <div
          key={idx}
          className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E66E19] hover:bg-[#E66E19] hover:shadow-xl"
        >
          <div>
            {/* Icon Container with explicit text color fix */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100/70 border border-orange-200 text-[#E66E19] group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white transition-all text-xl">
              {IconComponent ? <IconComponent className="h-6 w-6" /> : item.icon}
            </div>
            
            <h3 className="mt-5 text-base font-bold text-slate-800 group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 group-hover:text-orange-50 font-medium transition-colors">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>

        {/* SECTION 4: FLEXIBLE SERVICE MODELS */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Tailored Options
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900">
              Versatile Road Transport Models
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">
              Choose flexible logistics execution options: Door-to-Door, Door-to-Hub, or Hub-to-Door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceModels.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all duration-300 hover:border-[#E66E19] hover:bg-[#E66E19] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#E66E19] group-hover:bg-white group-hover:text-[#E66E19] transition-colors">
                    <FiCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-white transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-500 group-hover:text-orange-50 mt-1 font-medium transition-colors">
                      {service.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="rounded-3xl bg-orange-50 border border-orange-200 text-slate-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Ready to streamline your road logistics?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Book instant pickups and get competitive FTL & LTL freight rates today.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-[#E66E19] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20"
          >
            Get Freight Quote →
          </Link>
        </section>

      </div>
    </div>
  );
}