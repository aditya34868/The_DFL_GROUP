import React from "react";

export default function TermAndCondition() {
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
                Terms & Conditions
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Demira Freight Linkers India Private Limited (DFL Express)
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block rounded-md bg-[#E66E19]/10 border border-[#E66E19]/20 px-3 py-1 text-xs font-bold text-[#E66E19]">
                Legal Terms
              </span>
              <p className="text-[11px] text-slate-500 mt-1">
                Last Updated: <span className="text-red-600 font-semibold">July 3, 2026</span>
              </p>
            </div>
          </div>
        </header>

        {/* Terms Body */}
        <div className="space-y-8 text-xs leading-relaxed text-slate-700">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">1. Acceptance of Terms</h2>
            <p>
              By accessing, registering, connecting third-party accounts, or using the website, customer portal, mobile applications, APIs, marketplace integrations, AI-enabled services, shipment booking systems, tracking systems, or any other digital or logistics services provided by DFL Express, you agree to be bound by these Terms & Conditions.
            </p>
            <p>
              These Terms constitute a legally binding agreement between the user and Demira Freight Linkers India Private Limited, which operates its services under the brand name DFL Express. The terms "DFL Express", "The DFL Group", "Company", "we", "our", or "us" refer to Demira Freight Linkers India Private Limited, including its divisions, brands, digital platforms, employees, agents, authorized partners, technology services, and future business operations.
            </p>
            
            {/* RED HIGHLIGHT - Mandatory Compliance Notice */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900 space-y-1">
              <strong className="font-bold block text-red-700 text-xs">Binding Legal Agreement & Policy Cross-Reference:</strong>
              <p className="text-[11px]">
                Use of our services is also strictly governed by our <strong className="text-red-700">Privacy Policy Version 3.0</strong>, available on our official website, which forms an integral part of these Terms by reference. If you do not agree with these Terms, you must immediately cease accessing or using our services.
              </p>
            </div>
          </section>

          {/* Section 1.1 - Definitions */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">1.1 Definitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div><strong className="text-slate-900">Shipment:</strong> Any parcel, package, document, cargo, or freight tendered for transport or clearance.</div>
              <div><strong className="text-slate-900">Consignor:</strong> The individual or entity booking or sending the Shipment.</div>
              <div><strong className="text-slate-900">Consignee:</strong> The designated recipient of the Shipment.</div>
              <div><strong className="text-slate-900">Technology Platform:</strong> Integrated ecosystem including portal, mobile apps, APIs, AI, and integrations.</div>
              <div><strong className="text-slate-900">Amazon SP-API:</strong> Amazon Selling Partner API used for automated order and tracking sync.</div>
              <div><strong className="text-slate-900">Prohibited Goods:</strong> Restricted articles under law, customs, or carrier policy.</div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#E66E19]">2. About DFL Express</h2>
            <p>
              DFL Express is the trade name and business brand operated by Demira Freight Linkers India Private Limited, a company duly incorporated under the laws of India. Trade names such as DFL Express and The DFL Group are used solely for branding purposes and do not create separate legal entities.
            </p>
            
            {/* Subsection 2.1 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-xs">2.1 Technology Platform Services</h3>
              <p className="text-slate-600 text-[11px]">
                DFL Express operates as a technology-enabled logistics platform offering online booking, API-based logistics automation, marketplace integrations (Amazon Seller Central, Shopify, WooCommerce, eBay, etc.), AI-enabled features, and digital documentation systems. DFL Express does not guarantee uninterrupted service and reserves the right to perform routine system updates or maintenance.
              </p>
            </div>
          </section>

          {/* Section 3 & Subsections */}
          <section className="space-y-4">
            <h2 className="text-base font-bold text-[#E66E19]">3. User Account, Registration & Integrations</h2>
            
            <p>
              Users are responsible for maintaining the confidentiality of login credentials, API keys, and account activity. You must immediately notify DFL Express of any unauthorized account access.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-xs">3.1 Customer Portal & Digital Services</h3>
                <p className="text-slate-600 text-[11px]">
                  Enables online shipment booking, real-time tracking, rate calculation, label printing, and invoice downloads. Information entered must be accurate; DFL Express is not liable for delays caused by incorrect inputs.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-xs">3.2 Marketplace Integration Terms</h3>
                <p className="text-slate-600 text-[11px]">
                  By enabling store connections (Shopify, eBay, WooCommerce, etc.), you authorize DFL Express to sync order and shipment data solely for logistics execution.
                </p>
              </div>
            </div>

            {/* RED HIGHLIGHT - Amazon Integrations */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900 space-y-2">
              <h3 className="font-bold text-red-700 text-xs">3.3 Amazon Seller Central & 3.4 Amazon SP-API Terms</h3>
              <p className="text-[11px] leading-relaxed">
                Integration with Amazon Seller Central via SP-API requires proper authentication. DFL Express processes data strictly under Amazon Developer Policies for tracking and order synchronization. Revoking access via Amazon Seller Central may terminate automated logistics features. DFL Express is not responsible for API interruptions caused by third-party policy changes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-xs">3.5 API Usage & Automation</h3>
                <p className="text-slate-600 text-[11px]">
                  API access tokens must be kept confidential. Overloading systems, reverse engineering, or scraping APIs is strictly prohibited and subject to immediate account termination.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-xs">3.6 Artificial Intelligence (AI) Usage</h3>
                <p className="text-slate-600 text-[11px]">
                  AI features (parsing, chatbots, rate predictions) provide operational assistance. While optimized for precision, AI-generated predictions are provided on an informational basis.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 & Compliance Subsections */}
          <section className="space-y-4">
            <h2 className="text-base font-bold text-[#E66E19]">4. Use of Services & Trade Compliance</h2>
            <p>
              Customers must use DFL Express services solely for lawful purpose. All shipments must strictly follow origin, transit, and destination country customs regulations.
            </p>

            {/* RED HIGHLIGHT - Prohibited Goods */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900 space-y-2">
              <h3 className="font-bold text-red-700 text-xs">4.1 Prohibited & Restricted Goods</h3>
              <p className="text-[11px]">
                The following articles strictly cannot be shipped without prior written authorization and legal approval:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[11px] font-mono text-red-800">
                <li>Explosives, hazardous materials, and flammable chemicals</li>
                <li>Narcotics, illegal drugs, and controlled substances</li>
                <li>Firearms, weapons, military equipment, and contraband</li>
                <li>Counterfeit items or IP-infringing goods</li>
                <li>Lithium batteries & restricted dangerous cargo</li>
                <li>Articles banned under DGFT or Indian Customs laws</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 4.2 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-xs">4.2 Export Control Compliance</h3>
                <p className="text-slate-600 text-[11px]">
                  Shipments must not violate international trade sanctions, embargoes, or restricted entity lists. Customers are responsible for proper HS Code declarations.
                </p>
              </div>

              {/* 4.3 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-xs">4.3 KYC & Customer Verification</h3>
                <p className="text-slate-600 text-[11px]">
                  KYC compliance is mandatory. Government photo ID, Address proof, PAN, GST, and IEC details may be verified before activating shipping permissions.
                </p>
              </div>

              {/* 4.4 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                <h3 className="font-bold text-slate-900 text-xs">4.4 Fraud Prevention & Anti-Misuse</h3>
                <p className="text-slate-600 text-[11px]">
                  DFL Express reserves the right to monitor account actions, freeze wallet balances, or report suspicious transaction patterns to law enforcement authorities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Support & Contact */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-base font-bold text-[#E66E19]">5. Contact & Legal Enquiries</h2>
            <p>For questions regarding these Terms & Conditions or legal compliance inquiries, contact:</p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1 font-mono text-xs text-slate-800">
              <p><strong className="text-slate-900">Demira Freight Linkers India Private Limited</strong></p>
              <p>Operating Brand: DFL Express / The DFL Group</p>
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