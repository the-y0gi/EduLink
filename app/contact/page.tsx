"use client";

import { useEffect, useRef, useState } from "react";
import CircularGallery from "../../components/ui/CircularGallery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const heroRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactInfoRef = useRef(null);
  const locationsRef = useRef(null);
  const faqRef = useRef(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    city: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const faqs = [
    {
      question: "How do I apply to study in Australia?",
      answer:
        "Our expert consultants guide you through the entire application process, from choosing the right course to submitting your application and securing your student visa.",
    },
    {
      question: "What are the entry requirements for studying in Australia?",
      answer:
        "Entry requirements vary by course and institution. Generally, you'll need academic qualifications, English language proficiency (IELTS/TOEFL), and meet specific course prerequisites.",
    },
    {
      question: "How long does the student visa process take?",
      answer:
        "Student visa processing typically takes 4-6 weeks, but can vary depending on your country and application completeness. We help ensure your application is complete to avoid delays.",
    },
    {
      question: "Can I work while studying in Australia?",
      answer:
        "Yes! Student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during breaks. We provide guidance on work rights and opportunities.",
    },
    {
      question: "What happens after I graduate?",
      answer:
        "Graduates can apply for post-study work visas (485 visa) to gain Australian work experience. We assist with visa applications and career planning for your future in Australia.",
    },
  ];

  const australianCities = [
    { name: "Melbourne", image: "/locations/Melbourne.jpg" },
    { name: "Sydney", image: "/locations/Sydney.jpg" },
    // filename contains a space in public folder; use URL-encoded space
    { name: "Brisbane", image: "/locations/Brisbane%20.jpg" },
    { name: "Adelaide", image: "/locations/Adelaide.jpg" },
    { name: "Perth", image: "/locations/Perth.jpg" },
    { name: "Canberra", image: "/locations/Canberra.jpg" },
    { name: "Gold Coast", image: "/locations/Gold_Coast.jpg" },
    { name: "Hobart", image: "/locations/Hobart.jpg" },
  ];

  const courseCategories = [
    "English Language Programs",
    "Certificate Courses",
    "Diploma Programs",
    "Bachelor Degrees",
    "Master Degrees",
    "PhD Programs",
    "Vocational Education",
    "Professional Development",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      // Contact Form Animation
      gsap.fromTo(
        ".form-container",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contactFormRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Locations Animation
      gsap.fromTo(
        ".location-item",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: locationsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // FAQ Animation
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax Effect
      gsap.to(".parallax-bg", {
        yPercent: -50,
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
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="parallax-container absolute inset-0">
          <div className="parallax-bg absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/30"></div>
          <div className="absolute inset-0 bg-linear-to-r from-secondary/80 to-primary/60">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              src="/main.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl  mb-6 font-momo">
            Contact <span className="text-primary">EduLink</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-semibold capitalize leading-relaxed mb-4">
            Start Your Journey with Confidence
          </p>
          <p className="hero-subtitle text-lg md:text-xl opacity-90">
            Book your free consultation today and take the first step towards
            your Australian future
          </p>
        </div>

        {/* Floating Elements */}
      </section>
      {/* Contact Form & Info Section - reworked for balanced modern layout */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Form - slightly wider */}
            <div ref={contactFormRef} className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-3xl md:text-4xl font-momo text-secondary mb-2">
                  Get in Touch
                </h2>
                <p className="text-base text-foreground/80 mb-6">
                  Ready to start your Australian journey? Fill out the form and
                  our consultants will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(+61) 4xx xxx xxx"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Intended course / level
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select</option>
                        {courseCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Preferred city
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select</option>
                        {australianCities.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow hover:bg-primary/90 transition"
                    >
                      Send message
                    </button>
                    <p className="text-sm text-foreground/70">
                      We will respond within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Contact details - clean and balanced */}
            <aside ref={contactInfoRef} className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                {/* Main contact card */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-momo text-secondary mb-6">
                    Contact Information
                  </h2>

                  {/* Phone */}
                  <div className="flex items-start gap-4 mb-6">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <Phone size={20} />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+61403158014"
                        className="text-lg text-primary font-medium hover:underline"
                      >
                        (+61) 403 158 014
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Available Mon-Fri, 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 mb-6">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <Mail size={20} />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@edulink.com.au"
                        className="text-lg text-primary font-medium hover:underline"
                      >
                        info@edulink.com.au
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 mb-8">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <MapPin size={20} />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-700 mb-1">
                        Level 5/12 Clarke St, Sunshine
                      </p>
                      <p className="text-gray-700 mb-3">
                        Melbourne, VIC 3020, Australia
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Level+5%2F12+Clarke+St+Sunshine+VIC+3020"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        Get directions →
                      </a>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-gray-100">
                    <a
                      href="tel:+61403158014"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition"
                    >
                      <Phone size={18} />
                      Call Now for Free Consultation
                    </a>
                  </div>
                </div>

                {/* Quick info card */}
                <div className="bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-secondary mb-3">
                    Why Choose EduLink?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Expert guidance from certified counselors
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      100% success rate in visa approvals
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Free consultation & career assessment
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Office Locations */}
      <section
        ref={locationsRef}
        className="hidden md:block py-24 px-4 bg-linear-to-b from-primary/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            We&apos;re Here to Help
          </h2>

          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={australianCities.map((c) => ({
                image: c.image,
                text: c.name,
              }))}
              bend={3}
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item bg-white rounded-xl shadow-lg">
                <button
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="text-xl font-bold text-secondary">
                    {idx + 1}. {faq.question}
                  </span>
                  <span className="ml-4 text-secondary">
                    {openIndex === idx ? "-" : "+"}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-foreground/80 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
