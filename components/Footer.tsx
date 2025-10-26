"use client";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaClock,
} from "react-icons/fa";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { NAVLINKS, tel, email } from "@/lib/index";

const Footer = () => {
  const contactRef = useRef(null);
  const socialRef = useRef(null);
  const scrollTopRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;
    const triggers: gsap.core.Animation[] = [];

    if (contactRef.current) {
      triggers.push(
        gsap.fromTo(
          contactRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.8 : 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: isMobile ? "top 90%" : "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      );
    }
    if (socialRef.current) {
      const icons = Array.from((socialRef.current as HTMLDivElement).children);
      triggers.push(
        gsap.fromTo(
          icons,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.5 : 0.8,
            stagger: isMobile ? 0.08 : 0.15,
            delay: isMobile ? 0.1 : 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: socialRef.current,
              start: isMobile ? "top 95%" : "top 90%",
              toggleActions: "play none none none",
            },
          }
        )
      );
    }
    if (scrollTopRef.current) {
      triggers.push(
        gsap.fromTo(
          scrollTopRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.4 : 0.7,
            delay: isMobile ? 0.3 : 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scrollTopRef.current,
              start: "top 98%",
              toggleActions: "play none none none",
            },
          }
        )
      );
    }

    // Refresh ScrollTrigger after mount and on resize

    ScrollTrigger.refresh();
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      triggers.forEach((t) => {
        // Type guard for scrollTrigger property
        if ("scrollTrigger" in t && t.scrollTrigger) {
          t.scrollTrigger.kill();
        }
        t.kill();
      });
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section
      ref={contactRef}
      className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 text-foreground pt-8 pb-4 relative overflow-hidden"
    >
      {/* Footer background image: hidden on mobile, block on md+ */}
      {/* <div
        className="hidden 2xl:block absolute inset-x-0 bottom-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/footer/Footer_design.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "80% auto",
          zIndex: 1,
        }}
      /> */}

      {/* Bottom right image: hidden on mobile, block on md+ */}
      {/* <img
        src="/footer/2.png"
        alt="Footer Decorative Right"
        className="hidden md:block absolute bottom-0 right-0 w-100 h-auto pointer-events-none z-[3]"
        style={{ objectFit: "contain" }}
        aria-hidden="true"
      /> */}
      {/* Overlay for subtlety if needed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.02)", zIndex: 2 }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-start gap-6 pb-6 border-b-2 border-primary/20">
          {/* Logo & Company Info */}
          <div className="flex-1 min-w-0 flex flex-col items-start mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={"navlogo.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-serif text-black">Edu</span>
                <span className="text-lg font-bold text-[#4ECDC4]">link</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              At Edulink, we provide tailored support for every stage of your
              international education journey
            </p>
            <div ref={socialRef} className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-4">
                {/* <a
                  href="https://www.instagram.com/eduvisahub.australia?igsh=MW5oMDF4aWxhcjdycA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
                >
                  <FaInstagram className="w-5 h-5" />
                </a> */}
                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                  className="hover:text-primary text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${tel[0].replace(/\s/g, "")}`}
                  aria-label="Phone"
                  className="hover:text-primary text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
                >
                  <FaPhoneAlt className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-2">
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors text-xs underline text-muted-foreground"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links - hidden on mobile */}
          <div className="hidden md:flex-1 md:min-w-0 md:flex md:flex-col md:items-start md:mb-8 ">
            <h3 className="font-semibold text-black text-lg mb-3  font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2 text-foreground">
              {NAVLINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-primary hover:underline transition-colors font-sans font-light text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="flex-1 min-w-0 flex flex-col md:items-start mb-6 md:mb-0">
            <h3 className="font-semibold font-sans text-lg mb-3 text-black">
              Working Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-primary" />
                <div className="text-foreground">
                  <div className="font-medium">Monday - Friday</div>
                  <div>9:00 AM - 5:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-primary" />
                <div className="text-foreground">
                  <div className="font-medium">Saturday</div>
                  <div>9:00 AM - 1:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-primary" />
                <div className="text-foreground">
                  <div className="font-medium">Sunday</div>
                  <div className="text-muted-foreground">Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-0 flex flex-col md:items-start">
            <h3 className="font-semibold  font-sans text-lg mb-3 text-black">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-primary" />
                <div className="text-foreground">
                  Level 5/12 Clarke St,
                  <br />
                  Sunshine, VIC 3020.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4 text-primary" />
                <div className="flex flex-col space-y-1">
                  {tel.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-primary" />
                <a
                  href={`mailto:${email}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-6 text-sm text-muted-foreground min-w-0">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Edulink | Crafted by{" "}
            <a
              href={"https://www.aimarketingpartners.ai/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold hover:text-primary gradient-text-primary">
                AiMarketingPartners
              </span>
            </a>
          </p>
          <div className="flex-1"></div>
          <div className="flex space-x-6 mt-2 md:mt-0 justify-end items-center">
            <span className="inline-flex w-auto">
              <button
                ref={scrollTopRef}
                onClick={handleScrollTop}
                className="ml-4 mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary hover:border-primary/90"
                aria-label="Scroll to top"
              >
                <FaArrowUp className="w-5 h-5" />
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* Footer Image - Only visible on md and above, bottom middle */}
      {/* <img
        src="/footer/1.png"
        alt="Footer Decorative"
        className="hidden md:block absolute bottom-2 left-1/2 -translate-x-1/2 w-90 h-auto pointer-events-none select-none"
        style={{ zIndex: 1 }}
      /> */}
    </section>
  );
};

export default Footer;
