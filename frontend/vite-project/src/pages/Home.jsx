import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTalkModal } from "../context/TalkModalContext";
import Counter from "../components/Counter";
import Cards from "../components/Cards";
import FeaturesCards from "../components/FeaturesCards";
import mapImage from "../assets/Country-Location-Banner.png";
import { 
  LOGISTICS_IMAGES, 
  services, 
  working, 
  stats, 
  highlights, 
  techFeaturesData, 
  bottomstats, 
  testimonials 
} from "../data/siteData";

// Icons for Partners Banner
import { SiDhl, SiFedex, SiUps, SiEbay, SiShopify } from "react-icons/si";

export default function Home() {
  const { openModal } = useTalkModal();
  const location = useLocation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [index, setIndex] = useState(0); // Bottom pagination index

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[index];

  // Dynamic Brand Partners List
  const partners = [
    { 
      name: "DHL", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-[#FFCC00] px-3.5 py-1.5 shadow-sm transition-transform hover:scale-105">
          <SiDhl className="h-7 w-auto text-[#D40511]" />
        </div>
      ) 
    },
    { 
      name: "Shopify", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-[#95BF47]/15 px-3.5 py-1.5 shadow-sm border border-[#95BF47]/30 transition-transform hover:scale-105">
          <SiShopify className="h-7 w-auto text-[#95BF47]" />
        </div>
      ) 
    },
    { 
      name: "FedEx", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-white px-3.5 py-1.5 shadow-sm border border-slate-200 transition-transform hover:scale-105">
          <SiFedex className="h-7 w-auto text-[#4D148C]" />
        </div>
      ) 
    },
    { 
      name: "Aramex", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-white px-4 py-1.5 shadow-sm border border-slate-200 transition-transform hover:scale-105">
          <span className="font-extrabold tracking-tighter text-2xl text-[#E31837] font-sans">
            aramex
          </span>
        </div>
      ) 
    },
    { 
      name: "UPS", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-[#351C15] px-3.5 py-1.5 shadow-sm transition-transform hover:scale-105">
          <SiUps className="h-6 w-auto text-[#FFB81C]" />
        </div>
      ) 
    },
    { 
      name: "BlueDart", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-[#003399] px-3.5 py-1.5 shadow-sm transition-transform hover:scale-105">
          <span className="font-black italic tracking-tight text-lg text-[#FFCC00]">
            BLUE DART
          </span>
        </div>
      ) 
    },
    { 
      name: "DTDC", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-[#002B66] px-3.5 py-1.5 shadow-sm transition-transform hover:scale-105">
          <span className="font-extrabold tracking-widest text-lg text-white">
            DTDC
          </span>
        </div>
      ) 
    },
    { 
      name: "eBay", 
      icon: (
        <div className="flex items-center justify-center rounded-lg bg-white px-3.5 py-1.5 shadow-sm border border-slate-200 transition-transform hover:scale-105">
          <SiEbay className="h-8 w-auto text-[#E53238]" />
        </div>
      ) 
    },
  ];


  // Auto-play the "why choose us" highlights
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Smooth scroll for hashtag links
  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-[92vh] items-center overflow-hidden bg-white px-6 pt-32 pb-16 md:px-8"
      >
        <div className="pointer-events-none absolute left-10 top-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-[#64748B] shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
              </span>
              Express Courier & Cargo Operations Active Nationwide
            </div>

            <h1 className="flex min-h-[4em] items-center text-4xl font-extrabold leading-[1.20] bg-gradient-to-r from-[#E66E19] from-20% to-[#000000] to-70% bg-clip-text text-transparent md:min-h-[3.6em] md:text-6xl">
              {highlights[activeSlide]}
            </h1>

            <div className="my-6 h-1 w-40 origin-left bg-[#E66E19] [animation:lineDraw_2s_0.20s_ease-out_forwards]" />

            <p className="max-w-xl text-base leading-relaxed text-[#64748B] opacity-0 [animation:fadeUp_0.7s_0.2s_ease_forwards]">
              DFL Express delivers time-critical packages, heavy cargo, and global
              supply chain solutions with real-time GPS precision and guaranteed
              arrival times.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 opacity-0 [animation:fadeUp_0.7s_0.35s_ease_forwards]">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#0B132A] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#1E293B] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E66E19] active:scale-95"
              >
                <span>Talk to Us / Request Quote</span>
                <span className="text-[#E66E19] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </button>

              <a
                href="#tracking"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-[#0B132A] shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132A]"
              >
                🔍 Track Package
              </a>
            </div>
          </div>

          <div className="w-full max-w-md justify-self-center md:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={LOGISTICS_IMAGES.heroVan}
                  alt="DFL Express Fleet Vehicles"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132A]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-md bg-[#E66E19] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Express Fleet Active
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B132A]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E66E19]" /> Live Dispatch Tracker
                  </span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-bold text-[#64748B]">
                    #DFL-88219-EX
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs font-bold text-[#64748B]">
                  <span>Origin: Central Hub</span>
                  <span>Destination: Metro Direct</span>
                </div>

                <div className="relative my-6 h-1.5 w-full rounded-full bg-slate-100">
                  <span className="absolute -left-1 -top-1 h-3.5 w-3.5 rounded-full bg-[#0B132A]" />
                  <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#0B132A] bg-white" />
                  <div className="absolute -top-2.5 flex h-6 w-6 items-center justify-center rounded-lg bg-[#E66E19] shadow-md shadow-[#E66E19]/40 [animation:shipmentMove_3.5s_linear_infinite]">
                    <span className="-scale-x-100 text-[10px] text-white">🚚</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] p-3 text-xs">
                  <span className="flex items-center gap-2 font-bold text-[#E66E19]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
                    </span>
                    In Transit - Fast Track
                  </span>
                  <span className="font-extrabold text-[#0B132A]">ETA: 1h 45m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="overflow-hidden border-t border-slate-200 bg-slate-50/80 py-10">
        <div className="mx-auto mb-6 max-w-7xl px-6 text-center md:px-8">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#E66E19]">
            Trusted Integration & Global Carrier Network
          </p>
        </div>

        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max shrink-0 items-center gap-10 sm:gap-16 animate-marquee py-2 pr-10">
            {partners.map((partner, i) => (
              <div key={`set1-${partner.name}-${i}`} className="flex items-center justify-center cursor-pointer">
                {partner.icon}
              </div>
            ))}
          </div>
          
          <div className="flex w-max shrink-0 items-center gap-10 sm:gap-16 animate-marquee py-2 pr-10" aria-hidden="true">
            {partners.map((partner, i) => (
              <div key={`set2-${partner.name}-${i}`} className="flex items-center justify-center cursor-pointer">
                {partner.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR NETWORK */}
      <section className="bg-white py-12 px-6 md:px-16">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-5/12 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B35]">OUR NETWORK</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132A] mt-1">A Global Presence</h2>
              <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                With a strong international network and strategic partners, we connect businesses to markets across the globe.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              {stats.map(({ label, value, suffix }) => (
                <div key={label} className="flex-1 flex flex-col p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <span className="text-xl md:text-2xl font-extrabold text-[#0B132A]">
                    <Counter value={value} suffix={suffix} />
                  </span>
                  <span className="mt-1 text-[11px] font-semibold text-[#64748B]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-7/12 relative">
            <img src={mapImage} alt="Global Map Network" className="w-full h-auto object-contain" />

            <div className="absolute -bottom-10 -right-7 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 max-w-xs">
              <div className="text-xs font-semibold text-[#0B132A] leading-tight">
                <p>Global Reach</p>
                <p>Local Expertise</p>
                <p className="text-[#64748B]">Your Growth Partner</p>
              </div>
              <button className="h-8 w-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center shrink-0">➔</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-slate-200 bg-white px-6 pt-10 pb-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-block rounded-md bg-[#E66E19]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
                Our Services
              </div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132A] md:text-4xl">
                Comprehensive Shipping & <br /> Freight Solutions
              </h2>
              <p className="mt-3 max-w-md text-sm text-[#64748B]">
                Tailored logistics services built to handle individual parcels,
                high-volume e-commerce orders, or enterprise heavy cargo.
              </p>
            </div>
          </div>
          <Cards services={services} onInquire={openModal} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-slate-200 bg-white px-6 pt-4 pb-8 md:px-8 relative">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#0B132A] md:text-4xl">
            How it Works
          </h2>
          <p className="mt-2 text-slate-600">
            From booking to payment—manage your shipment with ease and tech-driven precision.
          </p>

          <div className="mt-6 border-t border-slate-200">
            {working.map((work, i) => (
              <details
                key={work.name}
                className="group border-b border-slate-200 rounded-lg transition-all duration-300 hover:bg-slate-50 [&[open]]:bg-slate-50"
              >
                <summary className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 px-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span className="font-display text-sm font-semibold text-slate-400">
                    0{i + 1}
                  </span>

                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0B132A] md:text-2xl transition-colors group-hover:text-[#E66E19] group-[&[open]]:text-[#E66E19]">
                      {work.name}
                    </h3>

                    <div className="hidden [@media(hover:hover)]:grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-2">
                      <p className="overflow-hidden text-sm leading-relaxed text-slate-600 max-w-md">
                        {work.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-display text-lg text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E66E19] group-[&[open]]:translate-x-1 group-[&[open]]:text-[#E66E19]">
                    →
                  </span>
                </summary>

                <div className="px-4 pb-7 pl-[calc(1rem+2.25rem)] [@media(hover:hover)]:hidden">
                  <p className="text-sm leading-relaxed text-slate-600 max-w-md">
                    {work.description}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANCED TECH FEATURES */}
      <section className="min-h-screen bg-[#0B132A]">
        <FeaturesCards features={techFeaturesData} />
      </section>

      {/* //////////////// */}

      {/* CLIENT TESTIMONIALS & STATS */}
    <section className="mx-auto max-w-7xl bg-white px-4 py-10 md:px-8">
  <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-xl bg-[#E66E19]">
    
    {/* LEFT TESTIMONIAL SLIDER */}
    <div className="flex flex-col justify-between p-8 md:p-12 lg:w-7/12 text-white">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
          CLIENT SUCCESS STORIES
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold mt-1">What Our Clients Say</h2>
        <p className="mt-2 text-xs md:text-sm text-orange-100 max-w-lg">
          Real businesses. Real results. Here's what our clients have to say about working with DFL Group.
        </p>
      </div>

      {/* DYNAMIC CARD (Height fix kar di hai `min-h-[160px]` ke sath) */}
      {current && (
        <div className="my-6 flex items-center gap-2">
          <button 
            onClick={prev} 
            className="h-8 w-8 rounded-full bg-white text-[#E65100] flex items-center justify-center font-bold shadow hover:bg-orange-50 shrink-0"
          >
            ‹
          </button>

          {/* min-h-[160px] flex flex-col justify-between add karne se layout stable rahega */}
          <div className="bg-white text-[#0B132A] p-5 rounded-2xl shadow-md w-full min-h-[160px] flex flex-col justify-between">
            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
              "{current.quote}"
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-9 w-9 rounded-full object-cover border"
              />
              <div>
                <h4 className="text-xs font-bold">{current.name}</h4>
                <p className="text-[11px] text-slate-500">{current.role}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={next} 
            className="h-8 w-8 rounded-full bg-white text-[#E65100] flex items-center justify-center font-bold shadow hover:bg-orange-50 shrink-0"
          >
            ›
          </button>
        </div>
      )}

      {/* DOTS */}
      <div className="flex justify-center gap-1.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>

    {/* RIGHT SIDE IMAGE & DYNAMIC STATS */}
    {/* min-h ko stretch karke ensure kar diya hai ki height jump na ho */}
    <div className="relative lg:w-5/12 bg-slate-900 min-h-[350px] lg:min-h-full flex items-center justify-center p-6">
      <img
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
        alt="Cargo Ship"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* STATS OVERLAY CARD */}
      <div className="relative z-10 w-full max-w-xs bg-slate-900/70 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white space-y-3">
        {bottomstats.map((item, idx) => (
          <React.Fragment key={item.id || idx}>
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="text-base font-extrabold leading-none">{item.value}</p>
                <p className="text-[11px] text-slate-300">{item.label}</p>
              </div>
            </div>
            {idx !== bottomstats.length - 1 && <hr className="border-white/10" />}
          </React.Fragment>
        ))}
      </div>
    </div>

  </div>
</section>
    </>
  );
}