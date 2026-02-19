import Button from "@/components/ui/Button";
import { TOTAL_STEPS } from "@/data/calculator";

const DoctorModeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 9C15.75 7.20979 15.0388 5.4929 13.773 4.22703C12.5071 2.96116 10.7902 2.25 9 2.25C7.11296 2.2571 5.30173 2.99342 3.945 4.305L2.25 6M2.25 6V2.25M2.25 6H6M2.25 9C2.25 10.7902 2.96116 12.5071 4.22703 13.773C5.4929 15.0388 7.20979 15.75 9 15.75C10.887 15.7429 12.6983 15.0066 14.055 13.695L15.75 12M15.75 12H12M15.75 12V15.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MoreIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99996 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10C10.8333 9.5398 10.4602 9.16671 9.99996 9.16671C9.53972 9.16671 9.16663 9.5398 9.16663 10C9.16663 10.4603 9.53972 10.8334 9.99996 10.8334Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99996 5.00004C10.4602 5.00004 10.8333 4.62694 10.8333 4.16671C10.8333 3.70647 10.4602 3.33337 9.99996 3.33337C9.53972 3.33337 9.16663 3.70647 9.16663 4.16671C9.16663 4.62694 9.53972 5.00004 9.99996 5.00004Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99996 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8334C10.8333 15.3731 10.4602 15 9.99996 15C9.53972 15 9.16663 15.3731 9.16663 15.8334C9.16663 16.2936 9.53972 16.6667 9.99996 16.6667Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Props = {
  currentStep: number;
};

export default function MobileStepToolbar({ currentStep }: Props) {
  return (
    <div className="flex-between md:hidden">
      <span>
        Шаг {currentStep + 1} из {TOTAL_STEPS}
      </span>
      <div className="flex-base md:hidden gap-2.5">
        <Button variant="tab" className="shrink-0">
          <DoctorModeIcon />
          Режим врача
        </Button>
        <button className="size-5 text-brand-gray-500 hover:text-brand-green-400 smooth">
          <MoreIcon />
        </button>
      </div>
    </div>
  );
}
