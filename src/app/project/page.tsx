"use client";

import CardProject from "@/components/card/CardProject";
import { PlaceholdersAndVanishInputSearch } from "@/components/ui/placeholders-and-vanish-input-search";
import { TracingBeam } from "@/components/ui/tracing-beam";
import PlaceholdersSearch from "@/data/PlaceholdersSearch";
import Projects, { ProjectItemType } from "@/data/Projects";
import filterFavorite, {
  FavoritedProjectsType,
} from "@/services/projects/filterFavorite";
import getItemFavorite from "@/services/projects/getItemFavorite";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

const ProjectPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );
  const [order, setOrder] = useState<string>(searchParams.get("order") || "");
  const [type, setType] = useState<string>(searchParams.get("type") || "");
  const allTypes = Projects.flatMap((item) => item.types);
  const uniqueTypes = Array.from(new Set(allTypes));
  const [favSlug, setFavSlug] = useState<string[]>([]);
  const [favProjects, setFavProjects] = useState<FavoritedProjectsType[]>([]);

  useEffect(() => {
    const favoriteItems = getItemFavorite();
    setFavSlug(favoriteItems);
    filterFavorite(Projects, favSlug);
    setFavProjects(filterFavorite(Projects, favSlug));
  }, [favSlug]);

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setType(searchParams.get("type") || "");
    setOrder(searchParams.get("order") || "");
  }, [searchParams]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearch = () => {
    router.push(`/project?search=${search}&type=${type}&order=${order}`);
  };

  const searchProjectsByKeyword = (
    keyword: string,
    type: string,
    orderBy: string
  ): FavoritedProjectsType[] => {
    const filteredProjects = favProjects.filter((project) => {
      let keywordMatch = false;
      let typeMatch = false;

      if (project.keywords && Array.isArray(project.keywords)) {
        keywordMatch = project.keywords.some((kw) =>
          kw.toLowerCase().includes(keyword.toLowerCase())
        );
      }

      if (type.length > 0 && project.types && Array.isArray(project.types)) {
        typeMatch = project.types.some(
          (tp) => tp.toLowerCase() === type.toLowerCase()
        );
      }

      return type.length === 0 ? keywordMatch : keywordMatch && typeMatch;
    });

    if (orderBy && orderBy !== "") {
      if (orderBy === "latest") {
        return filteredProjects.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }
      if (orderBy === "oldest") {
        return filteredProjects.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      } else {
        return filteredProjects;
      }
    } else {
      return filteredProjects;
    }
  };

  const filteredProjects = searchProjectsByKeyword(search, type, order);

  const handleOnChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    router.push(
      `/project?search=${search}&type=${e.target.value}&order=${order}`
    );
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value);
    router.push(
      `/project?search=${search}&type=${type}&order=${e.target.value}`
    );
  };

  return (
    <>
      <TracingBeam className="px-6">
        <div className="flex flex-col justify-between md:px-24 gap-12 w-full my-12">
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
                value={type}
                className="custom-select w-full relative max-w-xl  bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 self-end text-zinc-500 text-sm sm:text-base font-normal  pl-4 sm:pl-12 text-left truncate"
                onChange={handleOnChangeType}
              >
                <option value="" className="">
                  Select Type
                </option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type} className="">
                    {" " + type}
                  </option>
                ))}
              </select>
              <div className="flex flex-row gap-2 z-50 self-end items-center">
                <label>Latest</label>
                <input
                  type="radio"
                  value={"latest"}
                  checked={order === "latest"}
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600"
                />
                <label>Oldest</label>
                <input
                  type="radio"
                  value={"oldest"}
                  checked={order === "oldest"}
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600"
                />
                <label>Relevant</label>
                <input
                  type="radio"
                  value={""}
                  checked={
                    order === "latest"
                      ? false
                      : order === "oldest"
                      ? false
                      : true
                  }
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600"
                />
              </div>
            </div>
          </div>
          <HandleResultText
            type={type}
            data={filteredProjects}
            search={search}
          />
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 lg:gap-6 justify-between ">
            {filteredProjects
              .sort(
                (a, b) =>
                  (b.favorite === true ? 1 : 0) - (a.favorite === true ? 1 : 0)
              )
              .map((item) => (
                <CardProject
                  key={item.slug}
                  name={item.name}
                  heading={item.heading}
                  date={item.date}
                  images={item.images}
                  slug={item.slug}
                  description={item.description}
                  jobdesc={item.jobdesc}
                  keywords={item.keywords}
                  tools={item.tools}
                  links={item.links}
                  types={item.types}
                  favorite={item.favorite}
                  className="w-full"                  
                />
              ))}
          </div>
        </div>
      </TracingBeam>
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

export default ProjectPage;

const HandleResultText = ({
  search,
  type,
  data,
}: {
  search: string;
  type: string;
  data: ProjectItemType[];
}) => {
  return (
    <>
      {search.length > 0 && data.length > 0 && type === "" ? (
        <h1 className="relative text-l font-normal -my-2">
          Showing all results with keyword &quot;{search}&quot;
        </h1>
      ) : search.length === 0 && data.length > 0 && type === "" ? (
        <h1 className=" text-l font-normal -my-2">Showing all projects</h1>
      ) : data.length === 0 && type === "" && search.length > 0 ? (
        <h1 className="text-l font-normal -my-2">
          Sorry, there&apos;s no results with keyword &quot;{search}&quot; :(
        </h1>
      ) : data.length === 0 && type !== "" && search.length > 0 ? (
        <h1 className="text-l font-normal -my-2">
          Sorry, there&apos;s no results for &quot;{type}&quot; with keyword
          &quot;{search}&quot; :(
        </h1>
      ) : data.length === 0 && type !== "" && search.length === 0 ? (
        <h1 className="text-l font-normal -my-2">
          Sorry, there&apos;s no results for &quot;{type}&quot; :(
        </h1>
      ) : search.length === 0 && data.length > 0 && type !== "" ? (
        <h1 className="relative text-l font-normal -my-2">
          Showing all results for &quot;{type}&quot;
        </h1>
      ) : search.length > 0 && data.length > 0 && type !== "" ? (
        <h1 className="relative text-l font-normal -my-2">
          Showing all results for &quot;{type}&quot; with keyword &quot;
          {search}&quot;
        </h1>
      ) : null}
    </>
  );
};
