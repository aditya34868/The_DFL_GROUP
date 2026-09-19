import React from "react";
import { Link } from "react-router-dom";
import {
  FiPackage,
  FiBox,
  FiShield, // Changed from FiShieldCheck to FiShield
  FiTrendingUp,
  FiArrowRight,
  FiActivity,
  FiServer,
  FiMapPin,
  FiLock,
} from "react-icons/fi";

export default function Warehousing() {
  const whyChooseUs = [
    {
      icon: <FiBox className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Inventory Management",
      description:
        "Our warehouses offer a controlled environment for managing and monitoring stock levels, tracking product movements, and ensuring inventory aligns with customer demands.",
    },
    {
      icon: <FiPackage className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Order Fulfillment",
      description:
        "Serving as strategic distribution centers, our warehouses ensure quick and accurate picking, packing, and shipping of your products.",
    },
    {
      icon: <FiShield className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Risk Mitigation",
      description:
        "We provide secure spaces for goods, protecting them from potential damage, theft, or deterioration, thus significantly reducing supply chain risks.",
    },
    {
      icon: <FiTrendingUp className="h-6 w-6 text-[#E66E19] transition-colors duration-300 group-hover:text-white" />,
      title: "Logistics Optimization",
      description:
        "Strategically placed warehouses help optimize overall logistics operations, reducing transportation costs and minimizing overall lead times.",
    },
  ];

  const commitments = [
    {
      icon: <FiLock className="h-5 w-5 text-[#E66E19]" />,
      title: "Advanced Security Systems",
      desc: "24/7 monitoring, multi-layer surveillance, and strict access controls to prioritize the safety of your high-value inventory.",
    },
    {
      icon: <FiMapPin className="h-5 w-5 text-[#E66E19]" />,
      title: "Strategic Node Locations",
      desc: "Smooth coordination across air, ocean, and road transport networks to streamline multi-modal freight transitions.",
    },
    {
      icon: <FiServer className="h-5 w-5 text-[#E66E19]" />,
      title: "Digital Transparency",
      desc: "Real-time inventory status updates through our integrated platform for continuous oversight and control.",
    },
    {
      icon: <FiShield className="h-5 w-5 text-[#E66E19]" />,
      title: "Transit Risk Reduction",
      desc: "Minimizing risks of spoilage, mishandling, and unwanted delays through climate and handling control protocols.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20 px-4 sm:px-6 md:px-12 font-sans">
      {/* KEYFRAME ANIMATION FOR WAREHOUSE CONVEYOR / SCANNING */}
      <style>{`
        @keyframes conveyorMove {
          0% {
            left: 0%;
          }
          100% {
            left: 88%;
          }
        }
        .animate-conveyor {
          animation: conveyorMove 6s linear infinite alternate;
        }
      `}</style>

      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* TOP WAREHOUSE MONITOR STRIP */}
        <div className="relative w-full rounded-2xl bg-white p-4 text-slate-700 shadow-md border border-slate-200">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 px-2">
            <span className="flex items-center gap-1.5 text-[#E66E19]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E66E19]"></span>
              </span>
              Smart Warehouse Network
            </span>
            <span className="font-bold text-slate-600">Real-Time Inventory Node: Active</span>
          </div>

          {/* ANIMATION TRACK */}
          <div className="relative h-9 w-full rounded-xl bg-orange-50/60 border border-orange-100 overflow-hidden flex items-center px-3">
            <div className="w-full border-b border-dashed border-orange-300 absolute left-0 top-1/2 -translate-y-1/2"></div>
            
            {/* MOVING ELEMENT */}
            <div className="absolute top-1/2 -translate-y-1/2 animate-conveyor z-10 flex items-center gap-2 bg-[#E66E19] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md shadow-orange-500/20 whitespace-nowrap">
              <FiBox className="h-3.5 w-3.5" />
              <span>Automated Stock Tracking</span>
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
                <FiPackage className="h-3.5 w-3.5" />
                Warehouse Services
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
                Smart Warehousing Solutions with{" "}
                <span className="text-[#E66E19]">The DFL Group</span>
              </h1>

              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                Optimize your supply chain with The DFL Group’s all-encompassing inventory management solutions. In our pursuit of a digital-integrated supply chain, we offer global online access to warehousing services with complete transparency and real-time stock updates.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#E66E19] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95"
                >
                  <span>Get Started with DFL</span>
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* HERO IMAGE CONTAINER */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-md transition-all duration-500 hover:border-[#E66E19] hover:shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                    alt="Smart Warehouse and Logistics Management"
                    className="h-64 sm:h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-2 pb-1">
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Smart Storage Control</span>
                    <span className="text-[11px] text-slate-500 font-medium">24/7 Security & Inventory Monitoring</span>
                  </div>
                  <FiActivity className="h-5 w-5 text-[#E66E19]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY CHOOSE DFL GROUP */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Why Choose The DFL Group?
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Smart warehousing solutions rigorously tested and optimized by professionals for secure management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
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

        {/* SECTION 3: OUR COMMITMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="lg:col-span-5 space-y-5">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
              Uncompromising Quality
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              Our Commitment to Supply Chain Safety
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              The DFL Group’s commitment to providing dependable warehousing solutions strengthens the overall supply chain experience through modern facilities and seamless connectivity.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200 px-5 py-2.5 text-xs font-bold text-[#E66E19] hover:bg-[#E66E19] hover:text-white transition-all"
              >
                <span>Speak with Warehouse Team</span>
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commitments.map((val, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#E66E19] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-sm text-slate-800">{val.title}</h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="rounded-3xl bg-orange-50 border border-orange-200 text-slate-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Get Started with DFL’s Smart Warehousing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Ready to make your inventory smarter, not just bigger? Let us help transform your warehousing operations.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-[#E66E19] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20"
          >
            Contact Us →
          </Link>
        </section>

      </div>
    </div>
  );
}