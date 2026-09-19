import React from "react";
import { Link } from "react-router-dom";
import {
  FiAnchor,
  FiBox,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
  FiClock,
  FiGlobe,
  FiNavigation,
  FiLayers,
  FiTruck,
} from "react-icons/fi";

export default function Ocean_Freight_Forwarding() {
  const containerSpecs = [
    {
      type: "20ft Container",
      ext: "6090mm x 2440mm x 2590mm",
      int: "6010mm x 2340mm x 2390mm",
      door: "2280mm x 2310mm",
      tare: "2050 kg",
      payload: "28430 kg",
      maxGross: "30480 kg",
    },
    {
      type: "40ft Container",
      ext: "12180mm x 2440mm x 2590mm",
      int: "12110mm x 2340mm x 2390mm",
      door: "2280mm x 2310mm",
      tare: "3750 kg",
      payload: "26730 kg",
      maxGross: "30400 kg",
    },
    {
      type: "40ft High Cube",
      ext: "12180mm x 2440mm x 2900mm",
      int: "12110mm x 2340mm x 2690mm",
      door: "2280mm x 2580mm",
      tare: "3890 kg",
      payload: "26590 kg",
      maxGross: "30480 kg",
    },
  ];

  const oceanFeatures = [
    {
      icon: <FiGlobe className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Global Carrier Network",
      description: "Direct tie-ups with top global ocean carriers, port handlers, and NVOCCs worldwide.",
    },
    {
      icon: <FiShield className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Safe & Compliant Handling",
      description: "Specialized care for heavy, bulky cargo, machinery, and defense equipment.",
    },
    {
      icon: <FiLayers className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Flexible FCL & LCL Options",
      description: "Tailored full-container and shared-container options matching your budget.",
    },
    {
      icon: <FiClock className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Digital Tracking & Schedule",
      description: "Advanced technology to streamline vessel tracking and port documentation.",
    },
  ];

  const serviceHighlights = [
    {
      title: "Full Container Load (FCL)",
      detail: "Dedicated container space for high-volume or single-owner shipments.",
    },
    {
      title: "Less than Container Load (LCL)",
      detail: "Consolidated freight space to minimize shipping costs for smaller volumes.",
    },
    {
      title: "NVOCC & Carrier Alliances",
      detail: "Priority booking slots and competitive sea freight ocean rates.",
    },
    {
      title: "Port-to-Port & Door-to-Door",
      detail: "End-to-end logistics coordination from factory origin to ocean destination port.",
    },
    {
      title: "Customs & Port Handling",
      detail: "Faster port clearance support with digital shipping bill processing.",
    },
    {
      title: "Heavy & Project Cargo",
      detail: "Expert handling for oversized machinery, industrial goods, and defense units.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20 px-4 sm:px-6 md:px-12 font-sans">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* TOP LIVE TRACKING STRIP */}
        <div className="relative w-full rounded-2xl bg-white p-4 text-slate-700 shadow-md border border-slate-200">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 px-2">
            <span className="flex items-center gap-1.5 text-[#E66E19]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E66E19]"></span>
              </span>
              Maritime Transit Monitor
            </span>
            <span className="font-bold text-slate-600">Active Vessel: Nhava Sheva → Port of Rotterdam</span>
          </div>

          {/* ANIMATION TRACK */}
          <div className="relative h-9 w-full rounded-xl bg-orange-50/60 border border-orange-100 overflow-hidden flex items-center px-3">
            <div className="w-full border-b border-dashed border-orange-300 absolute left-0 top-1/2 -translate-y-1/2"></div>
            
            {/* MOVING SHIP ELEMENT */}
            <div className="absolute top-1/2 -translate-y-1/2 animate-shipment z-10 flex items-center gap-2 bg-[#E66E19] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md shadow-orange-500/20 whitespace-nowrap">
              <FiAnchor className="h-3.5 w-3.5" />
              <span>Ocean Vessel Freight</span>
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
                <FiAnchor className="h-3.5 w-3.5" />
                Ocean Freight Forwarding
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
                Smart & Efficient Ocean Freight Logistics with{" "}
                <span className="text-[#E66E19]">The DFL Group</span>
              </h1>

              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                Optimize your ocean freight shipments with The DFL Group’s reliable and cost-effective logistics solutions. Our expert team ensures timely, safe deliveries across global routes with advanced technology and a strong network.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#E66E19] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95"
                >
                  <span>Book Ocean Container</span>
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* HERO IMAGE CONTAINER */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-md transition-all duration-500 hover:border-[#E66E19] hover:shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
                    alt="Cargo Ship at Sea"
                    className="h-64 sm:h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-2 pb-1">
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Global Carrier Network</span>
                    <span className="text-[11px] text-slate-500 font-medium">FCL & LCL Sea Freight</span>
                  </div>
                  <FiNavigation className="h-5 w-5 text-[#E66E19]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY OCEAN FREIGHT & WHY DFL */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Why Choose Ocean Freight?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug">
              Cost-Effective Transport for Large & Bulky Goods
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
              Ocean freight is the most cost-effective method for transporting large quantities of goods over long distances. Ideal for heavy, bulky, or non-time-sensitive items like machinery or defense equipment, ocean freight offers two main shipping options:
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#E66E19] transition-colors">
                <FiBox className="h-6 w-6 text-[#E66E19] mb-2" />
                <h4 className="font-bold text-sm text-slate-800">Full Container Load (FCL)</h4>
                <p className="text-xs text-slate-500 mt-1">Entire container dedicated to a single shipment.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#E66E19] transition-colors">
                <FiLayers className="h-6 w-6 text-[#E66E19] mb-2" />
                <h4 className="font-bold text-sm text-slate-800">Less than Container Load (LCL)</h4>
                <p className="text-xs text-slate-500 mt-1">Multiple shipments combined into one shared container.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white p-3 transition-all duration-500 hover:shadow-xl hover:border-[#E66E19]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Port Container Terminal"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs font-bold text-[#E66E19] uppercase tracking-wider">Port Operations</p>
                <p className="text-sm font-bold text-slate-800">Direct Port-to-Port & NVOCC Carrier Partnerships</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CONTAINER SPECIFICATIONS TABLE */}
       {/* SECTION 3: CONTAINER SPECIFICATIONS TABLE */}
<section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-5">
    <div>
      <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
        Specifications Guide
      </span>
      <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
        Ocean Freight Containers
      </h2>
    </div>
    <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
      Compare dimensions, tare weights, and payload capacities across standard container sizes.
    </p>
  </div>

  {/* EXACT TABLE STRUCTURE MATCHING THE IMAGE (4 COLUMNS, 7 ROWS) */}
  <div className="overflow-x-auto rounded-xl border border-slate-200">
    <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
      <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
        <tr>
          <th scope="col" className="px-5 py-4 border-r border-slate-200 bg-slate-200/60 font-black">
            Container Type
          </th>
          <th scope="col" className="px-5 py-4 border-r border-slate-200 text-center font-bold text-[#E66E19]">
            20ft
          </th>
          <th scope="col" className="px-5 py-4 border-r border-slate-200 text-center font-bold text-[#E66E19]">
            40ft
          </th>
          <th scope="col" className="px-5 py-4 text-center font-bold text-[#E66E19]">
            40ft High Cube
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 font-medium">
        <tr className="hover:bg-orange-50/40 transition-colors">
          <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200 bg-slate-50/50">
            External (L x W x H)
          </td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200">6090mm x 2440mm x 2590mm</td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200">12180mm x 2440mm x 2590mm</td>
          <td className="px-5 py-3.5 text-center">12180mm x 2440mm x 2900mm</td>
        </tr>
        <tr className="hover:bg-orange-50/40 transition-colors">
          <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200 bg-slate-50/50">
            Internal (L x W x H)
          </td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200">6010mm x 2340mm x 2390mm</td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200">12110mm x 2340mm x 2390mm</td>
          <td className="px-5 py-3.5 text-center">12110mm x 2340mm x 2690mm</td>
        </tr>
        <tr className="hover:bg-orange-50/40 transition-colors">
          <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200 bg-slate-50/50">
            Door Opening (W x H)
          </td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200">2280mm x 2310mm</td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200">2280mm x 2310mm</td>
          <td className="px-5 py-3.5 text-center">2280mm x 2580mm</td>
        </tr>
        <tr className="hover:bg-orange-50/40 transition-colors">
          <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200 bg-slate-50/50">
            Tare Weight
          </td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200 font-semibold">2050 kg</td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200 font-semibold">3750 kg</td>
          <td className="px-5 py-3.5 text-center font-semibold">3890 kg</td>
        </tr>
        <tr className="hover:bg-orange-50/40 transition-colors">
          <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200 bg-slate-50/50">
            Payload (Net Weight)
          </td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200 font-semibold">28430 kg</td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200 font-semibold">26730 kg</td>
          <td className="px-5 py-3.5 text-center font-semibold">26590 kg</td>
        </tr>
        <tr className="hover:bg-orange-50/40 transition-colors">
          <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200 bg-slate-50/50">
            Max Gross Weight
          </td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200 font-bold text-slate-900">30480 kg</td>
          <td className="px-5 py-3.5 text-center border-r border-slate-200 font-bold text-slate-900">30400 kg</td>
          <td className="px-5 py-3.5 text-center font-bold text-slate-900">30480 kg</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
        {/* SECTION 4: KEY ADVANTAGES (HOVER FIX) */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Why The DFL Group for Ocean Freight?
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              We streamline ocean freight operations with digital logistics services and experienced global logistics professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oceanFeatures.map((item, idx) => (
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

        {/* SECTION 5: SERVICE HIGHLIGHTS */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Comprehensive Services
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900">
              End-to-End Maritime Logistics Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">
              From cargo consolidation to port customs, we manage all steps of your ocean logistics cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceHighlights.map((service, index) => (
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
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Need competitive ocean freight rates?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Get customized FCL/LCL ocean quotes and vessel routing schedules today.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-[#E66E19] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20"
          >
            Request Freight Quote →
          </Link>
        </section>

      </div>
    </div>
  );
}