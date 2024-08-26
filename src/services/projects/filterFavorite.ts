import { ProjectItemType } from "@/data/Projects";

export type FavoritedProjectsType = ProjectItemType & {
  favorite: boolean;
};

const filterFavorite = (
  products: ProjectItemType[],
  favProducts: string[]
): FavoritedProjectsType[] => {
  return products.map((product) => {
    return {
      ...product,
      favorite: favProducts.includes(product.slug),
    };
  });
};

export default filterFavorite;
