"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import TypingText from "../ui/TypingText";
import Image from "next/image";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { scaleY: 0, transformOrigin: "bottom center" },
        { scaleY: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    // animate hero image with simple scaling
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          delay: 0.8,
          ease: "power2.out",
        }
      );
    }

    // animate overlay content after video reveal
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-card relative h-[80vh] rounded-2xl w-[90vw] overflow-hidden">
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
        {/* Overlay on video */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

        {/* Hero Image */}
        <div
          ref={heroImageRef}
          className="absolute bottom-0 right-0 z-30 pointer-events-none"
        >
          <Image
            src="/newnewheroimage.png"
            alt="Hero Image"
            width={600}
            height={450}
            className="w-64 h-48 md:w-96 md:h-72 lg:w-[500px] lg:h-[375px] xl:w-[600px] xl:h-[450px] object-cover"
          />
        </div>

        {/* Left-centered content inside the video (center on small screens, left on md+) */}
        <div
          ref={contentRef}
          className="absolute inset-0 z-20 flex items-center justify-center md:justify-start px-6 md:pl-20"
        >
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-momo text-white mb-4 leading-tight">
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

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0 font-normal leading-relaxed">
              Personalized guidance for education, immigration, and skill
              recognition to help you achieve your dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 text-lg"
              >
                Get a Consultation →
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
