import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/herobg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </section>
  );
};

export default Hero;
