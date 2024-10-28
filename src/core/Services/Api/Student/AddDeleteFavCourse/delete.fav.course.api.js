import http from "../../../Interceptor";
export const DeleteFavCourse = async (params = "") => {
  try {
    const res = await http.delete("/Course/DeleteCourseFavorite", params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
