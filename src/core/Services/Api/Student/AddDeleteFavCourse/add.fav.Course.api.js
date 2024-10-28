import http from "../../../Interceptor";
export const AddFavCourse = async (params = "") => {
  try {
    const res = await http.post("/Course/AddCourseFavorite", params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
