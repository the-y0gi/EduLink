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

  // Option 1: Single folder with 3 cards
  const singleFolderItems = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Educators",
      description:
        "Qualified teachers with years of experience in their respective fields",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Quality Content",
      description:
        "Carefully curated learning materials and resources for optimal learning",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of student success and academic excellence",
    },
  ];

  // Option 2: Two folders approach
  const folderSets = [
    [
      {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Expert Educators",
        description: "Qualified teachers with years of experience",
      },
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: "Quality Content",
        description: "Carefully curated learning materials",
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: "Proven Results",
        description: "Track record of student success",
      },
    ],
    [
      {
        icon: <Users className="w-8 h-8" />,
        title: "Small Classes",
        description: "Personalized attention for every student",
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Goal Oriented",
        description: "Focused approach to achieve objectives",
      },
      {
        icon: <HeartHandshake className="w-8 h-8" />,
        title: "Supportive Community",
        description: "Caring environment for growth",
      },
    ],
  ];

  const colors = ["#5227FF", "#FF6B35"];

  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-gray-50 to-white overflow-hidden min-h-[1200px]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">EduLink</span>?
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
