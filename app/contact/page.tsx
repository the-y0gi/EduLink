"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Music,
} from "lucide-react";

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

      {/* Contact Form & Info Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={contactFormRef} className="form-container">
              <h2 className="text-4xl font-bold text-secondary mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Ready to start your Australian journey? Fill out the form below
                and our expert consultants will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-secondary font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-secondary font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-secondary font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-secondary font-semibold mb-2">
                    Country of Residence *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your country"
                  />
                </div>

                <div>
                  <label className="block text-secondary font-semibold mb-2">
                    Intended Course / Level of Study *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your intended course level</option>
                    {courseCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-secondary font-semibold mb-2">
                    Preferred City in Australia *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your preferred city</option>
                    {australianCities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-secondary font-semibold mb-2">
                    Message / Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your goals and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={contactInfoRef} className="contact-info">
              <h2 className="text-4xl font-bold text-secondary mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <MapPin size={18} className="text-primary" />
                    </span>
                    Our Location
                  </h3>
                  <p className="text-foreground/80">
                    Level 5/12 Clarke St, Sunshine, VIC 3020
                    <br />
                    Melbourne, Australia
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Phone size={18} className="text-primary" />
                    </span>
                    Phone
                  </h3>
                  <p className="text-foreground/80">(+61) 403 158 014</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Mail size={18} className="text-primary" />
                    </span>
                    Email
                  </h3>
                  <p className="text-foreground/80">Info@edulink.com.au</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Globe size={18} className="text-primary" />
                    </span>
                    Website
                  </h3>
                  <p className="text-foreground/80">https://edulink.com.au</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                      <Facebook size={16} className="text-primary" />
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                      <Instagram size={16} className="text-primary" />
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                      <Linkedin size={16} className="text-primary" />
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                      <Music size={16} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section
        ref={locationsRef}
        className="py-24 px-4 bg-linear-to-b from-primary/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-secondary mb-16">
            We&apos;re Here to Help
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {australianCities.map((c) => (
              <div
                key={c.name}
                className="location-item rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-40 sm:h-44 lg:h-48 w-full bg-gray-100">
                  <Image
                    src={c.image}
                    alt={`${c.name} skyline`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  {/* city name overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-white drop-shadow-md">
                      {c.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-secondary mb-16">
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

      {/* Call to Action */}
      <section className="py-24 px-4 bg-linear-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Still Have Questions?</h2>
          <p className="text-xl mb-12 leading-relaxed opacity-90">
            Don&apos;t let uncertainty hold you back. Our experienced
            consultants are here to provide personalized guidance and answer all
            your questions about studying in Australia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
