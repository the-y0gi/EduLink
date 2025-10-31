"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const stats = statsRef.current;
    const values = valuesRef.current;
    const mission = missionRef.current;

    if (!container) return;

    // Set initial states
    if (hero) {
      gsap.set(hero.querySelectorAll(".animate-fade-up"), {
        opacity: 0,
        y: 50,
      });
    }
    if (stats) {
      gsap.set(stats.querySelectorAll(".stat-item"), {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });
    }
    if (values) {
      gsap.set(values.querySelectorAll(".value-card"), {
        opacity: 0,
        y: 60,
        rotateY: 15,
      });
    }
    if (mission) {
      gsap.set(mission.querySelectorAll(".mission-content"), {
        opacity: 0,
        x: -50,
      });
    }

    // Hero section animation
    if (hero) {
      const heroElements = hero.querySelectorAll(".animate-fade-up");
      heroElements.forEach((element, index) => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: hero,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    // Stats animation
    if (stats) {
      const statItems = stats.querySelectorAll(".stat-item");
      statItems.forEach((item, index) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: stats,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    // Values section animation
    if (values) {
      const valueCards = values.querySelectorAll(".value-card");
      valueCards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    // Mission section animation
    if (mission) {
      const missionContent = mission.querySelectorAll(".mission-content");
      missionContent.forEach((element, index) => {
        gsap.to(element, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mission,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stats = [
    { number: "1000+", label: "Students Guided", icon: "👥" },
    { number: "95%", label: "Visa Success Rate", icon: "✅" },
    { number: "50+", label: "Partner Universities", icon: "🎓" },
    { number: "8+", label: "Years of Experience", icon: "⭐" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Personalized Guidance",
      description:
        "Every student's journey is unique. We provide tailored advice and support based on your individual goals, background, and aspirations.",
    },
    {
      icon: "🤝",
      title: "Genuine Support",
      description:
        "From your first inquiry to your career success, we're committed to being your trusted partner every step of the way.",
    },
    {
      icon: "📚",
      title: "Expert Knowledge",
      description:
        "Our experienced team stays updated with the latest immigration policies, education trends, and industry requirements.",
    },
    {
      icon: "🌟",
      title: "Proven Results",
      description:
        "With a 95% visa success rate and thousands of happy students, our track record speaks for itself.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-secondary/10 min-h-screen overflow-hidden"
      id="about"
    >
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br text-white overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="/herobg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary/80 via-gray-900/70 to-secondary/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
                About Edulink
              </span>
            </div>
            <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              We Are a <span className="text-primary">Trusted</span> Visa and{" "}
              <span className="text-primary">Immigration</span> Agent
            </h1>
            <p className="animate-fade-up text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              At Edulink, we connect ambition with opportunity. Our expert team
              helps students study, work, and build a future in Australia
              through clear guidance, personalised pathways, and genuine
              support.
            </p>
          </div>

          {/* Stats Section */}
          {/* <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Mission Section */}
      <div ref={missionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="mission-content relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Services/StudentSupport.jpg"
                  alt="Students studying abroad"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/50 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-primary rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="text-white">
                  <div className="text-2xl font-bold mb-1">Your Success</div>
                  <div className="text-sm opacity-90">Is Our Priority</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mission-content">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Our Mission
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  From Your First Inquiry to Career{" "}
                  <span className="text-primary">Success</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We understand that every student&apos;s journey is unique,
                  which is why we offer tailored advice and hands-on assistance
                  at every step. From choosing the right courses and
                  institutions to navigating visas, accommodation, and work
                  opportunities, Edulink is with you every step of the way.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      End-to-end student support
                    </h3>
                    <p className="text-gray-600">
                      We assist every step of the way, ensuring no detail is
                      overlooked.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Trusted education specialists
                    </h3>
                    <p className="text-gray-600">
                      Our experienced team provides clear, reliable advice you
                      can count on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      {/* <div
        ref={valuesRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-full text-sm font-medium mb-6">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Makes Us <span className="text-[#4ECDC4]">Different</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe in turning international education into lifelong
              achievement through genuine care, expert guidance, and unwavering
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-linear-to-br from-[#4ECDC4] to-[#45b8b1] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4ECDC4] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-6 w-12 h-1 bg-[#4ECDC4] rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-900 via-secondary to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Start Your <span className="text-primary">Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let us help you turn your dreams of studying abroad into reality.
            Get personalized guidance from our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl">
              Get Free Consultation →
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
