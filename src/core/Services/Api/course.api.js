import http from "../Interceptor";
export const GetPopularCourse = async () => {
  try {
    const res = await http.get("/Home/GetCoursesTop");
    return res;
  } catch (error) {
    console.log(error);
  }
};
