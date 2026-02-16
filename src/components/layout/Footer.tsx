import Container from "../shared/Container";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-gray-100 pt-9 pb-3.75 lg:py-6">
      <Container>
        {/* Top */}
        <div className="flex-between flex-col items-start sm:items-center lg:flex-row gap-8.75 border-b border-brand-gray-100 pb-8.75 lg:pb-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/svgs/logo.svg"
              alt="logo"
              width={233}
              height={50}
              className="shrink-0"
            />
          </Link>

          <ul className="flex-base flex-col items-start sm:items-center md:flex-row gap-3.75 sm:gap-5 xl:gap-7.5 text-sm/5 md:text-xs/4 xl:text-base/6.25">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-medium hover:text-brand-green-400 smooth"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between sm:items-center lg:items-start gap-8.75 lg:gap-5 pt-4.5">
          <div className="space-y-8.75 lg:space-y-3.75 sm:text-center lg:text-left">
            <p className="text-sm/5 md:text-base/6.25">
              © Клинический институт мозга, 2026
            </p>
            <p className="max-w-xl text-sm/4.75 text-black lg:pr-7">
              Программное обеспечение зарегистрировано в Реестре программ для
              ЭВМ. Свидетельство о государственной регистрации № 123456 от
              01.06.2026.
            </p>
          </div>

          <div className="flex-between md:flex-base gap-5 bg-[#EBF8F7] lg:bg-none rounded-lg py-2.5 px-3.75 md:px-0 md:py-0">
            <span>Разработка сервиса</span>
            <Link href="/">
              <Image
                src="/assets/svgs/wbstr-logo.svg"
                alt="logo-development"
                width={112}
                height={22}
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
