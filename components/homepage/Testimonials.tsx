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
  return (
    <div className="shrink-0 w-96 bg-white rounded-2xl shadow-lg p-6 mx-4 hover:shadow-2xl transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="text-primary/30 w-8 h-8" />
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
        "{testimonial.testimonial}"
      </p>

      {/* Client Info */}
      <div className="border-t pt-4">
        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
        <p className="text-primary font-medium text-sm">
          {testimonial.service}
        </p>
        {testimonial.location && (
          <p className="text-gray-500 text-xs mt-1">{testimonial.location}</p>
        )}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  // Duplicate the testimonials array to create seamless loop
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-momo text-secondary mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how EduLink has helped thousands of students achieve their
            Australian dreams
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
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
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Ready to start your Australian journey?
        </p>
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
          Book Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
