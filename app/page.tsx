import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <main className="bg-blue-100">
      <Hero />
      <Services theme="soft-blue" />
      <WhyChooseUs theme="soft-blue" />
    </main>
  );
};

export default Home;
