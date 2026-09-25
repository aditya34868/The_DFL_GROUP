import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-4 font-sans">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-black text-[#E66E19]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-2xl md:text-3xl font-bold">
          Page Not Found
        </h2>

        {/* Home Button with useNavigate */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E66E19] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#d55f0f] active:scale-95"
        >
          <FiHome className="h-4 w-4" />
          <span>Go To Home</span>
        </button>
      </div>
    </div>
  );
}