import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const Landing4 = () => {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Services theme="soft-gray" />
      <WhyChooseUs theme="soft-gray" />
    </main>
  );
};

export default Landing4;
