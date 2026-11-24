import React from "react";

const devIcons = [
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 38 57" className="w-4 h-4">
        <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    ),
  },
  {
    name: "Kotlin",
    svg: (
      <svg viewBox="0 0 48 48" className="w-4 h-4">
        <polygon fill="#7F52FF" points="42,42 6,42 6,6 42,6 24,24" />
        <polygon fill="#C711E1" points="6,42 24,24 42,42" />
        <polygon fill="#E44857" points="6,6 24,6 6,24" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    svg: (
      <svg viewBox="0 0 48 48" className="w-4 h-4">
        <path fill="#FFA000" d="M8 37L14 9c.3-1.3 2-1.6 2.7-.4L22 18 8 37z" />
        <path fill="#F57C00" d="M8 37l19-18 5 10L8 37z" />
        <path fill="#FFCA28" d="M35 15c.9-.9 2.4-.4 2.6.9L41 37 24 46 8 37l27-22z" />
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 48 48" className="w-4 h-4">
        <circle cx="24" cy="24" r="4" fill="#00D8FF" />
        <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#00D8FF" strokeWidth="2.5" fill="none" />
        <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#00D8FF" strokeWidth="2.5" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#00D8FF" strokeWidth="2.5" fill="none" transform="rotate(120 24 24)" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    svg: (
      <svg viewBox="0 0 48 48" className="w-4 h-4">
        <polygon fill="#E44D26" points="9,6 39,6 36,38 24,42 12,38" />
        <polygon fill="#F16529" points="24,9 36,9 33.5,35.5 24,38.5" />
        <polygon fill="#FFFFFF" points="16,15 32,15 31.5,20 21,20 21.5,24 31,24 30,33 24,35 18,33 17.5,28 22,28 22.3,30.5 24,31 25.8,30.5 26,27.5 17,27.5" />
      </svg>
    ),
  },
  {
    name: "Cloud",
    svg: (
      <svg viewBox="0 0 48 48" className="w-4 h-4">
        <path fill="#4285F4" d="M31 16c-1.8-4.7-6.3-8-11.5-8C12.6 8 7 13.6 7 20.5c0 .5 0 1 .1 1.5C4.2 23.2 2 26.1 2 29.5 2 34.2 5.8 38 10.5 38h25c5.8 0 10.5-4.7 10.5-10.5 0-5.4-4.1-9.9-9.4-10.4-.8-.6-3.7-1.1-5.6-1.1z" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    svg: (
      <svg viewBox="0 0 48 48" className="w-4 h-4">
        <polygon fill="#42A5F5" points="28,6 10,24 15.5,29.5 39,6" />
        <polygon fill="#42A5F5" points="28,22 18.5,31.5 24,37 39,22" />
        <polygon fill="#0D47A1" points="24,37 28,41 39,41 29.5,31.5" />
      </svg>
    ),
  },
  {
    name: "JS",
    svg: (
      <svg viewBox="0 0 48 48" className="w-4 h-4">
        <rect x="6" y="6" width="36" height="36" rx="5" fill="#F7DF1E" />
        <text x="15" y="34" fill="#1E293B" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
          JS
        </text>
      </svg>
    ),
  },
];

export default function AppDevAnimation({ scale = 1 }) {
  return (
    <div
      className="relative flex items-center justify-center w-[300px] h-[270px] bg-transparent select-none overflow-hidden"
      style={{ transform: `scale(${scale})` }}
    >
      <style>{`
        @keyframes spinOrbitGPU {
          0% { transform: rotate3d(0, 0, 1, 0deg); }
          100% { transform: rotate3d(0, 0, 1, 360deg); }
        }
        @keyframes counterOrbitGPU {
          0% { transform: rotate3d(0, 0, 1, 360deg); }
          100% { transform: rotate3d(0, 0, 1, 0deg); }
        }
        @keyframes phoneModalSmooth {
          0%, 10% {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.92);
          }
          20%, 66% {
            opacity: 1;
            transform: translate3d(0, 0px, 0) scale(1);
          }
          76%, 100% {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.92);
          }
        }
        @keyframes cardPopSmooth {
          0%, 20% {
            opacity: 0;
            transform: translate3d(0, 6px, 0) scale(0.82);
          }
          28%, 62% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
          70%, 100% {
            opacity: 0;
            transform: translate3d(0, 6px, 0) scale(0.82);
          }
        }
        @keyframes cursorGlide {
          0%, 100% {
            transform: translate3d(34px, 36px, 0) scale(1);
            opacity: 0.95;
          }
          28% {
            transform: translate3d(-14px, -4px, 0) scale(1);
            opacity: 1;
          }
          33% {
            transform: translate3d(-14px, -4px, 0) scale(0.84);
          }
          38% {
            transform: translate3d(-14px, -4px, 0) scale(1);
          }
          54% {
            transform: translate3d(10px, 20px, 0) scale(1);
          }
          59% {
            transform: translate3d(10px, 20px, 0) scale(0.84);
          }
          64% {
            transform: translate3d(10px, 20px, 0) scale(1);
          }
          82% {
            transform: translate3d(-24px, 24px, 0) scale(1);
            opacity: 0.95;
          }
        }
        @keyframes codeBreathing {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Background Soft Circle & 100% GPU-Smooth Rotating Dev Icons */}
      <div className="absolute top-[20px] w-[202px] h-[202px] rounded-full bg-slate-100/90 border border-slate-200 flex items-center justify-center">
        <div
          className="relative w-[174px] h-[174px] rounded-full"
          style={{
            animation: "spinOrbitGPU 28s linear infinite",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          {devIcons.map((item, idx) => {
            const angle = idx * 45;
            return (
              <div
                key={item.name}
                className="absolute top-1/2 left-1/2 w-[30px] h-[30px] -mt-[15px] -ml-[15px]"
                style={{
                  transform: `rotate(${angle}deg) translate3d(87px, 0, 0) rotate(-${angle}deg)`,
                }}
              >
                <div
                  title={item.name}
                  className="w-full h-full bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center"
                  style={{
                    animation: "counterOrbitGPU 28s linear infinite",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {item.svg}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Static Base Setup: Desk & Triple Monitors */}
      <svg
        viewBox="20 65 360 250"
        className="relative z-10 w-full h-full pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="200" cy="276" rx="158" ry="8" fill="#CBD5E1" />
        <rect x="52" y="268" width="296" height="6" rx="3" fill="#64748B" />

        {/* Monitor Stands */}
        <path d="M105 245L98 268H124L117 245H105Z" fill="#475569" />
        <path d="M192 245L185 268H215L208 245H192Z" fill="#334155" />
        <path d="M283 245L276 268H302L295 245H283Z" fill="#475569" />

        {/* Left Tilted Monitor */}
        <polygon points="46,162 132,168 132,248 46,244" fill="#4F46E5" stroke="#3730A3" strokeWidth="2" />
        <polygon points="52,168 126,173 126,241 52,238" fill="#6366F1" />
        <g style={{ animation: "codeBreathing 3.6s ease-in-out infinite" }}>
          <line x1="60" y1="182" x2="94" y2="184" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="66" y1="191" x2="112" y2="194" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="66" y1="200" x2="104" y2="202" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="209" x2="116" y2="212" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="66" y1="218" x2="98" y2="220" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="227" x2="108" y2="229" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Right Tilted Monitor */}
        <polygon points="268,168 354,162 354,244 268,248" fill="#4F46E5" stroke="#3730A3" strokeWidth="2" />
        <polygon points="274,173 348,168 348,238 274,241" fill="#6366F1" />
        <g style={{ animation: "codeBreathing 4.2s ease-in-out infinite" }}>
          <line x1="284" y1="184" x2="322" y2="181" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="290" y1="193" x2="338" y2="190" stroke="#FDBA74" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="290" y1="202" x2="330" y2="199" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="284" y1="211" x2="340" y2="208" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="290" y1="220" x2="324" y2="218" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="284" y1="229" x2="334" y2="226" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Center Main Monitor */}
        <rect x="136" y="164" width="128" height="84" rx="5" fill="#4338CA" stroke="#312E81" strokeWidth="2" />
        <rect x="142" y="170" width="116" height="72" rx="3" fill="#4F46E5" />
        <g style={{ animation: "codeBreathing 3.2s ease-in-out infinite" }}>
          <line x1="154" y1="182" x2="198" y2="182" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="162" y1="192" x2="236" y2="192" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="162" y1="202" x2="222" y2="202" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="154" y1="212" x2="242" y2="212" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="162" y1="222" x2="212" y2="222" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="154" y1="232" x2="228" y2="232" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Keyboard & Mouse */}
        <polygon points="164,262 236,262 242,268 158,268" fill="#E2E8F0" />
        <ellipse cx="256" cy="265" rx="7" ry="3" fill="#CBD5E1" />
      </svg>

      {/* Mobile Screen Pop-up */}
      <div
        className="absolute z-20 top-[82px] w-[62px] h-[116px] bg-white rounded-[10px] border-2 border-slate-300 shadow-[0_10px_25px_rgba(15,23,42,0.16)] flex flex-col items-center px-1.5 pt-1.5 pb-1"
        style={{
          animation: "phoneModalSmooth 7.5s cubic-bezier(0.22, 1, 0.36, 1) infinite",
          willChange: "transform, opacity",
        }}
      >
        <div className="w-4 h-[3px] rounded-full bg-slate-300 mb-1.5" />

        <div className="w-full h-[22px] rounded bg-blue-50 p-1 flex flex-col justify-center gap-1 mb-1.5">
          <div className="w-7 h-[2.5px] rounded-full bg-blue-300" />
          <div className="w-9 h-[2px] rounded-full bg-blue-200" />
        </div>

        <div className="w-[74px] flex justify-between items-center gap-1 mb-1.5">
          <div
            className="w-[21px] h-[21px] rounded bg-orange-500 flex items-center justify-center shadow-sm"
            style={{ animation: "cardPopSmooth 7.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s infinite" }}
          >
            <div className="w-2 h-2 rounded-full bg-orange-100" />
          </div>
          <div
            className="w-[21px] h-[21px] rounded bg-orange-400 flex items-center justify-center shadow-sm"
            style={{ animation: "cardPopSmooth 7.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s infinite" }}
          >
            <div className="w-2 h-2 rounded-[2px] bg-orange-50" />
          </div>
          <div
            className="w-[21px] h-[21px] rounded bg-orange-500 flex items-center justify-center shadow-sm"
            style={{ animation: "cardPopSmooth 7.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s infinite" }}
          >
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[7px] border-b-orange-100" />
          </div>
        </div>

        <div className="w-full h-[11px] rounded-[3px] bg-indigo-600 px-1.5 flex items-center mb-1">
          <div className="w-6 h-[2px] rounded-full bg-indigo-200" />
        </div>
        <div className="w-full h-[11px] rounded-[3px] bg-indigo-500 px-1.5 flex items-center mb-auto">
          <div className="w-8 h-[2px] rounded-full bg-indigo-100" />
        </div>

        <div className="w-5 h-[2.5px] rounded-full bg-slate-400 mt-1" />
      </div>

      {/* Light-Colored Pointer Cursor */}
      <div
        className="absolute z-30 top-[132px] left-[146px] pointer-events-none"
        style={{
          animation: "cursorGlide 7.5s cubic-bezier(0.25, 1, 0.5, 1) infinite",
          willChange: "transform",
        }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(100,116,139,0.25)]">
          <polygon
            points="4,3 4,19 8.5,14.5 12,21 14.5,19.8 11,13.5 17,13.5"
            fill="#F8FAFC"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}