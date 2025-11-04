"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface StartupAnimationProps {
  onComplete: () => void;
}

const StartupAnimation: React.FC<StartupAnimationProps> = ({ onComplete }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [navbarPosition, setNavbarPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        onComplete();
      },
    });

    // Initial state: logo in center, large
    gsap.set(logoRef.current, {
      scale: 2,
      opacity: 0,
    });

    // Calculate more precise navbar logo position
    const calculateNavbarPosition = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Get current logo center position
      const currentRect = logoRef.current?.getBoundingClientRect();
      const currentCenterX = currentRect
        ? currentRect.left + currentRect.width / 2
        : viewportWidth / 2;
      const currentCenterY = currentRect
        ? currentRect.top + currentRect.height / 2
        : viewportHeight / 2;

      // Calculate navbar logo position based on typical navbar layout
      // Navbar height is typically 64px, logo is positioned with container padding
      const containerPadding = viewportWidth < 768 ? 16 : 24; // responsive padding
      const logoWidth = 180; // approximate logo width from navbar

      const targetCenterX = containerPadding + logoWidth / 2;
      const targetCenterY = 32; // half of navbar height (64px)

      return {
        x: targetCenterX - currentCenterX,
        y: targetCenterY - currentCenterY,
      };
    };

    const targetPosition = calculateNavbarPosition();
    setNavbarPosition(targetPosition);

    // Animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(logoRef.current, {
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .to(
        logoRef.current,
        {
          x: targetPosition.x,
          y: targetPosition.y,
          scale: 0.7, // Scale down to navbar size
          duration: 1,
          ease: "power3.inOut",
        },
        "+=0.5"
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.8"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <div ref={logoRef} className="flex items-center space-x-2">
        {/* Logo Icon */}
        <div className="w-16 h-16 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center">
          <span className="text-2xl tracking-wide font-bold leading-tight text-gray-900">
            Edu<span className="text-primary">link</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StartupAnimation;
