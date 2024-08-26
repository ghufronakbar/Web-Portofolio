const getItemFavorite = (): string[] => {
  const favorite = localStorage.getItem("favorite");
  try {
    if (favorite) {
      return JSON.parse(favorite);
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    localStorage.setItem("favorite", JSON.stringify([]));
    return [];
  }
};

export default getItemFavorite;
