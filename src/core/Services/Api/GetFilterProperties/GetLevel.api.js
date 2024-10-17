import http from "../../Interceptor";
export const GetLevel = async () => {
  try {
    const res = await http.get("/CourseLevel/GetAllCourseLevel");
    return res;
  } catch (error) {
    console.log(error);
  }
};
