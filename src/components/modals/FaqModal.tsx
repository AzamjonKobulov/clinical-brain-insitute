"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const chevronSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 size-5 transition-transform duration-200"
    aria-hidden
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#008270"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type FaqItem = { question: string; answers: string[] };

type FaqModalProps = {
  title: string;
  intro?: string;
  items: FaqItem[];
  isOpen?: boolean;
  onClose: () => void;
};

export default function FaqModal({
  title,
  intro,
  items,
  isOpen = true,
  onClose,
}: FaqModalProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      {intro && <p className="text-sm/5 text-brand-dark mb-5">{intro}</p>}

      <div className="space-y-3.75">
        {items.map((faq, index) => {
          const isOpenItem = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-brand-gray-100 rounded-brand-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="relative w-full px-3.75 md:px-5 text-left pt-2.5"
                aria-expanded={isOpenItem}
                aria-controls={`faq-content-${index}`}
                id={`faq-trigger-${index}`}
              >
                <h4 className="w-full flex-between items-center leading-5.5 font-semibold">
                  <span className="pr-2">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpenItem ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    {chevronSvg}
                  </motion.span>
                </h4>
                <motion.div
                  className="h-px w-full bg-brand-gray-100 origin-center mt-2.5"
                  initial={false}
                  animate={{
                    scaleX: isOpenItem ? 1 : 0,
                    opacity: isOpenItem ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: isOpenItem ? 0.2 : 0,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpenItem && (
                  <motion.div
                    id={`faq-content-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2.5 text-sm/5  px-5 pb-5">
                      {faq.answers.map((paragraph, i) => {
                        const isFirst = i === 0;
                        const boldMatch = paragraph.match(/^(.+?\.)\s/);
                        const firstSentence = boldMatch ? boldMatch[1] : null;
                        const rest = firstSentence
                          ? paragraph.slice(firstSentence.length).trim()
                          : paragraph;
                        return (
                          <p
                            key={i}
                            className={isFirst ? "pt-4 md:pt-6" : undefined}
                          >
                            {isFirst && firstSentence ? (
                              <>
                                <b>{firstSentence}</b> {rest}
                              </>
                            ) : (
                              paragraph
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
