import React, { useState, useEffect } from "react";
import logoImg from "../assets/logo.webp";
import { NavLink, Link } from "react-router-dom";

// Services dropdown ke items
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown link click hone par sari menus close karne ka handler
  const handleDropdownItemClick = () => {
    setDesktopDropdownOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-40 w-full bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        
        {/* BRAND LOGO */}
        <Link 
          to="/" 
          onClick={() => setMenuOpen(false)} 
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img 
            src={logoImg} 
            alt="DFL Express Logo" 
            className="h-10 w-auto object-contain" 
          />
          <div className="text-base md:text-xl font-extrabold leading-tight text-[#0B132A]">
            THE DFL GROUP
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
              Logistics
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                /* Services Menu Item controlled via Hover & State */
                <div 
                  key={item.name} 
                  className="relative py-2 cursor-pointer"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <div className={`flex items-center gap-1 text-sm font-bold transition-colors ${
                    desktopDropdownOpen ? "text-[#E66E19]" : "text-[#0B132A] hover:text-[#E66E19]"
                  }`}>
                    <span>{item.name}</span>
                    {/* Down Arrow Icon */}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180 text-[#E66E19]" : ""}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>

                    {/* Underline Animation */}
                    <span className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#E66E19] transition-transform duration-300 ease-out ${
                      desktopDropdownOpen ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </div>

                  {/* Dropdown Box - Click hone par close ho jata hai */}
                  {desktopDropdownOpen && (
                    <div className="absolute left-0 top-full w-64 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      <div className="flex flex-col gap-1">
                        {serviceDropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={handleDropdownItemClick}
                            className="rounded-lg px-4 py-2.5 text-xs font-semibold text-[#0B132A] transition-colors hover:bg-[#E66E19]/10 hover:text-[#E66E19]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative py-1 text-sm font-bold transition-colors ${
                    isActive ? "text-[#E66E19]" : "text-[#0B132A] hover:text-[#E66E19]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[#E66E19] transition-transform duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl bg-[#E66E19] px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:bg-[#d55f0f] active:scale-90 md:flex"
          >
            <span>Login</span>
            <span className="inline-block text-xl font-extrabold animate-[arrowNudge_1.2s_ease-in-out_infinite]">
              →
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-transparent text-[#0B132A] transition-transform active:scale-95 md:hidden"
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span className={`h-[2px] w-full bg-[#0B132A] transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full bg-[#0B132A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full bg-[#0B132A] transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`overflow-hidden bg-[#E66E19]/5 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-4">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.name} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between py-1 text-left w-full"
                  >
                    <span className="text-sm font-bold text-[#0B132A]">
                      {item.name}
                    </span>
                    <span className="p-1 text-[#0B132A]">
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Submenu for Mobile */}
                  {mobileServicesOpen && (
                    <div className="ml-4 flex flex-col gap-2 border-l-2 border-[#E66E19]/30 pl-3 my-1">
                      {serviceDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={handleDropdownItemClick}
                          className="text-xs font-semibold text-[#64748B] hover:text-[#E66E19] py-0.5"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-bold py-1 ${
                    isActive ? "text-[#E66E19]" : "text-[#0B132A]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
          
          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#E66E19] py-2.5 text-sm font-bold text-white transition-all active:scale-95"
          >
            <span>Login</span>
            <span className="inline-block text-xl font-extrabold animate-[arrowNudge_1.2s_ease-in-out_infinite]">
              →
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}