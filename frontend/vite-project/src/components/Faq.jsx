import React, { useState } from "react";

const Faq = ({ data = [] }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto bg-white">
      <div className="divide-y divide-slate-200">
        {data.map(({ id, num, question, answer }) => {
          const isOpen = openId === id;

          return (
            <div
              key={id}
              className="group py-5"
              onMouseEnter={() => setOpenId(id)}
              onMouseLeave={() => setOpenId(null)}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : id)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-sky-100 text-sky-800 text-sm font-bold px-3 py-1 rounded-full shrink-0">
                    {num}
                  </span>
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isOpen ? "text-[#E66E19]" : "text-slate-900 group-hover:text-[#E66E19]"
                    }`}
                  >
                    {question}
                  </h3>
                </div>

                <span
                  className={`text-2xl font-bold ml-4 shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "text-[#E66E19] rotate-45"
                      : "text-slate-400 group-hover:text-[#E66E19]"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden pl-14 transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base text-slate-700 leading-relaxed">
                  {answer}
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