import http from "../../Interceptor";
export const GetCourseDetail = async (params = "") => {
  try {
    console.log("mamad");
    const res = await http.get("/Home/GetCourseDetails?" + params);
    return res;
  } catch (error) {}
};
