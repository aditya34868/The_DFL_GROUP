
import React, { useState } from "react";

const Faq = ({ data = [] }) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto bg-white">
      <div className="divide-y divide-slate-200">
        {data.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="group py-5">
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-sky-100 text-sky-800 text-sm font-bold px-3 py-1 rounded-full shrink-0">
                    {item.num}
                  </span>

                  <h3
                    className={`text-xl font-bold text-slate-900 transition-colors duration-300 ${
                      isOpen ? "text-[#E66E19]" : "group-hover:text-[#E66E19]"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>

                <span
                  className={`text-2xl font-bold text-slate-400 ml-4 shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "text-sky-600 rotate-45"
                      : "group-hover:text-sky-600"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden pl-14 transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-96 opacity-100 mt-5"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-base text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
