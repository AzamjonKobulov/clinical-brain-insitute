import Container from "../shared/Container";

export default function Calculator() {
  return (
    <section id="calculator">
      <Container className="space-y-10 lg:space-y-8.75">
        <div className="space-y-5">
          <div className="text-center">
            <p className="sup-title">Рассчитать</p>
            <h2>Калькулятор объёма реабилитации</h2>
          </div>

          <p className="max-w-4xl mx-auto text-center lg:px-10">
            Ответьте на несколько вопросов — получите ориентировочную оценку
            длительности реабилитации
          </p>
        </div>

        {/* Calculator Steps */}
        <div className="flex-base gap-5">
          <div className="w-90 bg-white rounded-brand-xl p-3.75">
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="flex-1"></div>
        </div>
      </Container>
    </section>
  );
}
