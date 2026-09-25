import React, { useState, useEffect } from "react";
import logoImg from "../assets/logo.webp";
import { NavLink, Link } from "react-router-dom";

const serviceDropdownItems = [
  { name: "Freight Forwarding", path: "/services/freight-forwarding" },
  { name: "Transportation", path: "/services/transportation" },
  { name: "Ocean Freight Forwarding", path: "/services/ocean-freight" },
  { name: "Custom Clearance", path: "/services/custom-clearance" },
  { name: "Warehousing", path: "/services/warehousing" },
 
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "DFL ITSolution", path: "/dflit" },
  { name: "Our Presence", path: "/ourPresence" },
  { name: "Team", path: "/team" },
];


// SHARED UTILITY COMPONENTS
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#E66E19]" : "text-slate-500"}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);


const LoginBtn = ({ onClick, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center gap-2 rounded-xl bg-[#E66E19] px-4 py-2 text-sm font-bold text-white transition-all hover:bg-[#d55f0f] active:scale-95 ${className}`}
  >
    <span>Login</span>
    <span className="text-base font-extrabold transition-transform group-hover:translate-x-1">→</span>
  </button>
);

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);        // Mobile drawer toggle
const [isScrolled, setIsScrolled] = useState(false);    // Scroll condition check
const [mobileServicesOpen, setMobileServicesOpen] = useState(false);//Mobile Services 
const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false); // Desktop Services

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllMenus = () => {
    setDesktopDropdownOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleLogin = () => {
    window.location.href = "https://express.thedflgroup.com/login";
  };

  return (
    <nav className={`fixed left-0 top-0 z-40 w-full bg-white transition-all duration-300 ${isScrolled ? "shadow-md py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        
        {/* BRAND LOGO */}
        <Link to="/" onClick={closeAllMenus} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src={logoImg} alt="DFL Express Logo" className="h-10 w-auto object-contain" />
          <div className="text-base md:text-xl font-extrabold text-[#0B132A] leading-tight">
            THE DFL GROUP
            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Logistics
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.name}
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <div className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${desktopDropdownOpen ? "text-[#E66E19]" : "text-[#0B132A] hover:text-[#E66E19]"}`}>
                  <span>{item.name}</span>
                  <ChevronIcon isOpen={desktopDropdownOpen} />
                </div>

                {desktopDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-56 z-50">
                    <div className="flex flex-col gap-1 rounded-xl bg-white p-2 shadow-xl border border-slate-100">
                      {serviceDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={closeAllMenus}
                          className="rounded-lg px-3.5 py-2 text-xs font-semibold text-[#0B132A] hover:bg-orange-50 hover:text-[#E66E19] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors hover:text-[#E66E19] ${isActive ? "text-[#E66E19]" : "text-[#0B132A]"}`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          <LoginBtn onClick={handleLogin} className="hidden md:flex" />

          {/* HAMBURGER ICON */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 md:hidden items-center justify-center rounded-xl border border-slate-200 text-[#0B132A]"
          >
            <div className="flex h-3.5 w-4 flex-col justify-between">
              <span className={`h-[2px] w-full bg-current transition-all ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-all ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`overflow-hidden transition-all duration-300 md:hidden bg-slate-50 ${menuOpen ? "max-h-[500px] border-b border-slate-200" : "max-h-0"}`}>
        <div className="flex flex-col gap-2 px-6 py-4">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex items-center justify-between py-1 text-sm font-bold text-[#0B132A]"
                >
                  <span>{item.name}</span>
                  <ChevronIcon isOpen={mobileServicesOpen} />
                </button>

                {mobileServicesOpen && (
                  <div className="ml-3 my-1 flex flex-col gap-1 border-l-2 border-[#E66E19] pl-3">
                    {serviceDropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={closeAllMenus}
                        className="py-1 text-xs font-semibold text-slate-600 hover:text-[#E66E19]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-1 text-sm font-bold ${isActive ? "text-[#E66E19]" : "text-[#0B132A]"}`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
          <LoginBtn onClick={handleLogin} className="mt-2 w-full justify-center" />
        </div>
      </div>
    </nav>
  );
}

