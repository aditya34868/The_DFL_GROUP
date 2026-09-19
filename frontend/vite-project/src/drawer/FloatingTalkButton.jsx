import { useTalkModal } from "../context/TalkModalContext";

export default function FloatingTalkButton() {
  const { openModal } = useTalkModal();

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        onClick={openModal}
        className="group flex items-center gap-3 rounded-full bg-[#E66E19] px-5 py-3.5 text-sm font-bold text-white shadow-2xl ring-4 ring-white transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <span>Talk to Us</span>
        <span className="rounded-full bg-white/20 p-1">💬</span>
      </button>
    </div>
  );
}