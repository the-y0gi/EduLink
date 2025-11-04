"use client";
import React, { useState } from "react";

interface WhyChooseUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsFolderProps {
  color?: string;
  size?: number;
  items: WhyChooseUsItem[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const WhyChooseUsFolder: React.FC<WhyChooseUsFolderProps> = ({
  color = "#5227FF",
  size = 1,
  items = [],
  className = "",
}) => {
  const maxItems = 3;
  const folderItems = items.slice(0, maxItems);

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.05);
  const paper2 = darkenColor("#ffffff", 0.02);
  const paper3 = "#ffffff";

  const handleClick = () => {
    setOpen((prev) => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.1;
    const offsetY = (e.clientY - centerY) * 0.1;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as React.CSSProperties;

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index: number) => {
    if (index === 0) return "translate(-150%, -60%) rotate(-15deg)";
    if (index === 1) return "translate(50%, -60%) rotate(15deg)";
    if (index === 2) return "translate(-50%, -110%) rotate(5deg)";
    return "";
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative transition-all duration-300 ease-in cursor-pointer ${
          !open ? "hover:-translate-y-3 hover:scale-105" : ""
        }`}
        style={{
          ...folderStyle,
          transform: open ? "translateY(-12px)" : undefined,
        }}
        onClick={handleClick}
      >
        <div
          className="relative w-[180px] h-[150px] md:w-[220px] md:h-[180px] lg:w-[260px] lg:h-[210px] rounded-tl-0 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-10 h-4 md:w-12 md:h-5 lg:w-14 lg:h-6 rounded-tl-md rounded-tr-md rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {folderItems.map((item, i) => {
            let sizeClasses = "";
            if (i === 0)
              sizeClasses = open ? "w-[85%] h-[90%]" : "w-[85%] h-[85%]";
            if (i === 1)
              sizeClasses = open ? "w-[90%] h-[90%]" : "w-[90%] h-[75%]";
            if (i === 2)
              sizeClasses = open ? "w-[95%] h-[90%]" : "w-[95%] h-[65%]";

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${
                  paperOffsets[i].y
                }px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                className={`absolute ${
                  open ? "z-50" : "z-20"
                } bottom-[8%] left-1/2 transition-all duration-300 ease-in-out ${
                  !open
                    ? "transform -translate-x-1/2 translate-y-[8%] group-hover:translate-y-0"
                    : "hover:scale-110 shadow-2xl"
                } ${sizeClasses} rounded-lg shadow-md border border-gray-100 flex flex-col items-center justify-center p-3 md:p-5 lg:p-6`}
                style={{
                  ...(!open
                    ? {}
                    : {
                        transform: transformStyle,
                        zIndex: 50 + i, // Ensure proper stacking order when open
                      }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 text-center opacity-80">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-center text-gray-800 mb-1 md:mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-center text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:transform-[skew(15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "6px 12px 12px 12px",
              ...(open && { transform: "skew(15deg) scaleY(0.6)" }),
            }}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:transform-[skew(-15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "6px 12px 12px 12px",
              ...(open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsFolder;
