"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/lib";
import {
  Target,
  Trophy,
  Handshake,
  GraduationCap,
  Briefcase,
  Globe,
  Zap,
  Users,
  Wrench,
  MessageCircle,
  Map,
  FileText,
  Clipboard,
  Plane,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "🎯": Target,
  "🏆": Trophy,
  "🤝": Handshake,
  "🎓": GraduationCap,
  "👨‍💼": Briefcase,
  "🌏": Globe,
  "⚡": Zap,
  "👨‍👩‍👧‍👦": Users,
  "🔧": Wrench,
  "💬": MessageCircle,
  "🗺️": Map,
  "📝": FileText,
  "📋": Clipboard,
  "✈️": Plane,
  "💚": Handshake,
  "💼": Briefcase,
};

const renderIcon = (
  key: string | undefined,
  className = "text-primary",
  size = 20
) => {
  if (!key) return <Target className={className} size={size} />;
  const Icon = ICON_MAP[key] || Target;
  return <Icon className={className} size={size} />;
};

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const router = useRouter();
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const mainServicesRef = useRef(null);
  const visaTypesRef = useRef(null);
  const processRef = useRef(null);
  const whyChooseRef = useRef(null);

  const visaTypes = [
    {
      name: "Student Visa (Subclass 500)",
      description: "For full-time study at universities, TAFEs, or colleges",
      duration: "Course duration + 1-4 years",
      workRights: "48 hours per fortnight during study",
      icon: "🎓",
    },
    {
      name: "Temporary Graduate Visa (Subclass 485)",
      description: "For graduates seeking post-study work experience",
      duration: "2-4 years depending on qualification",
      workRights: "Unlimited work rights",
      icon: "👨‍💼",
    },
    {
      name: "Working Holiday Visa (Subclass 417/462)",
      description: "For short-term work and travel opportunities",
      duration: "12 months (extendable)",
      workRights: "6 months per employer",
      icon: "🌏",
    },
    {
      name: "Skilled Migration Visas",
      description: "For qualified professionals aiming for permanent residency",
      duration: "Permanent residence",
      workRights: "Full work rights",
      icon: "⚡",
    },
    {
      name: "Visitor & Family Visas",
      description: "For family visits or dependent sponsorship",
      duration: "Varies by visa type",
      workRights: "Limited or no work rights",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      name: "Training & Internship Visa (Subclass 407)",
      description: "For skill-based training and placements",
      duration: "Up to 2 years",
      workRights: "Training-related work only",
      icon: "🔧",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "Book a free assessment to discuss your goals, qualifications, and explore your options with our expert consultants.",
      icon: "💬",
    },
    {
      step: "02",
      title: "Pathway Planning",
      description:
        "We create a personalized study and career pathway tailored to your goals, budget, and timeline.",
      icon: "🗺️",
    },
    {
      step: "03",
      title: "Application Support",
      description:
        "Our team assists with university applications, document preparation, and ensures everything meets requirements.",
      icon: "📝",
    },
    {
      step: "04",
      title: "Visa Guidance",
      description:
        "We guide you through the entire visa application process, from documentation to submission and follow-up.",
      icon: "📋",
    },
    {
      step: "05",
      title: "Pre-Departure",
      description:
        "Comprehensive pre-departure support including accommodation, orientation, and practical advice for your move.",
      icon: "✈️",
    },
    {
      step: "06",
      title: "Ongoing Support",
      description:
        "Continued support throughout your studies including visa renewals, course changes, and career guidance.",
      icon: "🤝",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      // Overview Animation
      gsap.fromTo(
        ".overview-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: overviewRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Main Services Animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: mainServicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Visa Types Animation
      gsap.fromTo(
        ".visa-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: visaTypesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Process Steps Animation
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Why Choose Animation
      gsap.fromTo(
        ".why-choose-item",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Note: removed parallax container / background animation —
      // hero video is now a static background element so no parallax animation is required.
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="/video/landing.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Overlay on video - solid dark with subtle blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-momo mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-semibold leading-relaxed mb-4">
            Comprehensive Support for Your Australian Journey
          </p>
          <p className="hero-subtitle text-lg md:text-xl opacity-90">
            Whether you&apos;re planning to study in Australia or already here
            pursuing your goals - we help you achieve success without wasting
            time, money, or opportunities
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={overviewRef} className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="overview-content">
            <h2 className="text-5xl font-momo text-secondary mb-8">
              How We Help Students Succeed
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-12">
              At EduLink, we provide tailored support for every stage of your
              Australian journey. Whether you&apos;re an offshore student
              planning your Australian future or an onshore student maximizing
              your current opportunities - our services help you achieve your
              goals efficiently without wasting precious time or money.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {renderIcon("🎯", "text-primary", 26)}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Personalized Approach
                </h3>
                <p className="text-foreground/70">
                  Tailored strategies for both offshore and onshore students to
                  achieve their Australian goals efficiently
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {renderIcon("🏆", "text-secondary", 26)}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Expert Guidance
                </h3>
                <p className="text-foreground/70">
                  Experienced consultants with deep knowledge of Australian
                  education
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {renderIcon("🤝", "text-primary", 26)}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Goal Achievement Support
                </h3>
                <p className="text-foreground/70">
                  Strategic guidance to help you avoid costly mistakes and
                  achieve Australian success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section
        ref={mainServicesRef}
        className="py-24 px-4 bg-linear-to-b from-primary/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => router.push(`/services/${service.slug}`)}
                role="button"
                aria-label={`Open ${service.title}`}
              >
                {/* image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover block"
                />

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none"></div>

                {/* title pinned to bottom */}
                <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">
                    {service.title}
                  </h3>

                  {/* hidden on idle - shown on hover */}
                  <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary shadow">
                      {renderIcon(service.icon, "text-primary", 18)}
                    </div>
                    <span className="hidden sm:inline text-sm font-semibold text-white/95">
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types & Pathways */}
      <section ref={visaTypesRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-8">
            Visa Types & Pathways
          </h2>
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
            Navigating the visa process is easier with EduLink. We assist with
            all major Australian visa types and help you choose the right
            pathway for your goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="visa-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  {renderIcon(visa.icon, "text-primary", 18)}
                </div>

                <h3 className="text-lg font-bold text-secondary mb-3">
                  {visa.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {visa.description}
                </p>

                {/* Only show icon, name and description as requested */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section
        ref={processRef}
        className="py-24 px-4 bg-linear-to-b from-secondary/5 to-primary/5"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            Our 6-Step Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-step relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>

                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 ml-4">
                  {renderIcon(step.icon, "text-secondary", 22)}
                </div>

                <h3 className="text-xl font-bold text-secondary mb-4">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EduLink */}
      <section ref={whyChooseRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            Why Choose EduLink?
          </h2>

          <div className="space-y-16">
            <div className="why-choose-item grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-6">
                  Comprehensive Support
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  We provide comprehensive support for students at every stage
                  of their Australian journey. Whether you&apos;re planning to
                  come to Australia or already here making the most of your
                  opportunities, we help you achieve your goals - career
                  success, permanent residency, or bringing family to Australia
                  - without wasting precious time or money.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>
                      Strategic planning for Australian career success
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span>Permanent residency pathway guidance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Family reunion and relationship support</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="/images/support.jpg"
                  alt="Comprehensive Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="why-choose-item grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-video rounded-xl overflow-hidden">
                <img
                  src="/images/expertTeam.jpg"
                  alt="Expert Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-secondary mb-6">
                  Expert Team
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Our experienced team of registered migration agents and
                  education consultants brings years of expertise in Australian
                  immigration and education systems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Specialized onshore student expertise</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span>Registered migration agents (MARA)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>
                      10+ years helping students achieve Australian goals
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="why-choose-item grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-6">
                  Proven Success
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  With thousands of successful students and a 98% visa approval
                  rate, we have the track record and expertise to make your
                  dreams a reality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>
                      3000+ onshore students helped achieve their goals
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span>95% success rate in goal achievement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>200+ Australian employer partnerships</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="/images/success.jpg"
                  alt="Success Stats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
