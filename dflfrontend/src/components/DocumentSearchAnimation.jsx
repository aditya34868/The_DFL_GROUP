import React from "react";

const OutlineGear = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z" />
    <circle cx="12" cy="12" r="3.6" />
  </svg>
);

export default function DocumentSearchAnimation({ scale = 1 }) {
  return (
    <div
      className="relative flex items-center justify-center w-[300px] h-[270px] bg-transparent select-none overflow-hidden"
      style={{ transform: `scale(${scale})` }}
    >
      <style>{`
        @keyframes scanPath {
          0%, 100% {
            transform: translate(42px, -18px);
          }
          25% {
            transform: translate(-18px, -42px);
          }
          50% {
            transform: translate(-52px, 24px);
          }
          75% {
            transform: translate(12px, 38px);
          }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes spinGearCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinGearCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>

      {/* Balanced Toothed Gears */}
      <OutlineGear
        className="absolute w-[38px] h-[38px] top-[140px] right-[28px] text-slate-400 animate-[spinGearCW_12s_linear_infinite]"
      />
      <OutlineGear
        className="absolute w-[28px] h-[28px] top-[172px] right-[48px] text-slate-400 animate-[spinGearCCW_9s_linear_infinite]"
      />

      {/* Balanced viewBox (35 60 330 280) */}
      <svg
        viewBox="35 60 330 280"
        className="relative z-10 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Soft Organic Blob */}
        <path
          d="M115 118C148 92 215 88 262 112C309 136 332 188 312 238C292 288 232 316 172 308C112 300 72 260 76 205C80 150 82 144 115 118Z"
          fill="#F1F5F9"
          fillOpacity="0.7"
        />

        {/* Floating Droplet Blobs */}
        <path
          d="M84 128C76 122 68 134 74 144C80 154 94 148 92 138C91 132 88 131 84 128Z"
          fill="#CBD5E1"
          className="animate-[floatSlow_4s_ease-in-out_infinite]"
        />
        <path
          d="M318 118C326 112 336 122 330 132C324 142 310 138 312 128C313 123 315 120 318 118Z"
          fill="#CBD5E1"
          className="animate-[floatSlow_5s_ease-in-out_infinite]"
        />
        <path
          d="M302 272C310 266 318 278 312 286C306 294 294 288 296 280C297 276 299 274 302 272Z"
          fill="#CBD5E1"
          className="animate-[floatSlow_4.5s_ease-in-out_infinite]"
        />

        {/* Bottom Dark Card / Console Bar */}
        <rect x="148" y="252" width="96" height="44" rx="4" fill="#1E293B" />
        <rect x="156" y="260" width="45" height="3" rx="1.5" fill="#94A3B8" />
        <rect x="156" y="267" width="75" height="3" rx="1.5" fill="#64748B" />
        <rect x="156" y="274" width="60" height="3" rx="1.5" fill="#64748B" />

        {/* Left White/Grey Card */}
        <rect
          x="84"
          y="182"
          width="82"
          height="58"
          rx="6"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1.5"
        />
        <line x1="96" y1="196" x2="132" y2="196" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        <line x1="96" y1="205" x2="146" y2="205" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
        <line x1="96" y1="214" x2="124" y2="214" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />

        {/* Center Main Orange Document */}
        <rect x="142" y="108" width="84" height="106" rx="6" fill="#FF7A1A" />
        <line x1="156" y1="128" x2="210" y2="128" stroke="#FFD8B8" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="156" y1="139" x2="202" y2="139" stroke="#FFD8B8" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="156" y1="150" x2="212" y2="150" stroke="#FFD8B8" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="156" y1="161" x2="190" y2="161" stroke="#FFD8B8" strokeWidth="3.5" strokeLinecap="round" />

        {/* Right Grey Document with Paperclip */}
        <g transform="rotate(6 245 190)">
          <rect
            x="216"
            y="144"
            width="64"
            height="92"
            rx="6"
            fill="#CBD5E1"
            stroke="#94A3B8"
            strokeWidth="1"
          />
          <line x1="228" y1="166" x2="266" y2="166" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="228" y1="177" x2="260" y2="177" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="228" y1="188" x2="268" y2="188" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          {/* Paperclip */}
          <path
            d="M226 156V138C226 133 234 133 234 138V158C234 161 229 161 229 158V142"
            stroke="#475569"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Top-Right Blue Chat Bubbles */}
        <g className="animate-[floatSlow_3.5s_ease-in-out_infinite]">
          <rect x="242" y="122" width="44" height="24" rx="5" fill="#2563EB" />
          <polygon points="250,146 258,146 250,153" fill="#2563EB" />
          <circle cx="255" cy="134" r="2" fill="#FFFFFF" />
          <circle cx="264" cy="134" r="2" fill="#FFFFFF" />
          <circle cx="273" cy="134" r="2" fill="#FFFFFF" />

          <rect x="268" y="142" width="38" height="20" rx="4" fill="#3B82F6" />
          <polygon points="296,162 290,162 296,168" fill="#3B82F6" />
        </g>

        {/* Floating White Search Bar with Orange Button */}
        <g filter="drop-shadow(0px 6px 12px rgba(15, 23, 42, 0.08))">
          <rect x="96" y="168" width="128" height="26" rx="5" fill="#FFFFFF" />
          <rect x="196" y="168" width="28" height="26" rx="5" fill="#FF7A1A" />
          <circle cx="209" cy="180" r="4.5" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="212.5" y1="183.5" x2="216" y2="187" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Bottom-Left Blue Folder */}
        <g>
          <path
            d="M110 212H142L150 220H194C197.3 220 200 222.7 200 226V266C200 269.3 197.3 272 194 272H110C106.7 272 104 269.3 104 266V218C104 214.7 106.7 212 110 212Z"
            fill="#1D4ED8"
          />
          <rect x="104" y="222" width="96" height="50" rx="6" fill="#2563EB" />
          <line x1="116" y1="236" x2="146" y2="236" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Faster Animated Scanning Magnifying Glass */}
        <g
          style={{
            transformOrigin: "200px 190px",
            animation: "scanPath 4.5s ease-in-out infinite",
          }}
        >
          {/* Handle */}
          <rect
            x="222"
            y="212"
            width="44"
            height="11"
            rx="5.5"
            transform="rotate(42 222 212)"
            fill="#1E40AF"
          />
          <rect
            x="217"
            y="207"
            width="12"
            height="7"
            rx="2"
            transform="rotate(42 217 207)"
            fill="#60A5FA"
          />

          {/* Outer Blue Rim */}
          <circle
            cx="195"
            cy="188"
            r="34"
            fill="#FFFFFF"
            fillOpacity="0.28"
            stroke="#2563EB"
            strokeWidth="7"
          />

          {/* Inner Glass Highlight */}
          <circle cx="195" cy="188" r="28" fill="#EFF6FF" fillOpacity="0.35" />
          <path
            d="M178 176C182 170 190 167 198 168"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
}