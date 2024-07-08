"use client";

import CardProject from "@/components/card/CardProject";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { PlaceholdersAndVanishInputSearch } from "@/components/ui/placeholders-and-vanish-input-search";
import PlaceholdersSearch from "@/data/PlaceholdersSearch";
import Projects from "@/data/Projects";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Project = () => {
  const projects = Projects;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );
  const [type, setType] = useState<string>(searchParams.get("type") || "");
  const allTypes = Projects.flatMap((item) => item.types);
  const uniqueTypes = Array.from(new Set(allTypes));

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setType(searchParams.get("type") || "");
    console.log(type);
  }, [searchParams]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearch = () => {
    router.push(`/project?search=${search}&type=${type}`);
  };

  const searchProjectsByKeyword = (keyword: string, type: string): any[] => {
    const filteredProjects = Projects.filter((project) => {
      let keywordMatch = false;
      let typeMatch = false;

      // Cek keyword
      if (project.keywords && Array.isArray(project.keywords)) {
        keywordMatch = project.keywords.some((kw) =>
          kw.toLowerCase().includes(keyword.toLowerCase())
        );
      }

      // Cek type
      if (type.length > 0 && project.types && Array.isArray(project.types)) {
        typeMatch = project.types.some(
          (tp) => tp.toLowerCase() === type.toLowerCase()
        );
      }

      return type.length === 0 ? keywordMatch : keywordMatch && typeMatch;
    });

    return filteredProjects;
  };

  const filteredProjects = searchProjectsByKeyword(search, type);

  console.log(filteredProjects);

  const handleOnChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    router.push(`/project?search=${search}&type=${e.target.value}`);
  };

  return (
    <>
      <div className="flex flex-col justify-between md:px-24 px-6 gap-12 w-full my-12">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
          <h1 className="text-4xl font-bold">Projects / Portofolio</h1>
          <div className="flex flex-col md:flex-col gap-4 items-center md:w-1/3 max-w-2xl w-full">
            <PlaceholdersAndVanishInputSearch
              placeholders={PlaceholdersSearch}
              onChange={handleChangeSearch}
              onSubmit={onSubmitSearch}
              className="flex w-full"
            />
            <select
              className="w-full relative max-w-xl   bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 self-end text-zinc-500 text-sm sm:text-base font-normal  pl-4 sm:pl-12 text-left  truncate"
              onChange={handleOnChangeType}
            >
              <option selected value="" className="">
                Select Type
              </option>
              {uniqueTypes.map((type) => (
                <option key={type} value={type} className="">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        {search.length > 0 && filteredProjects.length > 0 && type === "" ? (
          <h1 className="relative text-l font-normal -my-2">
            Showing all results with keyword &quot;{search}&quot;
          </h1>
        ) : search.length === 0 &&
          filteredProjects.length > 0 &&
          type === "" ? (
          <h1 className=" text-l font-normal -my-2">Showing all projects</h1>
        ) : filteredProjects.length === 0 &&
          type === "" &&
          search.length > 0 ? (
          <h1 className="text-l font-normal -my-2">
            Sorry, there&apos;s no results with keyword &quot;{search}&quot; :(
          </h1>
        ) : filteredProjects.length === 0 &&
          type !== "" &&
          search.length > 0 ? (
          <h1 className="text-l font-normal -my-2">
            Sorry, there&apos;s no results for &quot;{type}&quot; with keyword
            &quot;{search}&quot; :(
          </h1>
        ) : filteredProjects.length === 0 &&
          type !== "" &&
          search.length === 0 ? (
          <h1 className="text-l font-normal -my-2">
            Sorry, there&apos;s no results for &quot;{type}&quot; :(
          </h1>
        ) : search.length === 0 &&
          filteredProjects.length > 0 &&
          type !== "" ? (
          <h1 className="relative text-l font-normal -my-2">
            Showing all results for &quot;{type}&quot;
          </h1>
        ) : search.length > 0 && filteredProjects.length > 0 && type !== "" ? (
          <h1 className="relative text-l font-normal -my-2">
            Showing all results for &quot;{type}&quot; with keyword &quot;
            {search}&quot;
          </h1>
        ) : null}

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

const ProjectWithSuspense = () => (
  <Suspense fallback={<LoadingSkeleton />}>
    <Project />
  </Suspense>
);

export default ProjectWithSuspense;
