import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTalkModal } from "../context/TalkModalContext";
import { footerData } from "../data/siteData";

const SOCIAL_ICONS = {
  Facebook: FiFacebook,
  Instagram: FiInstagram,
  LinkedIn: FiLinkedin,
  X: FiTwitter,
  Twitter: FiTwitter,
};

export function SocialIcon({ name, className = "h-4 w-4" }) {
  const Icon = SOCIAL_ICONS[name];
  return Icon ? <Icon className={className} /> : null;
}

export default function Footer() {
  const { openModal } = useTalkModal();
  const navigate = useNavigate();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-slate-700 bg-[#0B132A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Branding & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E66E19] text-sm font-black shadow-md">
                DFL
              </span>
              <div>
                <h3 className="text-lg font-bold leading-tight">{footerData.companyInfo.brandName}</h3>
                <p className="text-[11px] text-slate-400">{footerData.companyInfo.legalName}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300">
              {footerData.companyInfo.tagline}
            </p>

            <a
              href={footerData.companyInfo.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#238B9B] hover:text-[#E66E19]"
            >
              🌐 {footerData.companyInfo.website}
            </a>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Connect With Us
              </span>
              <div className="mt-2.5 flex items-center gap-2.5">
                {footerData.socialLinks.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow DFL Express on ${name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-[#1E293B]/80 text-slate-300 transition-all hover:border-[#E66E19] hover:bg-[#E66E19] hover:text-white active:scale-95"
                  >
                    <SocialIcon name={name} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <button type="button" onClick={openModal} className="hover:text-white">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Legal (Simple & Direct Links) */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerData.servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link 
                    to={service.path} 
                    onClick={scrollToTop} 
                    className="hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-[#E66E19]">Legal Policies</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerData.legalLinks.map(({ path, label }, idx) => (
                <li key={idx}>
                  <Link 
                    to={path} 
                    onClick={scrollToTop} 
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Offices */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">Global Offices</h4>
            <div className="space-y-3">
              {footerData.globalOffices.map(({ country, phone }, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-[#1E293B]/60 p-2.5">
                  <span className="block text-xs font-bold">{country}</span>
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="mt-0.5 block font-mono text-xs text-[#238B9B] hover:text-[#E66E19]"
                  >
                    📞 {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#070C1B] px-6 py-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved by{" "}
            <span className="font-semibold text-white">The Dfl Group</span> | DFL Express | {footerData.companyInfo.legalName}.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[#E66E19] active:scale-95"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}