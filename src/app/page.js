import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsList from "../components/ProjectsList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroVideo from "@/components/HeroVideo";
import OffPlan from "@/components/OffPlan";
import DubaiOpportunity from "@/components/DubaiOpportunity";
import DubaiDemand from "@/components/DubaiDemand";
import SuccessStories from "@/components/SuccessStories";
import RentalReturns from "@/components/RentalReturns";
import MiniCallbackForm from "@/components/MiniCallbackForm";
import AboutMohamadKodmane from "@/components/AboutMohamadKodmane";
import FreeServices from "@/components/FreeServices";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <OffPlan />
      <DubaiOpportunity />
      <DubaiDemand />
      <SuccessStories />
      <RentalReturns />
      <MiniCallbackForm />
      <AboutMohamadKodmane />
      <FreeServices />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <ProjectsList /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
