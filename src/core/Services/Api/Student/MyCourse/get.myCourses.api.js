import http from "../../../Interceptor";
export const GetMyCourse = async (data = "") => {
  try {
    const res = await http.get("/SharePanel/GetMyCourses", { params: data });
    return res;
  } catch (error) {
    console.log(error);
  }
};
