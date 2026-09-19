import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTalkModal } from "../context/TalkModalContext";
import Counter from "../components/Counter";
import Cards from "../components/Cards";
import FeaturesCards from "../components/FeaturesCards"
import { LOGISTICS_IMAGES, services, working, stats, highlights , techFeaturesData } from "../data/siteData";

export default function Home() {
  const { openModal } = useTalkModal();
  const location = useLocation();

  const [activeSlide, setActiveSlide] = useState(0);
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  // Auto-play the "why choose us" highlights
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // If someone arrives via /#services or /#tracking (Navbar/Footer links), scroll to that section
  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setTrackingResult({
      code: trackingId.toUpperCase(),
      status: "In Transit - Out for Delivery",
      location: "Central Hub, Sector 4",
      eta: "Today before 5:00 PM",
    });
  };

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 bg-white pt-32 md:px-8"
      >

        <div className="pointer-events-none absolute left-10 top-20 h-96 w-96 rounded-full blur-3xl "/>
        <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />

        {/* Hero Grid Container */}
         <div className="mx-auto grid w-full max-w-7xl items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full  border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-[#64748B] shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
              </span>
              Express Courier & Cargo Operations Active Nationwide
            </div>

            {/* Continuous change text*/}
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
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#0B132A] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#1E293B] hover:shadow-xl active:scale-95"
              >
                <span>Talk to Us / Request Quote</span>
                <span className="text-[#E66E19] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <a
                href="#tracking"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-[#0B132A] shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
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
                  alt="DFL Express Fleet"
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
                    <span className="h-2 w-2 rounded-full animate-ping bg-[#E66E19]" />
                    In Transit - Fast Track
                  </span>
                  <span className="font-extrabold text-[#0B132A]">ETA: 1h 45m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-200 bg-white px-6 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-slate-100 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-4 text-center">
              <span className="text-3xl font-extrabold tracking-tight text-[#0B132A] md:text-4xl">
                <Counter value={stat?.value} suffix={stat?.suffix} />
              </span>
              <span className="mt-1 text-xs font-semibold text-[#64748B]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-slate-200 bg-white px-6 py-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-block rounded-md bg-[#E66E19]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
                Our Services
              </div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132A] md:text-4xl">
                Comprehensive Shipping & <br /> Freight Solutions
              </h2>
              <p className="mt-5 max-w-md text-sm text-[#64748B]">
                Tailored logistics services built to handle individual parcels,
                high-volume e-commerce orders, or enterprise heavy cargo.
              </p>
            </div>
          </div>
          <Cards services={services} onInquire={openModal} />
        </div>
      </section>

      {/* TRACKING */}
      <section id="tracking" className="bg-[#0B132A] px-6 py-20 text-white md:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700/60 bg-[#1E293B]/80 p-8 shadow-2xl backdrop-blur-md md:p-12">
          <div className="text-center">
            <span className="rounded-full bg-[#E66E19]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Real-Time Telematics
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Track Your DFL Express Shipment
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Enter your tracking code or airway bill number below for live status
              updates.
            </p>
          </div>

          <form onSubmit={handleTrackSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID (e.g. DFL-9982)"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-4 text-sm text-white placeholder-slate-400 focus:border-[#E66E19] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#E66E19] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#d55f0f] active:scale-95"
            >
              Track Package
            </button>
          </form>

          {trackingResult && (
            <div className="mt-6 rounded-2xl border border-[#E66E19]/30 bg-slate-900/90 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400">Waybill ID:</span>
                  <div className="text-lg font-bold text-[#E66E19]">{trackingResult.code}</div>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                  {trackingResult.status}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400">Current Facility:</span>
                  <div className="font-semibold text-white">{trackingResult.location}</div>
                </div>
                <div>
                  <span className="text-slate-400">Estimated Delivery:</span>
                  <div className="font-semibold text-white">{trackingResult.eta}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
{/* ================= How it work ================= */}
<section
  className="border-t border-slate-200 bg-white px-6 py-28 md:px-8"
>
  <div className="mx-auto max-w-6xl">
    <h2 className="font-display text-3xl font-bold tracking-tight text-[#0B132A] md:text-4xl">
      How it Work
    </h2>
    <dl className="mt-2">From booking to payment—manage your shipment with ease and tech-driven precision.</dl>

    <div className="mt-10 border-t border-slate-200">
      {working.map((work, i) => (
        <details
          key={work.name}
          className="group border-b border-slate-200 rounded-lg transition-all duration-300 hover:bg-slate-50 [&[open]]:bg-slate-50"
        >
          <summary className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 px-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden outline-none [@media(hover:hover)]:pointer-events-none">
            <span className="font-display text-sm font-semibold text-slate-400">
              0{i + 1}
            </span>

            <div>
              <h3 className="font-display text-xl font-bold text-[#0B132A] md:text-2xl transition-colors group-hover:text-[#E66E19] group-[&[open]]:text-[#E66E19]">
                {work.name}
              </h3>

              {/* Desktop hover animation (only on hover-capable screens) */}
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

          {/* Mobile click description (hidden on desktop hover screens) */}
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

 {/* Advanced driven tech features */}

 <section className="bg-[#0B132A] min-h-screen">
  <FeaturesCards features={techFeaturesData} />
 </section>

      {/* HIGHLIGHTS */}
      <section className="bg-gradient-to-r from-[#E66E19] via-[#ea580c] to-[#E66E19] px-6 py-16 text-white shadow-inner md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-white/80">
            Why Shippers Choose DFL Express
          </div>
          <div className="relative flex min-h-[80px] items-center justify-center">
            {highlights.map((text, i) => (
              <p
                key={text}
                className={`absolute inset-0 flex items-center justify-center px-4 text-2xl font-extrabold transition-all duration-500 md:text-3xl ${
                  i === activeSlide ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                "{text}"
              </p>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {highlights.map((_, i) => (
              <button
                key={i}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActiveSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

