import React, { useState, useEffect } from "react";
import { faqs } from "./Data/Index";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect on load
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-3xl font-bold text-center font-serif drop-shadow text-yellow-300 mb-2">FAQS</h2>
      <p className="text-lg text-center text-gray-500 mb-6">
        Some of our most frequently asked questions
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-gray-800 transition duration-300 ease-in-out hover:bg-yellow-300 ${
                openIndex === index ? "bg-yellow-400 text-white" : "bg-gray-100"
              }`}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-lg text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
