import Link from "next/link";
import Image from "next/image";

import Container from "../shared/Container";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="pt-5 xl:pt-9.5">
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
            <li>
              <Link href="/" className="hover:text-brand-green-400 smooth">
                Калькулятор
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand-green-400 smooth">
                Как работает
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand-green-400 smooth">
                Интеграция
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand-green-400 smooth">
                Вопросы и ответы
              </Link>
            </li>
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
            <button className="lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5H20M4 12H20M4 19H20"
                  stroke="#2A2A2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
