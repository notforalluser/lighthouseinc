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
import Contact from "../components/Contact";

function Home() {
  return (
    <>
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
      <Contact />
    </>
  );
}

export default Home;