"use client";

import CardProject from "@/components/card/CardProject";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { PlaceholdersAndVanishInputSearch } from "@/components/ui/placeholders-and-vanish-input-search";
import PlaceholdersSearch from "@/data/PlaceholdersSearch";
import Projects from "@/data/Projects";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Project = () => {
  const projects = Projects;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );
  const placeholdersSearch = PlaceholdersSearch;

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onSubmitSearch = () => {
    router.push(`/project?search=${search}`);
  };

  const searchProjectsByKeyword = (keyword: string): any[] => {
    // Lakukan filtering berdasarkan kata kunci
    const filteredProjects = Projects.filter((project) => {
      // Periksa apakah properti keywords ada dan bukan undefined
      if (project.keywords && Array.isArray(project.keywords)) {
        // Periksa apakah kata kunci ada di dalam keywords proyek
        return project.keywords.some((kw) =>
          kw.toLowerCase().includes(keyword.toLowerCase())
        );
      }
      return false; // Jika keywords tidak ada atau tidak valid, maka filter akan mengembalikan false
    });

    return filteredProjects;
  };

  const filteredProjects = searchProjectsByKeyword(search);

  return (
    <>
      <div className="flex flex-col justify-between md:px-24 px-6 gap-12 w-full my-12">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
          <h1 className="text-4xl font-bold">Projects / Portofolio</h1>
          <PlaceholdersAndVanishInputSearch
            placeholders={placeholdersSearch}
            onChange={handleChangeSearch}
            onSubmit={onSubmitSearch}
          />
        </div>
        {search.length > 0 && filteredProjects.length > 0 ? (
          <h1 className="relative text-l font-normal -my-2">
            Showing all results with keyword "{search}"
          </h1>
        ) : search.length === 0 && filteredProjects.length > 0 ? (
          <h1 className=" text-l font-normal -my-2">Showing all projects</h1>
        ) : filteredProjects.length === 0? (
            <h1 className="text-l font-normal -my-2">
            Sorry, there's no results with keyword "{search}" :(
          </h1>
        ):null}

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 lg:gap-6 justify-between">
          {filteredProjects.map((project) => (
            <CardProject
              key={project.id}
              id={project.id}
              name={projects.find((p) => p.id === project.id)?.name}
              heading={projects.find((p) => p.id === project.id)?.heading}
              date={projects.find((p) => p.id === project.id)?.date}
              images={projects.find((p) => p.id === project.id)?.images}
              onClick={() => {
                router.push(
                  `/project/${project.id}?name=${
                    projects.find((p) => p.id === project.id)?.name
                  }`
                );
              }}
              className="max-w-full"
            />
          ))}
        </div>       
      </div>
    </>
  );
};

export default Project;
