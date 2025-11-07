// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   GraduationCap,
//   Users,
//   Award,
//   BookOpen,
//   Target,
//   HeartHandshake,
//   TrendingUp,
//   Globe,
// } from "lucide-react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const WhyChooseUS = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);

// const features = [
//   {
//     icon: <GraduationCap className="w-8 h-8" />,
//     title: "Expert Guidance",
//     description:
//       "From student to post-study visas, our experienced consultants ensure a smooth application process.",
//     label: "Guidance",
//     gradient: "from-blue-600 to-blue-800",
//     delay: 0.1,
//   },
//   {
//     icon: <BookOpen className="w-8 h-8" />,
//     title: "Study Pathways",
//     description:
//       "Choose the right course and university that aligns with your career goals for real success.",
//     label: "Expertise",
//     gradient: "from-[var(--primary)] to-teal-600",
//     delay: 0.2,
//   },
//   {
//     icon: <Award className="w-8 h-8" />,
//     title: "95% Success Rate",
//     description:
//       "Our proven track record speaks for itself with excellent results.",
//     label: "Results",
//     gradient: "from-[var(--secondary)] to-blue-900",
//     stats: { number: "95%", label: "Visa Success Rate" },
//     delay: 0.3,
//   },
//   {
//     icon: <Users className="w-8 h-8" />,
//     title: "Career Support",
//     description:
//       "Employment advice, internships, and work opportunities to gain global experience.",
//     label: "Support",
//     gradient: "from-[var(--primary)] to-cyan-600",
//     delay: 0.4,
//   },
//   {
//     icon: <HeartHandshake className="w-8 h-8" />,
//     title: "Settlement Assistance",
//     description:
//       "Practical support for accommodation and cultural adaptation wherever you go.",
//     label: "Care",
//     gradient: "from-purple-600 to-purple-800",
//     delay: 0.5,
//   },
//   {
//     icon: <Globe className="w-8 h-8" />,
//     title: "50+ Universities",
//     description: "Connected to universities worldwide",
//     label: "Network",
//     gradient: "from-gray-600 to-gray-800",
//     stats: { number: "50+", label: "Partner Universities" },
//     delay: 0.6,
//   },
//   {
//     icon: <Target className="w-8 h-8" />,
//     title: "Student Reviews",
//     description:
//       "Join thousands of successful students who achieved their dreams",
//     label: "Trust",
//     gradient: "from-indigo-600 to-indigo-800",
//     delay: 0.7,
//   },
//   {
//     icon: <TrendingUp className="w-8 h-8" />,
//     title: "10+ Years",
//     description: "A decade of expertise in international education",
//     label: "Experience",
//     gradient: "from-[var(--primary)] to-teal-700",
//     stats: { number: "10+", label: "Years Experience" },
//     delay: 0.8,
//   },
// ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Header animation
//       if (headerRef.current) {
//         gsap.fromTo(
//           headerRef.current.children,
//           {
//             y: 60,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1,
//             stagger: 0.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: headerRef.current,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }

//       // Cards animation
//       if (cardsRef.current) {
//         gsap.fromTo(
//           cardsRef.current.children,
//           {
//             y: 80,
//             opacity: 0,
//             scale: 0.9,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 0.8,
//             stagger: 0.1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: cardsRef.current,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
//       // style={{
//       //   background:
//       //     "linear-gradient(135deg, rgba(78,205,196,0.25) 0%, rgba(78,205,196,0.18) 25%, rgba(78,205,196,0.12) 50%, rgba(240,249,255,0.8) 75%, rgba(255,255,255,0.95) 100%)",
//       // }}
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--secondary)] rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div ref={headerRef} className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-6">
//             <Award className="w-4 h-4" />
//             <span>Trusted by 10,000+ Students</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-momo text-[var(--secondary)] mb-6 tracking-tight">
//             Why Choose{" "}
//             <span className="bg-gradient-to-r from-[var(--primary)] to-teal-600 bg-clip-text font-momo text-transparent">
//               EduLink
//             </span>
//             ?
//           </h2>

//           <p className="text-lg md:text-xl text-secondary/70 max-w-4xl mx-auto leading-relaxed">
//             Discover what makes us the preferred choice for thousands of
//             students and parents worldwide.
//             <br />
//             <span className="text-primary font-semibold">
//               Your success is our mission.
//             </span>
//           </p>
//         </div>

//         <div
//           ref={cardsRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
//         >
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`
//                 group relative overflow-hidden rounded-3xl bg-white border border-primary/10
//                 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/20
//                 hover:-translate-y-1 hover:border-primary/30 cursor-pointer shadow-lg
//                 ${
//                   feature.stats
//                     ? "flex flex-col items-center text-center p-8"
//                     : "p-8"
//                 }
//               `}
//             >
//               <div className="relative z-10 flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex justify-between items-start mb-6">
//                   <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
//                     {feature.label}
//                   </span>
//                   <div className="p-3 rounded-xl bg-primary text-white shadow-lg transition-all duration-300 group-hover:scale-110">
//                     {feature.icon}
//                   </div>
//                 </div>

//                 {/* Stats display for featured cards */}
//                 {feature.stats && (
//                   <div className="text-center mb-6">
//                     <div className="text-5xl font-bold text-secondary mb-2">
//                       {feature.stats.number}
//                     </div>
//                     <div className="text-lg font-semibold text-secondary/70">
//                       {feature.stats.label}
//                     </div>
//                   </div>
//                 )}

//                 {/* Content */}
//                 <div className="flex-1 flex flex-col">
//                   <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                   <p className="text-secondary/70 leading-relaxed transition-colors duration-300 flex-1">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Animated arrow for interaction */}
//                 <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                   <div className="flex items-center text-primary text-sm font-medium">
//                     Learn More
//                     <svg
//                       className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to action */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-white rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer group hover:bg-primary/90 transform hover:scale-105">
//             <span className="font-semibold">Ready to Start Your Journey?</span>
//             <svg
//               className="w-5 h-5 transition-transform group-hover:translate-x-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUS;

// 'use client'
// import React, { useEffect, useRef } from "react";
// import { Snowflake, User, DollarSign, Building2, Truck, Phone } from "lucide-react";

// const WhyChooseUS = () => {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const cardsRef = useRef([]);
//   const imageRef = useRef(null);

//   const features = [
//     {
//       icon: <Snowflake className="w-8 h-8" />,
//       title: "Fast Processing",
//       description: "Lorem ipsum dolor sit amet conse cteturt.",
//     },
//     {
//       icon: <Building2 className="w-8 h-8" />,
//       title: "Trusted Company",
//       description: "Lorem ipsum dolor sit amet conse cteturt.",
//     },
//     {
//       icon: <User className="w-8 h-8" />,
//       title: "Front Interview",
//       description: "Lorem ipsum dolor sit amet conse cteturt.",
//     },
//     {
//       icon: <Truck className="w-8 h-8" />,
//       title: "In-time Delivery",
//       description: "Lorem ipsum dolor sit amet conse cteturt.",
//     },
//     {
//       icon: <DollarSign className="w-8 h-8" />,
//       title: "Reasonable Price",
//       description: "Lorem ipsum dolor sit amet conse cteturt.",
//     },
//     {
//       icon: <Phone className="w-8 h-8" />,
//       title: "24/7 Support",
//       description: "Lorem ipsum dolor sit amet conse cteturt.",
//     },
//   ];

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -100px 0px"
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = "1";
//           entry.target.style.transform = "translateY(0)";
//         }
//       });
//     }, observerOptions);

//     if (imageRef.current) observer.observe(imageRef.current);
//     if (headerRef.current) observer.observe(headerRef.current);
//     cardsRef.current.forEach(card => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left side - Image */}
//           <div
//             ref={imageRef}
//             className="relative opacity-0 transition-all duration-1000 ease-out"
//             style={{ transform: "translateX(-50px)" }}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
//                 alt="Professional"
//                 className="w-full h-[600px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div>
//             <div
//               ref={headerRef}
//               className="opacity-0 transition-all duration-1000 ease-out"
//               style={{ transform: "translateY(30px)" }}
//             >
//               <div className="text-[#D85B7F] text-sm font-semibold tracking-wider uppercase mb-4">
//                 WHY CHOOSE US
//               </div>

//               <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-6">
//                 Reason for chosen us
//               </h2>

//               <p className="text-[#9B9B9B] text-base leading-relaxed mb-12">
//                 Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
//                 sed do eiusmod tempor incididunt simply free ut labore
//               </p>
//             </div>

//             {/* Feature Cards Grid */}
// <div className="grid sm:grid-cols-2 gap-6">
//   {features.map((feature, index) => (
//     <div
//       key={index}
//       ref={el => cardsRef.current[index] = el}
//       className="group relative opacity-0 transition-all duration-700 ease-out"
//       style={{
//         transform: "translateY(30px)",
//         transitionDelay: `${index * 100}ms`
//       }}
//     >
//       <div className="flex gap-4 items-start">
//         {/* Icon Box */}
//         <div className="relative flex-shrink-0">
//           <div className="w-16 h-16 bg-white border-2 border-[#D85B7F] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#D85B7F] group-hover:scale-110 group-hover:shadow-lg">
//             <div className="text-[#2D3436] transition-colors duration-300 group-hover:text-white">
//               {feature.icon}
//             </div>
//           </div>
//           {/* Bottom border accent */}
//           <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D85B7F] to-transparent"></div>
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold text-[#2D3436] mb-2 transition-colors duration-300 group-hover:text-[#D85B7F]">
//             {feature.title}
//           </h3>
//           <p className="text-[#9B9B9B] text-sm leading-relaxed">
//             {feature.description}
//           </p>
//         </div>
//       </div>
//     </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUS;

//working cde without animation

// 'use client'
// import React, { useEffect, useRef } from "react";

// import {
//   GraduationCap,
//   Users,
//   Award,
//   BookOpen,
//   Target,
//   HeartHandshake,
//   TrendingUp,
//   Globe,
// } from "lucide-react";

// const WhyChooseUS = () => {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const cardsRef = useRef([]);
//   const imageRef = useRef(null);

//   const features = [
//   {
//     icon: <TrendingUp className="w-8 h-8" />,
//     title: "10+ Years Experience",
//     description: "A decade of expertise in international education",
//   },
//   {
//     icon: <GraduationCap className="w-8 h-8" />,
//     title: "Expert Guidance",
//     description: "Experienced consultants ensure smooth application process",
//   },
//   {
//     icon: <Award className="w-8 h-8" />,
//     title: "High Success Rate",
//     description: "Proven track record with excellent results",
//   },
//   {
//     icon: <Globe className="w-8 h-8" />,
//     title: "50+ Universities",
//     description: "Connected to universities worldwide",
//   },
//   {
//     icon: <Users className="w-8 h-8" />,
//     title: "Career Support",
//     description: "Employment advice and work opportunities worldwide",
//   },
//   {
//     icon: <HeartHandshake className="w-8 h-8" />,
//     title: "Settlement Assistance",
//     description: "Support for accommodation and cultural adaptation",
//   },
// ];

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -100px 0px"
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = "1";
//           entry.target.style.transform = "translateY(0)";
//         }
//       });
//     }, observerOptions);

//     if (imageRef.current) observer.observe(imageRef.current);
//     if (headerRef.current) observer.observe(headerRef.current);
//     cardsRef.current.forEach(card => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, rgba(78,205,196,0.15) 0%, rgba(78,205,196,0.08) 25%, rgba(78,205,196,0.05) 50%, rgba(240,249,255,0.8) 75%, rgba(255,255,255,0.95) 100%)",
//       }}
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--secondary)] rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left side - Image */}
//           <div
//             ref={imageRef}
//             className="relative opacity-0 transition-all duration-1000 ease-out"
//             style={{ transform: "translateX(-50px)" }}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img
//               src={'/Services/mission.jpg'}
//                 alt="Professional"
//                 className="w-full h-[600px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div>
//             <div
//               ref={headerRef}
//               className="opacity-0 transition-all duration-1000 ease-out"
//               style={{ transform: "translateY(30px)" }}
//             >

//               <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6">
//                  Why Choose {" "}
//                 <span className="bg-gradient-to-r from-[var(--primary)] to-teal-600 bg-clip-text text-transparent">
//                   EduLink
//                 </span>
//                 ?
//               </h2>

//               <p className="text-lg text-[var(--secondary)]/70 leading-relaxed mb-12">
//                Discover why thousands of students and parents trust EduLink for guidance and success. <span className="text-[var(--primary)] font-semibold">Your success is our mission.</span>
//               </p>
//             </div>

//             {/* Feature Cards Grid */}
// <div className="grid sm:grid-cols-2 gap-6">
//   {features.map((feature, index) => (
//     <div
//       key={index}
//       ref={(el) => (cardsRef.current[index] = el)}
//       className="group relative opacity-0 transition-all duration-700 ease-out"
//       style={{
//         transform: "translateY(30px)",
//         transitionDelay: `${index * 100}ms`,
//       }}
//     >
//       <div className="flex gap-4 items-start">
//         {/* Icon Box */}
//         <div className="relative flex-shrink-0">
//           <div className="w-16 h-16 bg-white border-2 border-[var(--primary)] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:scale-110 group-hover:shadow-lg">
//             <div className="text-[var(--secondary)] transition-colors duration-300 group-hover:text-white">
//               {feature.icon}
//             </div>
//           </div>
//           {/* Bottom border accent */}
//           <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold text-[var(--secondary)] mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
//             {feature.title}
//           </h3>
//           <p className="text-[var(--secondary)]/70 text-sm leading-relaxed">
//             {feature.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUS;

"use client";
import React, { useEffect, useRef } from "react";
import {
  GraduationCap,
  Users,
  Award,
  HeartHandshake,
  TrendingUp,
  Globe,
} from "lucide-react";

const WhyChooseUS = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRef = useRef(null);

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "10+ Years Experience",
      description: "A decade of expertise in international education",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Experienced consultants ensure smooth application process",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "High Success Rate",
      description: "Proven track record with excellent results",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "50+ Universities",
      description: "Connected to universities worldwide",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Support",
      description: "Employment advice and work opportunities worldwide",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Settlement Assistance",
      description: "Support for accommodation and cultural adaptation",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.style.opacity = "1";
          target.style.transform = "translateY(0) scale(1)";
          target.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        } else {
          target.style.opacity = "0";
          target.style.transform = "translateY(20px) scale(0.95)";
        }
      });
    }, observerOptions);

    if (imageRef.current) observer.observe(imageRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(78,205,196,0.15) 0%, rgba(78,205,196,0.08) 25%, rgba(78,205,196,0.05) 50%, rgba(240,249,255,0.8) 75%, rgba(255,255,255,0.95) 100%)",
      }}
    >
      {/* Animation Style */}
      <style jsx>{`
        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .auto-motion {
          animation: cardFloat 5s ease-in-out infinite;
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--secondary)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div
            ref={imageRef}
            className="relative opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateX(-50px)" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
              <img
                src={"/Services/stock.png"}
                alt="Professional"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div
              ref={headerRef}
              className="opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: "translateY(30px)" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-teal-600 bg-clip-text text-transparent">
                  EduLink
                </span>
                ?
              </h2>

              <p className="text-lg text-[var(--secondary)]/70 leading-relaxed mb-12">
                Discover why thousands of students and parents trust EduLink for
                guidance and success.{" "}
                <span className="text-[var(--primary)] font-semibold">
                  Your success is our mission.
                </span>
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="group relative opacity-0 transition-all duration-700 ease-out auto-motion"
                  style={{
                    transform: "translateY(30px)",
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 0.5}s`, // staggered motion
                  }}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-white border-2 border-[var(--primary)] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:scale-110 group-hover:shadow-lg">
                        <div className="text-[var(--secondary)] transition-colors duration-300 group-hover:text-white">
                          {feature.icon}
                        </div>
                      </div>
                      {/* Bottom border accent */}
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[var(--secondary)] mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--secondary)]/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
