"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Laptop,
  Hospital,
  Settings,
  BarChart2,
  GraduationCap,
  Coffee,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import COURSES_DATA, {
  CATEGORIES as COURSE_CATEGORIES,
  LEVELS as COURSE_LEVELS,
} from "../../lib/courses";

gsap.registerPlugin(ScrollTrigger);

interface Course {
  code: string;
  title: string;
  category: string;
  level: string;
}

const CoursesPage = () => {
  const heroRef = useRef(null);
  const searchRef = useRef(null);
  const categoriesRef = useRef(null);
  const locationsRef = useRef(null);
  const featuredRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [displayCount, setDisplayCount] = useState(16); // Start with 4 rows of 4 courses

  // Use centralized courses data
  const courses: Course[] = COURSES_DATA;

  // Build UI-friendly lists for filters, include an 'All' option
  const categories = ["All", ...COURSE_CATEGORIES];
  const levels = Array.from(
    new Set([
      "All",
      ...COURSE_LEVELS,
      "Certificate",
      "Diploma",
      "Bachelor",
      "Master",
      "PhD",
    ])
  );

  const cities = [
    {
      name: "Melbourne",
      description: "Australia's Cultural & Academic Capital",
      highlights: [
        "University of Melbourne",
        "Monash University",
        "Strong job market in IT, healthcare, engineering",
      ],
      image: "/locations/Melbourne.jpg",
    },
    {
      name: "Sydney",
      description: "Your Gateway to Global Opportunities",
      highlights: [
        "University of Sydney",
        "UNSW",
        "Largest job market: finance, tech, media",
      ],
      image: "/locations/Sydney.jpg",
    },
    {
      name: "Brisbane",
      description: "Study, Work & Thrive in the Sunshine State",
      highlights: [
        "University of Queensland",
        "QUT",
        "Growing sectors in health, research, education",
      ],
      image: "/locations/Brisbane%20.jpg",
    },
    {
      name: "Adelaide",
      description: "Affordable, Relaxed & Full of Opportunities",
      highlights: [
        "University of Adelaide",
        "Flinders University",
        "Affordable living, wine regions",
      ],
      image: "/locations/Adelaide.jpg",
    },
    {
      name: "Perth",
      description: "Study by the Beach, Work in Emerging Industries",
      highlights: [
        "University of Western Australia",
        "Curtin University",
        "Mining, energy, technology",
      ],
      image: "/locations/Perth.jpg",
    },
    {
      name: "Canberra",
      description: "Study Where Knowledge Meets Opportunity",
      highlights: [
        "Australian National University",
        "University of Canberra",
        "Government opportunities",
      ],
      image: "/locations/Canberra.jpg",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.includes(searchTerm);
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level.includes(selectedLevel);

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Helper function to reset pagination when filters change
  const resetPagination = () => setDisplayCount(16);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      // Search Section Animation
      gsap.fromTo(
        ".search-container",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: searchRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Categories Animation
      gsap.fromTo(
        ".category-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Locations Animation
      // NOTE: avoid changing opacity for location cards and do not reverse the animation
      // when scrolling back — this prevents location content from becoming invisible
      // after user interactions (for example when clicking a category and jumping/scrolling).
      gsap.fromTo(
        ".location-card",
        { x: -50, rotationY: 15 },
        {
          x: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: locationsRef.current,
            start: "top 80%",
            // play once when it enters the viewport; do not reverse/hide on scroll up
            toggleActions: "play none none none",
          },
        }
      );

      // Featured Courses Animation
      gsap.fromTo(
        ".course-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Note: removed parallax container / background animation —
      // hero video is now a static background element so no parallax animation is required.
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="/main.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-linear-to-r from-secondary/80 to-primary/60 opacity-60 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-momo mb-6">
            Explore <span className="text-primary">Courses</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-semibold leading-relaxed mb-4">
            Discover Your Perfect Study Program
          </p>
          <p className="hero-subtitle text-lg md:text-xl opacity-90">
            From English language programs to master&apos;s degrees - find the
            course that matches your career goals
          </p>
        </div>
      </section>

      {/* Modern Search and Filter Section */}
      <section ref={searchRef} className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Find Your Perfect Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through {courses.length}+ courses across multiple
              categories and find the one that matches your career goals
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses by name, code, or keyword..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  resetPagination();
                }}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">
                Category:
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  resetPagination();
                }}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-white text-sm font-medium"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => {
                  setSelectedLevel(e.target.value);
                  resetPagination();
                }}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-white text-sm font-medium"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {(selectedCategory !== "All" ||
              selectedLevel !== "All" ||
              searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSearchTerm("");
                  resetPagination();
                }}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Results Summary */}
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              Showing{" "}
              <span className="font-bold text-secondary">
                {filteredCourses.length}
              </span>{" "}
              of {courses.length} courses
            </p>
          </div>
        </div>
      </section>

      {/* Category Quick Access (Optional - only show if no filters applied) */}
      {selectedCategory === "All" && selectedLevel === "All" && !searchTerm && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Browse by Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.slice(1).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    resetPagination();
                  }}
                  className="category-pill bg-gray-50 hover:bg-primary/10 border border-gray-200 hover:border-primary/30 rounded-xl p-4 text-center transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                    {category === "ICT" ? (
                      <Laptop className="text-primary" size={18} />
                    ) : category === "Healthcare" ||
                      category.includes("Health") ? (
                      <Hospital className="text-primary" size={18} />
                    ) : category === "Engineering" ||
                      category.includes("Engineer") ? (
                      <Settings className="text-primary" size={18} />
                    ) : category === "Business & Finance" ||
                      category === "Management" ? (
                      <BarChart2 className="text-primary" size={18} />
                    ) : category === "Education" ? (
                      <GraduationCap className="text-primary" size={18} />
                    ) : (
                      <Coffee className="text-primary" size={18} />
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {courses.filter((c) => c.category === category).length}{" "}
                    courses
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Courses Grid */}
      <section ref={featuredRef} className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredCourses.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  {selectedCategory === "All" &&
                  selectedLevel === "All" &&
                  !searchTerm
                    ? "All Courses"
                    : "Search Results"}
                </h2>
                {(selectedCategory !== "All" ||
                  selectedLevel !== "All" ||
                  searchTerm) && (
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== "All" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                        Category: {selectedCategory}
                      </span>
                    )}
                    {selectedLevel !== "All" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary">
                        Level: {selectedLevel}
                      </span>
                    )}
                    {searchTerm && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
                        Search: &quot;{searchTerm}&quot;
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.slice(0, displayCount).map((course) => (
                  <div
                    key={course.code}
                    className="course-item bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-medium">
                        {course.code}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {course.level}
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 text-lg leading-tight">
                      {course.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        {course.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCourses.length > displayCount && (
                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-4">
                    Showing {displayCount} of {filteredCourses.length} courses
                  </p>
                  <button
                    onClick={() =>
                      setDisplayCount((prev) =>
                        Math.min(prev + 8, filteredCourses.length)
                      )
                    }
                    className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300"
                  >
                    Load More Courses (
                    {Math.min(8, filteredCourses.length - displayCount)} more)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search criteria or browse all available
                courses.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSearchTerm("");
                  resetPagination();
                }}
                className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all"
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Study Locations */}
      <section ref={locationsRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-8">
            Choose Your Study Destination
          </h2>
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
            Each city offers unique opportunities for study, work, and life
            experience. Choose the destination that fits your goals and
            lifestyle.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div
                key={city.name}
                className="location-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-linear-to-br from-primary/30 to-secondary/40 flex items-center justify-center">
                  <Image
                    src={city.image}
                    alt={city.name + " skyline"}
                    width={400}
                    height={220}
                    className="object-cover w-full h-full"
                    style={{ maxHeight: "220px", width: "100%" }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {city.name}
                  </h3>
                  <p className="text-foreground/70 mb-4">{city.description}</p>

                  <div className="space-y-2">
                    {city.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground/70">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 text-primary font-semibold hover:text-secondary transition-colors group-hover:translate-x-2 transform duration-300">
                    Explore {city.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
