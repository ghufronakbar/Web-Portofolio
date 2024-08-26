const addToFavorite = async (slug: string) => {
  const favorite = localStorage.getItem("favorite");
  try {
    if (favorite) {
      const favoriteArray = JSON.parse(favorite);
      if (!favoriteArray.includes(slug)) {
        favoriteArray.push(slug);
        localStorage.setItem("favorite", JSON.stringify(favoriteArray));
      }
    } else {
      localStorage.setItem("favorite", JSON.stringify([slug]));
    }
  } catch (error) {
    console.error(error);
  }
};

export default addToFavorite;
