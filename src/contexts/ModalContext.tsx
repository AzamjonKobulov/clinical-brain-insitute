"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type ModalContextValue = {
  embedOpen: boolean;
  findOutMoreOpen: boolean;
  integrationConditionsOpen: boolean;
  calculationMethodOpen: boolean;
  widgetRequestOpen: boolean;
  teleconsultOpen: boolean;
  openEmbedCode: () => void;
  openFindOutMore: () => void;
  openIntegrationConditions: () => void;
  openCalculationMethod: () => void;
  openWidgetRequest: () => void;
  openTeleconsult: () => void;
  closeEmbedCode: () => void;
  closeFindOutMore: () => void;
  closeIntegrationConditions: () => void;
  closeCalculationMethod: () => void;
  closeWidgetRequest: () => void;
  closeTeleconsult: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [embedOpen, setEmbedOpen] = useState(false);
  const [findOutMoreOpen, setHowItWorksOpen] = useState(true);
  const [integrationConditionsOpen, setIntegrationConditionsOpen] =
    useState(false);
  const [calculationMethodOpen, setCalculationMethodOpen] = useState(false);
  const [widgetRequestOpen, setWidgetRequestOpen] = useState(false);
  const [teleconsultOpen, setTeleconsultOpen] = useState(true);

  const openEmbedCode = useCallback(() => setEmbedOpen(true), []);
  const openFindOutMore = useCallback(() => setHowItWorksOpen(true), []);
  const openIntegrationConditions = useCallback(
    () => setIntegrationConditionsOpen(true),
    []
  );
  const openCalculationMethod = useCallback(
    () => setCalculationMethodOpen(true),
    []
  );
  const openWidgetRequest = useCallback(() => setWidgetRequestOpen(true), []);
  const openTeleconsult = useCallback(() => setTeleconsultOpen(true), []);
  const closeEmbedCode = useCallback(() => setEmbedOpen(false), []);
  const closeFindOutMore = useCallback(() => setHowItWorksOpen(false), []);
  const closeIntegrationConditions = useCallback(
    () => setIntegrationConditionsOpen(false),
    []
  );
  const closeCalculationMethod = useCallback(
    () => setCalculationMethodOpen(false),
    []
  );
  const closeWidgetRequest = useCallback(
    () => setWidgetRequestOpen(false),
    []
  );
  const closeTeleconsult = useCallback(
    () => setTeleconsultOpen(false),
    []
  );

  return (
    <ModalContext.Provider
      value={{
        embedOpen,
        findOutMoreOpen,
        integrationConditionsOpen,
        calculationMethodOpen,
        widgetRequestOpen,
        teleconsultOpen,
        openEmbedCode,
        openFindOutMore,
        openIntegrationConditions,
        openCalculationMethod,
        openWidgetRequest,
        openTeleconsult,
        closeEmbedCode,
        closeFindOutMore,
        closeIntegrationConditions,
        closeCalculationMethod,
        closeWidgetRequest,
        closeTeleconsult,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return ctx;
}
