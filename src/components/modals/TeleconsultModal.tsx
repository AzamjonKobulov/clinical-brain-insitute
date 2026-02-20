"use client";

import { useState, useRef } from "react";
import Modal from "./Modal";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import CheckIcon from "@/components/ui/CheckIcon";

const RemoveFileIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden
  >
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="#FF383C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaperclipIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden
  >
    <path
      d="M13.3335 4.99999L6.32185 12.155C6.00923 12.4676 5.8336 12.8916 5.8336 13.3337C5.8336 13.7759 6.00923 14.1999 6.32185 14.5125C6.63448 14.8251 7.05848 15.0008 7.5006 15.0008C7.94272 15.0008 8.36673 14.8251 8.67935 14.5125L15.691 7.3575C16.3162 6.73236 16.6674 5.88449 16.6674 5.00041C16.6674 4.11633 16.3162 3.26847 15.691 2.64333C15.0659 2.01819 14.218 1.66699 13.3339 1.66699C12.4499 1.66699 11.602 2.01819 10.9769 2.64333L3.99435 9.76916C3.52385 10.2321 3.14966 10.7835 2.89335 11.3918C2.63705 12 2.50371 12.653 2.50102 13.313C2.49833 13.973 2.62635 14.6271 2.87769 15.2374C3.12904 15.8477 3.49873 16.4022 3.96544 16.8689C4.43216 17.3356 4.98666 17.7053 5.59697 17.9567C6.20727 18.208 6.86131 18.336 7.52134 18.3333C8.18137 18.3306 8.83433 18.1973 9.44257 17.941C10.0508 17.6847 10.6023 17.3105 11.0652 16.84L18.0477 9.71416"
      stroke="#2A2A2A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type FileItem = { id: string; name: string };

type TeleconsultModalProps = {
  isOpen?: boolean;
  onClose: () => void;
};

export default function TeleconsultModal({
  isOpen = true,
  onClose,
}: TeleconsultModalProps) {
  const [formFilledBy, setFormFilledBy] = useState<"patient" | "relative">(
    "relative",
  );
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (!selected?.length) return;
    const newFiles: FileItem[] = Array.from(selected).map((file) => ({
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      name: file.name,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Записаться на телеконсультацию"
      onClose={onClose}
      compactPadding
    >
      <div className="space-y-8.75 md:space-y-5">
        <div className="space-y-3.75 md:space-y-5 text-sm/5 text-brand-dark lg:pr-10 px-3.75 md:px-0">
          <p>
            Врач уточнит цели и ограничения, объяснит расчёт и подскажет
            оптимальный формат реабилитации.
          </p>
          <p>
            Телеконсультация нужна, чтобы перевести ориентировочный расчёт в
            понятный план: врач уточнит исходные данные, оценит риски, расставит
            приоритеты и подскажет подходящий формат занятий (стационар /
            амбулаторно / телесопровождение).
          </p>
          <p>
            Если есть — прикрепите выписки, заключения, результаты обследований,
            список препаратов. Если документов нет — всё равно можно записаться:
            врач задаст уточняющие вопросы.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8.75 md:space-y-5">
          {/* Форму заполняет */}
          <div className="space-y-3.75 md:space-y-5">
            <h3 className="leading-5.5 md:text-lg/6.25 font-medium text-brand-dark px-3.75 md:px-0">
              Форму заполняет
            </h3>
            <div className="flex gap-2.5 whitespace-nowrap md:whitespace-normal overflow-x-auto scroll-none px-3.75 md:px-0">
              <button
                type="button"
                onClick={() => setFormFilledBy("patient")}
                className={`rounded-2xl md:rounded-brand-xl px-4 py-2 text-sm/4.75 font-normal smooth ${
                  formFilledBy === "patient"
                    ? "bg-brand-green-400 text-white"
                    : "bg-brand-vibrant-secondary text-brand-dark hover:bg-brand-gray-100"
                }`}
              >
                Пациент самостоятельно
              </button>
              <button
                type="button"
                onClick={() => setFormFilledBy("relative")}
                className={`rounded-2xl md:rounded-brand-xl px-4 py-2 text-sm/4.75 font-normal smooth ${
                  formFilledBy === "relative"
                    ? "bg-brand-green-400 text-white"
                    : "bg-brand-vibrant-secondary text-brand-dark hover:bg-brand-gray-100"
                }`}
              >
                Родственник или доверенное лицо
              </button>
            </div>
          </div>

          {/* Контактные данные */}
          <div className="space-y-3.75 md:space-y-5 px-3.75 md:px-0">
            <h3 className="leading-5.5 md:text-lg/6.25 font-medium text-brand-dark">
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
              <Textarea
                placeholder="Коротко опишите ситуацию: диагноз, что беспокоит, какие цели"
                name="situation"
                className="min-h-21! sm:col-span-2"
              />
            </div>
          </div>

          {/* Документы */}
          <div className="space-y-5 px-3.75 md:px-0">
            <div className="space-y-3.75 md:space-y-5">
              {files.length > 0 && (
                <ul className="space-y-1.5 text-sm/5 text-brand-dark">
                  {files.map((file) => (
                    <li key={file.id} className="flex items-center gap-1.25">
                      <span className="truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(file.id)}
                        className="shrink-0 p-0.5 rounded hover:bg-brand-gray-100 smooth"
                        aria-label={`Удалить ${file.name}`}
                      >
                        <RemoveFileIcon />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileChange}
                className="sr-only"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <Button
                type="button"
                variant="secondary"
                className="flex-base gap-2.5"
                onClick={() => fileInputRef.current?.click()}
              >
                <PaperclipIcon />
                Прикрепите документы
              </Button>
            </div>
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
                  Я согласен(а) с условиями записи на консультацию
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
                  Я ознакомлен(а) и принимаю условия Политики конфиденциальности
                  и Пользовательского соглашения Клиники, а также даю свое
                  согласие на сбор, обработку и хранение персональных данных
                  согласно бланку указанного Согласия
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end px-3.75 md:px-0">
            <Button type="submit" variant="primary">
              Отправить заявку
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
