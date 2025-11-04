"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface StartupContextType {
  isStartupComplete: boolean;
  setIsStartupComplete: (complete: boolean) => void;
}

const StartupContext = createContext<StartupContextType | undefined>(undefined);

export const useStartup = () => {
  const context = useContext(StartupContext);
  if (context === undefined) {
    throw new Error("useStartup must be used within a StartupProvider");
  }
  return context;
};

interface StartupProviderProps {
  children: ReactNode;
}

export const StartupProvider: React.FC<StartupProviderProps> = ({
  children,
}) => {
  const [isStartupComplete, setIsStartupComplete] = useState(false);

  return (
    <StartupContext.Provider
      value={{ isStartupComplete, setIsStartupComplete }}
    >
      {children}
    </StartupContext.Provider>
  );
};
