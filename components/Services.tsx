"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/lib/index";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Soft blue theme colors (Landing 5 as default)
  const theme = {
    background: "bg-blue-50",
    titleColor: "text-blue-900",
    accentColor: "text-[#3b82f6]",
    subtitleColor: "text-blue-700",
    cardBg: "bg-white/90",
    cardBorder: "border-blue-200",
    cardText: "text-blue-700",
    cardTitle: "text-blue-900",
    numberBg: "bg-blue-100",
    numberText: "text-blue-700",
    buttonBg: "bg-blue-600",
    buttonText: "text-white",
    buttonHover: "hover:bg-blue-800",
    gradientFrom: "from-[#3b82f6]",
    gradientTo: "to-[#2563eb]",
    decorativeColor: "bg-blue-400",
    decorativeColorAlt: "bg-blue-800",
  };
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cards = cardsRef.current;

    if (!container || !title || !subtitle) return;

    // Set initial states
    gsap.set([title, subtitle], { opacity: 0, y: 50 });
    gsap.set(cards, { opacity: 0, y: 80, scale: 0.9 });

    // Create timeline for header animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    headerTl
      .to(title, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Animate cards
    cards.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.background} min-h-screen`}
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme.titleColor} mb-6 tracking-tight`}
          >
            Our <span className={theme.accentColor}>Services</span>
          </h2>
          <p
            ref={subtitleRef}
            className={`text-lg md:text-xl ${theme.subtitleColor} max-w-3xl mx-auto leading-relaxed`}
          >
            Comprehensive support for your educational journey and settlement in
            Australia. From visa assistance to career guidance, we&apos;re here
            to help you succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-96"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500`}
                ></div>
                {/* Theme Color Overlay */}
                <div
                  className={`absolute inset-0 ${theme.gradientFrom.replace(
                    "from-",
                    "bg-"
                  )}/20 group-hover:${theme.gradientFrom.replace(
                    "from-",
                    "bg-"
                  )}/30 transition-all duration-500`}
                ></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Top Section - Number Badge */}
                <div className="flex justify-between items-start">
                  <div></div>
                  <div
                    className={`w-12 h-12 ${theme.gradientFrom.replace(
                      "from-",
                      "bg-"
                    )} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Bottom Section - Content */}
                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div
                    className={`w-16 h-16 ${theme.gradientFrom.replace(
                      "from-",
                      "bg-"
                    )} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-opacity-90 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed text-sm opacity-90 line-clamp-4">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm">Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 border-2 border-transparent group-hover:border-${theme.gradientFrom
                  .replace("from-[", "")
                  .replace(
                    "]",
                    ""
                  )} rounded-2xl transition-all duration-300 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <button
              className={`group ${theme.buttonBg} ${theme.buttonText} px-8 py-4 rounded-full font-semibold text-lg ${theme.buttonHover} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <span className="mr-2">Get Started Today</span>
              <svg
                className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-32 h-32 ${theme.decorativeColor} rounded-full opacity-5`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-48 h-48 ${theme.decorativeColor} rounded-full opacity-5`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/4 w-24 h-24 ${theme.decorativeColorAlt} rounded-full opacity-3`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
