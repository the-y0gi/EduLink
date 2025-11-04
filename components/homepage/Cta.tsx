import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-full mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-linear-to-br from-secondary via-secondary/95 to-secondary/90 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/50 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, #4ecdc4 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Ready to Transform Your Future?
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-momo text-white mb-6 leading-tight">
                Start Your <span className="text-primary">Journey</span> Today
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let us help you turn your dreams of studying abroad into
                reality. Get personalized guidance from our expert team and take
                the first step towards your future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+61403158014"
                  className="group bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-secondary font-semibold px-10 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-20 h-20 border border-primary/30 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border border-primary/50 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border border-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
