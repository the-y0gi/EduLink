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
  // For multiple sentences animation
  sentences?: Segment[][];
  speed?: number; // ms per character
  backspaceSpeed?: number; // ms per character for backspacing
  pauseDuration?: number; // ms to pause between sentences
  className?: string;
  cursorChar?: string;
};

const TypingText: React.FC<TypingTextProps> = ({
  text,
  segments,
  sentences,
  speed = 60,
  backspaceSpeed = 30,
  pauseDuration = 1500,
  className = "",
  cursorChar = "|",
}) => {
  const [displayedLen, setDisplayedLen] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const { isStartupComplete } = useStartup();

  // For multi-sentence mode, use sentences array, otherwise fall back to single text/segments
  const isMultiSentence = sentences && sentences.length > 0;
  const currentSegments = isMultiSentence
    ? sentences[currentSentenceIndex]
    : segments || [{ text: text || "" }];

  useEffect(() => {
    // Only start typing animation when startup is complete
    if (!isStartupComplete) {
      return;
    }

    if (!isMultiSentence) {
      // Original single sentence behavior
      const startDelay = setTimeout(() => {
        let idx = 0;
        const singleFull = segments
          ? segments.map((s) => s.text).join("")
          : text || "";
        const t = setInterval(() => {
          setDisplayedLen(++idx);
          if (idx >= singleFull.length) {
            clearInterval(t);
          }
        }, speed);
      }, 800);

      return () => clearTimeout(startDelay);
    } else {
      // Multi-sentence cycling behavior
      let sentenceIdx = 0;
      let idx = 0;
      let isTyping = true;
      let timeoutId: NodeJS.Timeout;
      let cleanup = false;

      const cycle = () => {
        if (cleanup) return;

        const currentFull = sentences[sentenceIdx].map((s) => s.text).join("");

        if (isTyping) {
          // Typing phase
          idx += 1;
          setDisplayedLen(idx);
          setCurrentSentenceIndex(sentenceIdx);

          if (idx >= currentFull.length) {
            // Finished typing, pause then start backspacing
            timeoutId = setTimeout(() => {
              if (!cleanup) {
                isTyping = false;
                cycle();
              }
            }, pauseDuration);
          } else {
            timeoutId = setTimeout(() => {
              if (!cleanup) cycle();
            }, speed);
          }
        } else {
          // Backspacing phase
          idx -= 1;
          setDisplayedLen(Math.max(0, idx));

          if (idx <= 0) {
            // Finished backspacing, move to next sentence
            sentenceIdx = (sentenceIdx + 1) % sentences.length;
            isTyping = true;
            idx = 0;
            timeoutId = setTimeout(() => {
              if (!cleanup) cycle();
            }, 200); // Small pause before next sentence
          } else {
            timeoutId = setTimeout(() => {
              if (!cleanup) cycle();
            }, backspaceSpeed);
          }
        }
      };

      const startDelay = setTimeout(() => {
        if (!cleanup) {
          cycle();
        }
      }, 800);

      return () => {
        cleanup = true;
        clearTimeout(startDelay);
        clearTimeout(timeoutId);
      };
    }
  }, [
    speed,
    backspaceSpeed,
    pauseDuration,
    isStartupComplete,
    isMultiSentence,
    sentences,
    segments,
    text,
  ]);

  useEffect(() => {
    const c = setInterval(() => {
      setIsCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(c);
  }, []);

  // render logic: render per-segment partial slices using current segments
  const content = (() => {
    const nodes: React.ReactNode[] = [];
    let remaining = displayedLen;
    for (let i = 0; i < currentSegments.length; i++) {
      const seg = currentSegments[i];
      if (remaining <= 0) break;
      const take = Math.min(seg.text.length, remaining);
      nodes.push(
        <span key={`${currentSentenceIndex}-${i}`} className={seg.className}>
          {seg.text.slice(0, take)}
        </span>
      );
      remaining -= take;
    }
    return nodes;
  })();

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
