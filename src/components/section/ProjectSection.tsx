"use client";

import Projects from "@/data/Projects";
import { BiChevronRight } from "react-icons/bi";
import CardProject from "@/components/card/CardProject";
import Link from "next/link";
import { useEffect, useState } from "react";
import filterFavorite, {
  FavoritedProjectsType,
} from "@/services/projects/filterFavorite";
import getItemFavorite from "@/services/projects/getItemFavorite";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ProjectSection = () => {
  const [keyFav, setKeyFav] = useState<string[]>([]);
  const [favProjects, setFavProjects] = useState<FavoritedProjectsType[]>([]);
  useEffect(() => {
    const favoriteItems = getItemFavorite();
    setKeyFav(favoriteItems);
    const favItems = filterFavorite(Projects, keyFav);
    setFavProjects(favItems);
  }, [keyFav]);

  const showToast = () => {
    toast.info("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0.5,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Portofolio</h2>
          <div className="flex flex-row items-center justify-between">
            <Link prefetch={false} href="/project">
              <span className="relative top-[-1.5px]">See All</span>
            </Link>
            <BiChevronRight />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 lg:gap-6 justify-between">
          {favProjects.slice(0, 3).map((item, index) => (
            <CardProject
              key={index}
              name={item.name}
              heading={item.heading}
              date={item.date}
              images={item.images}
              description={item.description}
              jobdesc={item.jobdesc}
              keywords={item.keywords}
              links={item.links}
              slug={item.slug}
              tools={item.tools}
              types={item.types}
              favorite={item.favorite}              
              className="max-w-full"
            />
          ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default ProjectSection;
