import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import WhyChooseUS from "@/components/homepage/WhyChooseUS";

const Home = () => {
  return (
    <main className="bg-secondary/10">
      <Hero />
      <Services />
      <WhyChooseUS />
      <About />
    </main>
  );
};

export default Home;
