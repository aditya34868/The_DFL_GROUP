
import React from "react";

const EASE = "cubic-bezier(0.45, 0, 0.55, 1)";

// Har layer ek alag SVG (same viewBox). Sirf kam layers rakhe hain.
const Layer = ({ children, style }) => (
  <svg
    viewBox="55 55 390 370"
    className="absolute inset-0 w-full h-full pointer-events-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    {children}
  </svg>
);

const a = (name, duration, { delay = 0, timing = EASE } = {}) => ({
  willChange: "transform, opacity",
  animation: `${name} ${duration}s ${timing} ${delay}s infinite backwards`,
});

export default function CloudServerAnimation({ scale = 1 }) {
  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
      <div className="relative w-[300px] h-[270px] bg-transparent select-none overflow-hidden">
        <style>{`
          @keyframes cloudHover {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50%      { transform: translate3d(0, -7px, 0); }
          }
          @keyframes tileBob {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50%      { transform: translate3d(0, -5px, 0); }
          }
          @keyframes ledFlash {
            0%, 100% { opacity: 1; }
            50%      { opacity: 0.25; }
          }
          @keyframes barPulse {
            0%, 100% { opacity: 0.35; }
            50%      { opacity: 1; }
          }
          @keyframes packetDownLeft {
            0%   { transform: translate3d(0, 0, 0); opacity: 0; }
            20%  { opacity: 1; }
            80%  { opacity: 1; }
            100% { transform: translate3d(-32px, 52px, 0); opacity: 0; }
          }
          @keyframes packetUpCenter {
            0%   { transform: translate3d(0, 41px, 0); opacity: 0; }
            20%  { opacity: 1; }
            80%  { opacity: 1; }
            100% { transform: translate3d(-9px, 0, 0); opacity: 0; }
          }
          @keyframes packetDownRight {
            0%   { transform: translate3d(0, 0, 0); opacity: 0; }
            20%  { opacity: 1; }
            80%  { opacity: 1; }
            100% { transform: translate3d(30px, 32px, 0); opacity: 0; }
          }
        `}</style>

        {/* LAYER 1: saari static cheezein (floor, lines, 3 towers, laptop) */}
        <Layer>
          <polygon points="250,245 415,335 250,412 85,335" fill="#F1F5F9" />
          <g stroke="#93C5FD" strokeWidth="1.8" strokeDasharray="4 4">
            <line x1="176" y1="186" x2="136" y2="252" />
            <line x1="226" y1="194" x2="238" y2="220" />
            <line x1="274" y1="186" x2="312" y2="218" />
          </g>

          {/* Right tall tower */}
          <polygon points="325,138 388,172 332,202 269,168" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="269,168 332,202 332,334 269,300" fill="#E2E8F0" />
          <polygon points="332,202 388,172 388,304 332,334" fill="#CBD5E1" />
          <g stroke="#94A3B8" strokeWidth="3" strokeLinecap="round">
            <line x1="342" y1="212" x2="378" y2="193" />
            <line x1="342" y1="224" x2="378" y2="205" />
            <line x1="342" y1="236" x2="378" y2="217" />
            <line x1="342" y1="252" x2="378" y2="233" />
            <line x1="342" y1="264" x2="378" y2="245" />
            <line x1="342" y1="276" x2="378" y2="257" />
          </g>

          {/* Center tower */}
          <polygon points="246,184 310,218 254,248 190,214" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="190,214 254,248 254,366 190,332" fill="#F1F5F9" />
          <polygon points="254,248 310,218 310,336 254,366" fill="#CBD5E1" />
          <polygon points="200,234 244,257 244,292 200,269" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <path d="M203 262C210 254 216 266 223 261C230 256 236 266 242 268V289L203 268V262Z" fill="#14B8A6" />
          <line x1="202" y1="280" x2="242" y2="301" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
          <line x1="202" y1="291" x2="234" y2="308" stroke="#CBD5E1" strokeWidth="3.5" strokeLinecap="round" />
          <g stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round">
            <line x1="264" y1="258" x2="300" y2="239" />
            <line x1="264" y1="270" x2="300" y2="251" />
            <line x1="264" y1="282" x2="300" y2="263" />
          </g>

          {/* Left rack tower */}
          <polygon points="164,228 228,262 172,292 108,258" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="108,258 172,292 172,394 108,360" fill="#F1F5F9" />
          <polygon points="172,292 228,262 228,364 172,394" fill="#CBD5E1" />
          {[0, 1, 2, 3].map((row) => {
            const y = row * 21;
            return (
              <g key={row}>
                <polygon points={`116,${274 + y} 150,${292 + y} 150,${304 + y} 116,${286 + y}`} fill="#0D9488" />
                <line x1="120" y1={280 + y} x2="144" y2={293 + y} stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" />
              </g>
            );
          })}
          <g stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round">
            <line x1="182" y1="302" x2="218" y2="283" />
            <line x1="182" y1="316" x2="218" y2="297" />
            <line x1="182" y1="330" x2="218" y2="311" />
            <line x1="182" y1="344" x2="218" y2="325" />
          </g>

          {/* Laptop */}
          <polygon points="232,318 282,344 282,374 232,348" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
          <polygon points="236,324 278,346 278,369 236,347" fill="#3B82F6" />
          <line x1="241" y1="333" x2="268" y2="347" stroke="#DBEAFE" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="241" y1="340" x2="272" y2="356" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round" />
          <polygon points="232,348 282,374 252,390 202,364" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="232,353 271,373 251,384 212,364" fill="#94A3B8" />
        </Layer>

        {/* LAYER 2: cloud (float) */}
        <Layer style={a("cloudHover", 4)}>
          <path
            d="M156 178C136 178 122 165 122 148C122 133 133 121 148 119C154 96 176 80 202 80C226 80 247 93 255 113C261 111 268 110 275 110C302 110 324 130 324 155C324 179 304 198 278 198H166C162 198 159 197 156 178Z"
            fill="#1D4ED8"
            transform="translate(-6, 5)"
          />
          <path
            d="M156 178C136 178 122 165 122 148C122 133 133 121 148 119C154 96 176 80 202 80C226 80 247 93 255 113C261 111 268 110 275 110C302 110 324 130 324 155C324 179 304 198 278 198H166C162 198 159 197 156 178Z"
            fill="#2563EB"
          />
          <path d="M168 104C178 92 194 87 210 90" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
        </Layer>

        {/* LAYER 3: cyan LEDs (right tower + center tower dot), ek saath blink */}
        <Layer style={a("ledFlash", 1.8, { timing: "ease-in-out" })}>
          <circle cx="286" cy="196" r="3.2" fill="#06B6D4" />
          <circle cx="316" cy="212" r="3" fill="#38BDF8" />
          <circle cx="297" cy="224" r="3.5" fill="#06B6D4" />
          <circle cx="288" cy="238" r="3.2" fill="#22D3EE" />
          <circle cx="320" cy="255" r="3.4" fill="#38BDF8" />
          <circle cx="214" cy="249" r="3.2" fill="#3B82F6" />
        </Layer>

        {/* LAYER 4: doosre LEDs (red rack LEDs + baaki cyan), alag timing */}
        <Layer style={a("ledFlash", 2.4, { delay: 0.7, timing: "ease-in-out" })}>
          <circle cx="301" cy="204" r="3.6" fill="#22D3EE" />
          <circle cx="282" cy="216" r="3" fill="#38BDF8" />
          <circle cx="314" cy="233" r="3.6" fill="#22D3EE" />
          <circle cx="305" cy="247" r="3" fill="#06B6D4" />
          {[0, 1, 2, 3].map((row) => {
            const y = row * 21;
            return (
              <polygon
                key={row}
                points={`155,${295 + y} 165,${300 + y} 165,${311 + y} 155,${306 + y}`}
                fill="#F43F5E"
              />
            );
          })}
        </Layer>

        {/* LAYER 5: progress bars (fade pulse) */}
        <Layer style={a("barPulse", 3, { timing: "ease-in-out" })}>
          <line x1="202" y1="280" x2="242" y2="301" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          <line x1="202" y1="291" x2="234" y2="308" stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="202" y1="301" x2="226" y2="314" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
        </Layer>

        {/* LAYER 6-8: data packets */}
        <Layer style={a("packetDownLeft", 2.8, { timing: "linear" })}>
          <circle cx="178" cy="184" r="4" fill="#3B82F6" />
        </Layer>
        <Layer style={a("packetUpCenter", 2.6, { delay: 0.8, timing: "linear" })}>
          <circle cx="236" cy="176" r="4" fill="#14B8A6" />
        </Layer>
        <Layer style={a("packetDownRight", 3, { delay: 1.4, timing: "linear" })}>
          <circle cx="272" cy="184" r="4" fill="#06B6D4" />
        </Layer>

        {/* LAYER 9: 3 floating tiles ek hi layer me (ek saath bob karte hain) */}
        <Layer style={a("tileBob", 3.6)}>
          <polygon points="108,376 124,384 108,392 92,384" fill="#F43F5E" />
          <polygon points="92,384 108,392 108,396 92,388" fill="#BE123C" />
          <polygon points="124,384 108,392 108,396 124,388" fill="#E11D48" />
          <polygon points="204,388 220,396 204,404 188,396" fill="#3B82F6" />
          <polygon points="188,396 204,404 204,408 188,400" fill="#1D4ED8" />
          <polygon points="220,396 204,404 204,408 220,400" fill="#2563EB" />
          <polygon points="318,360 334,368 318,376 302,368" fill="#F97316" />
          <polygon points="302,368 318,376 318,380 302,372" fill="#C2410C" />
          <polygon points="334,368 318,376 318,380 334,372" fill="#EA580C" />
        </Layer>
      </div>
    </div>
  );
}