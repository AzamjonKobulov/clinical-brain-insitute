export type NavLink = { label: string; href: string };

/** Desktop navbar links */
export const NAV_LINKS: NavLink[] = [
  { label: "Калькулятор", href: "#calculator" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "Интеграция", href: "#integrate" },
  { label: "Вопросы и ответы", href: "#faq" },
];

/** Mobile menu links (more items than navbar) */
export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: "Реабилитация", href: "/" },
  { label: "Пациентам", href: "/" },
  { label: "Специалисты", href: "/" },
  { label: "Услуги и цены", href: "/" },
  { label: "Телеконсультации", href: "/" },
  { label: "О нас", href: "/" },
  { label: "Контакты", href: "/" },
];

/** Footer links */
export const FOOTER_LINKS: NavLink[] = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Согласие на обработку данных", href: "/consent" },
  { label: "Калькулятор реабилитации", href: "#calculator" },
];
