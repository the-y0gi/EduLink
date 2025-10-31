"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // Sample courses data based on client info
  const courses: Course[] = [
    {
      code: "261313",
      title: "Software Engineer",
      category: "ICT",
      level: "Bachelor/Master",
    },
    {
      code: "253111",
      title: "General Practitioner",
      category: "Healthcare",
      level: "Master/PhD",
    },
    {
      code: "233211",
      title: "Civil Engineer",
      category: "Engineering",
      level: "Bachelor/Master",
    },
    {
      code: "132111",
      title: "Corporate Services Manager",
      category: "Business",
      level: "Master",
    },
    {
      code: "241111",
      title: "Early Childhood Teacher",
      category: "Education",
      level: "Bachelor",
    },
    {
      code: "351311",
      title: "Chef",
      category: "Hospitality",
      level: "Diploma/Certificate",
    },
    {
      code: "224114",
      title: "Data Analyst",
      category: "ICT",
      level: "Bachelor/Master",
    },
    {
      code: "254111",
      title: "Midwife",
      category: "Healthcare",
      level: "Bachelor",
    },
    {
      code: "233111",
      title: "Chemical Engineer",
      category: "Engineering",
      level: "Bachelor/Master",
    },
    {
      code: "225113",
      title: "Marketing Specialist",
      category: "Business",
      level: "Bachelor/Master",
    },
  ];

  const categories = [
    "All",
    "ICT",
    "Healthcare",
    "Engineering",
    "Business",
    "Education",
    "Hospitality",
  ];
  const levels = ["All", "Certificate", "Diploma", "Bachelor", "Master", "PhD"];

  const cities = [
    {
      name: "Melbourne",
      description: "Australia's Cultural & Academic Capital",
      highlights: [
        "University of Melbourne",
        "Monash University",
        "Strong job market in IT, healthcare, engineering",
      ],
      image: "Melbourne skyline placeholder",
    },
    {
      name: "Sydney",
      description: "Your Gateway to Global Opportunities",
      highlights: [
        "University of Sydney",
        "UNSW",
        "Largest job market: finance, tech, media",
      ],
      image: "Sydney skyline placeholder",
    },
    {
      name: "Brisbane",
      description: "Study, Work & Thrive in the Sunshine State",
      highlights: [
        "University of Queensland",
        "QUT",
        "Growing sectors in health, research, education",
      ],
      image: "Brisbane skyline placeholder",
    },
    {
      name: "Adelaide",
      description: "Affordable, Relaxed & Full of Opportunities",
      highlights: [
        "University of Adelaide",
        "Flinders University",
        "Affordable living, wine regions",
      ],
      image: "Adelaide skyline placeholder",
    },
    {
      name: "Perth",
      description: "Study by the Beach, Work in Emerging Industries",
      highlights: [
        "University of Western Australia",
        "Curtin University",
        "Mining, energy, technology",
      ],
      image: "Perth skyline placeholder",
    },
    {
      name: "Canberra",
      description: "Study Where Knowledge Meets Opportunity",
      highlights: [
        "Australian National University",
        "University of Canberra",
        "Government opportunities",
      ],
      image: "Canberra skyline placeholder",
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
      gsap.fromTo(
        ".location-card",
        { opacity: 0, x: -50, rotationY: 15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: locationsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
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

      // Parallax Effect
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
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
        <div className="parallax-container absolute inset-0">
          <div className="parallax-bg absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/30"></div>
          <div className="absolute inset-0 bg-linear-to-r from-secondary/80 to-primary/60">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              src="/herobg.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6">
            Explore <span className="text-primary">Courses</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light leading-relaxed mb-4">
            Discover Your Perfect Study Program
          </p>
          <p className="hero-subtitle text-lg md:text-xl opacity-90">
            From English language programs to master&apos;s degrees - find the
            course that matches your career goals
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/25 rounded-full animate-ping"></div>
      </section>

      {/* Search and Filter Section */}
      <section
        ref={searchRef}
        className="py-24 px-4 bg-linear-to-b from-background to-primary/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="search-container bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Find Your Ideal Course
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-secondary font-semibold mb-2">
                  Search Courses
                </label>
                <input
                  type="text"
                  placeholder="Search by course name or code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-secondary font-semibold mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-secondary font-semibold mb-2">
                  Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <p className="text-foreground/70">
                Found{" "}
                <span className="font-bold text-secondary">
                  {filteredCourses.length}
                </span>{" "}
                courses matching your criteria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section ref={categoriesRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-secondary mb-16">
            Course Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category) => (
              <div
                key={category}
                className="category-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">
                    {category === "ICT"
                      ? "💻"
                      : category === "Healthcare"
                      ? "🏥"
                      : category === "Engineering"
                      ? "⚙️"
                      : category === "Business"
                      ? "📊"
                      : category === "Education"
                      ? "🎓"
                      : "🍽️"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {category}
                </h3>
                <p className="text-foreground/70 mb-4">
                  Explore {category.toLowerCase()} programs designed for
                  industry success
                </p>
                <div className="text-primary font-semibold group-hover:text-secondary transition-colors">
                  View Courses →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section
        ref={featuredRef}
        className="py-24 px-4 bg-linear-to-b from-primary/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-secondary mb-16">
            Popular Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.slice(0, 9).map((course) => (
              <div
                key={course.code}
                className="course-item bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {course.code}
                  </span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-foreground/70 text-sm">
                    {course.level}
                  </span>
                  <button className="text-primary font-semibold hover:text-secondary transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length > 9 && (
            <div className="text-center mt-12">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Study Locations */}
      <section ref={locationsRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-secondary mb-8">
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
                  <span className="text-white font-semibold">{city.image}</span>
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

      {/* Call to Action */}
      <section className="py-24 px-4 bg-linear-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl mb-12 leading-relaxed opacity-90">
            Let our expert counsellors help you choose the perfect course and
            institution that aligns with your career goals and opens doors to
            your Australian future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Course Guidance
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
