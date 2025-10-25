"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/lib/index";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight"
          >
            Our <span className="text-[#4ECDC4]">Services</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#4ECDC4] via-transparent to-[#4ECDC4] p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-full bg-white rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Placeholder */}
                <div className="w-16 h-16 bg-linear-to-br from-[#4ECDC4] to-[#3ab5ad] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#4ECDC4] rounded-full"></div>
                  </div>
                </div>

                {/* Service Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#4ECDC4] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-[#4ECDC4] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4ECDC4] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
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
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#4ECDC4] rounded-full opacity-5"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#4ECDC4] rounded-full opacity-5"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-black rounded-full opacity-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
