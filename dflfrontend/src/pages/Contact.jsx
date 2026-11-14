import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const countryCodes = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", country: "USA / Canada", flag: "🇺🇸" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
];

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const successRef = useRef(null);
  const countryDropdownRef = useRef(null);

  // Close country dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countryCodes.filter(
    (c) =>
      c.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch)
  );

  // Regex Patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // International phone validation: accepts +, digits, spaces, hyphens, brackets; 7 to 15 digits (ITU-T E.164)
  const isValidPhone = (phoneStr) => {
    if (!phoneStr) return false;
    if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(phoneStr)) return false;
    const digitsOnly = phoneStr.replace(/\D/g, "");
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  const validateForm = (formData, resolvedPhone) => {
    const newErrors = {};
    const email = formData.get("email");

    if (!emailRegex.test(email)) {
      newErrors.email = t("contact.invalidEmail", "Please enter a valid email address (e.g. john@example.com).");
    }

    if (!isValidPhone(resolvedPhone)) {
      newErrors.phone = t("contact.invalidPhone", "Please enter a valid phone number (e.g. +91 98765 43210).");
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const rawPhone = (formData.get("phone") || "").toString().trim();
    // Prepend selected country code if user didn't already type '+' in the phone field
    const resolvedPhone = rawPhone.startsWith("+")
      ? rawPhone
      : `${selectedCountry.code} ${rawPhone}`;

    // Validate inputs
    const validationErrors = validateForm(formData, resolvedPhone);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Set full international phone with country code for submission
    formData.set("phone", resolvedPhone);

    // Clear previous errors if validation passes
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xljdargv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset(); // Clear all form inputs
        setSelectedCountry(countryCodes[0]); // Reset country code to default
        setSubmitted(true);
        setTimeout(() => {
          successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
        setTimeout(() => setSubmitted(false), 8000); // Hide success message after 8s
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 font-sans">
      <div className="mx-auto max-w-3xl sm:max-w-4xl lg:max-w-5xl 2xl:max-w-5xl">
        <div className="text-center space-y-3 mb-10 lg:mb-14">
          <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19]">
            {t("contact.badge", "Get In Touch")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            {t("contact.pageTitle", "How Can We")}{" "}
            <span className="text-[#E66E19]">
              {t("contact.pageTitleHighlight", "Help You?")}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg lg:max-w-xl mx-auto">
            {t("contact.subtitle", "Fill out the form below and our support team will get back to you within 24 hours.")}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-14 shadow-xl relative">
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8 relative z-10" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                  {t("contact.fullName", "Full Name")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("contact.namePlaceholder", "John Doe")}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base text-slate-800 font-medium focus:border-[#E66E19] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E66E19]/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                  {t("contact.emailAddress", "Email Address")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t("contact.emailPlaceholder", "john@example.com")}
                  className={`w-full rounded-xl border px-4 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 transition-all ${errors.email
                      ? "border-red-500 bg-red-50 text-red-900 focus:ring-red-500/20"
                      : "border-slate-200 bg-slate-50 text-slate-800 focus:border-[#E66E19] focus:bg-white focus:ring-[#E66E19]/20"
                    }`}
                />
                {errors.email && (
                  <p className="text-xs sm:text-sm font-semibold text-red-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>{t("contact.mobileNumber", "Mobile Number")}</span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-normal normal-case">
                  (India & International)
                </span>
              </label>

              <div
                ref={countryDropdownRef}
                className={`relative flex items-center rounded-xl border transition-all ${
                  errors.phone
                    ? "border-red-500 bg-red-50 text-red-900 focus-within:ring-2 focus-within:ring-red-500/20"
                    : "border-slate-200 bg-slate-50 text-slate-800 focus-within:border-[#E66E19] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#E66E19]/20"
                }`}
              >
                {/* Compact, clean trigger button with nice radius */}
                <button
                  type="button"
                  onClick={() => setIsCountryOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 border-r border-slate-200/90 px-2.5 sm:px-3.5 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors shrink-0 cursor-pointer rounded-l-xl select-none"
                  aria-label="Select Country Code"
                  title={`${selectedCountry.country} (${selectedCountry.code})`}
                >
                  <span className="text-base sm:text-lg leading-none">{selectedCountry.flag}</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800">{selectedCountry.code}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      isCountryOpen ? "rotate-180 text-[#E66E19]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Phone Input */}
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={`${selectedCountry.country} number`}
                  className="w-full bg-transparent px-3.5 sm:px-4 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-medium outline-none text-slate-800 placeholder:text-slate-400 rounded-r-xl"
                />

                {/* Floating Responsive Dropdown Popover with Border Radius & Soft Shadow */}
                {isCountryOpen && (
                  <div className="absolute top-full left-0 mt-2 z-50 w-72 sm:w-80 max-w-[calc(100vw-3rem)] rounded-2xl bg-white shadow-2xl border border-slate-200/90 p-2 text-slate-800 animate-fade-in backdrop-blur-md">
                    {/* Search Bar inside Dropdown */}
                    <div className="p-1 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 focus-within:border-[#E66E19] focus-within:bg-white transition-all">
                        <svg
                          className="w-3.5 h-3.5 text-slate-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                          type="text"
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          placeholder="Search country or code..."
                          className="w-full bg-transparent text-xs text-slate-800 outline-none placeholder:text-slate-400 font-medium"
                          autoFocus
                        />
                        {countrySearch && (
                          <button
                            type="button"
                            onClick={() => setCountrySearch("")}
                            className="text-slate-400 hover:text-slate-600 text-xs px-1 cursor-pointer"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Scrollable list with rounded items */}
                    <div className="max-h-56 overflow-y-auto space-y-0.5 pt-1.5 pr-0.5">
                      {filteredCountries.map((c, idx) => {
                        const isSelected = selectedCountry.code === c.code && selectedCountry.country === c.country;
                        return (
                          <button
                            key={`${c.code}-${c.country}-${idx}`}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsCountryOpen(false);
                              setCountrySearch("");
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-orange-50 text-[#E66E19] font-bold"
                                : "text-slate-700 hover:bg-slate-50 font-medium"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 truncate mr-2">
                              <span className="text-base shrink-0 leading-none">{c.flag}</span>
                              <span className="truncate">{c.country}</span>
                            </div>
                            <span
                              className={`text-[11px] font-bold shrink-0 px-2 py-0.5 rounded-lg ${
                                isSelected ? "bg-[#E66E19]/10 text-[#E66E19]" : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {c.code}
                            </span>
                          </button>
                        );
                      })}
                      {filteredCountries.length === 0 && (
                        <div className="py-6 text-center text-xs text-slate-400 font-medium">
                          No country found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {errors.phone && (
                <p className="text-xs sm:text-sm font-semibold text-red-500 mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                {t("contact.describeConcern", "Describe Your Concern")}
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder={t("contact.messagePlaceholder", "Tell us more about your requirements or the issue you are facing...")}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base text-slate-800 font-medium focus:border-[#E66E19] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E66E19]/20 transition-all resize-y"
              />
            </div>

            {/* In-Form Success Banner directly above the Submit button */}
            {submitted && (
              <div
                ref={successRef}
                className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-500/40 text-emerald-900 shadow-md flex items-center justify-between gap-3 animate-fade-in"
              >
                <div className="flex items-center gap-3.5">
                  <div className="h-9 w-9 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-base shadow">
                    ✓
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-emerald-900">
                    {t("contact.successMessage", "Thank you! Your message has been sent successfully.")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="shrink-0 p-1.5 text-emerald-700 hover:text-emerald-950 font-bold text-lg cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E66E19] px-8 lg:px-10 py-3.5 sm:py-4 text-sm lg:text-base font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-[#d55f0f] active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>{t("contact.submitInquiry", "Submit Inquiry")}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
