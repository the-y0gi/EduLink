"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
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
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { servicesData } from "@/lib/index";

const SERVICES = servicesData.map((service, index) => ({
  ...service,
  demo: service.slug,
  icon: [GraduationCap, Briefcase, Award, Plane, Heart, Globe][index] || Globe,
}));

const ServicesPhone = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="text-center py-20">Loading...</div>;

  return (
    <div
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(78,205,196,0.25), rgba(255,255,255,0.95))",
      }}
    >
      <section className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Explore Our Services
          </div>
          <h2 className="text-3xl md:text-6xl font-semibold mb-4 text-secondary">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-secondary/70 max-w-3xl mx-auto">
            From visa assistance to career guidance, we&apos;ve got you covered.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative flex justify-center items-center w-full my-20">
          {/* Girl Image (background) */}
          <div className="absolute top-10 inset-0 flex justify-center items-center z-40 pointer-events-none">
            <Image
              src="/Services/phoneCover.png"
              width={700}
              height={1000}
              alt="phone-cover"
              className="object-contain "
            />
          </div>


          <div className="absolute top-[60%] -translate-y-[55%] hidden lg:block pointer-events-none z-50 right-[30%]">
            <Image
              src="/Services/girlImage.png"
              width={350}
              height={450}
              alt="girl-image"
              className="object-contain scale-x-[-1]  "
            />
          </div>

          {/* Swiper Carousel */}
          <Swiper
            slidesPerView={5}
            centeredSlides
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop
            grabCursor
            modules={[Pagination, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            // pagination={{ clickable: true }}
            className="mySwiper"
          >
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;

              // Distance scaling effect
              const distance = Math.min(
                Math.abs(index - activeIndex),
                SERVICES.length - Math.abs(index - activeIndex)
              );

              const scale =
                distance === 0 ? 1 :
                  distance === 1 ? 0.9 :
                    distance === 2 ? 0.75 :
                      0.6;

              const opacity =
                distance === 0 ? 1 :
                  distance === 1 ? 0.8 :
                    distance === 2 ? 0.5 :
                      0.3;

              return (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center transition-transform duration-500"
                >
                  <div
                    className="relative flex justify-center items-center transition-all duration-500 ease-in-out"
                    style={{
                      transform: `scale(${scale}) translateY(${distance * 10}px)`,
                      opacity,
                      zIndex: 10 - distance,
                    }}
                  >
                    {/* Slide Content (inside phone screen) */}
                    <div className="relative w-[255px] h-[553px] overflow-hidden rounded-[2rem] z-10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />

                      {/* Active slide content */}
                      {true && (
                        <>
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20 rounded-[2rem]" />

                          {/* Title + Button */}
                          <div className="absolute  left-0 text-white text-center p-4 z-30">
                            <div className="flex justify-between mb-2">
                              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30">
                                <Icon className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute  right-0 text-white text-center p-4 z-30">
                            <div className="flex justify-between mb-2">
                              <span className="bg-primary text-white px-3 py-1 text-xs rounded-full font-medium shadow-lg">
                                Active
                              </span>

                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 text-white text-center p-4 z-30">

                            <h3 className="text-lg font-semibold mb-3 drop-shadow-md">
                              {service.title}
                            </h3>
                            <Link href={`/services/${service.slug}`}>
                              <button className="w-full bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                                Learn More
                                <ArrowRight className="w-4 h-4 text-white" />
                              </button>
                            </Link>
                          </div>

                          {/* Phone Cover (only for active one) */}

                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Buttons below */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16">
          <Link
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Services →
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Call For Booking →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPhone;
