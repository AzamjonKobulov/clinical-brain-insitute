import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "tab";

const baseStyles = [
  "inline-flex items-center justify-center gap-2.5 rounded-xl lg:rounded-brand-xl font-medium",
  "py-2.25 px-3.75 text-sm/4.75",
  "lg:py-3 lg:px-6.5 lg:text-base/5.5",
  "smooth cursor-pointer",
  "disabled:cursor-not-allowed",
  "[&>.button-icon]:shrink-0 [&>.button-icon]:size-4 lg:[&>.button-icon]:size-5",
].join(" ");

const variantStyles: Record<
  ButtonVariant,
  { default: string; hover: string; active: string; disabled?: string }
> = {
  primary: {
    default:
      "bg-primary-linear text-white disabled:opacity-30 disabled:hover:bg-primary-linear disabled:active:bg-primary-linear",
    hover: "hover:bg-secondary-linear",
    active: "active:bg-pressed-linear",
  },
  secondary: {
    default:
      "bg-brand-green-50 text-brand-dark disabled:opacity-30 disabled:hover:bg-brand-green-50 disabled:active:bg-brand-green-50",
    hover: "hover:bg-brand-green-100",
    active: "active:bg-brand-green-300",
  },
  outline: {
    default: "border border-brand-gray-600 text-brand-gray-600 bg-transparent",
    hover:
      "hover:text-brand-dark hover:bg-brand-green-500/6 hover:border-transparent",
    active: "active:bg-brand-green-500/12 active:border-transparent",
    disabled:
      "disabled:text-brand-gray-200 disabled:border-brand-gray-200 disabled:bg-transparent disabled:hover:text-brand-gray-200 disabled:hover:border-brand-gray-200 disabled:hover:bg-transparent disabled:active:text-brand-gray-200 disabled:active:border-brand-gray-200 disabled:active:bg-transparent",
  },
  tab: {
    default:
      "!py-1 !px-3.75 !rounded-full lg:!py-1 lg:!px-3.75 lg:!rounded-full border border-brand-gray-500 text-brand-gray-500 bg-white",
    hover: "hover:border-brand-green-400 hover:text-brand-green-400",
    active: "active:border-brand-green-400 active:text-brand-green-400",
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
  isLink?: boolean;
  href?: string;
}

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  disabled,
  isLink,
  href,
  ...props
}: ButtonProps) {
  const styles = variantStyles[variant];
  const variantClass = [
    styles.default,
    styles.hover,
    styles.active,
    styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const sharedClassName = `${baseStyles} ${variantClass} ${className}`.trim();
  const content = (
    <>
      {icon ? (
        <span className="button-icon [&>svg]:size-4 lg:[&>svg]:size-5">
          {icon}
        </span>
      ) : null}
      {children}
    </>
  );

  if (isLink && href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={sharedClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
