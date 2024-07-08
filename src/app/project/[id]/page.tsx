"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { AnimatedTooltipTool } from "@/components/ui/animated-tooltip-tool";
import Projects from "@/data/Projects";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Suspense, useState } from "react";
import ShowImage from "@/components/detail/ShowImage";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const ProjectID = () => {
  const params = useParams();
  const project = Projects.find(
    (project) => project.id.toString() === params.id
  );

  const [image, setImage] = useState<string>(project?.images[0] || "");
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-between md:px-24 gap-6 w-full my-12">
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-4xl font-bold">
        {project?.name}
      </div>
      <div className="self-center md:self-start text-center font-semibold text-l">
        {project?.heading}
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex flex-col gap-4 w-full md:w-1/2 relative">
          <Image
            src={image}
            alt={project?.name || "Project Image"}
            width={1000}
            height={1000}
            style={{ objectFit: "cover", aspectRatio: "1/1" }}
            onClick={() => setIsShow(true)}
            className="cursor-pointer"
          />
          <div className="flex gap-2 -mt-2 overflow-x-auto">
            {project?.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setImage(image)}
                className="flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={project?.name || "Project Image"}
                  width={100}
                  height={100}
                  className="object-cover aspect-square"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div>{project?.description}</div>
          <div>{project?.jobdesc}</div>
          <div className="text-xl font-semibold">Technology Used:</div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
            {project?.tools && <AnimatedTooltipTool items={project?.tools} />}
          </div>
          <div className="text-xl font-semibold">Links:</div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
            {project?.links && <AnimatedTooltip items={project?.links} />}
          </div>
        </div>
      </div>
      <ShowImage
        isShow={isShow}
        image={image}
        onClose={() => setIsShow(false)}
      />
    </div>
  );
};

const ProjectIDWithSuspense = () => (
  <Suspense fallback={<LoadingSkeleton />}>
    <ProjectID />
  </Suspense>
);

export default ProjectIDWithSuspense;
