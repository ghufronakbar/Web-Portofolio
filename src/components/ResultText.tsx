import { ProjectItemType } from "@/data/Projects";

const ResultText = ({
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

export default ResultText;
