import { createContext, useContext, useState } from "react";

const TalkModalContext = createContext(null);

export function TalkModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <TalkModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </TalkModalContext.Provider>
  );
}

export function useTalkModal() {
  const ctx = useContext(TalkModalContext);
  if (!ctx) {
    throw new Error("useTalkModal must be used inside a <TalkModalProvider>");
  }
  return ctx;
}