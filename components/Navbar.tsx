"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAVLINKS, servicesData } from "@/lib";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Mobile Dropdown Menu Component
const MobileDropdownMenu = ({
  link,
  services,
  pathname,
  onLinkClick,
}: {
  link: { name: string; path: string };
  services: Array<{ title: string; description: string; slug: string }>;
  pathname: string;
  onLinkClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Link
          href={link.path}
          onClick={onLinkClick}
          className={`text-gray-900 hover:text-primary transition-all duration-300 py-2 text-base sm:text-lg flex-1 ${
            pathname === link.path ? "font-semibold border-l-4 pl-4" : ""
          }`}
        >
          {link.name}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-900 hover:text-primary transition-colors duration-300"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="pl-4 space-y-2 border-l-2 border-primary/30">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              onClick={onLinkClick}
              className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
            >
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Soft blue theme colors (Landing 5 as default)
  const themeColors = {
    textColor: "text-blue-900",
    hoverColor: "hover:text-blue-600",
    accentColor: "text-blue-600",
    logoSecondary: "#3b82f6",
    buttonBg: "bg-blue-600",
    buttonText: "text-white",
    buttonHover: "hover:bg-blue-800",
    buttonBorder: "border-blue-600 hover:border-blue-800",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-item",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      ScrollTrigger.create({
        trigger: "body",
        start: "top -50px",
        end: "bottom bottom",
        onUpdate: (self) => {
          const isScrolledNow = self.progress > 0;
          setIsScrolled(isScrolledNow);

          if (isScrolledNow) {
            gsap.to(navRef.current, {
              scale: 0.9,
              y: 16,
              borderRadius: "50px",
              duration: 0.25,
              ease: "power2.out",
              transformOrigin: "center top",
            });
          } else {
            gsap.to(navRef.current, {
              scale: 1,
              y: 0,
              borderRadius: "0px",
              duration: 0.25,
              ease: "power2.out",
              transformOrigin: "center top",
            });
          }
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      // Ensure menu is visible before animation
      gsap.set(mobileMenuRef.current, { display: "block", opacity: 0, y: -20 });
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.fromTo(
        ".mobile-nav-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setIsMobileMenuOpen(false);
        },
      });
    }
  };

  const closeMobileMenu = () => {
    gsap.to(mobileMenuRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setIsMobileMenuOpen(false);
      },
    });
  };

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.5);
        }
      `}</style>
      <nav
        ref={navRef}
        className={`fixed top-0 z-999 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-linear-to-r from-primary/20 via-background/80 to-secondary/20 backdrop-blur-lg border-b border-primary/30 shadow-xl max-w-screen-2xl mx-auto left-0 right-0 w-[96vw]"
            : "w-full"
        }`}
        style={{ transformOrigin: "center top" }}
      >
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="flex flex-nowrap items-center min-h-16">
            {/* Logo - Left Section */}
            <div className="shrink-0">
              <Link
                href="/"
                className="nav-item flex items-center space-x-1 md:space-x-2 group min-w-[140px] lg:min-w-[180px]"
              >
                {/* Logo Icon */}
                <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={"navlogo.png"}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center space-x-0.5 sm:space-x-1 ">
                  <span
                    className={`text-base sm:text-lg lg:text-xl tracking-wide font-serif leading-tight ${themeColors.textColor}`}
                  >
                    Edu
                  </span>
                  <span
                    className="text-base sm:text-lg lg:text-xl tracking-wide font-bold leading-tight"
                    style={{ color: themeColors.logoSecondary }}
                  >
                    link
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Center Section */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center gap-2 xl:gap-6">
                {NAVLINKS.map((link) => {
                  if (link.name === "Services") {
                    return (
                      <div key={link.name} className="relative group">
                        <Link
                          href={link.path}
                          className={`nav-item relative font-sans ${
                            themeColors.textColor
                          } ${
                            themeColors.hoverColor
                          } transition-all duration-300 whitespace-nowrap flex items-center gap-1 ${
                            pathname === link.path ? "font-bold" : ""
                          }`}
                        >
                          {link.name}
                          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                          {pathname === link.path && (
                            <div
                              className={`absolute -bottom-1 left-0 w-full h-0.5 ${themeColors.accentColor.replace(
                                "text-",
                                "bg-"
                              )}`}
                            ></div>
                          )}
                        </Link>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg border-2 border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="p-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            <div className="space-y-1">
                              {servicesData.map((service, index) => (
                                <Link
                                  key={index}
                                  href={`/services/${service.slug}`}
                                  className={`block p-2 rounded-md hover:${themeColors.accentColor.replace(
                                    "text-",
                                    "bg-"
                                  )}/10 border border-transparent transition-colors duration-200 group/item`}
                                >
                                  <div
                                    className={`font-medium text-sm ${themeColors.textColor} group-hover/item:${themeColors.accentColor} transition-colors`}
                                  >
                                    {service.title}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`nav-item relative font-sans ${
                        themeColors.textColor
                      } ${
                        themeColors.hoverColor
                      } transition-all duration-300 whitespace-nowrap ${
                        pathname === link.path ? "font-bold" : ""
                      }`}
                    >
                      {link.name}
                      {pathname === link.path && (
                        <div
                          className={`absolute -bottom-1 left-0 w-full h-0.5 ${themeColors.accentColor.replace(
                            "text-",
                            "bg-"
                          )}`}
                        ></div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Section - Book Appointment Button */}
            <div className="hidden lg:flex shrink-0">
              <Link
                href="/"
                className={`nav-item relative font-semibold px-4 py-2 rounded-lg ${themeColors.buttonBg} ${themeColors.buttonText} ${themeColors.buttonHover} hover:shadow-lg transition-all duration-300 whitespace-nowrap border-2 ${themeColors.buttonBorder}`}
              >
                Talk to us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden nav-item p-2 ${themeColors.textColor} ${themeColors.hoverColor} transition-colors duration-300 ml-auto`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only render when open */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-linear-to-b from-card/95 to-card/90 backdrop-blur-lg border-b-2 border-primary/50 shadow-xl"
          >
            <div className="container mx-auto px-2 sm:px-4 py-6">
              <div className="flex flex-col space-y-4">
                <div className="mobile-nav-item pb-4 border-b border-primary/50 flex justify-center"></div>
                {NAVLINKS.map((link) => {
                  if (link.name === "Services") {
                    return (
                      <div key={link.name} className="mobile-nav-item">
                        <MobileDropdownMenu
                          link={link}
                          services={servicesData}
                          pathname={pathname}
                          onLinkClick={closeMobileMenu}
                        />
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={closeMobileMenu}
                      className={`mobile-nav-item ${themeColors.textColor} ${
                        themeColors.hoverColor
                      } transition-all duration-300 py-2 text-base sm:text-lg whitespace-nowrap ${
                        pathname === link.path
                          ? "font-semibold border-l-4 pl-4"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
