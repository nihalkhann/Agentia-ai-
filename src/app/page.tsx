import FeaturesSection from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CapabilitiesSection from "@/components/capabilities";
import Solution from "@/components/Solution";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
      <Hero />
      <FeaturesSection />
      <CapabilitiesSection/>
      <Solution/>
      <Pricing/>
      <Contact/>
      <Footer/>
      
</>
  );
}
