import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsList from "../components/ProjectsList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroVideo from "@/components/HeroVideo";
import OffPlan from "@/components/OffPlan";
import DubaiOpportunity from "@/components/DubaiOpportunity";
import DubaiDemand from "@/components/DubaiDemand";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <OffPlan />
      <DubaiOpportunity />
      <DubaiDemand />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <ProjectsList /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
