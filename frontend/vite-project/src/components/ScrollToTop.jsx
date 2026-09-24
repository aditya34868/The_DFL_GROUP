import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kisi bhi route change par window ke top par scroll karega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}