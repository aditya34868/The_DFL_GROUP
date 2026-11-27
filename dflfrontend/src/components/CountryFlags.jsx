import React from "react";

// Crisp SVG Flag components with 100% cross-platform Windows & Mac support

export const IndiaFlag = ({ className = "w-6 h-4" }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs overflow-hidden border border-slate-200/90 shadow-2xs shrink-0 ${className}`}
  >
    <path fill="#FF9933" d="M0 0h640v160H0z" />
    <path fill="#FFFFFF" d="M0 160h640v160H0z" />
    <path fill="#128807" d="M0 320h640v160H0z" />
    {/* Ashoka Chakra */}
    <g transform="translate(320, 240)">
      <circle r="46" fill="none" stroke="#000080" strokeWidth="6" />
      <circle r="9" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1="0"
          x2="0"
          y2="-46"
          stroke="#000080"
          strokeWidth="3.2"
          transform={`rotate(${i * 15})`}
        />
      ))}
    </g>
  </svg>
);

export const UaeFlag = ({ className = "w-6 h-4" }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs overflow-hidden border border-slate-200/90 shadow-2xs shrink-0 ${className}`}
  >
    <path fill="#00732F" d="M160 0h480v160H160z" />
    <path fill="#FFFFFF" d="M160 160h480v160H160z" />
    <path fill="#000000" d="M160 320h480v160H160z" />
    <path fill="#FF0000" d="M0 0h160v480H0z" />
  </svg>
);

export const UkFlag = ({ className = "w-6 h-4" }) => (
  <svg
    viewBox="0 0 60 30"
    className={`inline-block rounded-xs overflow-hidden border border-slate-200/90 shadow-2xs shrink-0 ${className}`}
  >
    <clipPath id="ukClip">
      <path d="M0 0v30h60V0z" />
    </clipPath>
    <g clipPath="url(#ukClip)">
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export const ThailandFlag = ({ className = "w-6 h-4" }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs overflow-hidden border border-slate-200/90 shadow-2xs shrink-0 ${className}`}
  >
    <path fill="#A51931" d="M0 0h640v480H0z" />
    <path fill="#F4F5F8" d="M0 80h640v320H0z" />
    <path fill="#2D2A4A" d="M0 160h640v160H0z" />
  </svg>
);

export const UsaFlag = ({ className = "w-6 h-4" }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs overflow-hidden border border-slate-200/90 shadow-2xs shrink-0 ${className}`}
  >
    {/* 13 Stripes */}
    {Array.from({ length: 13 }).map((_, i) => (
      <rect
        key={i}
        x="0"
        y={(i * 480) / 13}
        width="640"
        height={480 / 13 + 0.5}
        fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
      />
    ))}
    {/* Canton */}
    <rect x="0" y="0" width="280" height={(7 * 480) / 13} fill="#3C3B6E" />
    {/* Representative 50-star constellation grid */}
    <g fill="#FFFFFF">
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={row % 2 === 0 ? 25 + col * 46 : 48 + col * 46}
            cy={18 + row * 26}
            r="4.2"
          />
        ))
      )}
    </g>
  </svg>
);

export const RussiaFlag = ({ className = "w-6 h-4" }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs overflow-hidden border border-slate-200/90 shadow-2xs shrink-0 ${className}`}
  >
    <path fill="#FFFFFF" d="M0 0h640v160H0z" />
    <path fill="#0039A6" d="M0 160h640v160H0z" />
    <path fill="#D52B1E" d="M0 320h640v160H0z" />
  </svg>
);

// Flag mapping helper
export const getCountryFlagComponent = (iso, className) => {
  switch (iso?.toUpperCase()) {
    case "IN":
      return <IndiaFlag className={className} />;
    case "AE":
      return <UaeFlag className={className} />;
    case "GB":
    case "UK":
      return <UkFlag className={className} />;
    case "TH":
      return <ThailandFlag className={className} />;
    case "US":
    case "USA":
      return <UsaFlag className={className} />;
    case "RU":
      return <RussiaFlag className={className} />;
    default:
      return null;
  }
};

export const globalHubsData = [
  {
    country: "India",
    tag: "Corporate HQ",
    code: "+91",
    iso: "IN",
    currency: "INR (₹)",
    cities: "Noida, Mumbai, Gujarat",
  },
  {
    country: "United Arab Emirates",
    tag: "Middle East Hub",
    code: "+971",
    iso: "AE",
    currency: "AED (د.إ)",
    cities: "Dubai Gateway",
  },
  {
    country: "United Kingdom",
    tag: "European Ops",
    code: "+44",
    iso: "GB",
    currency: "GBP (£)",
    cities: "Reading / London",
  },
  {
    country: "Thailand",
    tag: "Southeast Asia",
    code: "+66",
    iso: "TH",
    currency: "THB (฿)",
    cities: "Bangkok Gateway",
  },
  {
    country: "United States",
    tag: "Americas Hub",
    code: "+1",
    iso: "US",
    currency: "USD ($)",
    cities: "North America Logistics",
  },
  {
    country: "Russia",
    tag: "Eurasia Trade",
    code: "+7",
    iso: "RU",
    currency: "RUB (₽)",
    cities: "Eurasia Corridor",
  },
];
