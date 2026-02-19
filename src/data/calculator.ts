export const TOTAL_STEPS = 9;

export const CALCULATOR_STEP_LABELS = [
  "Зависимость от помощи",
  "Двигательные нарушения",
  "Нарушения питания и глотания",
  "Нарушение речи",
  "Чёткость речи и голос",
  "Нарушение мимики и жевания",
  "Навыки самообслуживания",
  "Нейропсихологические нарушения",
  "Итоговый объём реабилитации",
] as const;

export type StepOption = { id: string; text: string; tight?: boolean };

function idFromLabel(label: string): string {
  return label
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[(),;]/g, "")
    .replace(/—/g, "-");
}

function option(text: string, tight?: boolean): StepOption {
  return { id: idFromLabel(text), text, tight };
}

export const step0Options: StepOption[] = [
  option("Нуждается в помощи при ходьбе, пересаживании", true),
  option("Может оставаться дома без присмотра"),
  option("Нужна помощь в еде или одевании"),
  option("Есть риск падений"),
  option("Требуется контроль мочеиспускания, дефекации"),
];

export const step1Options: StepOption[] = [
  option("Лежит в постели круглые сутки, сам не меняет позу", true),
  option(
    "Можно посадить в кресло только с помощью других людей; сидит в кресле не меньше часа",
  ),
  option("Может сам поворачиваться в постели"),
  option("Может сам сесть в постели, свесив ноги"),
  option(
    "Помогает при пересаживании из постели в кресло (частично участвует в движении)",
  ),
  option("Может стоять только, если держится за опору"),
  option("Может ходить по улице с привычной для себя скоростью"),
];

export const step2Options: StepOption[] = [
  option("Только зондовое питание"),
  option("Глотание твёрдой пищи затруднено, жидкая — без проблем"),
  option("Нужна помощь при приёме пищи (порез, подача)"),
  option("Ест и пьёт самостоятельно с ограничениями"),
  option("Питание и глотание без выраженных нарушений"),
];

export const step3Options: StepOption[] = [
  option("Речь отсутствует или неразборчива"),
  option("Отдельные слова, простые фразы"),
  option("Речь есть, но с большими паузами и ошибками"),
  option("Понимает речь, отвечает с затруднениями"),
  option("Речь понятная с незначительными нарушениями"),
];

export const step4Options: StepOption[] = [
  option("Голос отсутствует или очень слабый"),
  option("Речь неразборчива из-за дизартрии"),
  option("Голос тихий, монотонный"),
  option("Небольшие нарушения дикции"),
  option("Речь и голос в норме"),
];

export const step5Options: StepOption[] = [
  option("Не жуёт, только жидкое или протёртое"),
  option("Жуёт с трудом, быстро устаёт"),
  option("Мимика почти отсутствует"),
  option("Ограниченная мимика и жевание"),
  option("Мимика и жевание сохранены"),
];

export const step6Options: StepOption[] = [
  option("Полностью зависим от посторонней помощи"),
  option("Нужна помощь в большинстве действий"),
  option("Частично обслуживает себя сам"),
  option("Небольшая помощь в отдельных действиях"),
  option("Самообслуживание сохранено"),
];

export const step7Options: StepOption[] = [
  option("Выраженные нарушения памяти и внимания"),
  option("Затруднения при планировании и контроле"),
  option("Снижение памяти на текущие события"),
  option("Лёгкие нарушения концентрации"),
  option("Когнитивные функции в пределах нормы"),
];

export const STEP_OPTIONS_BY_INDEX: Record<number, StepOption[]> = {
  0: step0Options,
  1: step1Options,
  2: step2Options,
  3: step3Options,
  4: step4Options,
  5: step5Options,
  6: step6Options,
  7: step7Options,
};
