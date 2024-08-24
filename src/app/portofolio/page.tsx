import ContactSection from "@/components/section/ContactSection";
import AboutMeSection from "@/components/section/AboutMeSection";
import SocialMediaSection from "@/components/section/SocialMediaSection";
import ProjectSection from "@/components/section/ProjectSection";
import ProgrammingLanguageSection from "@/components/section/ProgrammingLanguageSection";
import PreviewProjectsSection from "@/components/section/PreviewProjectsSection";

const Portofolio = () => {
  return (
    <>
      <div className="flex flex-col justify-between md:px-24  gap-10 w-full my-12">
        {/* About Me */}
        <AboutMeSection />

        {/* SOCIAL MEDIA */}

        <SocialMediaSection />

        {/* PREVIEW PROJECTS */}

        <PreviewProjectsSection />

        {/* PROJECT PORTOFOLIO */}

        <ProjectSection />

        {/* PROGRAMMING LANGUAGE */}

        <ProgrammingLanguageSection />

        {/* CONTACT ME */}
        <ContactSection />
      </div>
    </>
  );
};

export default Portofolio;
