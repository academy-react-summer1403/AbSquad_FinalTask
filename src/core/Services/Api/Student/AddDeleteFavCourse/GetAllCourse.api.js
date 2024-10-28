// /SharePanel/GetMyFavoriteCourses
import http from "../../../Interceptor";
export const GetAllFavCourse = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyFavoriteCourses");
    return res;
  } catch (error) {
    console.log(error);
  }
};
