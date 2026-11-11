import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { footerData } from "../data/siteData";

const SOCIAL_ICONS = {
  Facebook: FiFacebook,
  Instagram: FiInstagram,
  LinkedIn: FiLinkedin,
  X: FiTwitter,
  Twitter: FiTwitter,
};

const LEGAL_LINKS = [
  { path: "/privacy-policy", labelKey: "privacyPolicy" },
  { path: "/terms-conditions", labelKey: "termsConditions" },
];

export function SocialIcon({ name, className = "h-4 w-4" }) {
  const Icon = SOCIAL_ICONS[name];
  return Icon ? <Icon className={className} /> : null;
}

export default function Footer() {
  const { t } = useTranslation();

  // Translated arrays from translation.json; English siteData is the fallback
const rawServices = t("servicesList", {
    returnObjects: true,
    defaultValue: footerData.servicesList,
  });
  const services = Array.isArray(rawServices) ? rawServices : footerData.servicesList;

  const rawOffices = t("globalOffices", {
    returnObjects: true,
    defaultValue: footerData.globalOffices,
  });
  const offices = Array.isArray(rawOffices) ? rawOffices : footerData.globalOffices;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-slate-700 bg-[#0B132A] text-white">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 py-12 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Branding & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://thedflgroup.com/wp-content/uploads/2025/11/Final-LOGO-Dinesh-R1-3.png"
                alt="logo.png"
                className="w-12"
              />
              <div>
                <h3 className="text-lg font-bold leading-tight">{t("companyInfo.brandName")}</h3>
                <p className="text-[11px] text-slate-400">{t("companyInfo.legalName")}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300">
              {t("companyInfo.tagline")}
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
                {t("footer.connectWithUs")}
              </span>
              <div className="mt-2.5 flex items-center gap-2.5">
                {footerData.socialLinks.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("footer.followOn", { name })}
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
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-white">
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-white">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="hover:text-white">
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Legal */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {services.map((service, idx) => (
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

            <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              {t("footer.legalPolicies")}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {LEGAL_LINKS.map(({ path, labelKey }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={scrollToTop}
                    className="hover:text-white transition-colors"
                  >
                    {t(`footer.${labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Offices */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#E66E19]">
              {t("footer.globalOffices")}
            </h4>
            <div className="space-y-3">
              {offices.map(({ country, phone }, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-[#1E293B]/60 p-2.5">
                  <span className="block text-xs font-bold">{country}</span>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
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
            {t("footer.copyright", {
              year: new Date().getFullYear(),
              legalName: footerData.companyInfo.legalName,
            })}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[#E66E19] active:scale-95"
          >
            {t("footer.backToTop")} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}