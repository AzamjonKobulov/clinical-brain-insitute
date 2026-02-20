"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  isOpen?: boolean;
  compactPadding?: boolean;
};

export default function Modal({
  title,
  onClose,
  children,
  isOpen = true,
  compactPadding = false,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3.75 md:p-6.25 bg-brand-gray-200/50"
          aria-modal
          role="dialog"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className={`relative w-full max-w-180 bg-white rounded-brand-xl shadow-lg max-h-[90vh] overflow-y-auto scrollbar-hide ${
              compactPadding ? "py-3.75 px-0 md:p-6.25" : "p-3.75 md:p-6.25"
            }`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.25,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3.75 right-3.75 md:top-6.25 md:right-6.25 p-1 rounded hover:bg-brand-gray-100 smooth text-black"
              aria-label="Закрыть"
            >
              <CloseIcon />
            </button>
            <h2
              id="modal-title"
              className={`
                pr-10 text-lg md:text-xl font-medium ${compactPadding && "px-3.75 md:px-0"}
              `}
            >
              {title}
            </h2>
            <div className="mt-3.75 md:mt-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
