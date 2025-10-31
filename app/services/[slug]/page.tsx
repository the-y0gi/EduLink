"use client";

import { useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData, ServiceData } from "@/lib";

gsap.registerPlugin(ScrollTrigger);

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServicePage = ({ params }: ServicePageProps) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);

  // Find the service based on slug
  const service: ServiceData | undefined = servicesData.find(
    (service) => service.slug === resolvedParams.slug
  );

  // If service not found, redirect to services page
  useEffect(() => {
    if (!service) {
      router.push("/services");
    }
  }, [service, router]);

  useEffect(() => {
    if (!service) return;

    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
      tl.fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
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

      // Features Animation
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Process Animation
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Benefits Animation
      gsap.fromTo(
        ".benefit-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax Effect
      gsap.to(".parallax-bg", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary mb-4">
            Service not found
          </h1>
          <p className="text-foreground/70 mb-6">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push("/services")}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Return to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="parallax-container absolute inset-0">
          <div className="parallax-bg absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/30"></div>
          <div className="absolute inset-0 bg-linear-to-r from-secondary/70 to-primary/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{service.icon}</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {service.duration}
              </span>
            </div>

            <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="hero-subtitle text-xl leading-relaxed mb-8 opacity-90">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-secondary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-secondary transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
                onError={() => {
                  // Handle error with fallback
                  console.log(`Failed to load image: ${service.image}`);
                }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Overview */}
      <section ref={overviewRef} className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="overview-content text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-8">
              Service Overview
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
              {service.detailedDescription}
            </p>
          </div>

          {/* Who It's For */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Who This Service Is For
              </h3>
              <div className="space-y-4">
                {service.whoItsFor.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-secondary mb-4">
                  Service Details
                </h4>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Duration:</span>
                    <span className="font-semibold text-secondary">
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Pricing:</span>
                    <span className="font-semibold text-secondary">
                      {service.pricing}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Support Level:</span>
                    <span className="font-semibold text-secondary">
                      Comprehensive
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & What We Provide */}
      <section
        ref={featuresRef}
        className="py-24 px-4 bg-linear-to-b from-primary/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16">
            What We Provide
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="feature-item bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16">
            Our Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="process-step relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        ref={benefitsRef}
        className="py-24 px-4 bg-linear-to-b from-secondary/5 to-primary/5"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-foreground/80 leading-relaxed font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-linear-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 leading-relaxed opacity-90">
            Take the next step in your Australian journey. Our expert team is
            ready to provide personalized {service.title.toLowerCase()} tailored
            to your unique needs and goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
