import React from "react";

export default function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white mt-14 text-slate-800 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        
        {/* Header */}
        <header className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wide">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Demira Freight Linkers India Private Limited (DFL Express)
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block rounded-md bg-[#E66E19]/10 border border-[#E66E19]/20 px-3 py-1 text-xs font-bold text-[#E66E19]">
                Version 3.0
              </span>
              <p className="text-[11px] text-slate-500 mt-1">
                Last Updated: <span className="text-red-600 font-semibold">July 1, 2026</span>
              </p>
            </div>
          </div>
        </header>

        {/* Policy Body */}
        <div className="space-y-8 text-xs leading-relaxed text-slate-700">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">1. Introduction</h2>
            <p>
              This Privacy Policy explains how Demira Freight Linkers India Private Limited ("Company"), operating under the trade names DFL Express, The DFL Group, and other DFL-branded services, collects, uses, stores, processes, shares, and protects personal and business information when you access or use our websites, customer portal, digital platforms, APIs, logistics services, or any other products and services offered by the Company.
            </p>
            <p>
              The terms "DFL Express," "The DFL Group," "Company," "we," "our," or "us" refer to Demira Freight Linkers India Private Limited, including its trade names, brands, employees, directors, authorized representatives, affiliates, service providers, and business partners.
            </p>
            
            {/* RED HIGHLIGHT - Compliance */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900">
              <strong className="font-bold block text-red-700 mb-1 text-xs">Regulatory Compliance Notice:</strong>
              This Policy has been prepared in accordance with the <strong className="text-red-700">Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong className="text-red-700">Information Technology Act, 2000</strong>, and other applicable laws and regulations of India.
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">2. Scope of Policy</h2>
            <p>This Privacy Policy applies to all information collected through our official digital touchpoints and platforms:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700">
              <li>www.thedflexpress.com & www.thedflgroup.com</li>
              <li>Online booking portal & Customer dashboard</li>
              <li>APIs and logistics automation services</li>
              <li>Marketplace integrations (Amazon, Shopify, WooCommerce, eBay, etc.)</li>
              <li>AI-enabled automated features</li>
              <li>Mobile applications and technology solutions</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">3. About DFL Express & Roles We Play</h2>
            <p>
              DFL Express is headquartered in Noida, Uttar Pradesh, India, with international operations in Navi Mumbai, Dubai (UAE), and Thailand.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-bold text-slate-900 mb-1">Data Controller Role</h3>
                <p>We process data for account management, payments, legal compliance, and operational optimization.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-bold text-slate-900 mb-1">Data Processor Role</h3>
                <p>We process customer data on behalf of business clients utilizing our technology platforms or API integrations.</p>
              </div>
            </div>
          </section>

          {/* Section 4 & 4A - RED HIGHLIGHT (IDENTITY & CUSTOMS) */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">4. Information We Collect & Identity Documentation</h2>
            <p>We collect standard account details, payment records, device IP addresses, shipping manifests, and tracking events.</p>
            
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 space-y-2 text-red-900">
              <h3 className="font-bold text-red-700 text-sm">4A. Identity & Customs Documents Compliance</h3>
              <p>
                To facilitate international customs clearance, export regulatory compliance, and mandatory KYC verification, DFL Express may collect and store:
              </p>
              <ul className="list-disc list-inside space-y-1 font-mono text-[11px] text-red-800">
                <li>Aadhaar Card (where legally permissible and with safeguards)</li>
                <li>Permanent Account Number (PAN)</li>
                <li>Passport Details</li>
                <li>Goods and Services Tax (GST) & Import Export Code (IEC)</li>
              </ul>
              <p className="text-[11px] pt-1 text-red-700 font-medium">
                * Note: Users may provide PAN or Passport as a direct alternative to Aadhaar where permitted by customs regulations.
              </p>
            </div>
          </section>

          {/* Section 5 & 6 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">5. How We Use & Share Information</h2>
            <p>
              Your data is strictly utilized for shipment execution, customs validation, automated logistics processing, and service communications.
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900 mb-2">Third-Party Data Processing Partners:</p>
              <p className="text-slate-600 leading-relaxed">
                We share data strictly on a need-to-know basis with partner couriers, airlines, freight forwarders, customs officials, payment gateways, and cloud servers. <span className="text-red-600 font-bold">We never sell, rent, or trade your personal data to third parties for independent marketing.</span>
              </p>
            </div>
          </section>

          {/* Section 6A to 6E - SPECIAL INTEGRATIONS */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">6. Marketplace Integrations, APIs & AI Usage</h2>
            
            <div className="space-y-3">
              {/* RED HIGHLIGHT - Amazon */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900">
                <h3 className="font-bold text-red-700 text-xs">Amazon SP-API & Seller Central Compliance</h3>
                <p className="mt-1 text-[11px] leading-relaxed">
                  Data obtained via Amazon Selling Partner API (SP-API) is used strictly for authorized shipment generation and tracking. You may revoke account permissions at any time through Amazon Seller Central settings. Amazon SP-API data is never transferred or used for unauthorized profiling.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                <h3 className="font-bold text-slate-900 text-xs">Artificial Intelligence (AI) Operations</h3>
                <p className="mt-1 text-[11px] leading-relaxed">
                  We leverage machine learning and AI algorithms exclusively for automated address parsing, Optical Character Recognition (OCR) document checks, route optimization, and operational efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7, 8 & 9 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">7. Security & International Data Transfers</h2>
            <p>
              We implement industry-standard administrative and technical security controls including SSL/TLS encryption, Role-Based Access Controls (RBAC), firewalls, and isolated cloud hosting.
            </p>
            <p>
              Due to the cross-border nature of international logistics, personal data may be processed or transferred through systems in <span className="text-red-600 font-semibold">India, UAE, Thailand,</span> or your designated shipment destination country.
            </p>
          </section>

          {/* Section 10 & 11 - RED HIGHLIGHT (USER RIGHTS) */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">8. Data Retention & User Rights</h2>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 space-y-2 text-red-900">
              <h3 className="font-bold text-red-700 text-sm">Your Data Rights Under DPDP Act 2023:</h3>
              <ul className="list-disc list-inside space-y-1 text-red-800">
                <li>Right to access personal data summary held by us.</li>
                <li>Right to request correction or updates to inaccurate data.</li>
                <li>Right to request account deletion & data erasure (subject to mandatory tax/customs legal hold requirements).</li>
                <li>Right to revoke processing consent for non-essential features.</li>
              </ul>
            </div>
          </section>

          {/* Section 14 - CONTACT */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-base font-bold text-[#E66E19]">9. Contact & Grievance Redressal</h2>
            <p>For any privacy concerns, data updates, or rights requests, contact our Data Protection desk:</p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1 font-mono text-xs text-slate-800">
              <p><strong className="text-slate-900">DFL Express</strong> (Demira Freight Linkers India Pvt. Ltd.)</p>
              <p>Email: <a href="mailto:support@thedflexpress.com" className="text-red-600 font-semibold underline">support@thedflexpress.com</a></p>
              <p>Website: <a href="https://www.thedflexpress.com" target="_blank" rel="noreferrer" className="text-[#E66E19] font-semibold underline">www.thedflexpress.com</a></p>
            </div>
          </section>

        </div>

        {/* Footer Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Demira Freight Linkers India Pvt. Ltd. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-lg border border-[#E66E19] bg-[#E66E19] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#d56113] active:scale-95 shadow-sm"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </div>
  );
}