"use client";

import CardProject from "@/components/card/CardProject";
import ResultText from "@/components/ResultText";
import { PlaceholdersAndVanishInputSearch } from "@/components/ui/placeholders-and-vanish-input-search";
import { TracingBeam } from "@/components/ui/tracing-beam";
import PlaceholdersSearch from "@/data/PlaceholdersSearch";
import Projects, { ProjectItemType } from "@/data/Projects";
import filterFavorite, {
  FavoritedProjectsType,
} from "@/services/projects/filterFavorite";
import getItemFavorite from "@/services/projects/getItemFavorite";
import { uniqueTypes } from "@/services/projects/getUniqueType";
import searchProjectsByKeyword from "@/services/projects/searchProjectByKeyword";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface QueryParams {
  search: string;
  type: string;
  order: string;
}

const ProjectPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [queryParams, setQueryParams] = useState<QueryParams>({
    search: searchParams.get("search") || "",
    type: searchParams.get("type") || "",
    order: searchParams.get("order") || "",
  });

  const [favSlug, setFavSlug] = useState<string[]>([]);
  const [favProjects, setFavProjects] = useState<FavoritedProjectsType[]>([]);

  useEffect(() => {
    // console.log(JSON.stringify(filteredProjects));
    const favoriteItems = getItemFavorite();
    setFavSlug(favoriteItems);
    filterFavorite(Projects, favSlug);
    setFavProjects(filterFavorite(Projects, favSlug));
  }, [favSlug]);

  useEffect(() => {
    setQueryParams({
      search: searchParams.get("search") || "",
      type: searchParams.get("type") || "",
      order: searchParams.get("order") || "",
    });
  }, [searchParams]);

  const filteredProjects = searchProjectsByKeyword(
    queryParams.search,
    queryParams.type,
    queryParams.order,
    favProjects
  );

  type ChangeFor = "search" | "type" | "order";
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    changeFor: ChangeFor
  ) => {
    const goToUrl = ({ search, type, order }: QueryParams) => {
      router.push(`/project?search=${search}&type=${type}&order=${order}`);
    };

    if (changeFor === "search") {
      setQueryParams({
        ...queryParams,
        search: e.target.value,
      });
      goToUrl({ ...queryParams, search: e.target.value });
    } else if (changeFor === "type") {
      setQueryParams({
        ...queryParams,
        type: e.target.value,
      });
      goToUrl({ ...queryParams, type: e.target.value });
    } else if (changeFor === "order") {
      setQueryParams({
        ...queryParams,
        order: e.target.value,
      });
      goToUrl({ ...queryParams, order: e.target.value });
    }
  };

  return (
    <TracingBeam>
      <div className="flex flex-col justify-between md:px-24 gap-12 w-full my-12">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
          <h1 className="text-4xl font-bold">Projects / Portofolio</h1>
          <div className="flex flex-col md:flex-col gap-4 items-center md:w-1/3 max-w-2xl w-full">
            <PlaceholdersAndVanishInputSearch
              placeholders={PlaceholdersSearch}
              onChange={(e) => {
                handleChange(e, "search");
              }}
              className="flex w-full"
            />
            <select
              value={queryParams.type}
              className={`custom-select w-full relative max-w-xl  bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 self-end text-sm sm:text-base font-normal  pl-4 sm:pl-12 text-left truncate ${
                queryParams.type === "" ? "text-zinc-500" : " text-white"
              }`}
              onChange={(e) => {
                handleChange(e, "type");
              }}
            >
              <option value="" className="">
                Select Type
              </option>
              {uniqueTypes.map((type) => (
                <option key={type} value={type} className="">
                  {type}
                </option>
              ))}
            </select>
            <div className="flex flex-row gap-2 z-50 self-end items-center">
              <label>Latest</label>
              <input
                type="radio"
                value={"latest"}
                checked={queryParams.order === "latest"}
                onChange={(e) => {
                  handleChange(e, "order");
                }}
                className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600"
              />
              <label>Oldest</label>
              <input
                type="radio"
                value={"oldest"}
                checked={queryParams.order === "oldest"}
                onChange={(e) => {
                  handleChange(e, "order");
                }}
                className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600"
              />
              <label>Relevant</label>
              <input
                type="radio"
                value={""}
                checked={
                  queryParams.order === "latest"
                    ? false
                    : queryParams.order === "oldest"
                    ? false
                    : true
                }
                onChange={(e) => {
                  handleChange(e, "order");
                }}
                className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600"
              />
            </div>
          </div>
        </div>
        <ResultText
          type={queryParams.type}
          data={filteredProjects}
          search={queryParams.search}
        />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 lg:gap-6 justify-between mb-6">
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
  );
};

export default ProjectPage;
