import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import WhyChooseUs from "@/components/WhyChooseUs";
import Coverage from "@/components/Coverage";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Legal from "@/components/Legal";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Plans />
      <WhyChooseUs />
      <Coverage />
      <About />
      <Contact />
    </main>
    <Footer />
    <Legal />
  </>
);

export default Index;
