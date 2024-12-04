import http from "../../Interceptor";
export const GetMyCourseComments = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyCoursesComments");
    return res;
  } catch (error) {}
};
