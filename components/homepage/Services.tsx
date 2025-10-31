"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData } from "@/lib/index";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  // Check scroll position to update button states
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Navigation functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // 80 * 4 (20rem = 320px)
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // 80 * 4 (20rem = 320px)
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Initialize scroll position check
  useEffect(() => {
    checkScrollPosition();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8">
          {/* Left Side - Title and Description */}
          <div className="lg:max-w-xl">
            <div className="text-sm font-medium text-secondary mb-2">
              / Services We Offer
            </div>
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight"
            >
              Our Services
            </h2>
            <p
              ref={subtitleRef}
              className="text-lg text-secondary/70 leading-relaxed"
            >
              From visa assistance to career guidance, we&apos;ve got you
              covered. <br className="hidden sm:block" />
              Choose reliability, choose Edulink.
            </p>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex gap-4 lg:shrink-0">
            <button
              onClick={() => router.push("/services")}
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All Services →
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Call For Booking →
            </button>
          </div>
        </div>

        {/* Services Cards - Horizontal Scroll */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            onScroll={checkScrollPosition}
          >
            {servicesData.map((service, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="group relative shrink-0 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => router.push(`/services/${service.slug}`)}
              >
                {/* Service Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  {/* Top Section - Empty for spacing */}
                  <div></div>

                  {/* Bottom Section - Title only */}
                  <div className="flex items-end justify-between">
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white leading-tight max-w-[70%]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Arrow Button - Positioned in bottom right corner */}
                <button className="absolute bottom-4 right-4 z-20 w-12 h-12 bg-secondary group-hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <MoveUpRight className="w-5 h-5 text-white" />
                </button>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {servicesData.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer"
              ></div>
            ))}
          </div>

          {/* Navigation Buttons - Below Dots */}
          <div className="flex justify-center mt-4 gap-3">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "bg-primary hover:bg-primary/80 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "bg-primary hover:bg-primary/80 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
