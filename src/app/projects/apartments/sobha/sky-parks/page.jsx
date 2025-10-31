import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import CityProximity from "@/components/projects/CityProximity";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import ProjectsFooter from "@/components/projects/ProjectsFooter";
import VisualSymphony from "@/components/projects/VisualSymphony";

export default function ProjectPage() {
  return (
    <main>
      <ProjectHero />
      <ProjectIntro />
      <VisualSymphony />
      <FloorPlanShowcase />
      <AmenitiesShowcase />
      <CityProximity />
      <MiniCallbackForm />
      <ProjectsFooter />
    </main>
  );
}
