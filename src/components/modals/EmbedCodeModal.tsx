"use client";

import { useState, useCallback } from "react";
import Modal from "./Modal";

const WIDTH_OPTIONS = [500, 600, 700, 800];
const HEIGHT_OPTIONS = [600, 700, 800];

const CopyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M3.33317 13.3334C2.4165 13.3334 1.6665 12.5834 1.6665 11.6667V3.33341C1.6665 2.41675 2.4165 1.66675 3.33317 1.66675H11.6665C12.5832 1.66675 13.3332 2.41675 13.3332 3.33341M8.33317 6.66675H16.6665C17.587 6.66675 18.3332 7.41294 18.3332 8.33341V16.6667C18.3332 17.5872 17.587 18.3334 16.6665 18.3334H8.33317C7.4127 18.3334 6.6665 17.5872 6.6665 16.6667V8.33341C6.6665 7.41294 7.4127 6.66675 8.33317 6.66675Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CopiedCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

type EmbedCodeModalProps = {
  isOpen?: boolean;
  onClose: () => void;
};

export default function EmbedCodeModal({
  isOpen = true,
  onClose,
}: EmbedCodeModalProps) {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(700);
  const [copied, setCopied] = useState(false);

  const iframeCode = `<iframe src="https://calc.neuro-ural.ru/" width="${width}" height="${height}" frameborder="0"></iframe>`;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(iframeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [iframeCode]);

  return (
    <Modal
      isOpen={isOpen}
      title="Код для встраивания информационного виджета"
      onClose={onClose}
    >
      <p className="text-sm/5 text-brand-gray-500 md:text-base/6.25">
        Встраивание за 5 минут. Пользователь проходит шаги и видит результат –
        без передачи персональных данных.
      </p>

      <div className="mt-8.75 md:mt-5">
        <h3 className="text-base font-medium text-brand-dark md:text-lg/6.25 mb-5">
          Установите нужные вам настройки
        </h3>

        <div className="space-y-3.75 md:space-y-5">
          <div className="flex gap-5 sm:gap-7.5">
            <span className=" text-sm font-medium text-brand-dark sm:w-20">
              Ширина
            </span>
            <div className="flex-base gap-2">
              {WIDTH_OPTIONS.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWidth(w)}
                  className={`text-xs/4 md:text-sm/4.75 font-medium rounded-brand-xl smooth px-2.5 py-1.5 ${
                    width === w
                      ? "bg-brand-green-400 text-white"
                      : "bg-brand-vibrant-secondary text-brand-dark hover:bg-brand-green-400 hover:text-white"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-5 sm:gap-7.5">
            <span className="min-w-14.25 md:min-w-16.25 text-sm font-medium text-brand-dark sm:w-20">
              Высота
            </span>
            <div className="flex-base gap-2">
              {HEIGHT_OPTIONS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHeight(h)}
                  className={`text-xs/4 md:text-sm/4.75 font-medium rounded-brand-xl smooth px-2.5 py-1.5 ${
                    height === h
                      ? "bg-brand-green-400 text-white"
                      : "bg-brand-vibrant-secondary text-brand-dark hover:bg-brand-green-400 hover:text-white"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8.75 md:mt-5">
        <div className="rounded-t-brand-xl overflow-hidden bg-brand-green-400/25">
          <div className="flex-between px-3.75 py-2.5 md:px-5">
            <span className="leading-5.5 md:text-xl/6.75 font-semibold text-brand-dark">
              html
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="flex-base gap-2.5 text-brand-dark text-sm/4.75 font-medium hover:text-brand-green-400 smooth"
            >
              {copied ? "Скопировано" : "Скопировать код"}
              {copied ? <CopiedCheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </div>

        <div className="md:px-5 text-sm/5 bg-brand-green-50 border border-t-0 rounded-b-brand-xl border-brand-gray-100">
          <div className="w-full max-w-[90%] mx-auto sm:max-w-none overflow-x-auto scroll-brand">
            <pre className="px-3.75 py-2.5 font-normal">
              <code className="font-normal">
                <span>{`<`}</span>
                <span className="text-brand-violet">iframe</span>
                <span>{` src="`}</span>
                <span className="text-brand-green-400">
                  https://calc.neuro-ural.ru/
                </span>
                <span>{`" width="`}</span>
                <span className="text-brand-green-400">{width}</span>
                <span>{`" height="`}</span>
                <span className="text-brand-green-400">{height}</span>
                <span>{`" frameborder="`}</span>
                <span className="text-brand-green-400">0</span>
                <span>{`"></`}</span>
                <span className="text-brand-violet">iframe</span>
                <span>{`>`}</span>
              </code>
            </pre>
          </div>
        </div>
        <p className="mt-5 text-sm/5 text-brand-dark">
          Вставьте код в HTML-блок страницы.
        </p>
      </div>
    </Modal>
  );
}
