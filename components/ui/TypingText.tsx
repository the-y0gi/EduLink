"use client";
import React, { useEffect, useState } from "react";
import { useStartup } from "../StartupContext";

type Segment = {
  text: string;
  className?: string;
};

type TypingTextProps = {
  // either pass a plain text string (legacy) or segments to preserve styling
  text?: string;
  segments?: Segment[];
  speed?: number; // ms per character
  className?: string;
  cursorChar?: string;
};

const TypingText: React.FC<TypingTextProps> = ({
  text,
  segments,
  speed = 60,
  className = "",
  cursorChar = "|",
}) => {
  const [displayedLen, setDisplayedLen] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const { isStartupComplete } = useStartup();

  // build a unified string length from segments or text
  const full = segments ? segments.map((s) => s.text).join("") : text || "";

  useEffect(() => {
    // Only start typing animation when startup is complete
    if (!isStartupComplete) {
      const reset = setTimeout(() => setDisplayedLen(0), 0);
      return () => clearTimeout(reset);
    }

    // Add delay after startup completes
    const startDelay = setTimeout(() => {
      // reset asynchronously to avoid sync setState inside effect
      const reset = setTimeout(() => setDisplayedLen(0), 0);
      let idx = 0;
      const t = setInterval(() => {
        idx += 1;
        setDisplayedLen(idx);
        if (idx >= full.length) {
          clearInterval(t);
        }
      }, speed);

      return () => {
        clearTimeout(reset);
        clearInterval(t);
      };
    }, 800); // Wait 800ms after startup completes

    return () => {
      clearTimeout(startDelay);
    };
  }, [full, speed, isStartupComplete]);

  useEffect(() => {
    const c = setInterval(() => {
      setIsCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(c);
  }, []);

  // render logic: if segments provided, render per-segment partial slices
  const content = segments
    ? (() => {
        const nodes: React.ReactNode[] = [];
        let remaining = displayedLen;
        for (let i = 0; i < segments.length; i++) {
          const seg = segments[i];
          if (remaining <= 0) break;
          const take = Math.min(seg.text.length, remaining);
          nodes.push(
            <span key={i} className={seg.className}>
              {seg.text.slice(0, take)}
            </span>
          );
          remaining -= take;
        }
        return nodes;
      })()
    : full.slice(0, displayedLen);

  return (
    <span className={className}>
      {content}
      <span style={{ visibility: isCursorVisible ? "visible" : "hidden" }}>
        {cursorChar}
      </span>
    </span>
  );
};

export default TypingText;
