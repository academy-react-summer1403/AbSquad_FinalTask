import http from "../../../Interceptor";
export const GetAllFavArticle = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyFavoriteNews");
    return res;
  } catch (error) {
    console.log(error);
  }
};
