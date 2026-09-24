import React from "react";

export default function FeaturesCards({ features }) {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 text-[#0B132A] md:px-8">
      
      {/* BACKGROUND BRAND GLOW */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#E66E19]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-[#E66E19]/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E66E19]/10 border border-[#E66E19]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
            Next-Gen Operations
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Advanced <span className="text-[#E66E19]">Tech-Driven</span> Features
          </h2>
          <p className="mt-3 text-base font-medium text-slate-600 max-w-xl mx-auto">
            Innovative solutions designed to streamline your logistics operations
          </p>
        </div>

        {/* FEATURES CARDS GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features?.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E66E19]/40 hover:shadow-xl hover:shadow-[#E66E19]/10"
              >
                {/* AMBIENT BRAND GLOW ON HOVER */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E66E19]/10 blur-2xl transition-all duration-300 group-hover:bg-[#E66E19]/20 group-hover:scale-125" />

                <div>
                  {/* ICON & BADGE */}
                  <div className="flex items-center justify-between">
                    {/* Brand Solid Icon Box */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E66E19] text-white shadow-md shadow-[#E66E19]/25 transition-transform duration-300 group-hover:scale-110">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>

                    {item.tag && (
                      <span className="rounded-full bg-[#E66E19]/10 px-3 py-1 text-[11px] font-bold text-[#E66E19] border border-[#E66E19]/20">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-6 text-xl font-extrabold text-slate-900 transition-colors group-hover:text-[#E66E19]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed font-normal text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM HOVER LINE */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E66E19]">
                    DFL Tech Integrated
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E66E19]/10 text-[#E66E19] transition-all duration-300 group-hover:bg-[#E66E19] group-hover:text-white group-hover:translate-x-1">
                    <span className="text-sm font-bold">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}