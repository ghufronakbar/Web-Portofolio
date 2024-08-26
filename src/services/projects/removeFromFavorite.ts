const removeFromFavorite = async (slug: string) => {
  const favorite = localStorage.getItem("favorite");
  try {
    if (favorite) {
      const favoriteArray = JSON.parse(favorite);
      const index = favoriteArray.indexOf(slug);
      if (index > -1) {
        favoriteArray.splice(index, 1);
        localStorage.setItem("favorite", JSON.stringify(favoriteArray));
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export default removeFromFavorite;
