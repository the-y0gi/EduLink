"use client";

import { useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData, ServiceData } from "@/lib";
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
  "🏠": Target,
};

const renderIcon = (
  key: string | undefined,
  className = "text-white",
  size = 24
) => {
  if (!key) return <Target className={className} size={size} />;
  const Icon = ICON_MAP[key] || Target;
  return <Icon className={className} size={size} />;
};

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
        className="h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="hero-card relative h-[80vh] rounded-2xl w-[90vw] flex flex-col overflow-hidden">
          {/* Image Background for Card */}
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="absolute inset-0 w-full h-full object-cover z-0"
            priority
          />
          {/* Overlay on image */}
          <div className="absolute inset-0 bg-linear-to-br from-secondary/60 via-black/40 to-primary/50 z-10 pointer-events-none" />

          {/* Content Section */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
            {/* Lucide Icon at top */}
            <div className="hero-title mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                {renderIcon(service.icon, "text-white", 32)}
              </div>
            </div>

            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-momo text-white mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-normal leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Overview */}
      <section ref={overviewRef} className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Overview */}
            <div className="overview-content">
              <h2 className="text-4xl md:text-5xl font-momo text-secondary mb-8 leading-tight">
                Service Overview
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                {service.detailedDescription}
              </p>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">
                    100+
                  </div>
                  <div className="text-sm text-foreground/60">
                    Success Stories
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-foreground/60">
                    Support Available
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Who It's For */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-momo text-secondary mb-8">
                Perfect For
              </h3>
              <div className="space-y-4">
                {service.whoItsFor.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section ref={featuresRef} className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-momo text-secondary mb-6">
              Key Features
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-item group bg-linear-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed font-medium text-lg">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-momo text-secondary mb-6">
              Our Process
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Desktop: Horizontal timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Connection line - positioned to connect the circles */}
                <div
                  className="absolute top-8 left-1/2 right-1/2 h-0.5 bg-primary/30 transform -translate-x-1/2"
                  style={{
                    width: `${(service.process.length - 1) * 25}%`,
                    left: "12.5%",
                  }}
                ></div>

                <div className="grid grid-cols-4 gap-8">
                  {service.process.map((step, index) => (
                    <div
                      key={index}
                      className="process-step text-center relative"
                    >
                      {/* Step circle */}
                      <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <span className="text-primary font-bold text-xl">
                          {step.step}
                        </span>
                      </div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        <h3 className="text-lg font-bold text-secondary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Vertical timeline */}
            <div className="lg:hidden space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="process-step flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 mt-4"></div>
                    )}
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-secondary mb-3">
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
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Title and intro */}
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl md:text-5xl font-momo text-secondary mb-8 leading-tight">
                Key Benefits
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                Discover the advantages that set our service apart and drive
                your success.
              </p>

              {/* Call-to-action */}
              <div className="p-6 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Ready to get started?
                </h3>
                <p className="text-foreground/70 mb-4">
                  Connect with our experts today.
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right side - Benefits list */}
            <div className="space-y-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mt-1 shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/80 leading-relaxed font-medium text-lg">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-linear-to-br from-gray-50 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-momo text-secondary mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Trusted by hundreds of students and professionals worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed font-medium text-lg">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-momo text-secondary mb-6">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their
              dreams with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-secondary hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
