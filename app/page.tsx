// import About from "@/components/homepage/About";
import AnotherHero from "@/components/homepage/AnotherHero";
import Cta from "@/components/homepage/Cta";
import Hero from "@/components/homepage/Hero";
import NewHero from "@/components/homepage/NewHero";
import Services3D from "@/components/homepage/Services3d";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUS from "@/components/homepage/WhyChooseUS";
import WhyChooseUsFolders from "@/components/homepage/WhyChooseUsFolders";
import ServicesPhone from "@/components/ServicesPhone";
import Folder from "@/components/ui/Folder";
import BuildDreamTeam from "@/components/WhyChoose2";
import WhyChoose2 from "@/components/WhyChoose2";

// import WhyChooseUS from "@/components/homepage/WhyChooseUS";

const Home = () => {
  return (
    <main>
      {/* <NewHero /> */}
      <AnotherHero />
      {/* <Hero /> */}
      {/* <About /> */}
      <ServicesPhone/>
      
      {/* <Services3D /> */}
      {/* <Services /> */}
      {/* <WhyChooseUS /> */}
      {/* <WhyChoose2/> */}
      <BuildDreamTeam/>
      {/* <WhyChooseUsFolders /> */}

      <Testimonials />
      {/* <Cta /> */}
    </main>
  );
};

export default Home;
