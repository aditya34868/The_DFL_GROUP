import React from "react";
import { useTalkModal } from "../context/TalkModalContext";
import { LOGISTICS_IMAGES, aboutCoreValues, aboutHighlights } from "../data/siteData";

export default function About() {
  const { openModal } = useTalkModal();

  return (
    <section id="about" className="relative overflow-hidden bg-white px-6 py-24 text-slate-700 md:px-8">
      {/* Background Decorative Gradient Blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-amber-50/80 blur-3xl animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-24">
        
        {/* 1. HERO / OVERVIEW SECTION */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          
          {/* Images Layout */}
          <div className="group relative cursor-pointer animate-fade-in-up">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
              <img
                src={LOGISTICS_IMAGES.about}
                alt="DFL Cargo Aviation"
                className="h-96 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
            </div>

            {/* Floating Secondary Image */}
            <div className="absolute -bottom-8 -right-4 hidden w-2/3 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-orange-500/30 sm:block animate-float">
              <img
                src={LOGISTICS_IMAGES.warehouse}
                alt="Automated Fulfillment"
                className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute left-4 top-4 rounded-2xl border border-orange-100 bg-white/95 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#E66E19] hover:shadow-orange-500/20">
              <div className="text-3xl font-black text-[#E66E19]">25+</div>
              <div className="text-xs font-semibold text-slate-600">Years of Global Excellence</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E66E19] transition-all duration-300 hover:scale-105 hover:bg-[#E66E19] hover:text-white">
              About The Dfl Group
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl leading-tight">
              An Extension of Your Business in <span className="text-[#E66E19]">Global Logistics</span>
            </h1>

            <p className="text-base leading-relaxed text-slate-600">
              At The Dfl Group., we go beyond simply providing logistics services — we become an integral extension of your business, offering the expertise and support needed to navigate the complexities of global shipping. Our mission is to be your trusted logistics partner, delivering reliable, comprehensive, and fully customizable solutions that are designed to meet the ever-evolving demands of today’s global marketplace.
            </p>

            {/* Highlights Grid without Icons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="group flex cursor-pointer items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 p-3 text-xs font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19] hover:bg-orange-50/50 hover:shadow-md hover:shadow-orange-500/10 text-center"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center rounded-xl bg-[#E66E19] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d55f0f] hover:shadow-2xl hover:shadow-orange-500/40 active:translate-y-0"
              >
                <span>Talk to a Specialist</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. GENERAL INFORMATION CARD */}
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/50 via-white to-slate-50 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20 md:p-12 animate-fade-in-up">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E66E19]/15 blur-3xl transition-opacity duration-500 group-hover:bg-[#E66E19]/30" />
          
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19] transition-transform duration-300 group-hover:scale-105">
              General Information
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl transition-colors duration-300 group-hover:text-[#E66E19]">
              Global Presence with Local Insights
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              The Dfl Group, with offices in <strong className="text-slate-900">India, UAE, Thailand, and the UK</strong>, is strategically positioned to offer reliable logistics solutions worldwide. Our global presence, paired with local expertise, allows us to meet regional needs while consistently delivering high-quality results. We view our team as family, fostering growth and creating job opportunities globally. Our people drive innovation and excellence. We provide end-to-end logistics services that simplify your supply chain, while our global reach and local insights help us navigate international challenges efficiently. With a customer-first approach, we customize our services to your needs, ensuring clear communication and on-time, secure deliveries every time.
            </p>
          </div>
        </div>

        {/* 3. VISION & MISSION CARDS */}
        <div className="grid gap-8 md:grid-cols-2 animate-fade-in-up">
          
          {/* Vision Card */}
          <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E66E19]">
              Perspective
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#E66E19]">
              OUR Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To become the top choice in global logistics, known for innovation, excellence, and a client-first mindset. We aim to lead the industry by adopting new technologies and promoting sustainable logistics practices.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 italic">
              Vision of The Dfl Group: We aim to be the preferred global logistics partner, recognized for our innovation, quality service, and focus on our clients. By embracing new technologies and sustainable practices, we strive to lead the logistics industry and provide the best solutions for your business needs.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E66E19]">
              Commitment
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#E66E19]">
              OUR Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To be a customer-centric project logistics expert, setting the standard in our industry with a flexible and adaptive approach. Delivering reliable, comprehensive, and fully customizable solutions designed to meet the ever-evolving demands of today’s global marketplace.
            </p>
          </div>
        </div>

        {/* 4. HISTORY & CORE PHILOSOPHY */}
        <div className="grid items-start gap-12 md:grid-cols-2 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Our History
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              At The Dfl Group, we don’t just move cargo — we move your business forward. From the very first step to the last, we stand by your side, providing you with the guidance, expertise, and resources you need to enhance your logistics strategy and drive your business to new heights. We understand that each business is unique, and we are committed to creating personalized logistics solutions that enable you to thrive in a competitive and fast-paced market.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              With our guiding principle of <strong className="text-[#E66E19]">“Together We Grow,”</strong> we aim to build long-lasting partnerships that foster mutual success. Through our innovative and dependable logistics solutions, we will help you overcome challenges, seize new opportunities, and achieve your business goals — all while we grow alongside you.
            </p>
          </div>

          {/* Core Values Cards Grid */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Core Values</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                We uphold honesty, transparency, and ethical standards while exceeding client expectations through innovation and dependable, timely services. Committed to sustainability and teamwork, we strive for mutual success with clients and partners.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutCoreValues.map((val) => (
                <div
                  key={val.title}
                  className="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E66E19] hover:bg-white hover:shadow-xl hover:shadow-orange-500/15"
                >
                  <span className="text-xs font-bold text-[#E66E19] uppercase tracking-wider">Value</span>
                  <h4 className="mt-1 text-sm font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#E66E19]">
                    {val.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. REDESIGNED "TOGETHER WE GROW" SECTION (ICON-LESS) */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 p-8 shadow-xl backdrop-blur-md md:p-12 animate-fade-in-up">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

          <div className="relative z-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#E66E19]">
                Our Core Strategic Advantage
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Together We Grow with <span className="text-[#E66E19]">The DFL Group</span>
              </h2>
              <p className="text-base font-medium leading-relaxed text-slate-600">
                At The DFL Group, we go beyond simply providing logistics services. We become an integral extension of your business, offering the expertise and support needed to navigate the complexities of global shipping.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">End-to-End Solutions</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  As a leading international freight forwarder, we offer seamless end-to-end logistics tailored specifically for startups and established global corporations alike.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">Multimodal Transportation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Combining air, sea, and land transport to create integrated supply chains that optimize transit time, costs, and overall delivery efficiency.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">Customs & Compliance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Expert navigating of complex global regulatory landscapes, ensuring every detail of paperwork, clearance, and documentation is handled seamlessly.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base border-t border-slate-200/80 pt-8">
              <p>
                We understand that businesses today operate in an increasingly interconnected world where challenges are as diverse and dynamic as the markets they serve. This is why we offer not only traditional shipping methods but also innovative forward-thinking solutions that anticipate and overcome logistics hurdles before they arise.
              </p>
              <p>
                We take great pride in managing every phase of your logistics journey, ensuring that each stage from initial planning to final delivery is executed with precision and dedication. With a commitment to excellence, reliability, and customer satisfaction, we ensure that your logistics operations run smoothly without interruption.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-6 md:p-8">
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-[#E66E19]">
                  Guiding Principle
                </p>
                <h4 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                  Together We Grow
                </h4>
                <p className="text-sm leading-relaxed text-slate-700 md:text-base font-medium">
                  Let us handle the complexities of logistics so you can focus on what matters most — achieving your business growth and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. SISTER CONCERN HIGHLIGHT CARD (ICON-LESS) */}
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50/50 to-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20 md:p-12 animate-fade-in-up">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block rounded-full bg-[#E66E19] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
                Affiliated Entity
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 md:text-3xl transition-colors duration-300 group-hover:text-[#E66E19]">
                Delisha International
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Delisha International is a sister concern and affiliated business entity of The DFL Group operating within the same logistics and international trade ecosystem. Together, we expand our capability to offer seamlessly integrated trade solutions globally.
              </p>
            </div>
            <div className="shrink-0">
              <div className="flex h-16 px-6 items-center justify-center rounded-2xl bg-[#E66E19] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all duration-500 group-hover:scale-105">
                DFL Sister Concern
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}