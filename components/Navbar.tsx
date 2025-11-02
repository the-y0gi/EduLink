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
          className={`text-gray-900 hover:font-semibold transition-all duration-300 py-2 text-base sm:text-lg flex-1 ${
            pathname === link.path ? "font-semibold border-l-4 pl-4" : ""
          }`}
        >
          {link.name}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-900 hover:font-semibold transition-all duration-300"
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
              className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:font-semibold transition-all duration-200"
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

  useEffect(() => {
    // Check initial scroll position
    const checkInitialScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 50;
      setIsScrolled(shouldBeScrolled);

      // Apply initial transforms based on scroll position
      if (navRef.current) {
        if (shouldBeScrolled) {
          gsap.set(navRef.current, {
            scale: 0.9,
            y: 16,
            borderRadius: "50px",
            transformOrigin: "center top",
          });
        } else {
          gsap.set(navRef.current, {
            scale: 1,
            y: 0,
            borderRadius: "0px",
            transformOrigin: "center top",
          });
        }
      }
    };

    // Check initial state immediately
    checkInitialScroll();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-item",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.05,
        }
      );

      // Native scroll event handler for more reliable detection
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 50;

        if (shouldBeScrolled !== isScrolled) {
          setIsScrolled(shouldBeScrolled);

          if (shouldBeScrolled) {
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
        }
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Also keep ScrollTrigger for additional reliability
      ScrollTrigger.create({
        trigger: "body",
        start: "top -50px",
        end: "bottom bottom",
        onUpdate: (self) => {
          const isScrolledNow = self.progress > 0;

          if (isScrolledNow !== isScrolled) {
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
          }
        },
        refreshPriority: -1,
      });

      // Refresh ScrollTrigger after a short delay to ensure proper setup
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
        checkInitialScroll(); // Double-check the state
      }, 50);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(refreshTimeout);
      };
    }, navRef);

    return () => ctx.revert();
  }, [isScrolled]); // Add isScrolled as dependency to prevent stale state

  // Handle route changes - reset scroll state
  useEffect(() => {
    const checkScrollOnRouteChange = () => {
      setTimeout(() => {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 50;
        setIsScrolled(shouldBeScrolled);

        if (navRef.current) {
          if (shouldBeScrolled) {
            gsap.set(navRef.current, {
              scale: 0.9,
              y: 16,
              borderRadius: "50px",
              transformOrigin: "center top",
            });
          } else {
            gsap.set(navRef.current, {
              scale: 1,
              y: 0,
              borderRadius: "0px",
              transformOrigin: "center top",
            });
          }
        }
        ScrollTrigger.refresh();
      }, 50);
    };

    checkScrollOnRouteChange();
  }, [pathname]);

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
          duration: 0.25,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.05,
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

        /* Nav link underline animation and bold-on-hover (no color change) */
        .nav-item,
        .mobile-nav-item {
          position: relative;
          /* ensure text color is inherited and not overridden on hover */
          color: inherit;
        }

        .nav-item::after,
        .mobile-nav-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          height: 2px;
          width: 100%;
          background: currentColor;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 180ms ease;
          pointer-events: none;
        }

        .nav-item:hover::after,
        .mobile-nav-item:hover::after {
          transform: scaleX(1);
        }

        .nav-item:hover,
        .mobile-nav-item:hover {
          font-weight: 600; /* slightly bolder on hover */
        }
      `}</style>
      <nav
        ref={navRef}
        className={`fixed top-0 z-999 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-lg border-b border-primary/30 shadow-xl max-w-screen-2xl mx-auto left-0 right-0 w-[96vw]"
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
                    src={"Logo.png"}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center">
                  <span
                    className={`text-base sm:text-lg lg:text-xl tracking-wide font-bold leading-tight text-gray-900`}
                  >
                    Edu<span className="text-primary">link</span>
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
                          className={`nav-item relative font-sans text-gray-900 hover:font-semibold
                           transition-all duration-300 whitespace-nowrap flex items-center gap-1 ${
                             pathname === link.path ? "font-bold" : ""
                           }`}
                        >
                          {link.name}
                          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                          {pathname === link.path && (
                            <div
                              className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary`}
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
                                  className={`block p-2 rounded-md /10 border border-transparent transition-all duration-200 group/item`}
                                >
                                  <div
                                    className={`font-medium text-sm text-gray-900 group-hover/item:font-semibold transition-all`}
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
                      className={`nav-item relative font-sans text-gray-900 hover:font-semibold transition-all duration-300 whitespace-nowrap ${
                        pathname === link.path ? "font-bold" : ""
                      }`}
                    >
                      {link.name}
                      {pathname === link.path && (
                        <div
                          className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary`}
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
                href="tel:+61403158014"
                className="nav-item relative font-semibold px-4 py-2 rounded-lg  hover:shadow-lg transition-all duration-300 whitespace-nowrap border-2 bg-secondary text-white"
              >
                Talk to us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden nav-item p-2 text-gray-900 hover:font-semibold transition-all duration-300 ml-auto`}
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
            className="lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg border-b-2 border-primary/50 shadow-xl"
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
                      className={`mobile-nav-item text-gray-900 hover:font-semibold transition-all duration-300 py-2 text-base sm:text-lg whitespace-nowrap ${
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
