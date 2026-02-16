import Image from "next/image";
import Container from "../shared/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1440px] mx-auto relative overflow-hidden pt-8 sm:pt-10 md:pt-20"
    >
      <Container className="relative z-10 space-y-10 md:space-y-24 lg:pb-9">
        <div className="space-y-6 md:space-y-11.25">
          <h1 className="font-semibold text-3xl/8.5 sm:text-4xl/10.5 lg:text-[50px]/13.75">
            Калькулятор <br /> объёма реабилитации
          </h1>

          <p className="max-w-xl hidden lg:block text-[22px]/7.5 pr-5">
            Оцените примерное время реабилитации на основе текущего состояния
            пациента
          </p>
        </div>

        {/* Mobile Image */}
        <Image
          src="/assets/images/hero-mobile.png"
          alt="Hero background"
          width={1536}
          height={1024}
          className="lg:hidden"
        />

        <div className="space-y-6 sm:space-y-8 lg:space-y-11.25">
          <p className="max-w-xl lg:hidden leading-5.5 sm:text-lg/6.5 md:text-xl/6.75">
            Оцените примерное время реабилитации на основе текущего состояния
            пациента
          </p>

          <div className="grid 2xs:grid-cols-2 xs:flex-base gap-3 sm:gap-5 md:gap-6.25">
            <Button
              variant="primary"
              className="2xs:w-max sm:text-base/5.5! lg:text-xl/6.75! sm:py-3! lg:py-4!"
            >
              Перейти к рассчёту
            </Button>
            <Button
              variant="secondary"
              className="sm:text-base/5.5! lg:text-xl/6.75! sm:py-3! lg:py-4!"
            >
              Для кого подходит
            </Button>
          </div>

          <div className="max-w-xl flex-base gap-3 sm:gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#8E8E93"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-xs/4 sm:text-sm/4.75 md:text-base/5.5 text-brand-gray-500">
              Результат носит ориентировочный характер и не заменяет
              консультацию специалиста.
            </p>
          </div>
        </div>
      </Container>

      {/* Desktop Image */}
      <Image
        src="/assets/images/hero.png"
        alt="Hero background"
        width={1536}
        height={1024}
        className="hidden lg:block absolute -top-1/5 -right-5"
      />
    </section>
  );
}
