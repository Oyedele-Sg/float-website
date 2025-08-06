"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is FloatTransfer?",
    answer:
      "FloatTransfer is a secure and easy-to-use international money transfer platform that allows you to send and receive money across borders quickly, safely, and affordably.",
  },
  {
    question: "Which countries can I send money to?",
    answer:
      "We support transfers to and from a growing list of countries across Africa, Asia Europe, North America, and the Middle East. Visit our app or website to see the full list of supported countries.",
    link: true,
  },
  {
    question: "How fast are international transfers with FloatTransfer?",
    answer:
      "Transfer speed depends on the destination country and payment method, but most transfers are completed within minutes to a few hours.",
  },
  {
    question: "How much does it cost to send money?",
    answer:
      "Our fees are transparent and competitive. You can view the exact fee before confirming your transfer.",
  },
  {
    question: "What exchange rates do you offer?",
    answer:
      "We offer real-time exchange rates that are updated regularly to ensure you get the best value for your money.",
  },
  {
    question: "Is FloatTransfer safe and secure?",
    answer:
      "Yes, we use advanced security measures and encryption to protect your data and funds.",
  },
  {
    question: "What payment methods can I use?",
    answer:
      "You can fund your transfer using debit/credit cards, bank transfers, or your FloatTransfer wallet. Additional local options may be available based on your country.",
  },
  {
    question: "What is a FloatTransfer Wallet?",
    answer:
      "A digital wallet within FloatTransfer that allows you to store, send, and receive money easily.",
  },
  {
    question: "Can I track my transfer?",
    answer:
      "Yes, you can track the status of your transfer in real-time through our app or website.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our support team is available 24/7 to assist you with any questions or issues.",
  },
  {
    question: "Can I send money to someone who doesn't have a bank account?",
    answer:
      "In many countries, recipients can pick up cash at partner locations even without a bank account.",
  },
  {
    question: "Are there any limits to how much I can send?",
    answer:
      "Limits may vary depending on your country and payment method. Please check our app or website for details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        Frequently asked questions
      </h2>
      <p className="text-gray-500 text-center mb-8 text-lg">
        Everything you need to know about the product and billing.
      </p>
      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {faqs.map((faq, idx) => (
          <div key={faq.question}>
            <button
              className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="font-medium text-base text-gray-900">
                {faq.link ? (
                  <span>
                    <span className="underline font-semibold cursor-pointer">
                      {faq.question}
                    </span>
                  </span>
                ) : (
                  faq.question
                )}
              </span>
              <span className="ml-4">
                <Image
                  src={
                    openIndex === idx
                      ? "/assets/icons/close.svg"
                      : "/assets/icons/open.svg"
                  }
                  alt={openIndex === idx ? "Close" : "Open"}
                  width={24}
                  height={26}
                />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } pl-1 pr-8`}
              style={{ minHeight: openIndex === idx ? 48 : 0 }}
            >
              <div className="text-gray-700 text-[15px] pt-1">
                {openIndex === idx && faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
