import React from 'react';

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
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl border border-sky-100 p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 min-h-[280px]"
          >
            {/* Top Content (Badge, Question, Answer) */}
            <div className="z-10 max-w-[60%] flex flex-col items-start">
              {/* Number Badge */}
              <span className="inline-block bg-sky-200/60 text-sky-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                {item.num}
              </span>

              {/* Question */}
              <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3">
                {item.question}
              </h3>

              {/* Answer */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.answer}
              </p>
            </div>

            {/* Fixed Right Side Image Wrapper */}
            <div className="absolute right-0 bottom-0 h-48 w-[40%] flex items-end justify-end pointer-events-none p-2">
              <img
                src={item.image}
                alt={item.question}
                className="h-full w-full object-contain object-right-bottom transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;