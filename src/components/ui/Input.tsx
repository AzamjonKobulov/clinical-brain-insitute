"use client";

import React from "react";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  error?: boolean;
  className?: string;
}

const baseStyles = [
  "w-full bg-white border outline-none smooth",
  "py-2 px-4 md:py-2 md:px-5",
  "leading-5.5 font-medium",
  "rounded-2xl md:rounded-brand-xl",
  "placeholder:text-brand-gray-500 text-brand-dark",
  "border-brand-vibrant-primary",
  "hover:border-brand-gray-500",
  "focus:border-brand-green-400 focus:ring-1 focus:ring-brand-green-400",
  "[&:not(:placeholder-shown):not(:focus)]:border-brand-dark [&:not(:placeholder-shown):not(:focus)]:text-brand-dark",
  "disabled:cursor-not-allowed disabled:opacity-60",
].join(" ");

const errorStyles =
  "!border-red-500 !text-red-500 placeholder:!text-red-400 focus:!border-red-500 focus:!ring-red-500";

export default function Input({
  error = false,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      type="text"
      className={`${baseStyles} ${error ? errorStyles : ""} ${className}`.trim()}
      aria-invalid={error}
      {...props}
    />
  );
}
