import Container from "../shared/Container";

const items: { title: string; description: string }[] = [
  {
    title: "Стационар",
    description: "Интенсивная реабилитация 4 часа в день, до 6 дней в неделю",
  },
  {
    title: "Амбулаторно",
    description: "Регулярные занятия 2 часа за сеанс, несколько раз в неделю",
  },
  {
    title: "Телесопровождение",
    description: "Консультационный формат подходит при лёгких нарушениях",
  },
];

export default function Formats() {
  return (
    <section id="formats">
      <Container className="space-y-8.75">
        <div className="text-center">
          <p className="sup-title">Какие форматы учитываются</p>
          <h2>Форматы реабилитации</h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-9.75">
          {items.map((item) => (
            <div
              key={item.title}
              className="space-y-6.25 bg-brand-green-75 rounded-brand-xl p-5"
            >
              <h3 className="leading-5.5 sm:text-xl/6.75 font-semibold">
                {item.title}
              </h3>
              <p className="text-sm/5 sm:text-base/5.5">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
