"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ProjectItemType } from "@/data/Projects";
import addToFavorite from "@/services/projects/addToFavorite";
import removeFromFavorite from "@/services/projects/removeFromFavorite";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = ProjectItemType & {
  favorite?: boolean;
  className?: string;  
};

const CardProject = ({
  name,
  heading,
  date,
  slug,
  images = [],
  favorite,  
  className,
}: Props) => {
  const [image, setImage] = useState<string>(images[0]);
  return (
    <>
      <CardContainer className={className}>
        <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
          <div className="flex justify-between items-center">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white max-w-[90%] line-clamp-1"
            >
              {name}
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white w-[5%] cursor-pointer hover:text-cyan-500"
            >              
              {favorite ? (
                <HiStar
                  onClick={() => {
                    removeFromFavorite(slug);                    
                  }}
                />
              ) : (
                <HiOutlineStar
                  onClick={() => {
                    addToFavorite(slug);                    
                  }}
                />
              )}              
            </CardItem>
          </div>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300 line-clamp-1"
          >
            {heading}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={images[0]}
              height={800}
              width={600}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={name}
              // onError={() => setImage("/images/placeholder.webp")}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              {formatDate(date)}
            </CardItem>
            <Link href={`/project/${slug}`} prefetch={false}>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl  bg-white text-black text-xs font-bold"
              >
                Show Detail
              </CardItem>
            </Link>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default CardProject;
