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

  // Duplicate the items for a smooth, continuous scroll
  const repeated = [...items, ...items];

  return (
    <div className="marquee-wrap w-full text-gray-300 h-14 md:h-16 lg:h-25">
      <div className="mx-auto overflow-hidden h-full">
        <div className="marquee flex items-center whitespace-nowrap h-full">
          {repeated.map((text, idx) => (
            <div
              key={`${text}-${idx}`}
              className="marquee-item inline-flex items-center gap-6 px-6 md:px-8 py-3 text-sm md:text-base lg:text-base"
            >
              <span
                className="dot w-1.5 h-1.5 rounded-full bg-white/30"
                aria-hidden
              />
              <span className="leading-tight text-2xl">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* local styles for marquee animation and exact visual treatment */}
      <style jsx>{`
        .marquee-wrap {
          background: #0b0d10; /* near-black background to match screenshot */
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }
        .marquee {
          display: flex;
          gap: 1rem;
          align-items: center;
          animation: marquee 24s linear infinite;
          will-change: transform;
        }
        .marquee-item {
          flex: 0 0 auto;
        }
        .dot {
          opacity: 0.25;
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
      `}</style>
    </div>
  );
};

export default Marquee;
