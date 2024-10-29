import http from "../../../Interceptor";
export const DeleteFavArticle = async (deleteId = "") => {
  try {
    const res = await http.delete("/News/DeleteFavoriteNews", deleteId);
    return res;
  } catch (error) {
    console.log(error);
  }
};
