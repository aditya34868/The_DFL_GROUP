import React from 'react';
import { dflRecommendedBrands } from '../data/siteData';
import {
  SiEbay,
  SiMeta,
  SiWhatsapp,
  SiUnitedairlines,
  SiInstagram,
  SiFacebook,
  SiGoogle,
  SiShopify,
  SiEtsy,
} from 'react-icons/si';
import { RiOpenaiFill } from 'react-icons/ri';
import { FaAmazon } from 'react-icons/fa6';

const RecommendedBrandsSection = () => {
  // Render official icon + clean brand lockup with extra large, prominent sizing
  const renderBrandLogo = (brandName) => {
    switch (brandName) {
      case 'eBay':
        return (
          <div className="flex items-center justify-center text-[#0654BA] hover:text-[#0064D2] transition-colors">
            <SiEbay className="w-20 h-10 sm:w-24 sm:h-12 object-contain" />
          </div>
        );

      case 'Cashfree Payments':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#00897B] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-xs shrink-0">
              ₹
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900">Cashfree</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-widest mt-0.5">Payments</span>
            </div>
          </div>
        );

      case 'MarkScan':
        return (
          <div className="flex items-center gap-2.5 text-neutral-900">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#E66E19] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <circle cx="12" cy="11" r="2.5" fill="currentColor" />
            </svg>
            <span className="font-black tracking-tight text-lg sm:text-xl">
              MARK<span className="font-light text-neutral-500">SCAN</span>
            </span>
          </div>
        );

      case 'Meta':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#0081FB] transition-colors">
            <SiMeta className="w-8 h-8 sm:w-9 sm:h-9 text-[#0081FB] shrink-0" />
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900">Meta</span>
          </div>
        );

      case 'OpenAI':
        return (
          <div className="flex items-center gap-2.5 text-neutral-900">
            <RiOpenaiFill className="w-8 h-8 sm:w-9 sm:h-9 text-neutral-900 shrink-0" />
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900">OpenAI</span>
          </div>
        );

      case 'WhatsApp':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#25D366] transition-colors">
            <SiWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 text-[#25D366] shrink-0" />
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900">WhatsApp</span>
          </div>
        );

      case 'Gofo':
        return (
          <div className="flex items-center gap-2.5 text-neutral-900">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
              G
            </div>
            <span className="font-black text-lg sm:text-xl tracking-wider text-neutral-900 uppercase">GOFO</span>
          </div>
        );

      case 'United':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#002244] transition-colors">
            <SiUnitedairlines className="w-8 h-8 sm:w-9 sm:h-9 text-[#002244] shrink-0" />
            <span className="font-black text-base sm:text-lg tracking-widest text-neutral-900 uppercase">UNITED</span>
          </div>
        );

      case 'Skynet':
        return (
          <div className="flex items-center gap-2.5 text-neutral-900">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#D92D20] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-base sm:text-lg tracking-wider text-neutral-900 uppercase">SKYNET</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Worldwide</span>
            </div>
          </div>
        );

      case 'TPL':
        return (
          <div className="flex items-center gap-2.5 text-neutral-900">
            <div className="px-2.5 py-1 rounded-md bg-neutral-900 text-white font-mono font-black text-xs sm:text-sm tracking-wider shrink-0">
              TPL
            </div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-neutral-800">Logistics</span>
          </div>
        );

      case 'Enva':
        return (
          <div className="flex items-center gap-2 text-neutral-900">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
            <span className="font-black text-lg sm:text-xl tracking-tight text-neutral-900">enva</span>
          </div>
        );

      case 'RSA':
        return (
          <div className="flex items-center gap-2.5 text-neutral-900">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#C8102E] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-xs">
              ✓
            </div>
            <span className="font-black text-lg sm:text-xl tracking-widest text-neutral-900 uppercase">RSA</span>
          </div>
        );

      case 'Instagram':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#E4405F] transition-colors">
            <SiInstagram className="w-8 h-8 sm:w-9 sm:h-9 text-[#E4405F] shrink-0" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-neutral-900">Instagram</span>
          </div>
        );

      case 'Facebook':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#1877F2] transition-colors">
            <SiFacebook className="w-8 h-8 sm:w-9 sm:h-9 text-[#1877F2] shrink-0" />
            <span className="font-black text-lg sm:text-xl tracking-tight text-neutral-900">facebook</span>
          </div>
        );

      case 'Google':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#4285F4] transition-colors">
            <SiGoogle className="w-8 h-8 sm:w-9 sm:h-9 text-[#4285F4] shrink-0" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-neutral-900">Google</span>
          </div>
        );

      case 'Amazon':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#FF9900] transition-colors">
            <FaAmazon className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF9900] shrink-0" />
            <span className="font-black text-lg sm:text-xl tracking-tight text-neutral-900">amazon</span>
          </div>
        );

      case 'Shopify':
        return (
          <div className="flex items-center gap-2.5 text-neutral-800 hover:text-[#96BF48] transition-colors">
            <SiShopify className="w-8 h-8 sm:w-9 sm:h-9 text-[#96BF48] shrink-0" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-neutral-900">shopify</span>
          </div>
        );

      case 'Etsy':
        return (
          <div className="flex items-center gap-2 text-neutral-800 hover:text-[#F1641E] transition-colors">
            <SiEtsy className="w-9 h-9 sm:w-10 sm:h-10 text-[#F1641E] shrink-0" />
            <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-neutral-900">Etsy</span>
          </div>
        );

      default:
        return (
          <span className="font-black text-lg tracking-tight text-neutral-900">
            {brandName}
          </span>
        );
    }
  };

  return (
    <section
      aria-label="Brands that DFL got recommended"
      className="relative z-10 w-full bg-white border-t border-slate-100 font-sans"
    >
      <div className="max-w-7xl mx-auto pt-10 sm:pt-12 pb-2 sm:pb-3 px-6 sm:px-10">
        {/* Centered Large Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-neutral-900 tracking-tight text-center mb-16">
          Brands that DFL got recommended
        </h2>

        {/* Multi-Row Brand Logo Grid: 18 Brands in 3 rows of 6 with extra large prominence */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-12 sm:gap-x-14 gap-y-12 sm:gap-y-14 items-center justify-items-center">
          {dflRecommendedBrands.map((brandName) => (
            <div
              key={brandName}
              title={brandName}
              className="w-full flex items-center justify-center p-3 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-default select-none"
            >
              {renderBrandLogo(brandName)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedBrandsSection;
