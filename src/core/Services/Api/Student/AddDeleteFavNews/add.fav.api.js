import http from "../../../Interceptor";
export const AddFavArticle = async (params) => {
  try {
    const res = await http.post("/News/AddFavoriteNews?NewsId=" + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
