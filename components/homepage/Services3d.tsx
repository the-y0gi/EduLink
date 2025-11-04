"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  Plane,
  Heart,
  Globe,
} from "lucide-react";
// FaPlaneDeparture removed (unused) to avoid lint errors
import Link from "next/link";
import { servicesData } from "@/lib/index";

const SERVICES = servicesData.map((service, index) => ({
  ...service,
  demo: service.slug,
  icon: [GraduationCap, Briefcase, Award, Plane, Heart, Globe][index] || Globe,
}));

export default function Services3D() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeDemo, setActiveDemo] = useState(SERVICES[0]?.demo || "");

  useEffect(() => {
    const handleMount = () => {
      setMounted(true);
      setWindowWidth(window.innerWidth);
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    handleMount();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't render until we have the proper window width
  if (!mounted || windowWidth === null) {
    return (
      <div
        className="relative bg-linear-to-br from-secondary to-primary/20 overflow-hidden py-20 pb-5"
        style={{ height: "clamp(400px, 70vh, 600px)" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Badge / Bubble */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Explore Our Services
            </div>
            <h2 className="text-4xl md:text-8xl font-semibold mb-4 text-secondary">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-secondary/70 font-serif max-w-3xl mx-auto">
              From visa assistance to career guidance, we&apos;ve got you
              covered. Choose reliability, choose Edulink.
            </p>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ height: "300px" }}
          >
            <div className="animate-pulse text-secondary">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden py-20 pb-5"
      style={{
        height: "auto",
        perspective: "800px",
        perspectiveOrigin: "center center",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Background decoration could be added here if needed */}
      </div>

      {/* Services Section */}
      <section className="relative  z-40 mb-0">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Badge / Bubble */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Explore Our Services
            </div>
            {/* More relevant icon above heading */}
            {/* <FaPlaneDeparture className="mx-auto mb-4 w-12 h-12 text-secondary drop-shadow-lg" /> */}
            <h2 className="text-2xl md:text-6xl font-momo mb-4 text-secondary">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-secondary/70  max-w-3xl mx-auto">
              From visa assistance to career guidance, we&apos;ve got you
              covered. Choose reliability, choose Edulink.
            </p>
          </div>

          {/* Radio buttons for carousel control (hidden) */}
          {SERVICES.map((service, index) => (
            <input
              key={service.demo}
              type="radio"
              id={service.demo}
              name="carousel"
              value={index}
              checked={activeDemo === service.demo}
              onChange={() => setActiveDemo(service.demo)}
              style={{ position: "absolute", left: "-9999px" }}
            />
          ))}

          {/* 3D Carousel Container */}
          <div
            className="relative mx-auto w-full mb-0"
            style={{
              width: "min(500px, 90vw)",
              height: "clamp(300px, 60vh, 450px)",
              perspective: "1000px",
              perspectiveOrigin: "50% -25%",
            }}
          >
            {/* Carousel */}
            <div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${
                  windowWidth < 768 ? "-380px" : "-640px"
                }) rotateY(${
                  -SERVICES.findIndex((f) => f.demo === activeDemo) *
                  (360 / SERVICES.length)
                }deg)`,
                position: "relative",
                margin: 0,
                width: "100%",
                height: "clamp(280px, 55vh, 400px)",
                transition: "1s",
              }}
            >
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                const angle = index * (360 / SERVICES.length);
                const isActive = activeDemo === service.demo;
                const isMobile = windowWidth < 768;
                const translateZ = isMobile ? 380 : 700;

                return (
                  <div
                    key={service.demo}
                    className="absolute carousel-card"
                    style={{
                      width: "min(80vw, 400px)",
                      height: "clamp(250px, 50vh, 350px)",
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${translateZ}px) scale(${
                        isActive ? 1 : 0.8
                      })`,
                      opacity: isActive ? 1 : 0.5,
                      transition: "1s",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Image Background */}
                    <div
                      className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6 text-secondary">
                        {/* Top Section - Icon */}
                        <div className="flex justify-between items-start">
                          <div
                            className={`p-3 rounded-lg ${
                              isActive
                                ? "bg-white/20 backdrop-blur-sm"
                                : "bg-black/20"
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          {isActive && (
                            <span className="bg-white text-secondary px-3 py-1 text-xs rounded-full font-medium">
                              Active
                            </span>
                          )}
                        </div>

                        {/* Bottom Section - Title and Button */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl text-white  font-bold mb-2 line-clamp-2">
                              {service.title}
                            </h3>
                          </div>

                          {/* Learn More Button - Only show on hover/active */}
                          <div
                            className={`transition-all duration-300 ${
                              isActive
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                          >
                            <Link href={`/services/${service.slug}`}>
                              <button className="w-full bg-white text-black hover:bg-white/90 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors">
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Labels */}
          <div className="text-center mb-6">
            <div className="flex justify-center space-x-2">
              {SERVICES.map((service, index) => (
                <label
                  key={service.demo}
                  htmlFor={service.demo}
                  className={`cursor-pointer rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    activeDemo === service.demo
                      ? "bg-secondary text-white shadow-lg scale-110"
                      : "bg-secondary/40 text-white hover:bg-secondary/60"
                  }`}
                >
                  {index + 1}
                </label>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-8 mt-2">
            <button
              onClick={() => {
                const currentIndex = SERVICES.findIndex(
                  (f) => f.demo === activeDemo
                );
                const prevIndex =
                  currentIndex === 0 ? SERVICES.length - 1 : currentIndex - 1;
                setActiveDemo(SERVICES[prevIndex].demo);
              }}
              className="bg-secondary/10 border-none text-secondary hover:bg-primary hover:text-white shadow-xl flex items-center justify-center w-16 h-16 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={() => {
                const currentIndex = SERVICES.findIndex(
                  (f) => f.demo === activeDemo
                );
                const nextIndex =
                  currentIndex === SERVICES.length - 1 ? 0 : currentIndex + 1;
                setActiveDemo(SERVICES[nextIndex].demo);
              }}
              className="bg-secondary/10 border-none text-secondary hover:bg-primary hover:text-white shadow-xl flex items-center justify-center w-16 h-16 rounded-full transition-all duration-200"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Link
              href="/services"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All Services →
            </Link>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Call For Booking →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
