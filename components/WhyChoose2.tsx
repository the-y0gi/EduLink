"use client";
import React from "react";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";

const BuildDreamTeam = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT SECTION (Sticky for better context) */}
        <div className="flex flex-col justify-between h-full lg:sticky lg:top-16">
          {/* Heading and Text */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Build your <span className="text-indigo-600">dream team</span> today.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed border-l-4 border-indigo-500 pl-4 py-1">
              Unlock success with our handpicked dream team of experts. Hire now
              for unparalleled results.
            </p>
          </div>

          {/* CTA & Avatars */}
          <div className="flex items-center gap-5 mt-10 flex-wrap">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-indigo-200">
              <span>Hiring? Book a call</span>
              <Phone className="w-4 h-4" />
            </button>

            <div className="flex -space-x-3">
              {[
                "/Services/Professional.jpg",
                "/Services/Professional.jpg",
                "/Services/Professional.jpg",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`avatar ${i + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white ring-2 ring-indigo-500 object-cover shadow-md"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white border-2 border-white shadow-md">
                +728
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (DYNAMIC 3x2 GRID) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          
          {/* CARD 1 (Mike - Tall Image) */}
          <div className="relative rounded-2xl shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] lg:h-[450px]">
            <Image
              src="/Services/girlImage.png" // Replace with your image
              alt="Mike"
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 shadow-lg">
              <span className="font-semibold text-gray-900">Mike</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Frontend Dev</span>
            </div>
          </div>

          {/* CARD 2 (Quick - Short Text, Highlighted) */}
          <div className="bg-lime-50 rounded-2xl shadow-lg p-6  flex flex-col justify-center group border-t-4 border-lime-500 transition-all duration-300 hover:bg-lime-100 lg:h-[200px]">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quick and adaptable
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Hire within a mere **72 hours**. Easily adjust your team size from
              month to month as required.
            </p>
          </div>
          
          {/* CARD 3 (Latisha - Wide Card on SM, Normal on LG) */}
          <div className="relative rounded-2xl shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] sm:col-span-2 lg:col-span-1 lg:h-[450px]">
            <Image
              src="/Services/StudentSupport.jpg" // Replace with your image
              alt="Latisha"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 shadow-lg">
              <span className="font-semibold text-gray-900">Latisha</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Mobile Dev</span>
            </div>
          </div>
          
          {/* --- End of Row 1 (Visual Break on LG) --- */}
          
          {/* CARD 4 (Remote - Short Text, Wide on SM) */}
          <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col justify-center group border-t-4 border-purple-500 transition-all duration-300 hover:bg-purple-100 sm:col-span-2 lg:col-span-1 lg:h-[200px]">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Remote Talent Pool
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              **Pre-vetted** remote developers, designers, and managers with
              world-class technical and communication skills.
            </p>
          </div>

          {/* CARD 5 (Asger - Short Image) */}
          <div className="relative rounded-2xl shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02] lg:h-[200px]">
            <Image
              src="/whyChoose/person.png" // Replace with your image
              alt="Asger"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 shadow-lg">
              <span className="font-semibold text-gray-900">Asger</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">UI/UX Designer</span>
            </div>
          </div>

          {/* CARD 6 (Rest - Tall Text) */}
          <div className="bg-orange-50 rounded-2xl shadow-lg p-3 flex flex-col justify-center group border-t-4 border-orange-500 transition-all duration-300 hover:bg-orange-100 ">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Rest assured
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Rest assured, there are **no crazy fees** or legal hassle to worry
              about. We handle all the payroll and compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildDreamTeam;