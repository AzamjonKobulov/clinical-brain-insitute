"use client";

import React, { useRef, useEffect } from "react";

export interface TextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "className"
  > {
  error?: boolean;
  className?: string;
}

const baseStyles = [
  "w-full min-h-[2.75rem] bg-white border outline-none smooth resize-none overflow-hidden",
  "py-2 px-4 md:py-2 md:px-5",
  "text-sm/4.75 md:text-base/5.5 leading-5.5 font-medium",
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

function useAutoResize(ref: React.RefObject<HTMLTextAreaElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const resize = () => {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    };

    resize();
    el.addEventListener("input", resize);
    window.addEventListener("resize", resize);
    return () => {
      el.removeEventListener("input", resize);
      window.removeEventListener("resize", resize);
    };
  }, [ref]);
}

export default function Textarea({
  error = false,
  className = "",
  ...props
}: TextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useAutoResize(ref);

  return (
    <textarea
      ref={ref}
      rows={1}
      className={`${baseStyles} ${error ? errorStyles : ""} ${className}`.trim()}
      aria-invalid={error}
      {...props}
    />
  );
}
