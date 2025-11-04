import About from "@/components/homepage/About";
import Cta from "@/components/homepage/Cta";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
// import WhyChooseUS from "@/components/homepage/WhyChooseUS";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Cta />
      {/* <WhyChooseUS /> */}
    </main>
  );
};

export default Home;
