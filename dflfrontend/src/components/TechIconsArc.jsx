import React from 'react';
import {
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiAndroidstudio,
  SiXcode,
  SiPostman,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';

// ========================================================
// AUTHENTIC MULTI-COLOR BRAND SVG ICONS (EXTRA LARGE VECTOR)
// ========================================================

const SlackIcon = () => (
  <svg viewBox="0 0 127 127" className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-9.5 lg:h-9.5 xl:w-11 xl:h-11" fill="none">
    <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
    <path d="M47 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.7 39.7.8 47 .8c7.3 0 13.2 5.9 13.2 13.2v13.2H47zm0 6.6c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14C6.7 60.2.8 54.3.8 47c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0"/>
    <path d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V47zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33z" fill="#2EB67D"/>
    <path d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8H80zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80z" fill="#ECB22E"/>
  </svg>
);

const TeamsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-9.5 lg:h-9.5 xl:w-11 xl:h-11" fill="none">
    <path d="M37 16a4 4 0 100-8 4 4 0 000 8z" fill="#7B83EB"/>
    <path d="M43 20h-9a2 2 0 00-2 2v6a2 2 0 002 2h9a2 2 0 002-2v-6a2 2 0 00-2-2z" fill="#7B83EB"/>
    <path d="M22 13a6 6 0 100-12 6 6 0 000 12z" fill="#505AC9"/>
    <rect x="5" y="16" width="30" height="26" rx="5" fill="#464EB8"/>
    <path d="M20 22v14m-6-14h12" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" className="w-5 h-7.5 sm:w-6.5 sm:h-9.5 lg:w-7.5 lg:h-11 xl:w-8.5 xl:h-12.5" fill="none">
    <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE"/>
    <path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 11-19 0z" fill="#0ACF83"/>
    <path d="M19 0v19h9.5a9.5 9.5 0 100-19H19z" fill="#FF7262"/>
    <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E"/>
    <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF"/>
  </svg>
);

const VscodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7.5 h-7.5 sm:w-9 sm:h-9 lg:w-11 lg:h-11 xl:w-12 xl:h-12" fill="none">
    <path d="M17.5 2.5L7 11.5l3.5 3 7-6.5V2.5z" fill="#0065A9"/>
    <path d="M17.5 21.5l-7-6.5 7-6.5v13z" fill="#007ACC"/>
    <path d="M17.5 21.5L7 12.5l-4.5 3.5 3 2.5 12 3z" fill="#1F9CF0"/>
    <path d="M2.5 8l4.5 3.5 10.5-9-12 3-3 2.5z" fill="#0065A9"/>
    <path d="M17.5 2.5l4 2v15l-4 2V2.5z" fill="#1F9CF0"/>
  </svg>
);

// ========================================================
// REUSABLE EXTRA LARGE ICON BADGE TILE WITH LIGHT GRAY BORDER
// ========================================================
const IconTile = ({ children, title, className = '' }) => (
  <div
    title={title}
    className={`group relative flex items-center justify-center shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-16.5 lg:h-16.5 xl:w-18 xl:h-18 rounded-2xl sm:rounded-3xl bg-white border border-gray-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-gray-300 transition-all duration-200 hover:scale-115 cursor-pointer z-10 ${className}`}
  >
    {children}
  </div>
);

/**
 * TechIconsArc Component
 * Renders the 14 iconic developer tools stretched full-width across the page
 * from left edge to right edge with extra large icons and zero side gaps.
 */
const TechIconsArc = () => {
  return (
    <div
      aria-label="Developer Ecosystem Tech Arc"
      className="w-full max-w-[1720px] 2xl:max-w-none mx-auto px-3 sm:px-6 lg:px-10 xl:px-12 pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-24 lg:pb-28 relative select-none"
    >
      <style>{`
        @keyframes arcFloating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-arc-float {
          animation: arcFloating 5s ease-in-out infinite;
        }
      `}</style>

      {/* Full-width edge-to-edge spread across the screen (no side gap) */}
      <div className="w-full flex items-center justify-between gap-1 sm:gap-2 animate-arc-float">

        {/* -------------------------------------------------- */}
        {/* COLUMN 0: Slack (top) + Teams (bottom) - Left Edge */}
        {/* -------------------------------------------------- */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 shrink-0 translate-y-[42px] sm:translate-y-[56px] lg:translate-y-[70px]">
          <IconTile title="Slack">
            <SlackIcon />
          </IconTile>
          <IconTile title="Microsoft Teams">
            <TeamsIcon />
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 1: Figma (top) + Git (bottom) */}
        {/* -------------------------------------------------- */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 shrink-0 translate-y-[20px] sm:translate-y-[28px] lg:translate-y-[36px]">
          <IconTile title="Figma">
            <FigmaIcon />
          </IconTile>
          <IconTile title="Git">
            <div className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-9.5 lg:h-9.5 xl:w-10.5 xl:h-10.5 flex items-center justify-center text-[#F05032]">
              <SiGit className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 2: GitHub (single) */}
        {/* -------------------------------------------------- */}
        <div className="flex items-center justify-center shrink-0 translate-y-0">
          <IconTile title="GitHub">
            <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-10.5 lg:h-10.5 xl:w-11.5 xl:h-11.5 text-[#181717] flex items-center justify-center">
              <SiGithub className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 3: GitLab (single) */}
        {/* -------------------------------------------------- */}
        <div className="flex items-center justify-center shrink-0 -translate-y-[14px] sm:-translate-y-[20px] lg:-translate-y-[26px]">
          <IconTile title="GitLab">
            <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-10.5 lg:h-10.5 xl:w-11.5 xl:h-11.5 text-[#FC6D26] flex items-center justify-center">
              <SiGitlab className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 4: Bitbucket (crest peak, left center) */}
        {/* -------------------------------------------------- */}
        <div className="flex items-center justify-center shrink-0 -translate-y-[24px] sm:-translate-y-[32px] lg:-translate-y-[40px]">
          <IconTile title="Bitbucket">
            <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-10.5 lg:h-10.5 xl:w-11.5 xl:h-11.5 text-[#0052CC] flex items-center justify-center">
              <SiBitbucket className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 5: VS Code (crest peak, right center) */}
        {/* -------------------------------------------------- */}
        <div className="flex items-center justify-center shrink-0 -translate-y-[24px] sm:-translate-y-[32px] lg:-translate-y-[40px]">
          <IconTile title="Visual Studio Code">
            <VscodeIcon />
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 6: Android Studio + Cloud (single) */}
        {/* -------------------------------------------------- */}
        <div className="relative flex items-center justify-center shrink-0 -translate-y-[14px] sm:-translate-y-[20px] lg:-translate-y-[26px]">
          {/* Small cloud outline icon floating above right */}
          <svg
            viewBox="0 0 24 24"
            className="absolute -top-4 -right-2.5 sm:-right-3 w-5 h-5 text-[#38BDF8] stroke-current fill-none pointer-events-none z-20"
            strokeWidth="1.8"
          >
            <path d="M17.5 19H9a5 5 0 01-.8-9.9A6.5 6.5 0 0120.2 12 4.5 4.5 0 0117.5 19z" />
          </svg>
          <IconTile title="Android Studio">
            <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-10 lg:h-10 xl:w-11 xl:h-11 flex items-center justify-center text-[#3DDC84]">
              <SiAndroidstudio className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 7: Xcode (single) */}
        {/* -------------------------------------------------- */}
        <div className="flex items-center justify-center shrink-0 translate-y-0">
          <IconTile title="Apple Xcode">
            <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-10.5 lg:h-10.5 xl:w-11.5 xl:h-11.5 flex items-center justify-center text-[#147EFB]">
              <SiXcode className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 8: Postman (top) + MongoDB (bottom) */}
        {/* -------------------------------------------------- */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 shrink-0 translate-y-[20px] sm:translate-y-[28px] lg:translate-y-[36px]">
          <IconTile title="Postman">
            <div className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-9.5 lg:h-9.5 xl:w-10.5 xl:h-10.5 rounded-full bg-[#FF6C37] flex items-center justify-center p-0.5 text-white">
              <SiPostman className="w-full h-full fill-white" />
            </div>
          </IconTile>
          <IconTile title="MongoDB">
            <div className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-9.5 lg:h-9.5 xl:w-10.5 xl:h-10.5 flex items-center justify-center text-[#47A248]">
              <SiMongodb className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

        {/* -------------------------------------------------- */}
        {/* COLUMN 9: S (top) + MySQL Dolphin (bottom) - Right Edge */}
        {/* -------------------------------------------------- */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 shrink-0 translate-y-[42px] sm:translate-y-[56px] lg:translate-y-[70px]">
          <IconTile title="Swift / Services">
            <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-10.5 lg:h-10.5 xl:w-11.5 xl:h-11.5 rounded-xl bg-[#007ACC] flex items-center justify-center text-white font-black text-base sm:text-xl lg:text-2xl leading-none">
              S
            </div>
          </IconTile>
          <IconTile title="MySQL">
            <div className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-9.5 lg:h-9.5 xl:w-10.5 xl:h-10.5 flex items-center justify-center text-[#00758F]">
              <SiMysql className="w-full h-full fill-current" />
            </div>
          </IconTile>
        </div>

      </div>
    </div>
  );
};

export default TechIconsArc;
