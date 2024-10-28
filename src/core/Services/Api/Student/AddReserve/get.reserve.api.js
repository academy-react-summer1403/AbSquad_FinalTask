import http from "../../../Interceptor";
export const GetReserve = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyCoursesReserve");
    return res;
  } catch (error) {
    console.log(error);
  }
};
