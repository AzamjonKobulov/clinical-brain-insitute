"use client";

import { useState } from "react";
import Modal from "./Modal";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import CheckIcon from "@/components/ui/CheckIcon";

type WidgetRequestModalProps = {
  isOpen?: boolean;
  onClose: () => void;
};

export default function WidgetRequestModal({
  isOpen = true,
  onClose,
}: WidgetRequestModalProps) {
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit form
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Заявка на подключение виджета со сбором заявок"
      onClose={onClose}
    >
      <div className="space-y-8.75 md:space-y-5">
        <div className="space-y-3.75 md:space-y-5 text-sm/5 text-brand-dark lg:pr-10">
          <p>
            Доступно для медицинских учреждений и сервисов после модерации.
            Можно персонально настроить получателя заявок для вашей организации.
          </p>
          <p>
            Заполните необходимые поля и отправьте форму. После подтверждения вы
            получите код для вставки на сайт. При необходимости ответим и
            согласуем параметры интеграции.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8.75 md:space-y-5">
          {/* Данные организации */}
          <div className="space-y-3.75 md:space-y-5">
            <h3 className="leading-5.5 md:text-lg/6.25 font-semibold text-brand-dark">
              Данные организации
            </h3>
            <div className="grid sm:grid-cols-12 gap-3.75 sm:gap-5">
              <Input
                placeholder="Название ЛПУ или сервиса"
                name="orgName"
                className="sm:col-span-5"
              />
              <Input
                placeholder="Сайт"
                name="website"
                type="url"
                className="sm:col-span-7"
              />
              <Input
                placeholder="Регион"
                name="region"
                className="sm:col-span-6"
              />
              <Input
                placeholder="Город"
                name="city"
                className="sm:col-span-6"
              />
              <Input placeholder="ИНН" name="inn" className="sm:col-span-6" />
              <Input placeholder="ОГРН" name="ogrn" className="sm:col-span-6" />
            </div>
          </div>

          {/* Контактные данные */}
          <div className="space-y-3.75 md:space-y-5">
            <h3 className="leading-5.5 md:text-lg/6.25 font-semibold text-brand-dark">
              Контактные данные
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.75 sm:gap-5">
              <Input
                placeholder="ФИО"
                name="fullName"
                className="sm:col-span-2"
              />
              <Input placeholder="Телефон" name="phone" type="tel" />
              <Input placeholder="Email" name="email" type="email" />
            </div>
          </div>

          {/* Где планируется размещать виджет */}
          <div className="space-y-3.75 md:space-y-5">
            <h3 className="leading-5.5 md:text-lg/6.25 font-semibold text-brand-dark">
              Где планируется размещать виджет
            </h3>
            <div className="space-y-3.75 sm:space-y-5">
              <Textarea
                placeholder="Укажите страницу сайта или раздел, в котором планируется"
                name="placementPage"
              />
              <Textarea
                placeholder="Укажите email, на которые планируется принимать заявки. Можно несколько"
                name="recipientEmails"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3.75 md:space-y-5 lg:pr-10">
            <label className="flex items-start gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="sr-only"
              />
              <span
                className={`shrink-0 mt-0.5 size-5 rounded border-2 flex items-center justify-center smooth group-hover:border-brand-green-400 ${
                  agreeTerms
                    ? "border-brand-green-400"
                    : "border-brand-gray-400"
                }`}
                aria-hidden
              >
                {agreeTerms && (
                  <CheckIcon className="size-3 text-brand-green-400" />
                )}
              </span>
              <span className="text-xs/4 md:text-base/5.5 font-medium text-brand-dark">
                Согласен с условиями интеграции и обработки обращений
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
                className="sr-only"
              />
              <span
                className={`shrink-0 mt-0.5 size-5 rounded border-2 flex items-center justify-center smooth group-hover:border-brand-green-400 ${
                  agreePrivacy
                    ? "border-brand-green-400"
                    : "border-brand-gray-400"
                }`}
                aria-hidden
              >
                {agreePrivacy && (
                  <CheckIcon className="size-3 text-brand-green-400" />
                )}
              </span>
              <span className="text-xs/4 md:text-base/5.5 font-medium text-brand-dark">
                Я ознакомлен (а) и принимаю условия Политики конфиденциальности
                и Пользовательского соглашения Клиники, а также даю свое
                согласие на сбор, обработку и хранение персональных данных
                согласно бланку указанного Согласия
              </span>
            </label>
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="primary">
              Отправить заявку
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
