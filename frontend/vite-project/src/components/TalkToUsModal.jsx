import { useTalkModal } from "../context/TalkModalContext";
import { LOGISTICS_IMAGES } from "../data/siteData";

export default function TalkToUsModal() {
  const { isOpen, closeModal } = useTalkModal();

  // Target WhatsApp Number (Country code bina '+' ke)
  const TARGET_PHONE_NUMBER = "8802615501";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-[#0B132A]/70 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#0B132A] p-5 text-white">
          <div className="flex items-center gap-3">
            <img
              src={LOGISTICS_IMAGES.supportAgent}
              alt="Support Agent"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-[#E66E19]"
            />
            <div>
              <h3 className="text-base font-extrabold leading-tight">Talk to DFL Express</h3>
              <p className="text-xs text-slate-300">Fast response within ~2 mins</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
            💬
          </div>
          <h4 className="text-lg font-bold text-[#0B132A]">Chat on WhatsApp</h4>
          <p className="mt-1 text-xs text-[#64748B]">
            Connect directly with our 24/7 express dispatch desk.
          </p>

          <a
            href={`https://wa.me/${TARGET_PHONE_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700 active:scale-95"
          >
            Open WhatsApp Chat →
          </a>
        </div>
      </div>
    </div>
  );
}