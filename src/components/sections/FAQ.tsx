"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../shared/Container";

const faqs: { question: string; answers: string[] }[] = [
  {
    question: "Это медицинское назначение?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "На чём основан расчёт?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "Насколько точен результат?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "Зачем тогда нужен этот калькулятор?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "Нужно ли регистрироваться?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "Сохраняются ли введённые данные?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "Куда отправляется заявка после расчёта?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "Зачем нужна консультация врача, если есть расчёт?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
  {
    question: "Можно ли использовать калькулятор на другом сайте?",
    answers: [
      "Нет. Калькулятор показывает ориентировочную оценку объёма реабилитационной нагрузки во времени и не является медицинским назначением.",
      "Для подбора индивидуальной программы требуется консультация врача-специалиста.",
    ],
  },
];

const chevronSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 transition-transform duration-200"
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq">
      <Container className="space-y-7 lg:space-y-8.75 md:px-12 lg:px-3.75">
        <div className="text-center">
          <p className="sup-title">Вопросы и ответы</p>
          <h2>Часто задаваемые вопросы</h2>
        </div>

        <div className="space-y-3.75">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-brand-gray-100 rounded-brand-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 pt-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <h4 className="w-full flex-between leading-5.5 lg:text-lg/6.25 font-semibold">
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {chevronSvg}
                    </motion.span>
                  </h4>
                  <motion.div
                    className="h-px w-full bg-brand-vibrant-secondary mt-5 origin-center"
                    initial={false}
                    animate={{
                      scaleX: isOpen ? 1 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isOpen ? 0.2 : 0,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
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
                      <div className="space-y-2.5 text-sm/5 lg:text-base/6.25 px-5 pb-5">
                        {faq.answers.map((paragraph, i) => {
                          const isFirst = i === 0;
                          const boldMatch = paragraph.match(/^(.+?\.)\s/);
                          const firstSentence = boldMatch ? boldMatch[1] : null;
                          const rest = firstSentence
                            ? paragraph.slice(firstSentence.length).trim()
                            : paragraph;
                          return (
                            <p key={i} className={isFirst ? "pt-6.25" : undefined}>
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
      </Container>
    </section>
  );
}
