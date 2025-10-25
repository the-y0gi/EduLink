"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
// import { Button } from "./ui/button";

const Hero = () => {
  // Refs for animation - separate for desktop and mobile
  const videoRef = useRef<HTMLVideoElement>(null);
  const visaDesktopRef = useRef<HTMLHeadingElement>(null);
  const supportDesktopRef = useRef<HTMLHeadingElement>(null);
  const visaMobileRef = useRef<HTMLHeadingElement>(null);
  const supportMobileRef = useRef<HTMLHeadingElement>(null);
  const ampersandDesktopRef = useRef<HTMLSpanElement>(null);
  const ampersandMobileRef = useRef<HTMLSpanElement>(null);
  const buttonDesktopRef = useRef<HTMLDivElement>(null);
  const paragraphDesktopRef = useRef<HTMLParagraphElement>(null);
  const buttonMobileRef = useRef<HTMLDivElement>(null);
  const paragraphMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { scaleY: 0, transformOrigin: "bottom center" },
        { scaleY: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    // Desktop & (Ampersand) animation
    if (ampersandDesktopRef.current) {
      gsap.fromTo(
        ampersandDesktopRef.current,
        { opacity: 0, scale: 0.5, rotate: -45 },
        {
          scale: 1,
          opacity: 0.45,
          rotate: 0,
          duration: 1.5,
          delay: 1.3,
          ease: "elastic.out(1, 0.5)",
        }
      );
    }
    // Mobile & (Ampersand) animation
    if (ampersandMobileRef.current) {
      gsap.fromTo(
        ampersandMobileRef.current,
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: 0.9,
          ease: "back.out(1.7)",
        }
      );
    }

    // VISA animation - Desktop
    if (visaDesktopRef.current) {
      const splitVisa = new SplitType(visaDesktopRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitVisa.chars,
        { y: 60, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          ease: "back.out(1.7)",
          stagger: 0.08,
          delay: 0.7,
        }
      );
    }

    // VISA animation - Mobile
    if (visaMobileRef.current) {
      const splitVisa = new SplitType(visaMobileRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitVisa.chars,
        { y: 60, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          ease: "back.out(1.7)",
          stagger: 0.08,
          delay: 0.7,
        }
      );
    }

    // SUPPORT animation - Desktop
    if (supportDesktopRef.current) {
      const splitSupport = new SplitType(supportDesktopRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitSupport.chars,
        { y: 60, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          ease: "back.out(1.7)",
          stagger: 0.08,
          delay: 1.1,
        }
      );
    }

    // SUPPORT animation - Mobile
    if (supportMobileRef.current) {
      const splitSupport = new SplitType(supportMobileRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitSupport.chars,
        { y: 60, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          ease: "back.out(1.7)",
          stagger: 0.08,
          delay: 1.1,
        }
      );
    }

    // Desktop UI elements animation
    if (buttonDesktopRef.current) {
      gsap.fromTo(
        buttonDesktopRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.5 }
      );
    }
    if (paragraphDesktopRef.current) {
      gsap.fromTo(
        new SplitType(paragraphDesktopRef.current, { types: "words" }).words,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
          delay: 1.6,
        }
      );
    }

    // Mobile UI elements animation
    if (buttonMobileRef.current) {
      gsap.fromTo(
        buttonMobileRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.5 }
      );
    }
    if (paragraphMobileRef.current) {
      gsap.fromTo(
        paragraphMobileRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.6,
        }
      );
    }
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-card relative h-[80vh] rounded-2xl w-[90vw] flex flex-col xl:flex-row overflow-hidden">
        {/* Video Background for Card */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/herobg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay on video */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary/60 via-black/40 to-primary/50 z-10 pointer-events-none" />

        {/* Content Section */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Global <span className="text-[#4ECDC4]">Education</span>{" "}
            <span className="text-gray-300">&</span>{" "}
            <span className="text-[#4ECDC4]">Immigration</span> Partner.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Personalized guidance for education, immigration, and skill
            recognition to help you achieve your dreams.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#4ECDC4] hover:bg-[#45b8b1] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-lg">
              Get a Consultation →
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
