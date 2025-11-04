"use client";
import React from "react";
import WhyChooseUsFolder from "../ui/WhyChooseUsFolder";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Target,
  HeartHandshake,
} from "lucide-react";

const WhyChooseUsFolders = () => {
  // Toggle this to switch between layouts: true for single folder, false for two folders
  const useSingleFolder = true;

  // Option 1: Single folder with 6 site-aligned cards (pulled from /lib/index.ts)
  const singleFolderItems = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & Career",
      description:
        "Strategic education and career guidance to help students succeed in Australia",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Visa & Migration",
      description:
        "Complete visa assistance from application to approval with expert guidance",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Settlement & Living",
      description:
        "Comprehensive settlement support to help new arrivals build strong foundations",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Personal & Wellbeing",
      description:
        "Culturally sensitive mental health and wellbeing support for students and migrants",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional & Employment",
      description:
        "Employment guidance, resume help and interview coaching for the Australian job market",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Support",
      description:
        "Ongoing support throughout your study journey — from planning to post-graduation",
    },
  ];

  // Option 2: Two folders approach
  // Option 2: Two-folder layout (split the same site-aligned cards into two sets)
  const folderSets = [
    [
      {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Education & Career",
        description:
          "Strategic planning and career pathways for Australian success",
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Visa & Migration",
        description: "Expert visa assistance and higher approval support",
      },
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: "Settlement & Living",
        description:
          "Settlement help, financial guidance and community integration",
      },
    ],
    [
      {
        icon: <HeartHandshake className="w-8 h-8" />,
        title: "Personal & Wellbeing",
        description:
          "Culturally sensitive mental health and wellbeing services",
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: "Professional & Employment",
        description: "Resume, interview coaching and job search strategies",
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Student Support",
        description: "Ongoing guidance from pre-departure to post-graduation",
      },
    ],
  ];

  const colors = ["#5227FF", "#FF6B35"];

  return (
    <section className="py-32 md:py-40 bg-linear-to-br from-gray-50 to-white overflow-hidden min-h-[1200px]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-momo text-gray-900 mb-6">
            Why Choose <span className="text-primary">EduLink</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for thousands of
            students and parents worldwide. Click on the folders to explore our
            key strengths.
          </p>
        </div>

        {/* Conditional rendering based on useSingleFolder */}
        {useSingleFolder ? (
          // Option 1: Single Large Folder with proper spacing for open cards
          <div className="flex justify-center mb-8 px-8 py-16">
            <div className="flex flex-col items-center">
              <WhyChooseUsFolder
                items={singleFolderItems}
                color="#5227FF"
                size={1.8}
                className="mb-6"
              />
              <div className="text-center">
                <div
                  className="w-4 h-4 rounded-full mx-auto"
                  style={{ backgroundColor: "#5227FF" }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          // Option 2: Two Folders with proper spacing for open cards
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 lg:gap-32 px-8 py-16">
            {folderSets.map((folderItems, index) => (
              <div key={index} className="flex flex-col items-center">
                <WhyChooseUsFolder
                  items={folderItems}
                  color={colors[index]}
                  size={1.5}
                  className="mb-6"
                />
                <div className="text-center">
                  <div
                    className="w-4 h-4 rounded-full mx-auto"
                    style={{ backgroundColor: colors[index] }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-16 md:mt-20">
          <p className="text-sm md:text-base text-gray-500 italic">
            Click on the {useSingleFolder ? "folder" : "folders"} above to
            explore our offerings in detail
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsFolders;
