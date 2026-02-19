"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "../shared/Container";
import Button from "../ui/Button";
import { NAV_LINKS, MOBILE_NAV_LINKS } from "@/data/navigation";

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M4 5H20M4 12H20M4 19H20"
      stroke="#2A2A2A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <g clipPath="url(#clip0_2003_2203)">
      <g clipPath="url(#clip1_2003_2203)">
        <path
          d="M4.5 5L19.5 20M4.5 20L19.5 5"
          stroke="#2A2A2A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2003_2203">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_2003_2203">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(3 3.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-green-25 transition-[padding-top] duration-200 ease-out ${hasScrolled ? "pt-0" : "lg:pt-9.5"}`}
    >
      <nav className="py-3">
        <Container className="flex-between">
          <Link href="/">
            <Image
              src="/assets/svgs/logo.svg"
              alt="logo"
              width={218}
              height={46}
              className="w-40.75 h-8.75 lg:size-auto"
            />
          </Link>

          {/* Links */}
          <ul className="hidden lg:flex-base gap-5 font-medium text-sm xl:text-base">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-brand-green-400 smooth">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Phone & Calc Button */}
          <div className="flex-base gap-3.75 lg:gap-6 xl:gap-7.5">
            <Link
              href="tel:88007007515"
              className="hidden lg:inline hover:text-brand-green-400 smooth text-sm xl:text-base"
            >
              8 800 700 75 15
            </Link>
            <Button variant="primary" className="hidden 2xs:block">
              Рассчитать
            </Button>
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile menu overlay - animations in globals.css */}
      <div
        className={`mobile-menu-overlay fixed top-15.25 left-0 right-0 bottom-0 z-40 bg-black/30 lg:hidden ${isMenuOpen ? "show" : ""}`}
        onClick={closeMenu}
        aria-hidden
      />

      {/* Mobile Menu panel - below header, full width, animations in globals.css */}
      <div
        className={`mobile-menu-content absolute left-0 top-full w-full z-50 lg:hidden ${isMenuOpen ? "show" : ""}`}
      >
        <div className="space-y-6 bg-brand-green-25 shadow-lg rounded-b-3xl py-6.5 px-3.75 md:px-12">
          <ul className="space-y-5 font-medium">
            {MOBILE_NAV_LINKS.map(({ label, href }) => (
              <li
                key={label}
                className={`mobile-menu-item ${isMenuOpen ? "show" : ""}`}
              >
                <Link
                  href={href}
                  className="hover:text-brand-green-400 smooth"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex-base gap-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M13.8981 9.90375L10.9538 8.58437L10.9456 8.58062C10.7928 8.51524 10.626 8.48901 10.4605 8.50428C10.2949 8.51956 10.1358 8.57587 9.99751 8.66812C9.98122 8.67888 9.96557 8.69056 9.95063 8.70312L8.42938 10C7.46563 9.53187 6.47063 8.54437 6.00251 7.59312L7.30126 6.04875C7.31376 6.03312 7.32563 6.0175 7.33688 6.00062C7.42715 5.86268 7.48192 5.70457 7.49631 5.54035C7.5107 5.37614 7.48428 5.21091 7.41938 5.05937V5.05187L6.09626 2.1025C6.01047 1.90454 5.86296 1.73963 5.67575 1.63239C5.48854 1.52516 5.27166 1.48135 5.05751 1.5075C4.21061 1.61894 3.43324 2.03485 2.87059 2.67756C2.30794 3.32026 1.99847 4.1458 2.00001 5C2.00001 9.9625 6.03751 14 11 14C11.8542 14.0015 12.6797 13.6921 13.3224 13.1294C13.9651 12.5668 14.3811 11.7894 14.4925 10.9425C14.5187 10.7284 14.475 10.5116 14.3679 10.3244C14.2607 10.1372 14.096 9.98963 13.8981 9.90375ZM11 13C8.87898 12.9977 6.8455 12.1541 5.34571 10.6543C3.84592 9.1545 3.00232 7.12102 3.00001 5C2.99765 4.38968 3.21754 3.79937 3.61859 3.33931C4.01964 2.87926 4.57444 2.58091 5.17938 2.5C5.17913 2.50249 5.17913 2.505 5.17938 2.5075L6.49188 5.445L5.20001 6.99125C5.18689 7.00633 5.17498 7.02242 5.16438 7.03937C5.07033 7.18369 5.01515 7.34987 5.0042 7.52178C4.99325 7.6937 5.0269 7.86553 5.10188 8.02062C5.66813 9.17875 6.83501 10.3369 8.00563 10.9025C8.16186 10.9768 8.33468 11.0093 8.50722 10.9968C8.67976 10.9843 8.8461 10.9272 8.99001 10.8312C9.00605 10.8204 9.02149 10.8088 9.03626 10.7962L10.5556 9.5L13.4931 10.8156C13.4931 10.8156 13.4981 10.8156 13.5 10.8156C13.4201 11.4214 13.1222 11.9773 12.662 12.3794C12.2019 12.7814 11.611 13.0021 11 13Z"
                fill="#41988D"
              />
            </svg>

            <div className="space-y-0.5">
              <span className="text-xs/5 block">Запись на реабилитацию</span>
              <Link
                href="tel:88007007515"
                className="text-brand-turquoise font-semibold underline underline-offset-4"
                onClick={closeMenu}
              >
                8 800 700 75 15
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border – grows from center when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gray-100 origin-center transition-transform duration-1200 ease-out ${hasScrolled ? "scale-x-100" : "scale-x-0"}`}
        aria-hidden
      />
    </header>
  );
}
