import React from "react";

export default function CloudServerAnimation({ scale = 1 }) {
  return (
    <div
      className="relative flex items-center justify-center w-[300px] h-[270px] bg-transparent select-none overflow-hidden"
      style={{ transform: `scale(${scale})` }}
    >
      <style>{`
        @keyframes cloudHover {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        @keyframes towerFloatA {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -5px, 0); }
        }
        @keyframes towerFloatB {
          0%, 100% { transform: translate3d(0, -4px, 0); }
          50% { transform: translate3d(0, 2px, 0); }
        }
        @keyframes packetDownLeft {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate3d(-44px, 72px, 0); opacity: 0; }
        }
        @keyframes packetUpCenter {
          0% { transform: translate3d(0, 56px, 0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate3d(-12px, 0px, 0); opacity: 0; }
        }
        @keyframes packetDownRight {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate3d(42px, 44px, 0); opacity: 0; }
        }
        @keyframes bladeSlide {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-5px, 3px, 0); }
        }
        @keyframes ledFlash {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(0.92); }
        }
        @keyframes barSweep {
          0%, 100% { stroke-dashoffset: 24; }
          50% { stroke-dashoffset: 0; }
        }
        @keyframes tileBob {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }
      `}</style>

      <svg
        viewBox="55 55 390 370"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Isometric Floor Shadow */}
        <polygon points="250,245 415,335 250,412 85,335" fill="#F1F5F9" />

        {/* Data Connection Dashed Lines (Cloud to Servers) */}
        <g stroke="#93C5FD" strokeWidth="1.8" strokeDasharray="4 4">
          <line x1="176" y1="186" x2="136" y2="252" />
          <line x1="226" y1="194" x2="238" y2="220" />
          <line x1="274" y1="186" x2="312" y2="218" />
        </g>

        {/* Floating 3D Blue Cloud (More noticeable float) */}
        <g
          style={{
            animation: "cloudHover 3.4s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          <path
            d="M156 178C136 178 122 165 122 148C122 133 133 121 148 119C154 96 176 80 202 80C226 80 247 93 255 113C261 111 268 110 275 110C302 110 324 130 324 155C324 179 304 198 278 198H166C162 198 159 197 156 178Z"
            fill="#1D4ED8"
            transform="translate(-6, 5)"
          />
          <path
            d="M156 178C136 178 122 165 122 148C122 133 133 121 148 119C154 96 176 80 202 80C226 80 247 93 255 113C261 111 268 110 275 110C302 110 324 130 324 155C324 179 304 198 278 198H166C162 198 159 197 156 178Z"
            fill="#2563EB"
          />
          <path
            d="M168 104C178 92 194 87 210 90"
            stroke="#60A5FA"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* ================= RIGHT TALL SERVER TOWER ================= */}
        <g
          style={{
            animation: "towerFloatA 3.8s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          <polygon points="325,138 388,172 332,202 269,168" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="269,168 332,202 332,334 269,300" fill="#E2E8F0" />
          <polygon points="332,202 388,172 388,304 332,334" fill="#CBD5E1" />

          {/* Glowing & Blinking Cyan Data Nodes */}
          <circle cx="286" cy="196" r="3.2" fill="#06B6D4" style={{ animation: "ledFlash 1.2s ease-in-out infinite" }} />
          <circle cx="301" cy="204" r="3.6" fill="#22D3EE" style={{ animation: "ledFlash 1.5s ease-in-out 0.3s infinite" }} />
          <circle cx="316" cy="212" r="3" fill="#38BDF8" style={{ animation: "ledFlash 1.1s ease-in-out 0.6s infinite" }} />

          <circle cx="282" cy="216" r="3" fill="#38BDF8" style={{ animation: "ledFlash 1.4s ease-in-out 0.2s infinite" }} />
          <circle cx="297" cy="224" r="3.5" fill="#06B6D4" style={{ animation: "ledFlash 1.2s ease-in-out 0.5s infinite" }} />
          <circle cx="314" cy="233" r="3.6" fill="#22D3EE" style={{ animation: "ledFlash 1.6s ease-in-out 0.8s infinite" }} />

          <circle cx="288" cy="238" r="3.2" fill="#22D3EE" style={{ animation: "ledFlash 1.3s ease-in-out 0.4s infinite" }} />
          <circle cx="305" cy="247" r="3" fill="#06B6D4" style={{ animation: "ledFlash 1.1s ease-in-out 0.7s infinite" }} />
          <circle cx="320" cy="255" r="3.4" fill="#38BDF8" style={{ animation: "ledFlash 1.5s ease-in-out 0.1s infinite" }} />

          {/* Right Face Vents */}
          <line x1="342" y1="212" x2="378" y2="193" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="342" y1="224" x2="378" y2="205" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="342" y1="236" x2="378" y2="217" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="342" y1="252" x2="378" y2="233" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="342" y1="264" x2="378" y2="245" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="342" y1="276" x2="378" y2="257" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* ================= CENTER MEDIUM SERVER TOWER ================= */}
        <g
          style={{
            animation: "towerFloatB 4.2s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          <polygon points="246,184 310,218 254,248 190,214" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="190,214 254,248 254,366 190,332" fill="#F1F5F9" />
          <polygon points="254,248 310,218 310,336 254,366" fill="#CBD5E1" />

          {/* Analytics Wave Card */}
          <polygon points="200,234 244,257 244,292 200,269" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <path
            d="M203 262C210 254 216 266 223 261C230 256 236 266 242 268V289L203 268V262Z"
            fill="#14B8A6"
          />
          <circle
            cx="214"
            cy="249"
            r="3.2"
            fill="#3B82F6"
            style={{ animation: "ledFlash 1.5s ease-in-out infinite" }}
          />

          {/* Live Animated Progress Bars */}
          <line x1="202" y1="280" x2="242" y2="301" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
          <line
            x1="202"
            y1="280"
            x2="242"
            y2="301"
            stroke="#2563EB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="46"
            style={{ animation: "barSweep 2.4s ease-in-out infinite" }}
          />

          <line x1="202" y1="291" x2="234" y2="308" stroke="#CBD5E1" strokeWidth="3.5" strokeLinecap="round" />
          <line
            x1="202"
            y1="291"
            x2="234"
            y2="308"
            stroke="#0D9488"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="38"
            style={{ animation: "barSweep 2.8s ease-in-out 0.4s infinite" }}
          />

          <line
            x1="202"
            y1="301"
            x2="226"
            y2="314"
            stroke="#3B82F6"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="30"
            style={{ animation: "barSweep 2.2s ease-in-out 0.8s infinite" }}
          />

          {/* Right Side Slots */}
          <line x1="264" y1="258" x2="300" y2="239" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="264" y1="270" x2="300" y2="251" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="264" y1="282" x2="300" y2="263" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ================= LEFT SERVER RACK TOWER (SLIDING BLADES) ================= */}
        <g
          style={{
            animation: "towerFloatA 3.6s ease-in-out 0.5s infinite",
            willChange: "transform",
          }}
        >
          <polygon points="164,228 228,262 172,292 108,258" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="108,258 172,292 172,394 108,360" fill="#F1F5F9" />
          <polygon points="172,292 228,262 228,364 172,394" fill="#CBD5E1" />

          {/* 4 Animated Sliding Server Blade Modules */}
          {[0, 1, 2, 3].map((row) => {
            const yOff = row * 21;
            return (
              <g
                key={row}
                style={{
                  animation: `bladeSlide 2.6s ease-in-out ${row * 0.45}s infinite`,
                  willChange: "transform",
                }}
              >
                <polygon
                  points={`116,${274 + yOff} 150,${292 + yOff} 150,${304 + yOff} 116,${286 + yOff}`}
                  fill="#0D9488"
                />
                <line
                  x1="120"
                  y1={280 + yOff}
                  x2="144"
                  y2={293 + yOff}
                  stroke="#99F6E4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Fast Blinking Red Status LED */}
                <polygon
                  points={`155,${295 + yOff} 165,${300 + yOff} 165,${311 + yOff} 155,${306 + yOff}`}
                  fill="#F43F5E"
                  style={{
                    animation: `ledFlash ${0.9 + row * 0.25}s ease-in-out infinite`,
                  }}
                />
              </g>
            );
          })}

          {/* Right Side Rack Vents */}
          <line x1="182" y1="302" x2="218" y2="283" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="182" y1="316" x2="218" y2="297" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="182" y1="330" x2="218" y2="311" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="182" y1="344" x2="218" y2="325" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ================= MOVING DATA PACKETS (CLOUD <-> SERVERS) ================= */}
        <circle
          cx="178"
          cy="184"
          r="4"
          fill="#3B82F6"
          style={{ animation: "packetDownLeft 2.2s linear infinite", willChange: "transform, opacity" }}
        />
        <circle
          cx="236"
          cy="176"
          r="4"
          fill="#14B8A6"
          style={{ animation: "packetUpCenter 2s linear 0.6s infinite", willChange: "transform, opacity" }}
        />
        <circle
          cx="272"
          cy="184"
          r="4"
          fill="#06B6D4"
          style={{ animation: "packetDownRight 2.4s linear 1.1s infinite", willChange: "transform, opacity" }}
        />

        {/* ================= ISOMETRIC LAPTOP IN FRONT ================= */}
        <g>
          <polygon points="232,318 282,344 282,374 232,348" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
          <polygon points="236,324 278,346 278,369 236,347" fill="#3B82F6" />
          <line
            x1="241"
            y1="333"
            x2="268"
            y2="347"
            stroke="#DBEAFE"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ animation: "ledFlash 1.6s ease-in-out infinite" }}
          />
          <line
            x1="241"
            y1="340"
            x2="272"
            y2="356"
            stroke="#93C5FD"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ animation: "ledFlash 1.6s ease-in-out 0.5s infinite" }}
          />

          <polygon points="232,348 282,374 252,390 202,364" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="232,353 271,373 251,384 212,364" fill="#94A3B8" />
        </g>

        {/* ================= FLOATING ISOMETRIC FLOOR TILES ================= */}
        <g style={{ animation: "tileBob 2.8s ease-in-out infinite", willChange: "transform" }}>
          <polygon points="108,376 124,384 108,392 92,384" fill="#F43F5E" />
          <polygon points="92,384 108,392 108,396 92,388" fill="#BE123C" />
          <polygon points="124,384 108,392 108,396 124,388" fill="#E11D48" />
        </g>

        <g style={{ animation: "tileBob 3.2s ease-in-out 0.5s infinite", willChange: "transform" }}>
          <polygon points="204,388 220,396 204,404 188,396" fill="#3B82F6" />
          <polygon points="188,396 204,404 204,408 188,400" fill="#1D4ED8" />
          <polygon points="220,396 204,404 204,408 220,400" fill="#2563EB" />
        </g>

        <g style={{ animation: "tileBob 3s ease-in-out 1s infinite", willChange: "transform" }}>
          <polygon points="318,360 334,368 318,376 302,368" fill="#F97316" />
          <polygon points="302,368 318,376 318,380 302,372" fill="#C2410C" />
          <polygon points="334,368 318,376 318,380 334,372" fill="#EA580C" />
        </g>
      </svg>
    </div>
  );
}