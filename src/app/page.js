import About from "@/components/shared/About";
import BestSeller from "@/components/shared/BestSeller";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <About />
      <Contact />
      <Footer/>
    </>
  );
}
