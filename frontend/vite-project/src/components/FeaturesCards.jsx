import React from "react";

export default function FeaturesCards({ features }) {
  return (
    <section className="bg-white px-6 py-20 text-[#0B132A] md:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-orange-50 border border-orange-200/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
            Next-Gen Operations
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B132A] md:text-4xl">
            Advanced Tech-Driven Features
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-[#64748B]">
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl"
              >
                {/* CORNER GLOW EFFECT */}
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#FF6B35]/5 blur-xl transition-all duration-300 group-hover:bg-[#FF6B35]/15" />

                <div>
                  {/* ICON & BADGE */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#0B132A] border border-slate-200/60 transition-all duration-300 group-hover:bg-[#FF6B35] group-hover:text-white group-hover:border-[#FF6B35] group-hover:scale-105 shadow-sm">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    {item.tag && (
                      <span className="rounded-full bg-orange-50 border border-orange-100 px-3 py-1 text-[10px] font-bold text-[#FF6B35] transition-colors group-hover:bg-[#FF6B35] group-hover:text-white">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-6 text-lg font-bold text-[#0B132A] transition-colors group-hover:text-[#FF6B35]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM HOVER LINE */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                    DFL Tech Integrated
                  </span>
                  <span className="text-base font-bold text-[#FF6B35] transition-transform duration-300 group-hover:translate-x-1.5">
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