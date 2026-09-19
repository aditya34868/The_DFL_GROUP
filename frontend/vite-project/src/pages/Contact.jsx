import { useTalkModal } from "../context/TalkModalContext";
import { LOGISTICS_IMAGES } from "../data/siteData";

export default function Contact() {
  const { openModal } = useTalkModal();

  return (
    <section id="contact" className="bg-white px-6 py-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-block rounded-md bg-[#E66E19]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              Get In Touch
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132A] md:text-4xl">
              Ready to Ship or Need Immediate Assistance?
            </h2>
            <p className="mt-4 text-base text-[#64748B]">
              Our dedicated logistics desk is available 24 hours a day to quote
              shipments, manage enterprise contracts, and address courier
              inquiries.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B132A] font-bold text-white">
                  📞
                </div>
                <div>
                  <div className="text-xs font-medium text-[#64748B]">Express Hotline</div>
                  <div className="text-base font-extrabold text-[#0B132A]">+1 (800) 555-DFLE</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#238B9B] font-bold text-white">
                  ✉️
                </div>
                <div>
                  <div className="text-xs font-medium text-[#64748B]">Email Support</div>
                  <div className="text-base font-extrabold text-[#0B132A]">
                    support@dflexpress.com
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={openModal}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#E66E19] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#E66E19]/25 transition-all hover:bg-[#d55f0f] sm:w-auto"
              >
                <span>Open Interactive 'Talk to Us' Drawer</span>
                <span>💬</span>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src={LOGISTICS_IMAGES.trackingBox}
              alt="DFL Parcel Delivery"
              className="h-96 w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0B132A]/90 via-[#0B132A]/30 to-transparent p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E66E19]">
                Fast-Track Priority
              </span>
              <h3 className="mt-1 text-2xl font-extrabold">Guaranteed On-Time Delivery</h3>
              <p className="mt-2 text-xs text-slate-300">
                Every parcel is handled with care and tracked through every
                waypoint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}