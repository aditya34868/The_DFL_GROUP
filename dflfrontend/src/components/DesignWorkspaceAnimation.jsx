import React from "react";

export default function DesignWorkspaceAnimation({ scale = 1 }) {
  return (
    <div
      className="relative flex items-center justify-center w-[300px] h-[270px] bg-transparent select-none overflow-hidden"
      style={{ transform: `scale(${scale})` }}
    >
      <style>{`
        @keyframes canvasImagePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          45%, 55% { opacity: 0.15; transform: scale(0.96); }
        }
        @keyframes sliderOne {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(22px); }
        }
        @keyframes sliderTwo {
          0%, 100% { transform: translateX(18px); }
          50% { transform: translateX(-10px); }
        }
        @keyframes sliderThree {
          0%, 100% { transform: translateX(-8px); }
          50% { transform: translateX(16px); }
        }
        @keyframes cursorMove {
          0%, 100% { transform: translate(0px, 0px); }
          35% { transform: translate(-24px, -16px); }
          70% { transform: translate(14px, -22px); }
        }
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      <svg
        viewBox="45 55 410 350"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Soft Organic Blob */}
        <path
          d="M125 110C180 78 295 82 355 125C415 168 428 255 385 312C342 369 225 378 148 355C71 332 62 268 78 202C94 136 70 142 125 110Z"
          fill="#F1F5F9"
        />

        {/* Floor Shadow Line */}
        <ellipse cx="255" cy="356" rx="165" ry="6" fill="#E2E8F0" />

        {/* Main Design Artboard / Window */}
        <g filter="drop-shadow(0px 6px 14px rgba(15, 23, 42, 0.06))">
          <rect
            x="118"
            y="104"
            width="198"
            height="146"
            rx="6"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          {/* Window Top Bar */}
          <path
            d="M118 110C118 106.7 120.7 104 124 104H310C313.3 104 316 106.7 316 110V118H118V110Z"
            fill="#F8FAFC"
          />
          <circle cx="128" cy="111" r="2.2" fill="#CBD5E1" />
          <circle cx="135" cy="111" r="2.2" fill="#CBD5E1" />
          <circle cx="142" cy="111" r="2.2" fill="#CBD5E1" />

          {/* Right Layer Panels inside Canvas */}
          <rect x="282" y="128" width="24" height="32" rx="3" fill="#E2E8F0" />
          <rect x="282" y="166" width="24" height="22" rx="3" fill="#EFF6FF" stroke="#BFDBFE" />
          <rect x="282" y="194" width="24" height="14" rx="2" fill="#F1F5F9" />
          <rect x="282" y="212" width="24" height="14" rx="2" fill="#F1F5F9" />

          {/* Animated Center Image Placeholder (Mountains & Sun) */}
          <g
            style={{
              transformOrigin: "212px 175px",
              animation: "canvasImagePulse 4.5s ease-in-out infinite",
            }}
          >
            <rect
              x="156"
              y="134"
              width="112"
              height="82"
              rx="4"
              fill="#EFF6FF"
              stroke="#93C5FD"
              strokeWidth="1.5"
            />
            <circle cx="182" cy="154" r="7" fill="#3B82F6" />
            <polygon points="164,208 196,166 226,208" fill="#2563EB" />
            <polygon points="204,208 232,174 260,208" fill="#60A5FA" />
          </g>

          {/* Animated Cursor inside Canvas */}
          <g style={{ animation: "cursorMove 5s ease-in-out infinite" }}>
            <polygon
              points="232,164 232,179 236,175 240,182 242,181 238,174 244,174"
              fill="#1E293B"
              stroke="#FFFFFF"
              strokeWidth="1"
            />
          </g>
        </g>

        {/* Left Floating Tool Palette */}
        <g
          className="animate-[floatGentle_4s_ease-in-out_infinite]"
          filter="drop-shadow(0px 6px 12px rgba(15, 23, 42, 0.08))"
        >
          <rect
            x="92"
            y="142"
            width="44"
            height="108"
            rx="6"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          <rect x="100" y="152" width="11" height="11" rx="2" fill="#DBEAFE" />
          <path d="M104 155L109 160M104 155V159M104 155H108" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="117" y="152" width="11" height="11" rx="2" fill="#F1F5F9" />
          <circle cx="122.5" cy="157.5" r="3" stroke="#64748B" strokeWidth="1.5" />

          <rect x="100" y="170" width="11" height="11" rx="2" fill="#F1F5F9" />
          <path d="M103 178L108 173" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="117" y="170" width="11" height="11" rx="2" fill="#F1F5F9" />
          <text x="120" y="179" fill="#64748B" fontSize="9" fontWeight="bold">T</text>

          {/* Color Swatches */}
          <rect x="100" y="192" width="11" height="11" rx="2" fill="#3B82F6" />
          <rect x="117" y="192" width="11" height="11" rx="2" fill="#F59E0B" />
          <rect x="100" y="210" width="28" height="28" rx="4" fill="#DC2626" />
          <rect x="106" y="216" width="16" height="16" rx="2" fill="#EF4444" />
        </g>

        {/* Bottom-Center Color / Adjustment Sliders Panel */}
        <g filter="drop-shadow(0px 6px 12px rgba(15, 23, 42, 0.08))">
          <rect
            x="164"
            y="224"
            width="86"
            height="54"
            rx="6"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          <line x1="176" y1="238" x2="238" y2="238" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          <line x1="176" y1="238" x2="205" y2="238" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <circle
            cx="198"
            cy="238"
            r="4.5"
            fill="#2563EB"
            style={{ animation: "sliderOne 3.5s ease-in-out infinite" }}
          />

          <line x1="176" y1="251" x2="238" y2="251" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          <line x1="176" y1="251" x2="218" y2="251" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <circle
            cx="206"
            cy="251"
            r="4.5"
            fill="#F59E0B"
            style={{ animation: "sliderTwo 4s ease-in-out infinite" }}
          />

          <line x1="176" y1="264" x2="238" y2="264" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          <line x1="176" y1="264" x2="196" y2="264" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
          <circle
            cx="196"
            cy="264"
            r="4.5"
            fill="#10B981"
            style={{ animation: "sliderThree 3.2s ease-in-out infinite" }}
          />
        </g>

        {/* Left Decorative Green Plant */}
        <g>
          <path d="M112 318C98 302 92 282 104 272C114 282 116 300 112 318Z" fill="#22C55E" />
          <path d="M116 318C128 298 136 278 124 268C114 278 112 298 116 318Z" fill="#16A34A" />
          <path d="M110 318C92 312 80 298 88 288C98 294 106 306 110 318Z" fill="#4ADE80" />
          <path d="M118 318C136 310 146 296 138 286C128 292 122 304 118 318Z" fill="#22C55E" />
          <polygon points="100,316 128,316 124,354 104,354" fill="#EA580C" />
          <rect x="98" y="313" width="32" height="5" rx="2" fill="#F97316" />
        </g>

        {/* Floating Chat/Notification Badge above Monitor */}
        <g className="animate-[floatGentle_3.2s_ease-in-out_infinite]">
          <rect x="292" y="198" width="22" height="22" rx="5" fill="#2563EB" />
          <circle cx="303" cy="206" r="3" fill="#FFFFFF" />
          <path d="M297 215C297 212 309 212 309 215" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Desk & Monitor */}
        <g>
          <polygon points="274,292 288,292 284,274 278,274" fill="#64748B" />
          <rect x="268" y="290" width="24" height="3" rx="1.5" fill="#475569" />
          <rect
            x="270"
            y="238"
            width="8"
            height="42"
            rx="3"
            transform="rotate(-12 270 238)"
            fill="#1E293B"
          />
          <rect
            x="275"
            y="240"
            width="3"
            height="36"
            rx="1.5"
            transform="rotate(-12 275 240)"
            fill="#38BDF8"
          />
          <rect x="234" y="293" width="118" height="5" rx="2.5" fill="#334155" />
          <line x1="248" y1="298" x2="240" y2="355" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          <line x1="336" y1="298" x2="344" y2="355" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Designer Character with Realistic Detailed Face */}
        <g>
          {/* Office Chair */}
          <rect x="364" y="274" width="10" height="44" rx="5" fill="#475569" />
          <rect x="332" y="314" width="42" height="8" rx="4" fill="#334155" />
          <line x1="352" y1="322" x2="352" y2="352" stroke="#475569" strokeWidth="4" />
          <line x1="338" y1="353" x2="366" y2="353" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

          {/* Legs */}
          <path
            d="M346 298L312 298L304 348"
            stroke="#1E3A8A"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="292" y="346" width="16" height="7" rx="3.5" fill="#0F172A" />

          {/* Neck */}
          <rect x="342" y="238" width="9" height="12" rx="4" fill="#F59E7B" />

          {/* Torso (Yellow/Amber Sweater) */}
          <path
            d="M342 246C354 246 362 256 362 272V302H334V262C334 252 337 246 342 246Z"
            fill="#F59E0B"
          />

          {/* Arm reaching to Keyboard/Mouse */}
          <path
            d="M346 258L326 286L302 290"
            stroke="#D97706"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="299" cy="290" r="4" fill="#FDBA74" />

          {/* Detailed Realistic Face Profile */}
          <g>
            {/* Face & Jawline Shape (Facing Left towards Monitor) */}
            <path
              d="M333 216H354V232C354 238 349 242 343 242H337C334 242 333 240 333 237V232L329.5 229.5C328.8 229 329 228 329.8 227.5L333 225V216Z"
              fill="#FDBA74"
            />

            {/* Styled Dark Hair */}
            <path
              d="M331 217C328 213 330 207 336 207C341 207 345 208 352 208C358 208 361 213 360 220C359 226 356 231 353 233V224C353 221 350 220 348 222V217H331Z"
              fill="#1E293B"
            />

            {/* Ear with Inner Detail */}
            <ellipse cx="351" cy="226" rx="2.8" ry="4" fill="#FDBA74" stroke="#E09658" strokeWidth="0.9" />
            <path d="M351 224.5C350 225.5 350 227 351 228" stroke="#D97706" strokeWidth="0.8" strokeLinecap="round" />

            {/* Eyebrow */}
            <path
              d="M334 221.5C335.5 220.5 338 220.5 339.5 221.5"
              stroke="#1E293B"
              strokeWidth="1.3"
              strokeLinecap="round"
            />

            {/* Eye (White Sclera + Dark Pupil) */}
            <ellipse cx="336.5" cy="224.5" rx="2" ry="1.4" fill="#FFFFFF" />
            <circle cx="336" cy="224.5" r="1.1" fill="#0F172A" />

            {/* Smiling Mouth with White Teeth */}
            <path
              d="M333 233.5H339.5C339.5 236.8 337 238.2 334.5 237.5C333.2 237 333 235.2 333 233.5Z"
              fill="#9F1239"
            />
            {/* Upper White Teeth */}
            <path
              d="M333.3 233.8H339.2C339 235 338 235.3 336.2 235.3C334.5 235.3 333.5 235 333.3 233.8Z"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}