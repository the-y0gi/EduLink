"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import SplitType from "split-type";
import Marquee from "./Marquee";
import TypingText from "../ui/TypingText";
import { useStartup } from "../StartupContext";
// import { Button } from "./ui/button";

const Hero = () => {
  const { isStartupComplete } = useStartup();
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
    // Video should be visible from the start
    // Only the startup animation overlay will cover it initially
    if (videoRef.current) {
      gsap.set(videoRef.current, { scaleY: 1 });
    }
  }, []);

  useEffect(() => {
    // Only start text animations if startup is complete
    if (!isStartupComplete) return;

    const startDelay = 0.4; // Reduced delay for text animations

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
          delay: 1.3 + startDelay,
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
          delay: 0.9 + startDelay,
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
          delay: 0.7 + startDelay,
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
          delay: 0.7 + startDelay,
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
          delay: 1.1 + startDelay,
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
          delay: 1.1 + startDelay,
        }
      );
    }

    // Desktop UI elements animation
    if (buttonDesktopRef.current) {
      gsap.fromTo(
        buttonDesktopRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.5 + startDelay,
        }
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
          delay: 1.6 + startDelay,
        }
      );
    }

    // Mobile UI elements animation
    if (buttonMobileRef.current) {
      gsap.fromTo(
        buttonMobileRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.5 + startDelay,
        }
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
          delay: 1.6 + startDelay,
        }
      );
    }
  }, [isStartupComplete]);

  return (
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div className="hero-card absolute inset-0 w-full h-full flex flex-col xl:flex-row overflow-hidden">
          {/* Video Background for Card */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/newnewhero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Overlay on video - solid dark with subtle blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 pointer-events-none" />

          {/* Content Section */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-momo text-white mb-6 leading-tight">
              <TypingText
                segments={[
                  { text: "Your Global " },
                  { text: "Education", className: "text-primary" },
                  { text: " " },
                  { text: "&", className: "text-gray-300" },
                  { text: " " },
                  { text: "Immigration", className: "text-primary" },
                  { text: " Partner.", className: "" },
                ]}
                className="inline-block"
              />
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-normal leading-relaxed">
              Personalized guidance for education, immigration, and skill
              recognition to help you achieve your dreams.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-lg"
              >
                Get a Consultation →
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee bar directly below the hero */}
      <Marquee />
    </>
  );
};

export default Hero;
