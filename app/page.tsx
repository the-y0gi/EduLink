import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MagicBento from "@/components/ui/MagicBento";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <main className="bg-blue-100">
      <Hero />
      <Services />
      {/* <WhyChooseUs theme="soft-blue" /> */}
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
    </main>
  );
};

export default Home;
