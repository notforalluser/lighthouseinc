import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Capabilities from "../components/Capabilities";
import About from "../components/About";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import EmployerSolutions from "../components/EmployerSolutions";
import MissionVision from "../components/MissionVision";
import CTA from "../components/CTA";
import SectionHeading from "../components/SectionHeading";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <MissionVision />
      <Capabilities />
      <About />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <EmployerSolutions />
      <CTA />
      <SectionHeading />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;