"use client";
import React from "react";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react"; // Using Phone for the button

const BuildDreamTeam = () => {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* LEFT SECTION */}
                <div className="flex flex-col justify-between h-full sticky top-16">
                    {/* Heading and Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                            Build your dream team today.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                            Unlock success with our handpicked dream team of experts. Hire now
                            for unparalleled results.
                        </p>
                    </div>

                    {/* CTA & Avatars */}
                    <div className="flex items-center gap-5 mt-10 flex-wrap">
                        <button className="bg-gray-900 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg">
                            <span>Hiring? Book a call</span>
                            <Phone className="w-4 h-4" />
                        </button>

                        <div className="flex -space-x-3">
                            {/* Note: Replace with your actual image paths */}
                            {["/Services/Professional.jpg", "/Services/Professional.jpg", "/Services/Professional.jpg"].map((src, i) => (
                                <Image
                                    key={i}
                                    src={src}
                                    alt={`avatar ${i + 1}`}
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-white shadow-sm object-cover"
                                />
                            ))}
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700 border-2 border-white shadow-sm">
                                +728
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION (MASONRY GRID) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(0,auto)]">
                    {/* GRID LOGIC (lg:grid-cols-3):
            1. Mike:    row-span-2. Fills [1,1] and [2,1]
            2. Quick:   row-span-1. Fills [1,2]
            3. Latisha: row-span-1. Fills [1,3]
            4. Remote:  col-span-2. Fills [2,2] and [2,3] (under Quick & Latisha)
            5. Asger:   row-span-2. Fills [3,1] and [4,1] (under Mike)
            6. Rest:    row-span-1. Fills [3,2] (under Remote)
          */}

                    {/* CARD 1 (Mike) */}
                    <div className="relative rounded-2xl shadow-md overflow-hidden group lg:row-span-2">
                        <Image
                            src="/Services/girlImage.png" // Replace with your image
                            alt="Mike"
                            width={400}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 shadow-sm">
                            <span className="font-semibold text-gray-900">Mike</span>
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Frontend Dev</span>
                        </div>
                    </div>

                    {/* CARD 2 (Quick) */}
                    <div className="bg-lime-100 rounded-2xl shadow-sm p-6 flex flex-col justify-between group">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Quick and adaptable
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Hire within a mere 72 hours. Easily adjust your team size from
                            month to month as required.
                        </p>
                    </div>

                    {/* CARD 3 (Latisha) */}
                    <div className="relative rounded-2xl shadow-md overflow-hidden group">
                        <Image
                            src="/Services/StudentSupport.jpg"// Replace with your image
                            alt="Latisha"
                            width={400}
                            height={400}
                            className="object-cover w-full h-64 sm:h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 shadow-sm">
                            <span className="font-semibold text-gray-900">Latisha</span>
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Mobile Dev</span>
                        </div>
                    </div>

                    {/* CARD 4 (Remote) */}
                    <div className="bg-purple-100 rounded-2xl shadow-sm p-6 flex flex-col justify-between group lg:col-span-2">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Remote Talent Pool
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Pre-vetted remote developers, designers, and product managers with
                            world-class technical and communication skills.
                        </p>
                    </div>

                    {/* CARD 5 (Asger) */}
                    <div className="relative rounded-2xl shadow-md overflow-hidden group lg:row-span-2">
                        <Image
                            src="/whyChoose/person.png" // Replace with your image
                            alt="Asger"
                            width={400}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 shadow-sm">
                            <span className="font-semibold text-gray-900">Asger</span>
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">UI/UX Designer</span>
                        </div>
                    </div>

                    {/* CARD 6 (Rest) */}
                    <div className="bg-orange-100 rounded-2xl shadow-sm p-6 flex flex-col justify-between group">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Rest assured
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Rest assured, there are no crazy fees or legal hassle to worry
                            about.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BuildDreamTeam;