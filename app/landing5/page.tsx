import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const Landing5 = () => {
  return (
    <main className="bg-blue-100">
      <Hero />
      <Services theme="soft-blue" />
      <WhyChooseUs theme="soft-blue" />
    </main>
  );
};

export default Landing5;
