import http from "../../Interceptor";
export const GetCourseList = async (searchParams = "") => {
  try {
    const res = await http.get("/Home/GetCoursesWithPagination" + searchParams);
    return res;
  } catch (error) {
    console.log(error);
  }
};
