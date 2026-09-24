import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { countries, branchOffices } from "../data/siteData";

export default function PresenceLocations() {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredBranches = selectedCountry === "all"
    ? branchOffices
    : branchOffices.filter((b) => b.countryId === selectedCountry);

  return (
    <div className="space-y-12 py-8">
      
      {/* 1. FILTER TABS */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {countries.map((item) => {
          const isActive = selectedCountry === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedCountry(item.id)}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                isActive
                  ? "bg-[#E66E19] text-white ring-4 ring-[#E66E19]/20 scale-105 shadow-orange-500/30"
                  : "bg-white text-slate-700 hover:bg-orange-50 hover:text-[#E66E19] border border-slate-200"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* 2. BRANCH OFFICES */}
      <div>
        <div className="mb-10 text-center">
          <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
            Local Touch
          </span>
          <h3 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            Our Offices & Branches
          </h3>
          <p className="mt-2 text-sm text-slate-600 font-medium">
            Serving You Across Selected Locations
          </p>
        </div>

        {/* FLEX WRAP WITH JUSTIFY CENTER */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredBranches.map((branch, index) => (
            <div
              key={`${selectedCountry}-${branch.id}`}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-card-entry group relative flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/10 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="animate-glow absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 blur-2xl transition-all duration-300 group-hover:bg-orange-200" />

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#E66E19] border border-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E66E19] group-hover:text-white group-hover:border-[#E66E19]">
                  <FiMapPin className="h-6 w-6" />
                </div>

                <h4 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#E66E19]">
                  {branch.city}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {branch.address}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 space-y-2.5 text-xs font-semibold">
                <a 
                  href={`tel:${branch.phone}`} 
                  className="flex items-center gap-2.5 text-slate-600 hover:text-[#E66E19] transition-colors"
                >
                  <FiPhone className="h-4 w-4 text-[#E66E19]" />
                  <span>{branch.phone}</span>
                </a>
                <a 
                  href={`mailto:${branch.email}`} 
                  className="flex items-center gap-2.5 text-slate-600 hover:text-[#E66E19] transition-colors"
                >
                  <FiMail className="h-4 w-4 text-[#E66E19]" />
                  <span>{branch.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}