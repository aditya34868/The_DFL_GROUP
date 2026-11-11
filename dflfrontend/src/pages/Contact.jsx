import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Regex Patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Phone regex: Accepts optional country code (+91, etc.), 10 digits, spaces, and hyphens
  const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;

  const validateForm = (formData) => {
    const newErrors = {};
    const email = formData.get("email");
    const phone = formData.get("phone");

    if (!emailRegex.test(email)) {
      newErrors.email = t("contact.invalidEmail", "Please enter a valid email address (e.g. john@example.com).");
    }

    if (!phoneRegex.test(phone)) {
      newErrors.phone = t("contact.invalidPhone", "Please enter a valid phone number (e.g. +91 9876543210).");
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Validate inputs with Regex
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors if validation passes
    setErrors({});

    const response = await fetch("https://formspree.io/f/xljdargv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset(); // Clear all form inputs
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000); // Hide success message after 4s
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

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden">
          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm sm:text-base font-bold text-center animate-fade-in">
              ✓ {t("contact.successMessage", "Thank you! Your message has been sent successfully.")}
            </div>
          )}

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
              <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                {t("contact.mobileNumber", "Mobile Number")}
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder={t("contact.phonePlaceholder", "+91 98765 43210")}
                className={`w-full rounded-xl border px-4 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 transition-all ${errors.phone
                    ? "border-red-500 bg-red-50 text-red-900 focus:ring-red-500/20"
                    : "border-slate-200 bg-slate-50 text-slate-800 focus:border-[#E66E19] focus:bg-white focus:ring-[#E66E19]/20"
                  }`}
              />
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

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E66E19] px-8 lg:px-10 py-3.5 sm:py-4 text-sm lg:text-base font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-[#d55f0f] active:scale-95 cursor-pointer"
            >
              <span>{t("contact.submitInquiry", "Submit Inquiry")}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
