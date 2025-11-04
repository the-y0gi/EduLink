"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import SplitType from "split-type";
import Marquee from "./Marquee";
import { useStartup } from "../StartupContext";

const NewHero = () => {
  const { isStartupComplete } = useStartup();
  // Refs for animation - separate for desktop and mobile
  const videoRef = useRef<HTMLVideoElement>(null);
  const educationDesktopRef = useRef<HTMLHeadingElement>(null);
  const immigrationDesktopRef = useRef<HTMLHeadingElement>(null);
  const educationMobileRef = useRef<HTMLHeadingElement>(null);
  const partnerMobileRef = useRef<HTMLHeadingElement>(null);
  const ampersandDesktopRef = useRef<HTMLSpanElement>(null);
  const ampersandMobileRef = useRef<HTMLSpanElement>(null);
  const buttonDesktopRef = useRef<HTMLDivElement>(null);
  const paragraphDesktopRef = useRef<HTMLParagraphElement>(null);
  const buttonMobileRef = useRef<HTMLDivElement>(null);
  const paragraphMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Video should be visible from the start
    if (videoRef.current) {
      gsap.set(videoRef.current, { scaleY: 1 });
    }
  }, []);

  useEffect(() => {
    // Only start text animations if startup is complete
    if (!isStartupComplete) return;

    const startDelay = 0.4;

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

    // GLOBAL EDUCATION animation - Desktop
    if (educationDesktopRef.current) {
      const splitEducation = new SplitType(educationDesktopRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitEducation.chars,
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

    // IMMIGRATION PARTNER animation - Desktop
    if (immigrationDesktopRef.current) {
      const splitImmigration = new SplitType(immigrationDesktopRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitImmigration.chars,
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

    // Mobile & (Ampersand) animation
    if (ampersandMobileRef.current) {
      gsap.fromTo(
        ampersandMobileRef.current,
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 0.8,
          scale: 1,
          y: 0,
          duration: 1,
          delay: 0.9 + startDelay,
          ease: "back.out(1.7)",
        }
      );
    }

    // EDUCATION animation - Mobile
    if (educationMobileRef.current) {
      const splitEducation = new SplitType(educationMobileRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitEducation.chars,
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

    // PARTNER animation - Mobile
    if (partnerMobileRef.current) {
      const splitPartner = new SplitType(partnerMobileRef.current, {
        types: "chars",
      });
      gsap.fromTo(
        splitPartner.chars,
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
      <section
        id="hero"
        className="h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="hero-card relative h-full w-full flex flex-col xl:flex-row overflow-hidden">
          {/* Video Background - Full Screen */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/mainhero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Overlay on video */}
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

          {/* Desktop Layout */}
          <div className="hidden xl:block w-full h-full relative">
            {/* GLOBAL EDUCATION - Top Left */}
            <div className="absolute top-[10vh] left-8 z-40">
              <h1
                ref={educationDesktopRef}
                className="hero-title-education text-primary hover:text-primary/80 hover:scale-105 transition-all duration-300 font-extrabold text-[7vw] lg:text-[5vw] xl:text-[6vw] leading-none tracking-tighter uppercase font-momo"
              >
                GLOBAL
                <br />
                EDUCATION
              </h1>
            </div>

            {/* Center: Large & Symbol - Full Height */}
            <div className="absolute lg:left-[38vw] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <span
                ref={ampersandDesktopRef}
                className="text-white font-extrabold leading-none font-serif italic"
                style={{ fontSize: "65vh", opacity: ".45" }}
              >
                &
              </span>
            </div>

            {/* IMMIGRATION PARTNER - Bottom Right */}
            <div className="absolute right-2 bottom-24 z-40">
              <h1
                ref={immigrationDesktopRef}
                className="hero-title-immigration text-primary hover:text-primary/80 hover:scale-105 transition-all duration-300 font-extrabold text-[7vw] lg:text-[5vw] xl:text-[6vw] leading-none tracking-tighter uppercase font-momo text-right"
              >
                IMMIGRATION
                <br />
                PARTNER
              </h1>
            </div>

            {/* Get Consultation Button - Bottom Left */}
            <div
              ref={buttonDesktopRef}
              className="absolute left-8 bottom-8 z-40 flex flex-col items-start gap-4"
            >
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get a Consultation →
              </Link>
              {/* Badge below button */}
              <span className="text-white/80 text-sm font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                ✨ Trusted by 2k+ students
              </span>
            </div>

            {/* Paragraph - Bottom Right */}
            <div className="absolute right-8 bottom-8 z-40 max-w-md">
              <p
                ref={paragraphDesktopRef}
                className="text-white/90 text-lg text-right leading-relaxed font-medium"
              >
                Personalized guidance for education, immigration, and skill
                recognition to help you achieve your dreams.
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="xl:hidden w-full h-full flex flex-col justify-between p-6 z-30 relative">
            {/* Mobile Text Stack */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-6">
              {/* GLOBAL EDUCATION - Top */}
              <h1
                ref={educationMobileRef}
                className="hero-title-education text-primary font-extrabold text-[12vw] leading-none tracking-tighter uppercase font-momo text-center"
              >
                GLOBAL
                <br />
                EDUCATION
              </h1>

              {/* & - Middle */}
              <span
                ref={ampersandMobileRef}
                className="text-white/60 font-extrabold text-[15vw] leading-none font-serif italic"
              >
                &
              </span>

              {/* IMMIGRATION PARTNER - Bottom */}
              <h1
                ref={partnerMobileRef}
                className="hero-title-partner text-primary font-extrabold text-[12vw] leading-none tracking-tighter uppercase font-momo text-center"
              >
                IMMIGRATION
                <br />
                PARTNER
              </h1>
            </div>

            {/* Mobile Button and Badge */}
            <div
              ref={buttonMobileRef}
              className="flex flex-col items-center gap-4 mb-6"
            >
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Get a Consultation →
              </Link>
              <span className="text-white/80 text-sm font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                ✨ Trusted by 2k+ students
              </span>
            </div>

            {/* Mobile Paragraph */}
            <div ref={paragraphMobileRef} className="text-center">
              <p className="text-white/90 text-base leading-relaxed font-medium">
                Personalized guidance for education, immigration, and skill
                recognition to help you achieve your dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee bar directly below the hero */}
      <Marquee />
    </>
  );
};

export default NewHero;
