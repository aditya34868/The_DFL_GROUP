// import React from "react";

// const GearIcon = ({ className }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
//   </svg>
// );

// const apps = [
//   {
//     name: "Asana",
//     icon: (
//       <svg viewBox="0 0 48 48" className="w-7 h-7">
//         <circle cx="24" cy="14" r="7.5" fill="#F06A6A" />
//         <circle cx="13.5" cy="32" r="7.5" fill="#F06A6A" />
//         <circle cx="34.5" cy="32" r="7.5" fill="#F06A6A" />
//       </svg>
//     ),
//   },
//   {
//     name: "Trello",
//     icon: (
//       <svg viewBox="0 0 48 48" className="w-7 h-7">
//         <rect x="6" y="6" width="36" height="36" rx="6" fill="#0079BF" />
//         <rect x="11" y="11" width="10" height="24" rx="2" fill="#FFFFFF" />
//         <rect x="26" y="11" width="10" height="15" rx="2" fill="#FFFFFF" />
//       </svg>
//     ),
//   },
//   {
//     name: "Dropbox",
//     icon: (
//       <svg viewBox="0 0 48 48" className="w-7 h-7">
//         <polygon fill="#0061FF" points="14.5,7 4,13.8 14.5,20.5 24,13.8" />
//         <polygon fill="#0061FF" points="33.5,7 24,13.8 33.5,20.5 44,13.8" />
//         <polygon fill="#0061FF" points="4,27.3 14.5,34 24,27.3 14.5,20.5" />
//         <polygon fill="#0061FF" points="33.5,20.5 24,27.3 33.5,34 44,27.3" />
//         <polygon fill="#0061FF" points="24,29.5 14.5,36.2 11,34 11,37 24,45 37,37 37,34 33.5,36.2" />
//       </svg>
//     ),
//   },
//   {
//     name: "Gmail",
//     icon: (
//       <svg viewBox="0 0 48 48" className="w-7 h-7">
//         <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
//         <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
//         <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
//         <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
//         <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Intercom",
//     icon: (
//       <svg viewBox="0 0 48 48" className="w-7 h-7">
//         <rect x="6" y="6" width="36" height="36" rx="8" fill="#1F8DED" />
//         <line x1="14" y1="15" x2="14" y2="27" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
//         <line x1="19" y1="13" x2="19" y2="29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
//         <line x1="24" y1="13" x2="24" y2="29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
//         <line x1="29" y1="13" x2="29" y2="29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
//         <line x1="34" y1="15" x2="34" y2="27" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
//         <path d="M13 32 Q24 38 35 32" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     name: "Google Drive",
//     icon: (
//       <svg viewBox="0 0 48 48" className="w-7 h-7">
//         <polygon fill="#FFC107" points="17,6 31,6 45,30 31,30" />
//         <polygon fill="#1976D2" points="9.8,42 17,30 45,30 37.8,42" />
//         <polygon fill="#4CAF50" points="3,30 17,6 24,18 10,42" />
//       </svg>
//     ),
//   },
//   {
//     name: "Slack",
//     icon: (
//       <svg viewBox="0 0 128 128" className="w-7 h-7">
//         <path fill="#E01E5A" d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" />
//         <path fill="#36C5F0" d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" />
//         <path fill="#2EB67D" d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" />
//         <path fill="#ECB22E" d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Excel",
//     icon: (
//       <svg viewBox="0 0 48 48" className="w-7 h-7">
//         <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z" />
//         <path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z" />
//         <path fill="#0c8045" d="M14 15.003H29V24.005H14z" />
//         <path fill="#17472a" d="M14 24.005H29V33.055H14z" />
//         <path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z" />
//         <path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z" />
//         <path fill="#19ac65" d="M29 15.003H44V24.005H29z" />
//         <path fill="#129652" d="M29 24.005H44V33.055H29z" />
//         <path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z" />
//         <path fill="#fff" d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526 l3.193-5.018L9.807,19z" />
//       </svg>
//     ),
//   },
// ];

// export default function OrbitAnimation({ scale = 1 }) {
//   return (
//     <div
//       className="relative flex items-center justify-center w-[300px] h-[270px] bg-transparent select-none"
//       style={{ transform: `scale(${scale})` }}
//     >
//       <style>{`
//         @keyframes orbitCW {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes orbitCCW {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
//       `}</style>

//       {/* Inner Circle with 5 Gears */}
//       <div className="relative z-10 w-[155px] h-[155px] rounded-full bg-slate-50 border-2 border-slate-300 shadow-inner">
//         <GearIcon className="absolute w-[38px] h-[38px] top-[38px] left-[38px] text-slate-600 animate-[orbitCW_10s_linear_infinite]" />
//         <GearIcon className="absolute w-[44px] h-[44px] top-[34px] left-[74px] text-slate-700 animate-[orbitCCW_12s_linear_infinite]" />
//         <GearIcon className="absolute w-[26px] h-[26px] top-[66px] left-[108px] text-slate-500 animate-[orbitCW_7s_linear_infinite]" />
//         <GearIcon className="absolute w-[28px] h-[28px] top-[76px] left-[42px] text-slate-500 animate-[orbitCCW_8s_linear_infinite]" />
//         <GearIcon className="absolute w-[46px] h-[46px] top-[74px] left-[68px] text-slate-600 animate-[orbitCW_12s_linear_infinite]" />
//       </div>

//       {/* Outer Ring with 8 Icons */}
//       <div className="absolute w-[270px] h-[270px] rounded-full border-2 border-slate-300 animate-[orbitCW_24s_linear_infinite]">
//         {apps.map((app, index) => {
//           const angle = index * 45;
//           return (
//             <div
//               key={app.name}
//               className="absolute top-1/2 left-1/2 w-[54px] h-[54px] -mt-[27px] -ml-[27px]"
//               style={{
//                 transform: `rotate(${angle}deg) translate(135px) rotate(-${angle}deg)`,
//               }}
//             >
//               <div
//                 title={app.name}
//                 className="w-full h-full bg-white rounded-full border border-slate-300 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.12)] animate-[orbitCCW_24s_linear_infinite]"
//               >
//                 {app.icon}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import React from "react";

const GearIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
);

// Gear ko div me wrap kiya, div rotate karna SVG se zyada smooth hota hai
const Gear = ({ size, top, left, color, duration, reverse }) => (
  <div
    className="absolute"
    style={{
      width: size,
      height: size,
      top,
      left,
      willChange: "transform",
      animation: `${reverse ? "spinRev" : "spin"} ${duration}s linear infinite`,
    }}
  >
    <GearIcon className={`w-full h-full ${color}`} />
  </div>
);

const apps = [
  {
    name: "Asana",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <circle cx="24" cy="14" r="7.5" fill="#F06A6A" />
        <circle cx="13.5" cy="32" r="7.5" fill="#F06A6A" />
        <circle cx="34.5" cy="32" r="7.5" fill="#F06A6A" />
      </svg>
    ),
  },
  {
    name: "Trello",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect x="6" y="6" width="36" height="36" rx="6" fill="#0079BF" />
        <rect x="11" y="11" width="10" height="24" rx="2" fill="#FFFFFF" />
        <rect x="26" y="11" width="10" height="15" rx="2" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <polygon fill="#0061FF" points="14.5,7 4,13.8 14.5,20.5 24,13.8" />
        <polygon fill="#0061FF" points="33.5,7 24,13.8 33.5,20.5 44,13.8" />
        <polygon fill="#0061FF" points="4,27.3 14.5,34 24,27.3 14.5,20.5" />
        <polygon fill="#0061FF" points="33.5,20.5 24,27.3 33.5,34 44,27.3" />
        <polygon fill="#0061FF" points="24,29.5 14.5,36.2 11,34 11,37 24,45 37,37 37,34 33.5,36.2" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
        <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
        <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
      </svg>
    ),
  },
  {
    name: "Intercom",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect x="6" y="6" width="36" height="36" rx="8" fill="#1F8DED" />
        <line x1="14" y1="15" x2="14" y2="27" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="19" y1="13" x2="19" y2="29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="13" x2="24" y2="29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="29" y1="13" x2="29" y2="29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="34" y1="15" x2="34" y2="27" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 32 Q24 38 35 32" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Google Drive",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <polygon fill="#FFC107" points="17,6 31,6 45,30 31,30" />
        <polygon fill="#1976D2" points="9.8,42 17,30 45,30 37.8,42" />
        <polygon fill="#4CAF50" points="3,30 17,6 24,18 10,42" />
      </svg>
    ),
  },
  {
    name: "Slack",
    icon: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path fill="#E01E5A" d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" />
        <path fill="#36C5F0" d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" />
        <path fill="#2EB67D" d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" />
        <path fill="#ECB22E" d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" />
      </svg>
    ),
  },
  {
    name: "Excel",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z" />
        <path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z" />
        <path fill="#0c8045" d="M14 15.003H29V24.005H14z" />
        <path fill="#17472a" d="M14 24.005H29V33.055H14z" />
        <path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z" />
        <path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z" />
        <path fill="#19ac65" d="M29 15.003H44V24.005H29z" />
        <path fill="#129652" d="M29 24.005H44V33.055H29z" />
        <path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z" />
        <path fill="#fff" d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526 l3.193-5.018L9.807,19z" />
      </svg>
    ),
  },
];

export default function OrbitAnimation({ scale = 1 }) {
  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
      <div className="relative flex items-center justify-center w-[300px] h-[270px] bg-transparent select-none">
        <style>{`
          @keyframes spin    { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes spinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
          .gpu { will-change: transform; }
        `}</style>

        {/* Inner circle with gears */}
        <div className="relative z-10 w-[155px] h-[155px] rounded-full bg-slate-50 border-2 border-slate-300 shadow-inner">
          <Gear size={38} top={38} left={38} color="text-slate-600" duration={14} />
          <Gear size={44} top={34} left={74} color="text-slate-700" duration={16} reverse />
          <Gear size={26} top={66} left={108} color="text-slate-500" duration={10} />
          <Gear size={28} top={76} left={42} color="text-slate-500" duration={12} reverse />
          <Gear size={46} top={74} left={68} color="text-slate-600" duration={16} />
        </div>

        {/* Outer ring with 8 icons */}
        <div
          className="gpu absolute w-[270px] h-[270px] rounded-full border-2 border-slate-300"
          style={{ animation: "spin 24s linear infinite" }}
        >
          {apps.map((app, index) => {
            const angle = index * 45;
            return (
              <div
                key={app.name}
                className="absolute top-1/2 left-1/2 w-[54px] h-[54px] -mt-[27px] -ml-[27px]"
                style={{ transform: `rotate(${angle}deg) translateX(135px) rotate(${-angle}deg)` }}
              >
                <div
                  title={app.name}
                  className="gpu w-full h-full bg-white rounded-full border border-slate-300 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.12)]"
                  style={{ animation: "spinRev 24s linear infinite" }}
                >
                  {app.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}