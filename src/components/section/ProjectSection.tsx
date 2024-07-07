import Projects from "@/data/Projects";
import { useRouter } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";
import CardProject from "@/components/card/CardProject";

const ProjectSection = () => {
    const router = useRouter()
    return(
        <>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Portofolio</h2>
            <div className="flex flex-row items-center justify-between">
              <p
                onClick={() => {
                  router.push("/project");
                }}
              >
                See All
              </p>
              <BiChevronRight />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 lg:gap-6 justify-between">
            {Projects.slice(0, 3).map((project, index) => (
              <CardProject
                key={project.id}
                id={project.id}
                name={project.name}
                heading={project.heading}
                date={project.date}
                images={project.images}
                onClick={() => {
                  router.push(`/project/${project.id}?name=${project.name}`);
                }}
                className="max-w-full"
              />
            ))}
          </div>
        </div>
        </>
    )
}

export default ProjectSection