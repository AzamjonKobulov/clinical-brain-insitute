"use client";

import type { StepOption } from "@/data/calculator";

const RadioUnchecked = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 peer-checked:hidden"
  >
    <rect width="15" height="15" rx="7.5" fill="#D9D9D9" />
    <circle cx="7.5" cy="7.5" r="5.5" fill="white" />
  </svg>
);

const RadioChecked = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 hidden peer-checked:block"
  >
    <rect width="15" height="15" rx="7.5" fill="#008270" />
    <circle cx="7.5" cy="7.5" r="5.5" fill="white" />
    <circle cx="7.5" cy="7.5" r="3.5" fill="#008270" />
  </svg>
);

type Props = {
  options: StepOption[];
  name: string;
  value: string | undefined;
  onSelect: (optionId: string) => void;
};

export default function CalculatorOptionList({
  options,
  name,
  value,
  onSelect,
}: Props) {
  return (
    <div>
      <ul className="max-h-85 overflow-y-auto space-y-2.5 scroll-brand pr-1">
        {options.map((opt) => (
          <li key={opt.id}>
            <label
              htmlFor={opt.id}
              className="flex-base gap-2.5 border border-brand-gray-100 rounded-brand-xl cursor-pointer px-5 py-2"
            >
              <input
                type="radio"
                id={opt.id}
                name={name}
                value={opt.id}
                checked={value === opt.id}
                onChange={() => onSelect(opt.id)}
                className="hidden peer"
              />
              <RadioUnchecked />
              <RadioChecked />
              <span
                className={
                  opt.tight ? "text-sm/3.5 lg:leading-5" : "text-sm/5"
                }
              >
                {opt.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
