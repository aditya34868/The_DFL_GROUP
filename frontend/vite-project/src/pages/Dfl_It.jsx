import React from "react";
import { 
  FiCode, 
  FiCloud, 
  FiHeadphones, 
  FiShield, 
  FiBarChart2, 
  FiCpu, 
  FiArrowRight, 
  FiAward, 
  FiLayers, 
  FiTrendingUp, 
  FiBriefcase 
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode className="h-6 w-6" />,
    title: "Custom Software Development",
    description: "From ideation to deployment, we build scalable, secure, and user-friendly applications that cater to your business goals."
  },
  {
    icon: <FiCloud className="h-6 w-6" />,
    title: "Cloud Solutions",
    description: "Optimize your infrastructure with our cloud migration, integration, and management services, ensuring seamless operations and cost efficiency."
  },
  {
    icon: <FiHeadphones className="h-6 w-6" />,
    title: "IT Support & Maintenance",
    description: "Stay worry-free with our proactive IT support, ensuring your systems run smoothly and efficiently, 24/7."
  },
  {
    icon: <FiShield className="h-6 w-6" />,
    title: "Cybersecurity Services",
    description: "Protect your business from evolving threats with advanced security solutions, including vulnerability assessments, data encryption, and monitoring."
  },
  {
    icon: <FiBarChart2 className="h-6 w-6" />,
    title: "Data Analytics & BI",
    description: "Leverage data-driven insights to make smarter decisions with our cutting-edge analytics and business intelligence tools."
  },
  {
    icon: <FiCpu className="h-6 w-6" />,
    title: "Managed IT Services",
    description: "Let us handle your IT infrastructure while you focus on growing your business."
  }
];

const whyChooseUs = [
  {
    icon: <FiAward className="h-5 w-5" />,
    title: "Experienced Professionals",
    description: "Our team of certified experts ensures quality solutions and dedicated support for all your IT needs."
  },
  {
    icon: <FiLayers className="h-5 w-5" />,
    title: "Tailored Solutions",
    description: "No two businesses are alike. We customize our services to align with your unique requirements and objectives."
  },
  {
    icon: <FiTrendingUp className="h-5 w-5" />,
    title: "Scalable Services",
    description: "Whether you’re a startup or a large enterprise, our solutions grow with your business."
  },
  {
    icon: <FiBriefcase className="h-5 w-5" />,
    title: "Proven Track Record",
    description: "Our portfolio showcases successful collaborations with businesses across various industries."
  }
];

export default function DflITSolutions() {
  return (
    <div className="relative min-h-screen bg-white text-[var(--color-ivory)] overflow-hidden px-6 py-20 md:px-8 pt-32 font-sans">
      
      {/* BACKGROUND FLOATING GLOW ELEMENTS - Using 'ctaPulse' and 'float' keyframes */}
      <div 
        className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl"
        style={{ animation: "ctaPulse 6s ease-in-out infinite" }} 
      />
      <div 
        className="pointer-events-none absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl"
        style={{ animation: "float 8s ease-in-out infinite" }} 
      />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* HERO SECTION */}
        <div 
          className="mx-auto max-w-3xl text-center mb-16"
          style={{ animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[var(--color-brass)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-brass)] animate-ping" />
            DFL IT Solutions
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl leading-tight font-display">
            Empowering Businesses Through <span className="text-[var(--color-brass)]">Cutting-Edge IT</span>
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-slate)] font-medium">
            In today’s fast-paced digital landscape, staying ahead requires more than just adapting to change – it demands innovation, efficiency, and reliability. At <strong className="text-[var(--color-ivory)] font-bold">The DFL Group</strong>, we provide comprehensive IT services designed to drive your business forward, streamline operations, and enhance productivity.
          </p>

          {/* LEFT-TO-RIGHT DATA PACKET / STREAM INDICATOR (Using 'shipmentMove' keyframe) */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[var(--color-slate)] mb-1.5 px-1">
              <span>Cloud Server</span>
              <span className="text-[var(--color-brass)]">Live Data Stream</span>
              <span>Client Endpoint</span>
            </div>
            
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200">
              <div 
                className="absolute top-0 h-full w-14 rounded-full bg-gradient-to-r from-orange-400 via-[var(--color-brass)] to-amber-500 shadow-md shadow-orange-500/50"
                style={{ animation: "shipmentMove 3s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="group flex items-center gap-2.5 rounded-full bg-[var(--color-brass)] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#d55f0f] hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0">
              <span>Get Started</span>
              <FiArrowRight 
                className="h-4 w-4 transition-transform duration-300" 
                style={{ animation: "arrowNudge 2s infinite ease-in-out" }}
              />
            </button>
          </div>
        </div>

        {/* EXPERTISE SERVICES GRID */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="rounded-full bg-orange-100/70 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brass)]">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl font-display">
              Our Expertise & Services
            </h2>
            <p className="mt-2 text-sm text-[var(--color-slate)] font-medium max-w-xl mx-auto">
              Tailored digital solutions built with state-of-the-art technologies to give your business a competitive edge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ animation: `fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms forwards` }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-[var(--color-panel)] p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-brass)] hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-orange-100/50 blur-xl transition-all duration-500 group-hover:bg-orange-200/70" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-brass)] border border-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-brass)] group-hover:text-white group-hover:border-[var(--color-brass)] shadow-sm">
                    {service.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-[var(--color-brass)] font-display">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)] font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[var(--color-brass)] transition-colors">
                    Explore Solution
                  </span>
                  <span className="text-[var(--color-brass)] font-bold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="rounded-3xl border border-slate-200 bg-[var(--color-panel)] p-8 md:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-orange-100/80 to-transparent blur-2xl rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-5">
              <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brass)]">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl leading-tight font-display">
                Architecting High-Performance IT Landscapes
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-slate)] font-medium">
                We combine deep technical mastery with business acumen to deliver secure, scalable, and tailored software ecosystems that accelerate digital transformation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-2xl font-black text-[var(--color-brass)] font-display">99.9%</div>
                  <div className="text-xs font-semibold text-[var(--color-slate)] mt-1">Service Uptime</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-2xl font-black text-[var(--color-brass)] font-display">24 / 7</div>
                  <div className="text-xs font-semibold text-[var(--color-slate)] mt-1">Dedicated Support</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div 
                  key={idx}
                  style={{ animation: `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 120 + 200}ms forwards` }}
                  className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[var(--color-brass)] hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[var(--color-brass)] font-bold group-hover:bg-[var(--color-brass)] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 font-display">{item.title}</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-slate)] font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}