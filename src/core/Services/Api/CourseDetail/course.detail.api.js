import http from "../../Interceptor";
export const GetCourseDetail = async (params = "") => {
  try {
    const res = await http.get("/Home/GetCourseDetails?" + params);
    return res;
  } catch (error) {}
};
