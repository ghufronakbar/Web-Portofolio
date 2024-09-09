import { FavoritedProjectsType } from "./filterFavorite";

const searchProjectsByKeyword = (
  keyword: string,
  type: string,
  orderBy: string,
  projects: FavoritedProjectsType[]
): FavoritedProjectsType[] => {
  const filteredProjects = projects.filter((project) => {
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

export default searchProjectsByKeyword;
