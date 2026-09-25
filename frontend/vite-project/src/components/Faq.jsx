import React, { useState } from "react";

import faq1 from "../assets/faq1.png";
import faq2 from "../assets/faq2.png";
import faq3 from "../assets/faq3.png";
import faq4 from "../assets/faq4.png";
import faq5 from "../assets/faq5.png";
import faq6 from "../assets/faq6.png";
import faq7 from "../assets/faq7.png";
import faq8 from "../assets/faq8.png";
import faq9 from "../assets/faq9.png";
import faq10 from "../assets/faq10.png";
import faq11 from "../assets/faq11.png";
import faq12 from "../assets/faq12.png";

const faqData = [
  {
    id: 1,
    num: "01",
    question: "What services does The DFL Group provide?",
    answer: "The DFL Group provides end-to-end logistics and supply chain solutions, including air freight, ocean freight, inland transportation, customs clearance, warehousing, international courier and cargo services.",
    image: faq1
  },
  {
    id: 2,
    num: "02",
    question: "Does The DFL Group provide international shipping?",
    answer: "Yes. We provide international logistics solutions for businesses, including air and ocean freight, international courier, customs clearance and door-to-door shipment support.",
    image: faq2
  },
  {
    id: 3,
    num: "03",
    question: "What is the difference between Air Freight and Ocean Freight?",
    answer: "Air Freight is generally suitable for time-sensitive shipments, while Ocean Freight is commonly used for larger or heavier cargo where cost efficiency and higher capacity are important.",
    image: faq3
  },
  {
    id: 4,
    num: "04",
    question: "Do you offer FCL and LCL ocean freight services?",
    answer: "Yes. The DFL Group provides both FCL (Full Container Load) and LCL (Less than Container Load) ocean freight solutions based on shipment requirements.",
    image: faq4
  },
  {
    id: 5,
    num: "05",
    question: "Does The DFL Group provide customs clearance services?",
    answer: "Yes. We provide customs clearance support to help businesses manage documentation and customs procedures for their shipments.",
    image: faq5
  },
  {
    id: 6,
    num: "06",
    question: "Do you provide door-to-door delivery?",
    answer: "Yes. Depending on the service and destination, door-to-door transportation and delivery solutions are available.",
    image: faq6
  },
  {
    id: 7,
    num: "07",
    question: "Can I track my shipment?",
    answer: "Yes. Shipment tracking is available for applicable services, allowing customers to monitor shipment movement and delivery updates.",
    image: faq7
  },
  {
    id: 8,
    num: "08",
    question: "Do you provide warehousing services?",
    answer: "Yes. The DFL Group provides warehousing and logistics support to help businesses manage storage, handling and shipment movement.",
    image: faq8
  },
  {
    id: 9,
    num: "09",
    question: "Can you handle large or special cargo?",
    answer: "Yes. Our logistics solutions can be tailored to different cargo types, shipment sizes and transportation requirements.",
    image: faq9
  },
  {
    id: 10,
    num: "10",
    question: "How can I get a quote for my shipment?",
    answer: "You can contact The DFL Group with your origin, destination, cargo details, weight/volume and preferred mode of transport to receive a suitable quotation.",
    image: faq10
  },
  {
    id: 11,
    num: "11",
    question: "Which countries does The DFL Group serve?",
    answer: "The DFL Group supports international logistics requirements across multiple global trade lanes through its international network and logistics partners.",
    image: faq11
  },
  {
    id: 12,
    num: "12",
    question: "How can I contact The DFL Group?",
    answer: "You can contact our team through the Contact Us section of the website for shipment enquiries, quotations and logistics support.",
    image: faq12
  }
];

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto bg-white">
      <div className="divide-y divide-slate-200">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-5">
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-sky-100 text-sky-800 text-sm font-bold px-3 py-1 rounded-full shrink-0">
                    {item.num}
                  </span>
                  {/* Bada Question Text */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#E66E19] transition-colors cursor-pointer">
                    {item.question}
                  </h3>
                </div>

                <span className="text-2xl font-bold text-slate-400 group-hover:text-sky-600 ml-4 shrink-0 cursor-pointer">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-5 pl-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  {/* Bada Content/Answer Text */}
                  <p className="text-base text-slate-700 leading-relaxed flex-1" onClick={() => toggleFaq(item.id)}>
                    {item.answer}
                  </p>

                  {/* Badi Image Layout */}
                  {item.image && (
                    <div className="w-full md:w-48 h-36 shrink-0 bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.question}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;