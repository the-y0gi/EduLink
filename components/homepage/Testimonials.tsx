"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  service: string;
  testimonial: string;
  rating: number;
  location?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    service: "Visa & Migration Support",
    testimonial:
      "EduLink made my student visa process incredibly smooth. Their expert guidance helped me avoid common mistakes and I got my visa approved faster than expected.",
    rating: 5,
    location: "Melbourne",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    service: "Education & Career Opportunities",
    testimonial:
      "The career pathway guidance was exceptional. They helped me choose the right course that aligned perfectly with my career goals in Australia.",
    rating: 5,
    location: "Sydney",
  },
  {
    id: 3,
    name: "Maria Santos",
    service: "Settlement & Living Support",
    testimonial:
      "As a new arrival, EduLink's settlement support was invaluable. They helped me with everything from banking to finding accommodation.",
    rating: 5,
    location: "Brisbane",
  },
  {
    id: 4,
    name: "James Wilson",
    service: "Professional & Employment Support",
    testimonial:
      "Their employment support service transformed my resume and interview skills. I landed my dream job within 3 months of graduation!",
    rating: 5,
    location: "Perth",
  },
  {
    id: 5,
    name: "Priya Patel",
    service: "Comprehensive Student Support",
    testimonial:
      "EduLink has been supporting me throughout my entire Australian journey. Their ongoing guidance helped me achieve my permanent residency goal.",
    rating: 5,
    location: "Adelaide",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    service: "Personal & Wellbeing Support",
    testimonial:
      "The mental health and wellbeing support helped me overcome culture shock and build confidence in my new environment.",
    rating: 5,
    location: "Melbourne",
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    service: "Visa & Migration Support",
    testimonial:
      "Professional, reliable, and incredibly knowledgeable. My family visa was approved without any complications thanks to their expertise.",
    rating: 5,
    location: "Sydney",
  },
  {
    id: 8,
    name: "David Kim",
    service: "Education & Career Opportunities",
    testimonial:
      "They helped me transition from my overseas qualifications to Australian standards seamlessly. Now I'm working in my dream field.",
    rating: 5,
    location: "Melbourne",
  },
  {
    id: 9,
    name: "Lisa Thompson",
    service: "Settlement & Living Support",
    testimonial:
      "EduLink's settlement services made my transition to Australia stress-free. They thought of everything I didn't even know I needed.",
    rating: 5,
    location: "Brisbane",
  },
  {
    id: 10,
    name: "Arjun Sharma",
    service: "Professional & Employment Support",
    testimonial:
      "Their industry connections and job search strategies were game-changing. I secured employment before even graduating!",
    rating: 5,
    location: "Perth",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  const initial = testimonial.name
    ? testimonial.name.charAt(0).toUpperCase()
    : "U";

  return (
    <div className="shrink-0 w-96 mx-4">
      <div className="group relative bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
        {/* Top row: avatar, quote icon, rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg shadow-md">
              {initial}
            </div>
            <div>
              <h4 className="text-secondary font-bold text-lg leading-tight">
                {testimonial.name}
              </h4>
              <p className="text-primary font-medium text-sm mt-0.5">
                {testimonial.service}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Quote className="w-6 h-6 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-secondary/80 text-sm leading-relaxed italic mb-6 line-clamp-3">
          &ldquo;{testimonial.testimonial}&rdquo;
        </p>

        {/* Divider + location */}
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
          <div>
            {testimonial.location && (
              <p className="text-secondary/60 text-xs font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {testimonial.location}
              </p>
            )}
          </div>
          <div className="text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
            <Quote className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  // Duplicate the testimonials array to create seamless loop
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(78,205,196,0.25) 0%, rgba(78,205,196,0.18) 25%, rgba(78,205,196,0.12) 50%, rgba(240,249,255,0.8) 75%, rgba(255,255,255,0.95) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          {/* Badge / Bubble */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Student Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-momo text-secondary mb-6 leading-tight">
            What Our Students Say
          </h2>
          <p className="text-lg text-secondary/70 leading-relaxed max-w-2xl mx-auto">
            Discover how EduLink has helped thousands of students achieve their
            Australian dreams
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex animate-marquee hover:pause-marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-16">
        <div className="bg-linear-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="text-secondary/70 text-lg mb-6">
            Ready to start your Australian journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              Book Free Consultation
              <Quote className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button className="text-primary hover:text-primary/80 font-semibold transition-colors duration-300 flex items-center gap-1">
              Read More Success Stories
              <span className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Testimonials;
