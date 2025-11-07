// import React from "react";

// const Marquee: React.FC = () => {
//   const items = [
//     "Study Abroad Counseling",
//     "Student Visas & Applications",
//     "Immigration Services",
//     "Credential Assessment",
//     "Career Guidance",
//     "University Applications",
//     "Scholarship Assistance",
//     "IELTS / Language Prep",
//     "Work Permit Advice",
//     "Post-study Pathways",
//   ];

//   // Duplicate the items for a smooth, continuous scroll
//   const repeated = [...items, ...items];

//   return (
//     <div className="marquee-wrap w-full text-gray-300 h-14 md:h-16 lg:h-25">
//       <div className="mx-auto overflow-hidden h-full">
//         <div className="marquee flex items-center whitespace-nowrap h-full">
//           {repeated.map((text, idx) => (
//             <div
//               key={`${text}-${idx}`}
//               className="marquee-item inline-flex items-center gap-6 px-6 md:px-8 py-3 text-sm md:text-base lg:text-base"
//             >
//               <span
//                 className="dot w-1.5 h-1.5 rounded-full bg-white/30"
//                 aria-hidden
//               />
//               <span className="leading-tight text-2xl">{text}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* local styles for marquee animation and exact visual treatment */}
//       <style jsx>{`
//         .marquee-wrap {
//           background: #0b0d10; /* near-black background to match screenshot */
//           border-top: 1px solid rgba(255, 255, 255, 0.06);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
//         }
//         .marquee {
//           display: flex;
//           gap: 1rem;
//           align-items: center;
//           animation: marquee 24s linear infinite;
//           will-change: transform;
//         }
//         .marquee-item {
//           flex: 0 0 auto;
//         }
//         .dot {
//           opacity: 0.25;
//         }
//         .marquee:hover {
//           animation-play-state: paused;
//         }

//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Marquee;



//working code

import React from "react";

const Marquee: React.FC = () => {
  const items = [
    "Study Abroad Counseling",
    "Student Visas & Applications",
    "Immigration Services",
    "Credential Assessment",
    "Career Guidance",
    "University Applications",
    "Scholarship Assistance",
    "IELTS / Language Prep",
    "Work Permit Advice",
    "Post-study Pathways",
  ];
  
  const repeated = [...items, ...items];
  
  return (
    <div className="marquee-wrap w-full h-14 md:h-16 lg:h-20 relative overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e8fcfa] via-[#f3ffff] to-[#eafcfb]" />
      
      {/* Animated shimmer effect overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="shimmer-overlay absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
      
      {/* Top decorative line with glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent shadow-[0_2px_8px_rgba(78,205,196,0.3)]" />
      
      {/* Bottom subtle shadow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4ecdc440] to-transparent" />
      
      <div className="relative mx-auto overflow-hidden h-full">
        <div className="marquee flex items-center whitespace-nowrap h-full">
          {repeated.map((text, idx) => (
            <div
              key={`${text}-${idx}`}
              className="marquee-item inline-flex items-center gap-4 md:gap-6 px-6 md:px-10 py-3 text-sm md:text-lg font-semibold tracking-wide text-[#0b2447] group"
            >
              {/* Enhanced glowing dot with pulse */}
              <span className="dot-container relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#4ecdc4] opacity-20 animate-ping" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#3ab8b0] shadow-[0_0_10px_rgba(78,205,196,0.8),0_0_20px_rgba(78,205,196,0.4)] group-hover:shadow-[0_0_15px_rgba(78,205,196,1),0_0_30px_rgba(78,205,196,0.6)] transition-all duration-300" />
              </span>
              
              {/* Text with enhanced hover effects */}
              <span className="relative group-hover:text-[#4ecdc4] transition-all duration-300 group-hover:translate-x-1 cursor-pointer">
                {text}
                {/* Animated underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4ecdc4] via-[#5ed9d1] to-[#4ecdc4] group-hover:w-full transition-all duration-500 shadow-[0_0_8px_rgba(78,205,196,0.5)]" />
              </span>
              
              {/* Decorative separator with gradient */}
              <span className="hidden md:block w-[2px] h-8 bg-gradient-to-b from-transparent via-[#4ecdc460] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Left edge fade with subtle glow */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#e8fcfa] via-[#e8fcfa]/80 to-transparent pointer-events-none z-10" />
      
      {/* Right edge fade with subtle glow */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#eafcfb] via-[#eafcfb]/80 to-transparent pointer-events-none z-10" />
      
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .shimmer-overlay {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .marquee {
          display: flex;
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
        
        .marquee-item {
          flex: 0 0 auto;
        }
        
        .marquee:hover {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;