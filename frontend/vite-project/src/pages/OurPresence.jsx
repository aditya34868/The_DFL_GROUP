import React from "react";
import PresenceLocations from "../components/PresenceLocations";
import { keyHighlights } from "../data/siteData";

export default function OurPresence() {
  return (
    <main className="bg-white px-6 py-20 text-[#0B132A] md:px-8 pt-32 min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E66E19] shadow-sm">
            Our Presence
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Local Expertise, Global Reach
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base font-medium">
            At The DFL Group, our presence defines our strength, reliability, and commitment to delivering exceptional logistics solutions worldwide. We are more than just a logistics provider – we are a trusted partner, ensuring seamless connectivity and operational excellence across industries and borders.
          </p>
        </div>

        {/* HIGHLIGHTS CARD */}
        <div className="mb-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Strategic Locations Driving Operations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Our operations span multiple regions, blending local insights with global standards to create logistics solutions that cater to diverse market needs. From bustling metropolitan cities to remote industrial hubs, The DFL Group ensures your cargo reaches its destination, no matter where it needs to go.
            </p>
          </div>

          {/* CENTERED FLEX LAYOUT FOR HIGHLIGHT CARDS */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {keyHighlights.map((item, index) => (
              <div 
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-xs rounded-2xl border border-slate-200 bg-orange-50/50 p-6 transition-all duration-300 hover:border-[#E66E19] hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-[#E66E19] font-black text-lg">0{index + 1}.</div>
                <h3 className="mt-2 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LOCATIONS SECTION */}
        <PresenceLocations />

      </div>
    </main>
  );
}