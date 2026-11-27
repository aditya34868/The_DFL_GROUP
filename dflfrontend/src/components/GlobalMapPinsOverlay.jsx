import React, { useState } from "react";

// Exact coordinate calibration matching the red pins on Global Locations Infographic Map.png
export const mapPins = [
  {
    id: "usa",
    name: "USA Operations",
    country: "United States",
    x: 17.9,
    y: 37.9,
    flag: "🇺🇸",
  },
  {
    id: "uk",
    name: "Reading, UK",
    country: "United Kingdom",
    x: 47.1,
    y: 34.7,
    flag: "🇬🇧",
  },
  {
    id: "russia",
    name: "Russia Corridor",
    country: "Russia",
    x: 80.7,
    y: 21.9,
    flag: "🇷🇺",
  },
  {
    id: "dubai",
    name: "Dubai, UAE",
    country: "United Arab Emirates",
    x: 62.7,
    y: 52.3,
    flag: "🇦🇪",
  },
  {
    id: "noida",
    name: "Noida Hub",
    country: "Corporate HQ, India",
    x: 67.3,
    y: 51.2,
    flag: "🇮🇳",
  },
  {
    id: "nagina",
    name: "Nagina Branch",
    country: "Uttar Pradesh, India",
    x: 69.0,
    y: 49.3,
    flag: "🇮🇳",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad Branch",
    country: "Gujarat, India",
    x: 68.4,
    y: 55.7,
    flag: "🇮🇳",
  },
  {
    id: "vadodara",
    name: "Vadodara Branch",
    country: "Gujarat, India",
    x: 70.0,
    y: 53.6,
    flag: "🇮🇳",
  },
  {
    id: "mumbai",
    name: "Mumbai Air & Sea Hub",
    country: "Maharashtra, India",
    x: 71.6,
    y: 55.5,
    flag: "🇮🇳",
  },
  {
    id: "bangkok",
    name: "Bangkok Gateway",
    country: "Thailand",
    x: 78.0,
    y: 59.8,
    flag: "🇹🇭",
  },
];

export default function GlobalMapPinsOverlay() {
  const [activePin, setActivePin] = useState(null);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none select-none bg-transparent"
    >
      {/* ONLY THE SMALL BUBBLE RIGHT AT EACH MAIN PIN POINT */}
      {mapPins.map((pin) => {
        const isHovered = activePin === pin.id;

        return (
          <div
            key={pin.id}
            onMouseEnter={() => setActivePin(pin.id)}
            onMouseLeave={() => setActivePin(null)}
            className="group absolute z-30 flex items-center justify-center cursor-pointer pointer-events-auto w-8 h-8 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pin.x}%`,
              top: `${pin.y}%`,
            }}
          >
            {/* Small main-point pulsing bubble */}
            <span className="relative flex h-2.5 w-2.5 pointer-events-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 border border-white shadow-xs" />
            </span>

            {/* Black Box with Details on Hover */}
            <div
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none transition-all duration-200 ease-out ${
                isHovered
                  ? "opacity-100 translate-y-0 scale-100 visible"
                  : "opacity-0 translate-y-1 scale-95 invisible"
              }`}
            >
              <div className="flex items-center gap-2 rounded-xl bg-slate-900/95 backdrop-blur-md px-3 py-1.5 text-white shadow-2xl border border-white/15 whitespace-nowrap">
                <span className="text-sm shrink-0">{pin.flag}</span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">
                    {pin.name}
                  </span>
                  <span className="text-[10px] font-medium text-emerald-400 flex items-center gap-1 leading-tight mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {pin.country}
                  </span>
                </div>
              </div>
              {/* Tooltip Arrow */}
              <div className="w-2 h-2 bg-slate-900/95 rotate-45 mx-auto -mt-1 border-r border-b border-white/15" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
