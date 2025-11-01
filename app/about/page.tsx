"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Handshake, Star, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);

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

      // Mission Section Animation
      gsap.fromTo(
        ".mission-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Values Grid Animation
      gsap.fromTo(
        ".value-item",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Why Choose Us Animation
      gsap.fromTo(
        ".why-item",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats Counter Animation
      gsap.fromTo(
        ".stat-number",
        { textContent: 0 },
        {
          textContent: (_i: number, target: Element) =>
            target.getAttribute("data-value"),
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Team Section Animation
      gsap.fromTo(
        ".team-member",
        { opacity: 0, y: 50, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            end: "bottom 20%",
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
            className="absolute inset-0 w-full h-full object-cover"
            src="/video/about.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* subtle overlay to match previous design */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/60 opacity-60 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-momo mb-6">
            About <span className="text-primary">EduLink</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-semibold leading-relaxed">
            Connecting Dreams to Opportunities
          </p>
          <p className="hero-subtitle text-lg md:text-xl mt-4 opacity-90">
            Empowering onshore students to achieve their Australian goals
            without wasting time, money, or opportunities
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="mission-card">
              <h2 className="text-5xl font-momo text-secondary mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                At EduLink, our vision is to provide onshore students with the
                right advice to help them achieve their goals in Australia
                without wasting time, money, or opportunities. Whether
                you&apos;re aiming to work in your chosen field, obtain
                permanent residency, bring your family to Australia, or
                successfully start a new career - we provide the strategic
                guidance you need.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                You&apos;re already in Australia - now let&apos;s ensure you
                make the most of every opportunity. We specialize in helping
                onshore students navigate the complexities of Australian systems
                efficiently and effectively.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-foreground/70">
                    Strategic Australian pathway planning
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  <span className="text-foreground/70">
                    Comprehensive support for offshore and onshore students
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-foreground/70">
                    Efficient goal achievement without costly mistakes
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Mission video (replaced placeholder) */}
              <div className="aspect-video rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src="/herobg.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        ref={valuesRef}
        className="py-24 bg-gradient-to-b from-background to-primary/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="value-item bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Excellence
              </h3>
              <p className="text-foreground/70">
                Delivering the highest quality guidance and support in every
                interaction.
              </p>
            </div>

            <div className="value-item bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Handshake className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Trust</h3>
              <p className="text-foreground/70">
                Building lasting relationships through transparency and
                reliability.
              </p>
            </div>

            <div className="value-item bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Star className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Innovation
              </h3>
              <p className="text-foreground/70">
                Embracing new approaches to enhance the student experience.
              </p>
            </div>

            <div className="value-item bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Care</h3>
              <p className="text-foreground/70">
                Putting student wellbeing and success at the heart of everything
                we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section ref={whyChooseRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            Why Choose EduLink?
          </h2>

          <div className="space-y-12">
            <div className="why-item grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Comprehensive Visa Guidance
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  From student to post-study and skilled migration visas, our
                  experienced consultants ensure a smooth, compliant, and
                  stress-free application process.
                </p>
              </div>
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/30 rounded-xl flex items-center justify-center">
                <span className="text-secondary/60">
                  Visa Process Illustration
                </span>
              </div>
            </div>

            <div className="why-item grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 rounded-xl flex items-center justify-center">
                <span className="text-secondary/60">Study Pathway Diagram</span>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Study Pathway Expertise
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We help you choose the right course, university, and country
                  that align with your career goals — ensuring your education
                  investment leads to real success.
                </p>
              </div>
            </div>

            <div className="why-item grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Career and Work Support
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  EduLink assists with employment advice, internship
                  connections, and post-study work opportunities to help you
                  gain valuable global experience.
                </p>
              </div>
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/30 rounded-xl flex items-center justify-center">
                <span className="text-secondary/60">Career Support Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Statistics */}
      <section
        ref={statsRef}
        className="py-24 bg-gradient-to-r from-secondary to-primary"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-momo text-white mb-16">
            Our Student Success Impact
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-white">
              <div
                className="stat-number text-5xl font-bold mb-4"
                data-value="5000"
              >
                0
              </div>
              <p className="text-xl opacity-90">Students Guided</p>
            </div>
            <div className="text-white">
              <div
                className="stat-number text-5xl font-bold mb-4"
                data-value="95"
              >
                0
              </div>
              <p className="text-xl opacity-90">% Goal Achievement Rate</p>
            </div>
            <div className="text-white">
              <div
                className="stat-number text-5xl font-bold mb-4"
                data-value="200"
              >
                0
              </div>
              <p className="text-xl opacity-90">Australian Employer Partners</p>
            </div>
            <div className="text-white">
              <div
                className="stat-number text-5xl font-bold mb-4"
                data-value="15"
              >
                0
              </div>
              <p className="text-xl opacity-90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-momo text-center text-secondary mb-16">
            Meet Our Expert Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="team-member text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/30 to-secondary/40 rounded-full mb-6 flex items-center justify-center">
                <span className="text-secondary/60">Team Photo</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                Expert Consultants
              </h3>
              <p className="text-foreground/70">
                Experienced migration agents and education specialists
              </p>
            </div>

            <div className="team-member text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-secondary/30 to-primary/40 rounded-full mb-6 flex items-center justify-center">
                <span className="text-secondary/60">Team Photo</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                Student Support
              </h3>
              <p className="text-foreground/70">
                Dedicated support staff for every step of your journey
              </p>
            </div>

            <div className="team-member text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/30 to-secondary/40 rounded-full mb-6 flex items-center justify-center">
                <span className="text-secondary/60">Team Photo</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                Career Advisors
              </h3>
              <p className="text-foreground/70">
                Professional career guidance and industry connections
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
