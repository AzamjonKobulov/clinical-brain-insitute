"use client";

import { useState, useRef, useEffect } from "react";
import Container from "../shared/Container";
import {
  TOTAL_STEPS,
  CALCULATOR_STEP_LABELS,
  STEP_OPTIONS_BY_INDEX,
  step0Options,
  step1Options,
} from "@/data/calculator";
import CalculatorSidebar from "./calculator/CalculatorSidebar";
import CalculatorStepHeader from "./calculator/CalculatorStepHeader";
import CalculatorOptionList from "./calculator/CalculatorOptionList";
import CalculatorResults from "./calculator/CalculatorResults";
import CalculatorNavigation from "./calculator/CalculatorNavigation";
import MobileStepToolbar from "./calculator/MobileStepToolbar";

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>(
    {},
  );
  const activeStepRef = useRef<HTMLLIElement>(null);
  const progressPercent = ((currentStep + 1) / TOTAL_STEPS) * 100;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === TOTAL_STEPS - 1;
  const currentStepSelected = selectedOptions[currentStep] != null;
  const canGoNext = isLastStep || currentStepSelected;
  const handleSelectOption = (optionId: string) =>
    setSelectedOptions((prev) => ({ ...prev, [currentStep]: optionId }));

  useEffect(() => {
    activeStepRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentStep]);

  const showStepBlock1 =
    currentStep === 0 || (currentStep >= 2 && currentStep <= 7);
  const showStepBlock2 = currentStep === 1;
  const showStepBlock9 = currentStep === 8;
  const showOptionsBlock1 =
    currentStep === 0 || (currentStep >= 2 && currentStep <= 7);
  const optionsForStep =
    STEP_OPTIONS_BY_INDEX[currentStep] ?? step0Options;

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

        <div className="flex flex-col lg:flex-row flex-stretch gap-7.5 lg:gap-5">
          <CalculatorSidebar
            currentStep={currentStep}
            activeStepRef={activeStepRef}
          />

          <div className="flex-1 flex flex-col justify-between md:bg-white lg:rounded-brand-xl overflow-hidden md:px-6.25 md:py-5">
            <div className="bg-white rounded-brand-xl p-2.5 md:p-0">
              <MobileStepToolbar currentStep={currentStep} />

              {/* Step content 1 + Steps 3–8 */}
              <div
                className={`space-y-3.75 lg:space-y-7.5 mt-3.75 md:mt-0 ${!showStepBlock1 ? "hidden" : ""}`}
              >
                <CalculatorStepHeader
                  title={CALCULATOR_STEP_LABELS[currentStep]}
                  progressPercent={progressPercent}
                  subtitle="Этот шаг не влияет на итоговое время, но помогает уточнить рекомендации"
                />
                {showOptionsBlock1 && (
                  <CalculatorOptionList
                    options={optionsForStep}
                    name={`calculator-option-step-${currentStep}`}
                    value={selectedOptions[currentStep]}
                    onSelect={handleSelectOption}
                  />
                )}
              </div>

              {/* Step 2 — Двигательные нарушения */}
              <div
                className={`space-y-3.75 lg:space-y-7.5 mt-3.75 md:mt-0 ${!showStepBlock2 ? "hidden" : ""}`}
              >
                <CalculatorStepHeader
                  title="Двигательные нарушения"
                  progressPercent={progressPercent}
                  subtitle="Выберите один вариант — тот, который лучше всего описывает ситуацию сейчас. На основе этого шага рассчитывается объём физической реабилитации."
                />
                <CalculatorOptionList
                  options={step1Options}
                  name="calculator-option-step-1"
                  value={selectedOptions[1]}
                  onSelect={handleSelectOption}
                />
              </div>

              {/* Step 9 — Results */}
              {showStepBlock9 && (
                <CalculatorResults progressPercent={progressPercent} />
              )}
            </div>

            <CalculatorNavigation
              currentStep={currentStep}
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              canGoNext={canGoNext}
              onBack={() => setCurrentStep(currentStep - 1)}
              onNext={() => setCurrentStep(currentStep + 1)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
