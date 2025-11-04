// import About from "@/components/homepage/About";
import AnotherHero from "@/components/homepage/AnotherHero";
import Cta from "@/components/homepage/Cta";
import Hero from "@/components/homepage/Hero";
import NewHero from "@/components/homepage/NewHero";
import NewWhyChooseUs from "@/components/homepage/NewWhyChooseUs";
import Services from "@/components/homepage/Services";
import Services3D from "@/components/homepage/Services3d";
import WhyChooseUS from "@/components/homepage/WhyChooseUS";
// import WhyChooseUS from "@/components/homepage/WhyChooseUS";

const Home = () => {
  return (
    <main>
      {/* <NewHero /> */}
      <AnotherHero />
      {/* <Hero /> */}
      {/* <About /> */}
      <Services3D />
      {/* <Services /> */}
      {/* <NewWhyChooseUs /> */}
      <WhyChooseUS />
      <Cta />
    </main>
  );
};

export default Home;
