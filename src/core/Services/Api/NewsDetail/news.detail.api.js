import http from "../../Interceptor";
export const GetNewsDetail = async (params = "") => {
  try {
    const res = await http.get("/News/" + params);
    return res;
  } catch (error) {}
};
