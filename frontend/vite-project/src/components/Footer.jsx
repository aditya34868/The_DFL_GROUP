import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTalkModal } from "../context/TalkModalContext";
import { footerData } from "../data/siteData";

// Helper Component for Clean Inline Social SVGs
function SocialIcon({ name }) {
  switch (name) {
    case "Facebook":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "X":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const { openModal } = useTalkModal();
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashNav = (hash) => {
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${hash}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-700 bg-[#0B132A] text-white">
      {/* Main Footer Body */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Company Branding & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E66E19] text-sm font-black text-white shadow-md">
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
            <div className="pt-1">
              <a
                href={footerData.companyInfo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#238B9B] transition-colors hover:text-[#E66E19]"
              >
                🌐 {footerData.companyInfo.website}
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Connect With Us
              </span>
              <div className="mt-2.5 flex items-center gap-2.5">
                {footerData.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow DFL Express on ${social.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-[#1E293B]/80 text-slate-300 transition-all duration-200 hover:border-[#E66E19] hover:bg-[#E66E19] hover:text-white active:scale-95"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" onClick={scrollToTop} className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleHashNav("services")}
                  className="text-left transition-colors hover:text-white"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleHashNav("tracking")}
                  className="text-left transition-colors hover:text-white"
                >
                  Tracking
                </button>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerData.servicesList.map((service, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleHashNav("services")}
                    className="text-left transition-colors hover:text-white"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              Legal Policies
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerData.legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Offices */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              Global Offices
            </h4>
            <div className="space-y-3">
              {footerData.globalOffices.map((office, index) => (
                <div key={index} className="rounded-xl border border-slate-800 bg-[#1E293B]/60 p-2.5">
                  <span className="block text-xs font-bold text-white">{office.country}</span>
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, '')}`}
                    className="mt-0.5 block font-mono text-xs text-[#238B9B] transition-colors hover:text-[#E66E19]"
                  >
                    📞 {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar / Copyright */}
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





/////////////
//////////



