"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { AnimatedTooltipTool } from "@/components/ui/animated-tooltip-tool";
import Projects from "@/data/Projects";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import ShowImage from "@/components/detail/ShowImage";
import PlaceHolderImage from "@/data/PlaceholderImage";

const ProjectID = () => {
  const params = useParams();
  const project = Projects.find(
    (project) => project.slug === params.slug
  );

  const [image, setImage] = useState<string>(project?.images[0] || "");
  const [isShow, setIsShow] = useState<boolean>(false);
  if (!project) return notFound();

  return (
    <div className="flex flex-col justify-between lg:px-24 gap-6 w-full my-12 h-fit">
      <h2 className="flex flex-col lg:flex-row items-center gap-6 justify-between text-4xl font-bold">
        {project?.name}
      </h2>
      <h3 className="self-center lg:self-start text-center font-semibold text-l">
        {project?.heading}
      </h3>
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 relative">
          <Image
            src={image}
            alt={project?.name}
            width={1080}
            height={1080}
            style={{ objectFit: "cover", aspectRatio: "1/1" }}
            onClick={() => setIsShow(true)}
            onError={() => setImage(PlaceHolderImage)}
            className="cursor-pointer"
          />
          <div className="flex gap-2 -mt-2 overflow-x-auto hide-scrollbar">
            {project?.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setImage(image)}
                className="flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={project?.name}
                  width={120}
                  height={120}                  
                  className="object-cover aspect-square"                  
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div>{project?.description}</div>
          <div>{project?.jobdesc}</div>
          <div className="text-xl font-semibold">Technology Used:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl">
            {project?.tools && <AnimatedTooltipTool items={project?.tools} />}
          </div>
          <div className="text-xl font-semibold">Links:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl">
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

export default ProjectID;
