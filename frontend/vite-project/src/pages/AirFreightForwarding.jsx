import React from "react";
import { Link } from "react-router-dom";
import {
  FiSend,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiZap,
  FiCpu,
  FiGlobe,
  FiArrowRight,
  FiPackage,
  FiNavigation,
} from "react-icons/fi";

export default function AirFreightForwarding() {
  const endToEndServices = [
    { title: "Cargo Pick-up & Transport", detail: "Doorstep pickup using GPS tracking" },
    { title: "Professional Packaging", detail: "IATA-standard temperature/fragile packing" },
    { title: "Loading & Unloading", detail: "Automated warehouse pallet handling" },
    { title: "Secure Storage", detail: "24/7 CCTV airport holding bays" },
    { title: "Airport Warehouse Services", detail: "Express processing near runways" },
    { title: "Customs Clearance Support", detail: "Fast-track documentation verification" },
  ];

  const smartFeatures = [
    {
      icon: <FiClock className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Strategic Airport Warehousing",
      description:
        "Located near major airport hubs to eliminate transport delays and optimize cargo load times.",
    },
    {
      icon: <FiCpu className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Digitized Documentation",
      description:
        "Automated customs filing and digital air waybills (e-AWB) that remove manual paperwork friction.",
    },
    {
      icon: <FiGlobe className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Direct Airline Network",
      description:
        "Priority belly-capacity and dedicated charter slots on top global air routes.",
    },
    {
      icon: <FiZap className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "AI Route Optimization",
      description:
        "Smart engines predicting real-time flight schedules for cost and time efficiency.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-28 pb-20 px-4 sm:px-6 md:px-12 font-sans">
      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* TOP LIVE TRACKING / ANIMATION STRIP */}
        <div className="relative w-full rounded-2xl bg-white p-4 text-slate-700 shadow-md border border-slate-200">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 px-2">
            <span className="flex items-center gap-1.5 text-[#E66E19]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E66E19]"></span>
              </span>
              Live Transit Monitor
            </span>
            <span className="font-bold text-slate-600">Route: DEL → JFK (Express Air Freight)</span>
          </div>

          {/* ANIMATION TRACK */}
          <div className="relative h-9 w-full rounded-xl bg-orange-50/60 border border-orange-100 overflow-hidden flex items-center px-3">
            <div className="w-full border-b border-dashed border-orange-300 absolute left-0 top-1/2 -translate-y-1/2"></div>
            
            {/* MOVING ELEMENT */}
            <div className="absolute top-1/2 -translate-y-1/2 animate-shipment z-10 flex items-center gap-2 bg-[#E66E19] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md shadow-orange-500/20 whitespace-nowrap">
              <FiNavigation className="h-3.5 w-3.5 rotate-45" />
              <span>In-Flight Freight</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION WITH WHITE & ORANGE THEME */}
        <section className="relative overflow-hidden rounded-3xl bg-white text-slate-800 p-6 sm:p-10 md:p-14 shadow-xl border border-slate-200">
          <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#E66E19]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E66E19]">
                <FiSend className="h-3.5 w-3.5" />
                Air Freight Forwarding
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
                Discover the Quickest & Most Reliable Air Freight Solutions with{" "}
                <span className="text-[#E66E19]">The DFL Group</span>
              </h1>

              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                Air freight is the ultimate solution for time-sensitive logistics. With guaranteed schedules, high-security airport hubs, and express customs processing, we keep your supply chain moving seamlessly across continents.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#E66E19] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95"
                >
                  <span>Book Air Shipment</span>
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* HERO IMAGE CONTAINER */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-md transition-all duration-500 hover:border-[#E66E19] hover:shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=80"
                    alt="Air Freight Cargo Aircraft Runway"
                    className="h-64 sm:h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-2 pb-1">
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Express Air Charter</span>
                    <span className="text-[11px] text-slate-500 font-medium">Guaranteed 24-48 hr transit times</span>
                  </div>
                  <FiTrendingUp className="h-5 w-5 text-[#E66E19]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Dedicated Air Freight */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Trusted Logistics Partner
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug">
              The DFL Group as Your Dedicated Air Freight Forwarder
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
              We manage every layer of global air operations—from consolidated air cargo shipments to dedicated temperature-controlled charter solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#E66E19] transition-colors">
                <FiShield className="h-6 w-6 text-[#E66E19] mb-2" />
                <h4 className="font-bold text-sm text-slate-800">High-Value Cargo</h4>
                <p className="text-xs text-slate-500 mt-1">Tamper-evident packaging and tracked transit.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#E66E19] transition-colors">
                <FiClock className="h-6 w-6 text-[#E66E19] mb-2" />
                <h4 className="font-bold text-sm text-slate-800">Perishable Logistics</h4>
                <p className="text-xs text-slate-500 mt-1">Cold-chain solutions for pharmaceuticals & food.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white p-3 transition-all duration-500 hover:shadow-xl hover:border-[#E66E19]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Air Cargo Aircraft Loading"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs font-bold text-[#E66E19] uppercase tracking-wider">Airport Operations</p>
                <p className="text-sm font-bold text-slate-800">Direct Tarmac & Runway Cargo Handling</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GALLERIES & VISUAL CARDS */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
                Air Freight Facilities
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
                Global Terminal & Express Hubs
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md font-medium">
              Take a closer look at our dedicated air cargo infrastructure and smart handling facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E66E19] hover:shadow-xl">
              <div className="overflow-hidden h-60">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                  alt="Cargo Logistics Container Bay"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E66E19]">
                  <FiPackage className="h-4 w-4" />
                  <span>Integrated Hubs</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Smart Airport Cargo Terminals</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  High-capacity warehouses built right next to major international runways to drastically shorten loading and unloading turnarounds.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E66E19] hover:shadow-xl">
              <div className="overflow-hidden h-60">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80"
                  alt="Express Logistics Truck Transport"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E66E19]">
                  <FiZap className="h-4 w-4" />
                  <span>First & Last Mile</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Express Airport Feeder Fleet</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Dedicated road-feeder service connecting local factories and warehouses directly to airport cargo bays within guaranteed hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: END-TO-END EXECUTION SERVICES */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Complete Workflow
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900">
              Comprehensive End-to-End Execution
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">
              Our end-to-end solutions cover every stage from initial cargo pick-up to final doorstep delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {endToEndServices.map((service, index) => (
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

        {/* SECTION 5: SMART FEATURES WITH FIXED HOVER BUGS */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Tech-Driven Operations
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Smart, Faster & Efficient Air Freight
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              We leverage strategically positioned infrastructure and digital tracking systems to optimize air shipment performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartFeatures.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E66E19] hover:bg-[#E66E19] hover:shadow-xl"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 border border-orange-100 group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-800 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 group-hover:text-orange-50 font-medium transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="rounded-3xl bg-orange-50 border border-orange-200 text-slate-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Ready to dispatch your time-sensitive cargo?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Get customized air cargo quotes and instant flight transit schedules.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-[#E66E19] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20"
          >
            Get Custom Quote →
          </Link>
        </section>

      </div>
    </div>
  );
}