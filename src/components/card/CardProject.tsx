"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ProjectItemType } from "@/data/Projects";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = ProjectItemType & {
  className?: string
}

const CardProject = ({    
    name,
    heading,
    date,
    slug,
    images = [],    
    className
  }: Props) => {
    const [image, setImage] = useState<string>(images[0]);
    return (
      <>
        <Link href={`/project/${slug}`} className={className}>
          <CardContainer className="w-full" >
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold  text-white"
              >
                {name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
              >
                {heading}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={image}
                  height={800}
                  width={600}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={name} 
                  onError={() => setImage("/images/placeholder.webp")}                 
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  {formatDate(date)}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl  bg-white text-black text-xs font-bold"
                >
                  Show Detail
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </Link>
      </>
    );
  };
  
  export default CardProject;