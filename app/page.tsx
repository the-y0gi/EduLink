import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import WhyChooseUS from "@/components/homepage/WhyChooseUS";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUS />
      <About />
    </main>
  );
};

export default Home;
