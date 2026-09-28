import React from "react";

const Faq = ({ data = [] }) => {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto bg-white">
      <div className="divide-y divide-slate-200">
        {data.map((item) => (
          <div key={item.id} className="group py-5">
            <div className="w-full flex items-center justify-between text-left cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="bg-sky-100 text-sky-800 text-sm font-bold px-3 py-1 rounded-full shrink-0">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#E66E19] transition-colors duration-300">
                  {item.question}
                </h3>
              </div>

              <span className="text-2xl font-bold text-slate-400 group-hover:text-sky-600 ml-4 shrink-0 transition-transform duration-300 group-hover:rotate-45">
                +
              </span>
            </div>

            {/* Smooth transition container */}
            <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden pl-14 mt-0 group-hover:mt-5">
              <p className="text-base text-slate-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;