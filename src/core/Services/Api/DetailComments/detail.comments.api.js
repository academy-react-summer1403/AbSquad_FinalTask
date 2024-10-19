import http from "../../Interceptor";
export const GetNewsComments = async (params = "") => {
  try {
    const res = await http.get("/News/GetNewsComments?NewsId=" + params);
    return res;
  } catch (error) {}
};
