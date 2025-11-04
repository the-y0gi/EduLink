import React from "react";
import MagicBento from "../ui/MagicBento";

const WhyChooseUS = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-momo text-secondary mb-4 tracking-tight`}
          >
            Why Choose <span className="text-primary">Us</span>
          </h2>

          <p
            className={`text-lg md:text-xl text-secondary/70 max-w-4xl mx-auto leading-relaxed`}
          >
            At Edulink, we provide tailored support for every stage of your
            Australian journey.
          </p>
        </div>
        <MagicBento />
      </div>
    </section>
  );
};

export default WhyChooseUS;
