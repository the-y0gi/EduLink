import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MagicBento from "@/components/ui/MagicBento";

const Home = () => {
  return (
    <main className="bg-secondary/10">
      <Hero />
      <Services />
      {/* <WhyChooseUs theme="soft-blue" /> */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 tracking-tight`}
            >
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <h3
              className={`text-2xl md:text-3xl font-semibold text-secondary/80 mb-6`}
            >
              Our Key Advantages
            </h3>
            <p
              className={`text-lg md:text-xl text-secondary/70 max-w-4xl mx-auto leading-relaxed`}
            >
              At Edulink, we don&apos;t just connect students to institutions —
              we connect dreams to opportunities. With years of experience in
              international education and migration support, we provide a
              one-stop solution for students looking to study, work, and settle
              abroad with confidence.
            </p>
          </div>
          <MagicBento />
        </div>
      </section>
      <About />
    </main>
  );
};

export default Home;
