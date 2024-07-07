import PreviewProjects from "@/data/PreviewProjects";
import { HeroParallax } from "../ui/herro-parallax";

const PreviewProjectsSection = () => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="w-full">
          <HeroParallax products={PreviewProjects} />
        </div>
      </div>
    </>
  );
};

export default PreviewProjectsSection;
