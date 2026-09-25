import React from "react";
import {useTalkModal} from "../context/TalkModalContext"
import { AirEndToEndServices, smartFeatures } from "../data/siteData";
import {
  FiSend,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiPackage,
  FiNavigation,
  FiZap,
} from "react-icons/fi";

// Reusable Styles & Components
const BADGE_CLS =
  "inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]";
const CARD_HOVER_CLS =
  "group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#E66E19] hover:bg-[#E66E19]";

const Badge = ({ children }) => <span className={BADGE_CLS}>{children}</span>;

const ImageCard = ({ src, alt, tag, title, icon: Icon = FiTrendingUp }) => (
  <div className="group rounded-xl border border-slate-200 bg-slate-50 p-2 transition hover:border-[#E66E19]">
    <div className="overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="h-56 sm:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-3 flex items-center justify-between px-2 pb-1">
      <div>
        <span className="block text-xs font-bold text-slate-800">{tag}</span>
        <span className="text-[11px] text-slate-500 font-medium">{title}</span>
      </div>
      <Icon className="h-4 w-4 text-[#E66E19]" />
    </div>
  </div>
);




export default function AirFreightForwarding() {

    const homepage = () => {
    window.location.href = "https://thedflexpress.in/";
  };
   const { openModal } = useTalkModal();

  return (
    <div className="bg-white text-slate-800 pt-20 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* LIVE TRACKING STRIP */}
        <div className="rounded-xl bg-white p-3 text-slate-700 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5 px-1">
            <span className="flex items-center gap-1.5 text-[#E66E19]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E66E19]" />
              </span>
              Live Transit Monitor
            </span>
            <span className="font-bold text-slate-600">
              Route: DEL → JFK (Express Air Freight)
            </span>
          </div>

          <div className="relative h-8 w-full rounded-lg bg-orange-50 border border-orange-100 overflow-hidden flex items-center px-3">
            <div className="w-full border-b border-dashed border-orange-300 absolute left-0 top-1/2 -translate-y-1/2" />
            
            {/* Live Moving Flight Indicator using standard global animation class */}
            <div className="absolute top-6 -translate-y-1/2 animate-scan z-10 flex items-center gap-1.5 bg-[#E66E19] text-white px-2.5 py-0.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap">
              <FiNavigation className="h-3 w-3 rotate-45 animate-pulse" />
              <span>In-Flight Freight</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="rounded-2xl bg-white p-6 md:p-10 border border-slate-200 animate-fade-up">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge>
                <FiSend className="h-3.5 w-3.5" /> Air Freight Forwarding
              </Badge>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                Discover the Quickest & Most Reliable Air Freight Solutions with{" "}
                <span className="text-[#E66E19]">The DFL Group</span>
              </h1>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                Air freight is the ultimate solution for time-sensitive logistics. With guaranteed schedules, high-security airport hubs, and express customs processing, we keep your supply chain moving seamlessly across continents.
              </p>
              <div className="pt-1">
                <button
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E66E19] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#d55f0f]" onClick={homepage}
                >
                  <span>Book Air Shipment</span>
                  <FiArrowRight className="h-3.5 w-3.5 animate-arrow-nudge" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ImageCard
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=80"
                alt="Air Freight Cargo Aircraft Runway"
                tag="Express Air Charter"
                title="Guaranteed 24-48 hr transit times"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: DEDICATED AIR FREIGHT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Badge>Trusted Logistics Partner</Badge>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 leading-snug">
              The DFL Group as Your Dedicated Air Freight Forwarder
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
              We manage every layer of global air operations—from consolidated air cargo shipments to dedicated temperature-controlled charter solutions.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { icon: FiShield, title: "High-Value Cargo", desc: "Tamper-evident packaging and tracked transit." },
                { icon: FiClock, title: "Perishable Logistics", desc: "Cold-chain solutions for pharmaceuticals & food." },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg border border-slate-200 bg-white">
                  <item.icon className="h-5 w-5 text-[#E66E19] mb-1" />
                  <h4 className="font-bold text-xs text-slate-800">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <ImageCard
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Air Cargo Aircraft Loading"
              tag="AIRPORT OPERATIONS"
              title="Direct Tarmac & Runway Cargo Handling"
            />
          </div>
        </section>

        {/* SECTION 3: GALLERIES */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <Badge>Air Freight Facilities</Badge>
              <h2 className="mt-1 text-xl sm:text-2xl font-black text-slate-900">Global Terminal & Express Hubs</h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md font-medium">
              Take a closer look at our dedicated air cargo infrastructure and smart handling facilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
                icon: FiPackage,
                tag: "Integrated Hubs",
                title: "Smart Airport Cargo Terminals",
                desc: "High-capacity warehouses built right next to major international runways to shorten loading turnarounds.",
              },
              {
                src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
                icon: FiZap,
                tag: "First & Last Mile",
                title: "Express Airport Feeder Fleet",
                desc: "Dedicated road-feeder service connecting local factories directly to airport cargo bays.",
              },
            ].map((card, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-[#E66E19]">
                <div className="overflow-hidden h-52">
                  <img src={card.src} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#E66E19]">
                    <card.icon className="h-3.5 w-3.5" />
                    <span>{card.tag}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{card.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: END-TO-END EXECUTION */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="max-w-2xl mb-6">
            <Badge>Complete Workflow</Badge>
            <h2 className="mt-2 text-xl sm:text-2xl font-black text-slate-900">Comprehensive End-to-End Execution</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AirEndToEndServices.map((service, index) => (
              <div key={index} className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-[#E66E19] hover:bg-[#E66E19]">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#E66E19] group-hover:bg-white transition">
                    <FiCheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 group-hover:text-white transition">{service.title}</h4>
                    <p className="text-[11px] text-slate-500 group-hover:text-orange-50 mt-0.5 font-medium transition">{service.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: SMART FEATURES */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <Badge>Tech-Driven Operations</Badge>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">Smart, Faster & Efficient Air Freight</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {smartFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={CARD_HOVER_CLS}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 text-[#E66E19] group-hover:bg-white/20 group-hover:text-white transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-800 group-hover:text-white transition">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 group-hover:text-orange-50 font-medium transition">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="rounded-2xl bg-orange-50 border border-orange-200 text-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-900">Ready to dispatch your time-sensitive cargo?</h3>
            <p className="text-xs text-slate-600 mt-0.5 font-medium">Get customized air cargo quotes and instant flight transit schedules.</p>
          </div>
          <button className="shrink-0 rounded-lg bg-[#E66E19] px-5 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-[#d55f0f] cursor-pointer" onClick={openModal}>
            Get Custom Quote →
          </button>
        </section>
      </div>
    </div>
  );
}