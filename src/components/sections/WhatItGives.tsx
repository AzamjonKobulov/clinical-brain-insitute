import Container from "../shared/Container";

const tags: { label: string }[] = [
  {
    label: "Понимание масштаба реабилитации",
  },
  {
    label: "Возможность подготовиться к срокам",
  },
  {
    label: "Основание для разговора с врачом",
  },
  {
    label: "Ориентир по нагрузке и интенсивности занятий",
  },
  {
    label: "Не заменяет консультацию специалиста",
  },
];

export default function WhatItGives() {
  return (
    <section id="formats">
      <Container className="space-y-7 lg:space-y-8.75 px-0! md:px-12 lg:px-3.75">
        <div className="text-center px-3.75 md:px-0!">
          <p className="sup-title">Для чего</p>
          <h2>Что даёт этот расчёт</h2>
        </div>

        <div className="flex items-center gap-2.5 lg:gap-6 md:flex-wrap overflow-x-auto scroll-none px-3.75 md:px-0!">
          {tags.map((tag) => (
            <button
              key={tag.label}
              className="bg-brand-gray-100 text-sm lg:text-base leading-6.25 rounded-xl lg:rounded-brand-xl font-medium text-brand-dark whitespace-nowrap hover:bg-brand-vibrant-secondary active:bg-brand-vibrant-primary smooth py-2.25 px-3.75 lg:py-3.75 lg:px-5"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
