import { useState } from "react";
import { useTalkModal } from "../context/TalkModalContext";
import { LOGISTICS_IMAGES } from "../data/siteData";

export default function TalkToUsModal() {
  const { isOpen, closeModal } = useTalkModal();
  const [talkTab, setTalkTab] = useState("callback"); // 'callback' | 'chat' | 'message'
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      closeModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-[#0B132A]/70 backdrop-blur-sm transition-opacity"
      />

      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all">
        <div className="flex items-center justify-between bg-[#0B132A] p-6 text-white">
          <div className="flex items-center gap-3">
            <img
              src={LOGISTICS_IMAGES.supportAgent}
              alt="Customer Support Representative"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-[#E66E19]"
            />
            <div>
              <h3 className="text-lg font-extrabold leading-tight">Talk to DFL Express</h3>
              <p className="text-xs text-slate-300">Fast response within ~2 minutes</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {formSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                ✓
              </div>
              <h4 className="mt-4 text-xl font-bold text-[#0B132A]">Request Received!</h4>
              <p className="mt-2 text-sm text-[#64748B]">
                A DFL Express representative will connect with you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex rounded-xl bg-slate-100 p-1 text-xs font-bold">
                <button
                  onClick={() => setTalkTab("callback")}
                  className={`flex-1 rounded-lg py-2.5 transition-all ${
                    talkTab === "callback"
                      ? "bg-white text-[#0B132A] shadow-sm"
                      : "text-[#64748B] hover:text-[#0B132A]"
                  }`}
                >
                  📞 Call Me Back
                </button>
                <button
                  onClick={() => setTalkTab("chat")}
                  className={`flex-1 rounded-lg py-2.5 transition-all ${
                    talkTab === "chat"
                      ? "bg-white text-[#0B132A] shadow-sm"
                      : "text-[#64748B] hover:text-[#0B132A]"
                  }`}
                >
                  💬 WhatsApp
                </button>
                <button
                  onClick={() => setTalkTab("message")}
                  className={`flex-1 rounded-lg py-2.5 transition-all ${
                    talkTab === "message"
                      ? "bg-white text-[#0B132A] shadow-sm"
                      : "text-[#64748B] hover:text-[#0B132A]"
                  }`}
                >
                  ✉️ Quick Message
                </button>
              </div>

              {talkTab === "callback" && (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-bold text-[#0B132A]">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E66E19] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold text-[#0B132A]">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E66E19] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold text-[#0B132A]">
                      Inquiry Type
                    </label>
                    <select className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E66E19] focus:outline-none">
                      <option>Express Courier Quote</option>
                      <option>Freight & Cargo Inquiry</option>
                      <option>Package Tracking Issue</option>
                      <option>Enterprise Account</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#E66E19] py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#d55f0f]"
                  >
                    Request Immediate Call
                  </button>
                </form>
              )}

              {talkTab === "chat" && (
                <div className="space-y-4 py-2 text-center">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                    <div className="mb-2 text-3xl">📱</div>
                    <h4 className="text-base font-bold text-[#0B132A]">Chat on WhatsApp</h4>
                    <p className="mt-1 text-xs text-[#64748B]">
                      Connect directly with our 24/7 express dispatch desk.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/18005553353"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700"
                  >
                    Start WhatsApp Chat →
                  </a>
                </div>
              )}

              {talkTab === "message" && (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-bold text-[#0B132A]">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="client@company.com"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E66E19] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold text-[#0B132A]">
                      Message / Parcel Details
                    </label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Describe pickup location, package weight or questions..."
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E66E19] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#0B132A] py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1E293B]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}