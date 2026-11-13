import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

// SERVICE DROPDOWN ITEMS
const serviceDropdownItems = [
  {
    key: "airFreight",
    path: "/services/air-freight-forwarding",
  },
  {
    key: "transportation",
    path: "/services/transportation",
  },
  {
    key: "oceanFreight",
    path: "/services/ocean-freight",
  },
  {
    key: "customClearance",
    path: "/services/custom-clearance",
  },
  {
    key: "warehousing",
    path: "/services/warehousing",
  },
  {
    key: "perishable",
    path: "/services/perishable-cargo",
  },
];

// NAVIGATION ITEMS (Fixed key 'dflIt' to match translation.json)
const navItems = [
  {
    key: "home",
    path: "/",
  },
  {
    key: "about",
    path: "/about",
  },
  {
    key: "services",
    path: "/services",
    hasDropdown: true,
  },
  {
    key: "dflIt",
    path: "/dflit",
  },
  {
    key: "ourPresence",
    path: "/ourPresence",
  },
  {
    key: "team",
    path: "/team",
  },
  {
    key: "contact",
    path: "/contactUs",
  },
];

// SHARED UTILITY COMPONENTS
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${
      isOpen ? "rotate-180 text-[#E66E19]" : "text-slate-500"
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// LOGIN BUTTON (Fixed translation key to navbar.login)
const LoginBtn = ({ onClick, className = "", t }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group flex items-center gap-1.5 rounded-xl bg-[#E66E19] px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-white transition-all hover:bg-[#d55f0f] active:scale-95 shadow-sm hover:shadow-md shrink-0 ${className}`}
  >
    <span>{t("navbar.login")}</span>

    <span className="text-sm font-bold transition-transform group-hover:translate-x-1">
      →
    </span>
  </button>
);

export default function Navbar() {
  // Mobile drawer toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll condition check
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile Services
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Desktop Services
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  // i18next
  const { t } = useTranslation();

  // SCROLL HANDLER
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLOSE ALL MENUS
  const closeAllMenus = () => {
    setDesktopDropdownOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  // LOGIN
  const handleLogin = () => {
    window.location.href = "https://express.thedflgroup.com/login";
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-40 w-full bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-3 sm:py-3.5 lg:py-4" : "py-4 sm:py-5 lg:py-5.5 xl:py-6"
      }`}
    >
      {/* MAIN NAVBAR CONTAINER - Responsive width matching page layout */}
      <div className="mx-auto flex w-full max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] items-center justify-between px-4 sm:px-6 lg:px-5 xl:px-8 2xl:px-10">
        {/* BRAND LOGO */}
        <Link
          to="/"
          onClick={closeAllMenus}
          className="flex items-center gap-2.5 sm:gap-3 xl:gap-3.5 hover:opacity-90 transition-opacity shrink-0"
        >
          <img
            src="https://thedflgroup.com/wp-content/uploads/2025/11/Final-LOGO-Dinesh-R1-3.png"
            alt="DFL Express Logo"
            className="h-9 sm:h-9.5 xl:h-10.5 w-auto object-contain"
          />

          <div className="text-sm sm:text-base xl:text-xl font-black text-[#0B132A] leading-tight tracking-tight">
            THE DFL GROUP
            <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Logistics
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV - Switches at lg: with perfectly tuned responsive gaps */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-5.5 2xl:gap-7">
          {navItems.map((item) =>
            item.hasDropdown ? (
              // SERVICES WITH DROPDOWN
              <div
                key={item.key}
                className="relative py-2.5 cursor-pointer"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <div
                  className={`flex items-center gap-1.5 text-[13px] xl:text-[14px] 2xl:text-[15.5px] font-bold transition-colors whitespace-nowrap ${
                    desktopDropdownOpen
                      ? "text-[#E66E19]"
                      : "text-[#0B132A] hover:text-[#E66E19]"
                  }`}
                >
                  {/* TRANSLATED SERVICES */}
                  <span>{t(`navbar.${item.key}`)}</span>

                  <ChevronIcon isOpen={desktopDropdownOpen} />
                </div>

                {/* DESKTOP SERVICES DROPDOWN */}
                {desktopDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-56 z-50">
                    <div className="flex flex-col gap-1 rounded-xl bg-white p-2 shadow-xl border border-slate-100">
                      {serviceDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          to={subItem.path}
                          onClick={closeAllMenus}
                          className="rounded-lg px-3.5 py-2 text-xs xl:text-sm font-semibold text-[#0B132A] hover:bg-orange-50 hover:text-[#E66E19] transition-colors"
                        >
                          {/* TRANSLATED SERVICE from navbar scope */}
                          {t(`navbar.${subItem.key}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // NORMAL DESKTOP NAV ITEM
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `text-[13px] xl:text-[14px] 2xl:text-[15.5px] font-bold transition-colors hover:text-[#E66E19] whitespace-nowrap py-1.5 ${
                    isActive ? "text-[#E66E19]" : "text-[#0B132A]"
                  }`
                }
              >
                {/* TRANSLATED NAV ITEM */}
                {t(`navbar.${item.key}`)}
              </NavLink>
            )
          )}
        </div>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3.5">
          {/* DESKTOP LANGUAGE SWITCHER */}
          <div className="hidden lg:block shrink-0">
            <LanguageSwitcher />
          </div>

          {/* DESKTOP LOGIN */}
          <LoginBtn onClick={handleLogin} className="hidden lg:flex" t={t} />

          {/* HAMBURGER ICON - Active until lg: (1024px) */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 lg:hidden items-center justify-center rounded-xl border border-slate-200 text-[#0B132A] hover:bg-slate-50 transition-colors"
          >
            <div className="flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`h-[2px] w-full bg-current transition-all ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-[2px] w-full bg-current transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-[2px] w-full bg-current transition-all ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER - Handles < lg: screens */}
      <div
        className={`transition-all duration-300 lg:hidden bg-slate-50 ${
          menuOpen
            ? "max-h-[85vh] overflow-y-auto border-b border-slate-200 shadow-lg"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-3 px-6 py-4">
          {navItems.map((item) =>
            item.hasDropdown ? (
              // MOBILE SERVICES
              <div key={item.key} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex items-center justify-between py-1.5 text-base sm:text-lg font-bold text-[#0B132A]"
                >
                  <span>{t(`navbar.${item.key}`)}</span>

                  <ChevronIcon isOpen={mobileServicesOpen} />
                </button>

                {/* MOBILE SERVICES DROPDOWN */}
                {mobileServicesOpen && (
                  <div className="ml-3 my-1 flex flex-col gap-1.5 border-l-2 border-[#E66E19] pl-3">
                    {serviceDropdownItems.map((subItem) => (
                      <Link
                        key={subItem.key}
                        to={subItem.path}
                        onClick={closeAllMenus}
                        className="py-1 text-sm font-semibold text-slate-700 hover:text-[#E66E19]"
                      >
                        {t(`navbar.${subItem.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // NORMAL MOBILE NAV ITEM
              <NavLink
                key={item.key}
                to={item.path}
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-1.5 text-base sm:text-lg font-bold ${
                    isActive ? "text-[#E66E19]" : "text-[#0B132A]"
                  }`
                }
              >
                {t(`navbar.${item.key}`)}
              </NavLink>
            )
          )}

          {/* MOBILE LANGUAGE SWITCHER & LOGIN */}
          <div className="mt-2 flex flex-col gap-3 pt-2 border-t border-slate-200">
            {/* LANGUAGE SWITCHER (inline = drawer ke andar khulta hai, clip nahi hota) */}
            <div className="w-full">
              <LanguageSwitcher inline />
            </div>

            {/* LOGIN BUTTON */}
            <LoginBtn
              onClick={handleLogin}
              className="w-full justify-center"
              t={t}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}