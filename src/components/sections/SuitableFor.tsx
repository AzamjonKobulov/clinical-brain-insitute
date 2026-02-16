import Container from "../shared/Container";
import Image from "next/image";

const items: { title: string; description: string; img: string }[] = [
  {
    title: "Пациентам и родственникам",
    description: "Чтобы понять примерный объём и сроки восстановления",
    img: "/assets/images/suitable-for-1.png",
  },
  {
    title: "Врачам и специалистам",
    description:
      "Для предварительной оценки и объяснения пациенту масштаба реабилитации",
    img: "/assets/images/suitable-for-2.png",
  },
  {
    title: "Клиникам и партнёрам",
    description:
      "Как инструмент первичного анализа и встраиваемый виджет на сайт",
    img: "/assets/images/suitable-for-3.png",
  },
];

export default function SuitableFor() {
  return (
    <section id="suitable-for">
      <Container className="space-y-10 lg:space-y-8.75">
        <div className="space-y-5">
          <div className="text-center">
            <p className="sup-title">Кому подойдёт этот расчёт</p>
            <h2>Для кого подходит калькулятор</h2>
          </div>

          <p className="text-center lg:hidden">
            Ответьте на несколько вопросов — получите ориентировочную оценку
            длительности реабилитации
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-9.75">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between relative bg-brand-green-75 rounded-brand-xl px-5 pt-5 lg:pb-26.5"
            >
              <div>
                <h3 className="leading-5.5 xs:text-base/5.5 sm:text-xl/6.75 md:text-base/5.5 lg:text-xl/6.75 font-medium sm:font-semibold md:font-medium lg:font-semibold">
                  {item.title}
                </h3>
                <p className="lg:w-2/3 text-sm/5 xs:text-xs/5 sm:text-base/5.5 md:text-sm/5.5 lg:text-base/5.5 mt-6.25">
                  {item.description}
                </p>
              </div>
              <Image
                src={item.img}
                alt={item.title}
                width={800}
                height={600}
                className="w-1/2 mx-auto lg:w-3/5 lg:absolute bottom-0 right-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
