"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaClock,
} from "react-icons/fa";
import Link from "next/link";
import { NAVLINKS, tel, email } from "@/lib/index";

const Footer = () => {
  const scrollTopRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Removed unused mounted state
  return (
    <section className="bg-linear-to-br from-secondary/10 via-background to-primary/10 text-foreground pt-8 pb-4 relative overflow-hidden">
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
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 pb-6 border-b-2 border-primary/20">
          {/* Left Side Content */}
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:w-3/5 gap-6">
            {/* Logo & Company Info */}
            <div className="flex-1 min-w-0 flex flex-col items-start mb-6 md:mb-0">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                  <Image
                    src={"/footerlogo.png"}
                    alt="Logo"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <span className="text-base sm:text-lg lg:text-xl font-medium italic text-primary text-center drop-shadow-md">
                  Where dreams take flight
                </span>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                At Edulink, we provide tailored support for every stage of your
                international education journey
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${email}`}
                    aria-label="Email"
                    className="hover:text-primary text-foreground transition-all duration-300 p-3 rounded-full hover:bg-primary/10 hover:shadow-lg transform hover:scale-105"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${tel[0].replace(/\s/g, "")}`}
                    aria-label="Phone"
                    className="hover:text-primary text-foreground transition-all duration-300 p-3 rounded-full hover:bg-primary/10 hover:shadow-lg transform hover:scale-105"
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
            <div className="hidden md:flex-1 md:min-w-0 md:flex md:flex-col md:items-start md:mb-8">
              <h3 className="font-semibold text-black text-lg mb-3 font-sans">
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
              <h3 className="font-semibold font-sans text-lg mb-3 text-black">
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

          {/* Map Section - Hidden on mobile, visible on large screens, positioned on the right */}
          <div className="hidden lg:flex lg:flex-col lg:w-2/5 lg:max-w-md">
            <h3 className="font-semibold font-sans text-lg mb-3 text-black">
              Find Us
            </h3>
            <div className="w-full h-56 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9679541892647!2d144.83274337663932!3d-37.78354597197186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65f90b6c3e7e9%3A0x8d4b9e2e7a6f8f7!2s12%20Clarke%20St%2C%20Sunshine%20VIC%203020%2C%20Australia!5e0!3m2!1sen!2s!4v1699282800000!5m2!1sen!2s&output=embed"
                width="800"
                height="600"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  imageRendering: "-webkit-optimize-contrast",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Edulink Office Location"
                className="transition-all duration-300"
              ></iframe>
            </div>
            <div className="mt-3">
              <a
                href="https://maps.google.com/?q=Level+5/12+Clarke+St,+Sunshine+VIC+3020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <FaMapMarkerAlt className="w-4 h-4" />
                Open in Google Maps
              </a>
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
