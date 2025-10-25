import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const Landing2 = () => {
  return (
    <main className="bg-black">
      <Hero />
      <Services theme="dark" />
      <WhyChooseUs theme="dark" />
    </main>
  );
};

export default Landing2;
