"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  // Soft blue theme colors (Landing 5 as default)
  const theme = {
    background: "bg-blue-50",
    overlay: "bg-blue-200/60",
    titleColor: "text-blue-900",
    accentColor: "text-[#3b82f6]",
    subtitleColor: "text-blue-800",
    descriptionColor: "text-blue-700",
    cardBg: "bg-white/85 backdrop-blur-sm",
    cardBorder: "border-blue-200",
    cardText: "text-blue-700",
    cardTitle: "text-blue-900",
    statsBg: "bg-white/90 backdrop-blur-sm",
    statsNumber: "text-blue-600",
    statsLabel: "text-blue-700",
    numberBg: "bg-blue-100",
    numberText: "text-blue-700",
    numberHoverBg: "group-hover:bg-blue-600",
    numberHoverText: "group-hover:text-white",
    ctaBg: "bg-blue-800/90 backdrop-blur-sm",
    ctaText: "text-white",
    ctaButton: "bg-blue-600 text-white hover:bg-blue-800",
    decorativeColor: "bg-blue-400",
    showVideo: true,
  };
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  const advantages = [
    {
      title: "Comprehensive Visa Guidance",
      description:
        "From student to post-study and skilled migration visas, our experienced consultants ensure a smooth, compliant, and stress-free application process.",
      icon: "🛂",
    },
    {
      title: "Study Pathway Expertise",
      description:
        "We help you choose the right course, university, and country that align with your career goals — ensuring your education investment leads to real success.",
      icon: "🎓",
    },
    {
      title: "Career and Work Support",
      description:
        "Edulink assists with employment advice, internship connections, and post-study work opportunities to help you gain valuable global experience.",
      icon: "💼",
    },
    {
      title: "Settlement Assistance",
      description:
        "We go beyond admissions — offering practical support for accommodation, cultural adaptation, and settlement so you can feel at home wherever you go.",
      icon: "🏠",
    },
  ];

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "95%", label: "Visa Success Rate" },
    { number: "50+", label: "Partner Universities" },
    { number: "10+", label: "Years Experience" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    const cards = cardsRef.current;
    const statsSection = statsRef.current;

    if (!container || !title || !subtitle || !description || !statsSection)
      return;

    // Set initial states
    gsap.set([title, subtitle, description], { opacity: 0, y: 50 });
    gsap.set(cards, { opacity: 0, y: 80, scale: 0.95 });
    gsap.set(statsSection, { opacity: 0, y: 60 });

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
        "-=0.4"
      )
      .to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Animate cards with stagger
    cards.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Animate stats section
    gsap.to(statsSection, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: statsSection,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
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
      className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.background} min-h-screen relative overflow-hidden`}
      id="why-choose-us"
    >
      <>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/herobg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={`absolute inset-0 ${theme.overlay} z-10`} />
      </>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme.titleColor} mb-4 tracking-tight`}
          >
            Why Choose <span className={theme.accentColor}>Us</span>
          </h2>
          <h3
            ref={subtitleRef}
            className={`text-2xl md:text-3xl font-semibold ${theme.subtitleColor} mb-6`}
          >
            Our Key Advantages
          </h3>
          <p
            ref={descriptionRef}
            className={`text-lg md:text-xl ${theme.descriptionColor} max-w-4xl mx-auto leading-relaxed`}
          >
            At Edulink, we don&apos;t just connect students to institutions — we
            connect dreams to opportunities. With years of experience in
            international education and migration support, we provide a one-stop
            solution for students looking to study, work, and settle abroad with
            confidence.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${
            theme.statsBg
          } rounded-2xl p-8 shadow-lg ${
            theme.cardBorder ? `border ${theme.cardBorder}` : ""
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-3xl md:text-4xl font-bold ${theme.statsNumber} mb-2`}
              >
                {stat.number}
              </div>
              <div
                className={`text-sm md:text-base ${theme.statsLabel} font-medium`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`group relative ${theme.cardBg} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border ${theme.cardBorder}`}
            >
              {/* Hover Effect Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br from-[${theme.accentColor}]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-20 h-20 bg-linear-to-br ${theme.decorativeColor} to-[#3ab5ad] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-3xl">{advantage.icon}</span>
                </div>

                {/* Number Badge */}
                <div
                  className={`absolute top-6 right-6 w-10 h-10 ${theme.numberBg} rounded-full flex items-center justify-center ${theme.numberHoverBg} ${theme.numberHoverText} transition-all duration-300`}
                >
                  <span className={`text-sm font-bold ${theme.numberText}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h4
                  className={`text-xl md:text-2xl font-bold ${theme.cardTitle} mb-4 group-hover:${theme.accentColor} transition-colors duration-300`}
                >
                  {advantage.title}
                </h4>

                {/* Description */}
                <p className={`${theme.cardText} leading-relaxed text-base`}>
                  {advantage.description}
                </p>

                {/* Decorative Line */}
                <div
                  className={`mt-6 w-12 h-1 ${theme.decorativeColor} rounded-full group-hover:w-20 transition-all duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className={`${theme.ctaBg} rounded-2xl p-8 md:p-12 ${theme.ctaText} relative overflow-hidden`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className={`absolute top-4 left-4 w-32 h-32 ${theme.decorativeColor} rounded-full`}
              ></div>
              <div
                className={`absolute bottom-4 right-4 w-24 h-24 ${theme.decorativeColor} rounded-full`}
              ></div>
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-[${theme.decorativeColor}] rounded-full`}
              ></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who chose Edulink for
                their international education dreams.
              </p>
              <button
                className={`group ${theme.ctaButton} px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                <span className="mr-2">Start Your Application</span>
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
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-8 w-40 h-40 bg-[#4ECDC4] rounded-full opacity-3"></div>
          <div className="absolute bottom-32 right-8 w-56 h-56 bg-black rounded-full opacity-2"></div>
          <div className="absolute top-2/3 left-1/3 w-32 h-32 border-4 border-[#4ECDC4] rounded-full opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
