"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { TOTAL_STEPS } from "@/data/calculator";

type Props = {
  currentStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  canGoNext: boolean;
  onBack: () => void;
  onNext: () => void;
};

export default function CalculatorNavigation({
  currentStep,
  isFirstStep,
  isLastStep,
  canGoNext,
  onBack,
  onNext,
}: Props) {
  return (
    <>
      {isLastStep && (
        <div className="flex-base flex-col md:flex-row gap-2.5 mt-5 md:pb-8">
          <div className="w-full flex-base flex-col md:flex-row gap-2.5">
            <Button
              variant="outline"
              className="md:hidden w-full md:w-auto"
              onClick={onBack}
            >
              Предыдущий шаг
            </Button>
            <Button variant="primary" className="w-full md:w-auto">
              Записаться на телеконсультацию
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              Методика рассчёта
            </Button>
          </div>
          <Link
            href="/"
            className="block md:hidden text-sm/4.75 text-brand-gray-400 "
          >
            Разработка <span className="underline">WBSTR digital agency</span>
          </Link>
        </div>
      )}

      <div className="flex-between mt-5">
        <div className="flex-base md:gap-5">
          {isLastStep ? (
            <span className="hidden md:inline-flex">
              <Button
                variant="outline"
                className="inline-flex"
                onClick={onBack}
              >
                Предыдущий шаг
              </Button>
            </span>
          ) : (
            <Button
              variant="outline"
              disabled={isFirstStep}
              className="hidden md:inline-flex"
              onClick={onBack}
            >
              <span className="md:hidden">Назад</span>
              <span className="hidden md:inline">Предыдущий шаг</span>
            </Button>
          )}
          <span className="hidden md:inline">
            Шаг {currentStep + 1} из {TOTAL_STEPS}
          </span>
        </div>

        {!isLastStep && (
          <Button
            variant="primary"
            disabled={!canGoNext}
            onClick={() => canGoNext && onNext()}
          >
            Перейти дальше - к шагу {currentStep + 2}
          </Button>
        )}

        {isLastStep && (
          <Link
            href="/"
            className="hidden md:inline text-sm/4.75 text-brand-gray-400 "
          >
            Разработка{" "}
            <span className="underline underline-offset-2">
              WBSTR digital agency
            </span>
          </Link>
        )}
      </div>
    </>
  );
}
