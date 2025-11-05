"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
const slides = [
  "/Services/CareerPathway.jpg",
  "/Services/mission.jpg",
  "/Services/personal.jpg",
  "/Services/Professional.jpg",
  "/Services/Settlement.jpg",
  "/Services/StudentSupport.jpg",
  "/Services/Visasupport.jpg",
];

import { servicesData } from "@/lib/index";
import Link from "next/link";

const SERVICES = servicesData.map((service, index) => ({
  ...service,
  demo: service.slug,
  icon: [GraduationCap, Briefcase, Award, Plane, Heart, Globe][index] || Globe,
}));

const ServicesPhone = () => {


  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(SERVICES[0]?.demo || "");

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
        className="relative overflow-hidden py-20 pb-5"
        style={{
          height: "clamp(400px, 70vh, 600px)",
          background:
            "linear-gradient(135deg, rgba(78,205,196,0.25) 0%, rgba(78,205,196,0.18) 25%, rgba(78,205,196,0.12) 50%, rgba(240,249,255,0.8) 75%, rgba(255,255,255,0.95) 100%)",
        }}
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
        background:
          "linear-gradient(135deg, rgba(78,205,196,0.25) 0%, rgba(78,205,196,0.18) 25%, rgba(78,205,196,0.12) 50%, rgba(240,249,255,0.8) 75%, rgba(255,255,255,0.95) 100%)",
      }}
    >

      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Background decoration could be added here if needed */}
      </div>


      <section className="relative z-40 mb-0">

        <div className="px-4 relative z-10">
          <div className="text-center mb-20">
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

          <div className="relative my-20 w-full flex justify-center items-center">

            {/* Phone Cover (Fixed in Center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
              <Image
                src="/Services/phoneCover.png"
                width={700}
                height={800}
                alt="phone-cover"
                className="object-contain h-full "
              />
            </div>

            {/* Girl Image (Behind Phone) */}
            <div className="absolute top-70 right-150 -translate-x-[70%] -translate-y-[55%]  z-50 pointer-events-none">
              <Image
                src="/Services/girlImage.png"
                width={350}
                height={450}
                alt="girl-image"
                className="object-contain scale-x-[-1]"
              />
            </div>

            {/* Swiper Carousel */}
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              centeredSlides={true}
              loop={true}
              grabCursor={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === activeIndex;

                // Calculate distance from active slide (for scale + opacity)
                const distance = Math.min(
                  Math.abs(index - activeIndex),
                  slides.length - Math.abs(index - activeIndex)
                );

                // Progressive depth scaling
                const scale =
                  distance === 0 ? 1.2 :
                    distance === 1 ? 0.85 :
                      distance === 2 ? 0.7 :
                        0.6;

                const opacity =
                  distance === 0 ? 1 :
                    distance === 1 ? 0.8 :
                      distance === 2 ? 0.5 :
                        0.3;

                const grayscale = distance > 1 ? "grayscale" : "grayscale-0";

                return (
                  <SwiperSlide
                    key={index}
                    className="!w-[500px] flex justify-center items-center transition-transform duration-500"
                  >
                    <div
                      className={`relative flex justify-center items-center transition-all duration-500 ease-in-out ${grayscale}`}
                      style={{
                        transform: `scale(${scale}) translateY(${distance * 10}px)`,
                        opacity: opacity,
                        zIndex: 10 - distance,

                      }}
                    >
                      {/* Image inside the phone */}
                      <div
                        className={`relative w-[230px] h-[480px] overflow-hidden rounded-[2rem] z-20 transition-all duration-500`}
                      >
                        {/* Background image */}
                        <Image
                          src={service.image}
                          alt={`slide_image_${index}`}
                          fill
                          className="object-cover"
                        />

                        {/* Only show overlay on active slide */}
                        {distance === 0 && (
                          <div className="absolute inset-0 flex flex-col justify-between text-white p-4 z-30 transition-opacity duration-500 ease-in-out opacity-100">
                            {/* Top Section - Icon and Active Badge */}
                            <div className="flex justify-between items-start">
                              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30">
                                <Icon className="w-6 h-6" />
                              </div>

                              <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                                Active
                              </span>
                            </div>

                            {/* Bottom Content */}
                            <div className="text-center">
                              <h3 className="text-lg font-semibold mb-3 drop-shadow-md">
                                {service.title}
                              </h3>
                              <div
                                className={`transition-all duration-300 ${isActive
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-4"
                                  }`}
                              >
                                <Link href={`/services/${service.slug}`}>
                                  <button className="w-full bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 text-white" />
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Optional subtle gradient overlay for readability */}
                        {distance === 0 && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-[2rem] z-20 pointer-events-none transition-all duration-500" />
                        )}
                      </div>


                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>



          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-20">
            <Link
              href="/services"
              className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Services →
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call For Booking →
            </Link>
          </div>




        </div>
      </section>

    </div>
  );
};

export default ServicesPhone;

