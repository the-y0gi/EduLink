"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Target,
  HeartHandshake,
  TrendingUp,
  Globe,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseUS = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Guidance",
      description:
        "From student to post-study visas, our experienced consultants ensure a smooth application process.",
      label: "Guidance",
      gradient: "from-blue-600 to-blue-800",
      delay: 0.1,
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Pathways",
      description:
        "Choose the right course and university that aligns with your career goals for real success.",
      label: "Expertise",
      gradient: "from-[var(--primary)] to-teal-600",
      delay: 0.2,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "95% Success Rate",
      description:
        "Our proven track record speaks for itself with excellent results.",
      label: "Results",
      gradient: "from-[var(--secondary)] to-blue-900",
      stats: { number: "95%", label: "Visa Success Rate" },
      delay: 0.3,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Support",
      description:
        "Employment advice, internships, and work opportunities to gain global experience.",
      label: "Support",
      gradient: "from-[var(--primary)] to-cyan-600",
      delay: 0.4,
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Settlement Assistance",
      description:
        "Practical support for accommodation and cultural adaptation wherever you go.",
      label: "Care",
      gradient: "from-purple-600 to-purple-800",
      delay: 0.5,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "50+ Universities",
      description: "Connected to universities worldwide",
      label: "Network",
      gradient: "from-gray-600 to-gray-800",
      stats: { number: "50+", label: "Partner Universities" },
      delay: 0.6,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Student Reviews",
      description:
        "Join thousands of successful students who achieved their dreams",
      label: "Trust",
      gradient: "from-indigo-600 to-indigo-800",
      delay: 0.7,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "10+ Years",
      description: "A decade of expertise in international education",
      label: "Experience",
      gradient: "from-[var(--primary)] to-teal-700",
      stats: { number: "10+", label: "Years Experience" },
      delay: 0.8,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Cards animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--secondary)] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Trusted by 10,000+ Students</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--secondary)] mb-6 tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-teal-600 bg-clip-text text-transparent">
              EduLink
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for thousands of
            students and parents worldwide.
            <br />
            <span className="text-[var(--primary)] font-semibold">
              Your success is our mission.
            </span>
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 
                transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[var(--primary)]/20 
                hover:-translate-y-2 hover:border-[var(--primary)]/30 cursor-pointer
                ${
                  feature.stats
                    ? "flex flex-col items-center text-center p-6"
                    : "p-6"
                }
              `}
              style={{
                background: `linear-gradient(135deg, white 0%, rgba(78, 205, 196, 0.05) 100%)`,
              }}
            >
              {/* Hover gradient overlay */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                  bg-gradient-to-br ${feature.gradient}
                `}
              />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} p-[2px]`}
                >
                  <div className="w-full h-full bg-white/90 rounded-2xl" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)]/20 transition-colors duration-300">
                    {feature.label}
                  </span>
                  <div
                    className={`
                      p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                      bg-gradient-to-br ${feature.gradient} text-white shadow-lg
                    `}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Stats display for featured cards */}
                {feature.stats && (
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent mb-2">
                      {feature.stats.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-600">
                      {feature.stats.label}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[var(--secondary)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                    {feature.description}
                  </p>
                </div>

                {/* Animated arrow for interaction */}
                <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center text-[var(--primary)] text-sm font-medium">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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

              {/* Subtle particle effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`
                      absolute w-1 h-1 bg-[var(--primary)] rounded-full animate-pulse
                      ${i % 2 === 0 ? "animate-bounce" : "animate-ping"}
                    `}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 10}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${2 + i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-teal-600 text-white rounded-full hover:shadow-2xl hover:shadow-[var(--primary)]/30 transition-all duration-300 cursor-pointer group">
            <span className="font-semibold">Ready to Start Your Journey?</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
