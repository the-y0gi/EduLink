// import About from "@/components/homepage/About";
import AnotherHero from "@/components/homepage/AnotherHero";
import Cta from "@/components/homepage/Cta";
import Hero from "@/components/homepage/Hero";
import NewHero from "@/components/homepage/NewHero";
import Services from "@/components/homepage/Services";
import Services3D from "@/components/homepage/Services3d";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUS from "@/components/homepage/WhyChooseUS";
import WhyChooseUsFolders from "@/components/homepage/WhyChooseUsFolders";
import Folder from "@/components/ui/Folder";

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
      <WhyChooseUS />
      <WhyChooseUsFolders />

      <Testimonials />
      <Cta />
    </main>
  );
};

export default Home;
