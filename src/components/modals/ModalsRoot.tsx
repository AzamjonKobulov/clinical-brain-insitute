"use client";

import CalculationMethodModal from "@/components/modals/CalculationMethodModal";
import EmbedCodeModal from "@/components/modals/EmbedCodeModal";
import FindOutMoreModal from "@/components/modals/FindOutMoreModal";
import IntegrationConditionsModal from "@/components/modals/IntegrationConditionsModal";
import TeleconsultModal from "@/components/modals/TeleconsultModal";
import WidgetRequestModal from "@/components/modals/WidgetRequestModal";
import { useModal } from "@/contexts/ModalContext";

export default function ModalsRoot() {
  const {
    embedOpen,
    findOutMoreOpen,
    integrationConditionsOpen,
    calculationMethodOpen,
    widgetRequestOpen,
    teleconsultOpen,
    closeEmbedCode,
    closeFindOutMore,
    closeIntegrationConditions,
    closeCalculationMethod,
    closeWidgetRequest,
    closeTeleconsult,
  } = useModal();

  return (
    <>
      <EmbedCodeModal isOpen={embedOpen} onClose={closeEmbedCode} />
      <FindOutMoreModal isOpen={findOutMoreOpen} onClose={closeFindOutMore} />
      <IntegrationConditionsModal
        isOpen={integrationConditionsOpen}
        onClose={closeIntegrationConditions}
      />
      <CalculationMethodModal
        isOpen={calculationMethodOpen}
        onClose={closeCalculationMethod}
      />
      <WidgetRequestModal
        isOpen={widgetRequestOpen}
        onClose={closeWidgetRequest}
      />
      <TeleconsultModal
        isOpen={teleconsultOpen}
        onClose={closeTeleconsult}
      />
    </>
  );
}
