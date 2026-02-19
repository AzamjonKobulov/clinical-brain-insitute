"use client";

import { RefObject } from "react";
import { CALCULATOR_STEP_LABELS } from "@/data/calculator";

const StepIconActive = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 size-5 lg:size-auto"
  >
    <circle cx="11.5" cy="11.5" r="11.5" fill="#008270" />
    <circle cx="11.5" cy="11.5" r="9.5" fill="#F3F8FA" />
    <circle cx="11.5" cy="11.5" r="6.5" fill="#008270" />
  </svg>
);

const StepIconCompleted = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 size-5 lg:size-auto fill-brand-green-400"
  >
    <circle cx="11.5" cy="11.5" r="11.5" />
    <path
      d="M17.3333 8L10 15.3333L6.66667 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StepIconPending = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 size-5 lg:size-auto fill-brand-gray-200 group-hover:fill-brand-green-400 smooth"
  >
    <circle cx="11.5" cy="11.5" r="11.5" />
    <path
      d="M17.3333 8L10 15.3333L6.66667 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Props = {
  currentStep: number;
  activeStepRef: RefObject<HTMLLIElement | null>;
};

export default function CalculatorSidebar({ currentStep, activeStepRef }: Props) {
  return (
    <div className="lg:w-90 bg-white border border-white rounded-brand-xl overflow-hidden bg-calc-steps bg-cover bg-center py-3.75 lg:px-3.75 lg:pb-40">
      <ul className="flex lg:flex-col gap-2.5 text-sm/4.75 lg:text-base/5 whitespace-nowrap lg:whitespace-normal overflow-x-auto lg:overflow-x-hidden scroll-none px-3.75 lg:px-0">
        {CALCULATOR_STEP_LABELS.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          return (
            <li
              key={label}
              id={`calculator-step-${index}`}
              ref={isActive ? activeStepRef : undefined}
              role="button"
              aria-current={isActive ? "step" : undefined}
              tabIndex={-1}
              className={`w-full flex-base gap-3 lg:gap-3.75 text-left rounded-brand-xl py-2 px-2.5 lg:py-3 lg:px-2.5 smooth cursor-default ${
                isActive
                  ? "bg-brand-green-75 text-brand-green-400 border border-brand-green-500"
                  : isCompleted
                    ? "bg-brand-green-25 border border-transparent text-brand-green-400"
                    : "group bg-white border border-transparent hover:text-brand-green-400 hover:bg-brand-green-25 hover:border-brand-green-100"
              }`}
            >
              {isActive ? (
                <StepIconActive />
              ) : isCompleted ? (
                <StepIconCompleted />
              ) : (
                <StepIconPending />
              )}
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
