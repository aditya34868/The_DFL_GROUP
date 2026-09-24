import { useTalkModal } from "../context/TalkModalContext";

export default function FloatingTalkButton() {
  const { openModal } = useTalkModal();

  return (
    <div className="fixed bottom-20 right-10 z-30">
      {/* Custom Keyframes for Smooth Animation */}
      <style>{`
        @keyframes customPulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .whatsapp-pulse-btn {
          animation: customPulse 2s infinite, gentleFloat 3s ease-in-out infinite;
        }
      `}</style>

      <button
        onClick={openModal}
        aria-label="Open WhatsApp Chat"
        className="whatsapp-pulse-btn group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {/* High-Quality Official WhatsApp PNG Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
          alt="WhatsApp Chat"
          className="relative z-10 h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-12"
        />
      </button>
    </div>
  );
}