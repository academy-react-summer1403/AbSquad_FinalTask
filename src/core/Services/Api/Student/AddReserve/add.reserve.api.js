import http from "../../../Interceptor";
export const AddReserve = async (params = "") => {
  try {
    const res = await http.post("/CourseReserve/ReserveAdd", params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
