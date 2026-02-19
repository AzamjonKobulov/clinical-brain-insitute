import CalculatorStepHeader from "./CalculatorStepHeader";

type Props = {
  progressPercent: number;
};

export default function CalculatorResults({ progressPercent }: Props) {
  return (
    <div className="space-y-3.75 lg:space-y-7.5 mt-3.75 md:mt-0">
      <CalculatorStepHeader
        title="Итоги расчёта"
        progressPercent={progressPercent}
        subtitle="Ответы учтены — ниже ориентировочная оценка объёма реабилитации и примерные сроки."
        showActions={true}
      />

      <div className="space-y-3.75">
        <div className="space-y-2.5 bg-primary-linear text-white rounded-brand-xl px-5 py-3.75">
          <h4 className="font-semibold leading-5.5">
            Ориентировочный объём реабилитации
          </h4>
          <div className="flex-base gap-2">
            <span className="text-sm/5 border border-white rounded-full py-1 px-2.5">
              ≈ 120 часов
            </span>
            <span className="text-sm/5 border border-white rounded-full py-1 px-2.5">
              ≈ 31 день
            </span>
            <span className="text-sm/5 border border-white rounded-full py-1 px-2.5">
              ≈ 5 нед.
            </span>
          </div>
          <p className="text-sm/4.75">
            Предполагаемая реабилитационная нагрузка для повышения уровня
            независимости до максимально возможного на выбранной градации.
            Результат предварительный и не является медицинским назначеием
          </p>
          <p className="text-sm/4.75">
            Длительность зависит от выбранного формата и частоты занятий.
          </p>
        </div>

        <div className="space-y-2.5 border border-brand-gray-100 rounded-brand-xl py-3.75 md:py-2.5 px-5">
          <h4 className="font-medium md:font-semibold leading-5.5">
            Комментарий по результату
          </h4>
          <p className="text-sm/4.75">
            По ответам есть выраженная зависимость от помощи — возможно, стоит
            рассмотреть стационарный формат программы.
          </p>
        </div>

        <div className="border border-brand-gray-100 rounded-brand-xl py-3.75 md:py-2.5 px-5">
          <p className="text-sm/4.75">
            По ответам есть выраженная зависимость от помощи — возможно, стоит
            рассмотреть стационарный формат программы.
          </p>
        </div>
      </div>
    </div>
  );
}
