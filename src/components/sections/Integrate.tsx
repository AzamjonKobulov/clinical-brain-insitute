"use client";

import Image from "next/image";

import Container from "../shared/Container";
import Button from "../ui/Button";
import { useModal } from "@/contexts/ModalContext";

const items: {
  title: string;
  description: string;
  img: string;
  buttonText1: string;
  buttonText2: string;
  buttonIcon?: () => React.ReactNode;
}[] = [
  {
    title: "Информационный виджет",
    description:
      "Можно встроить на сайт за 5 минут — без формы заявки. Пользователь проходит шаги, получает ориентировочный результат и на этом завершает сценарий",
    img: "/assets/images/integrate-1.png",
    buttonText1: "Получить код",
    buttonText2: "Узнать подробней",
    buttonIcon: () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.49999 5.83325L3.33333 9.99992L7.49999 14.1666M12.5 5.83325L16.6667 9.99992L12.5 14.1666"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Виджет со сбором заявок",
    description:
      "Предусмотрена встроенная форма заявки с настройкой получателя уведомлений после заполнения формы. Доступен после прохождения модерации ",
    img: "/assets/images/integrate-2.png",
    buttonText1: "Заявка на подключение",
    buttonText2: " Условия интеграции",
  },
];

export default function Integrate() {
  const {
    openEmbedCode,
    openFindOutMore,
    openIntegrationConditions,
    openWidgetRequest,
  } = useModal();

  return (
    <section id="integrate">
      <Container className="space-y-10 lg:space-y-8.75">
        <div className="space-y-5">
          <div className="text-center">
            <p className="sup-title">Встроить на сайт</p>
            <h2>Интегрируйте калькулятор на сайт вашей клиники</h2>
          </div>

          <p className="max-w-4xl mx-auto text-center lg:px-10">
            Встраиваемый виджет помогает посетителям получить предварительную
            оценку объёма реабилитации прямо на вашем сайте.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="space-y-3 px-6.25 pb-10 pt-8 border border-brand-vibrant-secondary rounded-brand-xl"
            >
              <Image
                src={item.img}
                alt="Integrate"
                width={800}
                height={650}
                className="w-60 h-50 mx-auto"
              />
              <div className="space-y-7.5 text-center">
                <h3 className="text-xl/6.25 font-semibold">{item.title}</h3>
                <p className="text-sm/5 sm:text-base/6.25">
                  {item.description}
                </p>
                <div className="flex-center flex-col sm:flex-row lg:flex-col xl:flex-row gap-5">
                  <Button
                    variant="primary"
                    className="h-11 lg:h-11.5 w-full sm:w-auto lg:w-full xl:w-auto flex-base gap-2.5"
                    onClick={
                      index === 0
                        ? openEmbedCode
                        : index === 1
                          ? openWidgetRequest
                          : undefined
                    }
                  >
                    {item.buttonIcon && item.buttonIcon()}
                    {item.buttonText1}
                  </Button>
                  <Button
                    variant="outline"
                    className="h-11 lg:h-11.5 w-full sm:w-auto lg:w-full xl:w-auto"
                    onClick={
                      index === 0
                        ? openFindOutMore
                        : index === 1
                          ? openIntegrationConditions
                          : undefined
                    }
                  >
                    {item.buttonText2}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
