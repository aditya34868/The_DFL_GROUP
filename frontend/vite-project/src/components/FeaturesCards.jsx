import React from "react";

export default function FeaturesCards({ features }) {
  return (
    <section className="bg-gradient-to-b bg-[#E66E19] px-6 py-20 text-[#0B132A] md:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-white/20 border border-white/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
            Next-Gen Operations
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl drop-shadow-sm">
            Advanced Tech-Driven Features
          </h2>
          <p className="mt-3 text-sm text-orange-100 md:text-base font-medium">
            Innovative solutions designed to streamline your logistics operations
          </p>
        </div>

        {/* FEATURES CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features?.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-black/20"
              >
                {/* CORNER GLOW EFFECT */}
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#E66E19]/10 blur-xl transition-all duration-300 group-hover:bg-[#E66E19]/25" />

                <div>
                  {/* ICON & BADGE */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B132A] text-white border border-slate-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E66E19] group-hover:text-white group-hover:border-[#E66E19] shadow-md">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    {item.tag && (
                      <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[10px] font-bold text-[#E66E19] transition-colors group-hover:bg-[#E66E19] group-hover:text-white">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-6 text-xl font-bold text-[#0B132A] transition-colors group-hover:text-[#E66E19]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM HOVER LINE */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                    DFL Tech Integrated
                  </span>
                  <span className="text-lg font-bold text-[#E66E19] transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}