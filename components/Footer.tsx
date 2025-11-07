// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaArrowUp,
//   FaClock,
// } from "react-icons/fa";
// import Link from "next/link";
// import { NAVLINKS, tel, email } from "@/lib/index";

// const Footer = () => {
//   const scrollTopRef = useRef(null);

//   const handleScrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Removed unused mounted state
//   return (
//     <section className="bg-secondary text-gray-100 pt-8 pb-4 relative overflow-hidden">
//       {/* Wavy top decorative SVG - sits above the footer background to create a wave between sections */}
//       <div
//         className="absolute left-0 right-0 -top-6 pointer-events-none"
//         style={{ zIndex: 3 }}
//         aria-hidden="true"
//       >
//         <svg
//           className="w-full h-20"
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0,40 C240,120 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
//             fill="var(--secondary)"
//           />
//         </svg>
//       </div>
//       {/* Footer background image: hidden on mobile, block on md+ */}
//       {/* <div
//         className="hidden 2xl:block absolute inset-x-0 bottom-0 w-full h-full pointer-events-none"
//         aria-hidden="true"
//         style={{
//           backgroundImage: "url('/footer/Footer_design.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center bottom",
//           backgroundSize: "80% auto",
//           zIndex: 1,
//         }}
//       /> */}

//       {/* Bottom right image: hidden on mobile, block on md+ */}
//       {/* <img
//         src="/footer/2.png"
//         alt="Footer Decorative Right"
//         className="hidden md:block absolute bottom-0 right-0 w-100 h-auto pointer-events-none z-[3]"
//         style={{ objectFit: "contain" }}
//         aria-hidden="true"
//       /> */}
//       {/* Overlay for subtlety if needed */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{ background: "rgba(0,0,0,0.02)", zIndex: 2 }}
//       />
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 pb-6 border-b-2 border-primary/20">
//           {/* Left Side Content */}
//           <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:w-3/5 gap-6">
//             {/* Logo & Company Info */}
//             <div className="flex-1 min-w-0 flex flex-col items-start mb-6 md:mb-0">
//               <div className="flex flex-col items-center mb-4">
//                 <div className="w-32 h-24 sm:w-36 sm:h-28 lg:w-40 lg:h-32 relative flex items-center justify-center">
//                   {/* Enlarged white rectangular background behind the logo (not circular) */}
//                   <span
//                     className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-52 lg:w-40 h-14 sm:h-16 lg:h-25 rounded-md bg-white shadow-lg"
//                     aria-hidden="true"
//                   />
//                   <Image
//                     src={"/footerlogo.png"}
//                     alt="Edulink logo"
//                     width={200}
//                     height={200}
//                     className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
//                   />
//                 </div>
//                 <span className="text-base sm:text-lg lg:text-xl font-medium italic text-primary text-center drop-shadow-md">
//                   Where dreams take flight
//                 </span>
//               </div>
//               <p className="text-gray-200 mb-6 text-sm leading-relaxed">
//                 At Edulink, we provide tailored support for every stage of your
//                 international education journey
//               </p>
//               <div className="flex flex-col space-y-2 mt-2">
//                 <div className="flex space-x-4">
//                   <a
//                     href={`mailto:${email}`}
//                     aria-label="Email"
//                     className="hover:text-primary text-gray-100 transition-all duration-300 p-3 rounded-full hover:bg-primary/10 hover:shadow-lg transform hover:scale-105"
//                   >
//                     <FaEnvelope className="w-5 h-5 text-white" />
//                   </a>
//                   <a
//                     href={`tel:${tel[0].replace(/\s/g, "")}`}
//                     aria-label="Phone"
//                     className="hover:text-primary text-gray-100 transition-all duration-300 p-3 rounded-full hover:bg-primary/10 hover:shadow-lg transform hover:scale-105"
//                   >
//                     <FaPhoneAlt className="w-5 h-5 text-white" />
//                   </a>
//                 </div>
//                 <div className="mt-2">
//                   <Link
//                     href="/privacy-policy"
//                     className="hover:text-primary transition-colors text-xs underline text-gray-200"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links - hidden on mobile */}
//             <div className="hidden md:flex-1 md:min-w-0 md:flex md:flex-col md:items-start md:mb-8">
//               <h3 className="font-semibold text-white text-lg mb-3 font-sans">
//                 Quick Links
//               </h3>
//               <ul className="space-y-2 text-gray-100">
//                 {NAVLINKS.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       href={link.path}
//                       className="hover:text-primary hover:underline transition-colors font-sans font-light text-sm text-gray-100"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Working Hours */}
//             <div className="flex-1 min-w-0 flex flex-col md:items-start mb-6 md:mb-0">
//               <h3 className="font-semibold font-sans text-lg mb-3 text-white">
//                 Working Hours
//               </h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-center gap-2">
//                   <FaClock className="w-4 h-4 text-primary" />
//                   <div className="text-gray-100">
//                     <div className="font-medium">Monday - Friday</div>
//                     <div>9:00 AM - 5:00 PM</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaClock className="w-4 h-4 text-primary" />
//                   <div className="text-gray-100">
//                     <div className="font-medium">Saturday</div>
//                     <div>9:00 AM - 1:00 PM</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaClock className="w-4 h-4 text-primary" />
//                   <div className="text-gray-100">
//                     <div className="font-medium">Sunday</div>
//                     <div className="text-gray-200">Closed</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="flex-1 min-w-0 flex flex-col md:items-start">
//               <h3 className="font-semibold font-sans text-lg mb-3 text-white">
//                 Contact
//               </h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-start gap-2">
//                   <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-primary" />
//                   <div className="text-gray-100">
//                     Level 5/12 Clarke St,
//                     <br />
//                     Sunshine, VIC 3020.
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaPhoneAlt className="w-4 h-4 text-primary" />
//                   <div className="flex flex-col space-y-1">
//                     {tel.map((phone, index) => (
//                       <a
//                         key={index}
//                         href={`tel:${phone.replace(/\s/g, "")}`}
//                         className="text-gray-100 hover:text-primary transition-colors"
//                       >
//                         {phone}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaEnvelope className="w-4 h-4 text-primary" />
//                   <a
//                     href={`mailto:${email}`}
//                     className="text-gray-100 hover:text-primary transition-colors"
//                   >
//                     {email}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Map Section - Hidden on mobile, visible on large screens, positioned on the right */}
//           <div className="hidden lg:flex lg:flex-col lg:w-2/5 lg:max-w-md">
//             <h3 className="font-semibold font-sans text-lg mb-3 text-white">
//               Find Us
//             </h3>
//             <div className="w-full h-56 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9679541892647!2d144.83274337663932!3d-37.78354597197186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65f90b6c3e7e9%3A0x8d4b9e2e7a6f8f7!2s12%20Clarke%20St%2C%20Sunshine%20VIC%203020%2C%20Australia!5e0!3m2!1sen!2s!4v1699282800000!5m2!1sen!2s&output=embed"
//                 width="800"
//                 height="600"
//                 style={{
//                   border: 0,
//                   width: "100%",
//                   height: "100%",
//                   imageRendering: "-webkit-optimize-contrast",
//                 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Edulink Office Location"
//                 className="transition-all duration-300"
//               ></iframe>
//             </div>
//             <div className="mt-3">
//               <a
//                 href="https://maps.google.com/?q=Level+5/12+Clarke+St,+Sunshine+VIC+3020"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
//               >
//                 <FaMapMarkerAlt className="w-4 h-4 text-primary" />
//                 Open in Google Maps
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-6 text-sm text-gray-200 min-w-0">
//           <p className="text-gray-200">
//             &copy; {new Date().getFullYear()} Edulink | Crafted by{" "}
//             <a
//               href={"https://www.aimarketingpartners.ai/"}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span className="font-bold hover:text-primary gradient-text-primary">
//                 AiMarketingPartners
//               </span>
//             </a>
//           </p>
//           <div className="flex-1"></div>
//           <div className="flex space-x-6 mt-2 md:mt-0 justify-end items-center">
//             <span className="inline-flex w-auto">
//               <button
//                 ref={scrollTopRef}
//                 onClick={handleScrollTop}
//                 className="ml-4 mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary hover:border-primary/90"
//                 aria-label="Scroll to top"
//               >
//                 <FaArrowUp className="w-5 h-5" />
//               </button>
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* Footer Image - Only visible on md and above, bottom middle */}
//       {/* <img
//         src="/footer/1.png"
//         alt="Footer Decorative"
//         className="hidden md:block absolute bottom-2 left-1/2 -translate-x-1/2 w-90 h-auto pointer-events-none select-none"
//         style={{ zIndex: 1 }}
//       /> */}
//     </section>
//   );
// };

// export default Footer;

"use client";
import React, { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  BookOpen,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollTopRef = useRef<HTMLButtonElement>(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-100 font-poppins">
      {/* Background Image */}
      <div className="absolute inset-0 top-40 opacity-50">
        <Image
          width={300}
          height={400}
          src="/layout.jpeg"
          alt="Footer Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* Wavy SVG Separator */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none opacity-60"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 3 }}
      >
        <path
          d="M0,40 C240,120 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
          fill="rgb(2, 44, 52)"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-cyan-500/20">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40">
                {/* White circular background just behind logo */}
                <span
                  className="absolute inset-0 rounded-full bg-white shadow-lg"
                  aria-hidden="true"
                />
                <Image
                  src="/footerlogo.png"
                  alt="Edulink logo"
                  width={200}
                  height={200}
                  className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-medium italic text-cyan-300 text-center drop-shadow-md tracking-wide mt-3">
                Where dreams take flight
              </span>
            </div>


            {/* Icons */}
            {/* <div className="flex gap-4 justify-center pt-3">
              {[
                { Icon: Mail, href: "mailto:info@edulink.com", label: "Email" },
                { Icon: Phone, href: "tel:+61123456789", label: "Phone" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-cyan-400" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-7 h-7 text-cyan-400" />
              <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3 text-base lg:text-lg font-medium">
              {["Our Programs", "About Us", "Success Stories", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-cyan-400 transition-all inline-block hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-7 h-7 text-cyan-400" />
              <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
                Hours
              </h3>
            </div>
            <div className="space-y-4 text-base lg:text-lg">
              {[
                { day: "Mon - Fri", time: "9:00 AM - 5:00 PM" },
                { day: "Saturday", time: "9:00 AM - 1:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map(({ day, time }) => (
                <div key={day}>
                  <p className="font-semibold text-gray-200">{day}</p>
                  <p className="text-gray-400">{time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-7 h-7 text-cyan-400" />
              <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
                Location
              </h3>
            </div>
            <div className="space-y-4 text-base lg:text-lg">
              <div className="text-gray-300">
                <p className="font-semibold mb-1">Head Office</p>
                <p className="text-gray-400 leading-relaxed">
                  Level 5/12 Clarke St,
                  <br />
                  Sunshine, VIC 3020
                </p>
              </div>
              <a
                href="tel:+61123456789"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold block hover:underline"
              >
                +61 (0) 123 456 789
              </a>
              <a
                href="mailto:info@edulink.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold block hover:underline break-all"
              >
                info@edulink.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-10">
          <p className="text-sm sm:text-base text-gray-400 tracking-wide">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Edulink</span>. All
            rights reserved.
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 ml-2 transition-colors hover:underline"
            >
              Privacy Policy
            </a>
          </p>

          <button
            ref={scrollTopRef}
            onClick={handleScrollTop}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}