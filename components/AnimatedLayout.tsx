"use client";

import React from "react";
import Navbar from "./Navbar";
import StartupAnimation from "./StartupAnimation";
import { StartupProvider, useStartup } from "./StartupContext";

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

const AnimatedLayoutInner: React.FC<AnimatedLayoutProps> = ({ children }) => {
  const { isStartupComplete, setIsStartupComplete } = useStartup();

  const handleStartupComplete = () => {
    setIsStartupComplete(true);
  };

  return (
    <>
      {!isStartupComplete && (
        <StartupAnimation onComplete={handleStartupComplete} />
      )}
      <Navbar isStartupComplete={isStartupComplete} />
      {children}
    </>
  );
};

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ children }) => {
  return (
    <StartupProvider>
      <AnimatedLayoutInner>{children}</AnimatedLayoutInner>
    </StartupProvider>
  );
};

export default AnimatedLayout;
