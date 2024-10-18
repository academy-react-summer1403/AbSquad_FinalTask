import http from "../../Interceptor";
export const GetCourseComments = async (params = "") => {
  try {
    const res = await http.get("/Course/GetCourseCommnets/" + params);
    return res;
  } catch (error) {}
};
