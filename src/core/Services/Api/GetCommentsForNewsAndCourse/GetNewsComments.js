import http from "../../Interceptor";
export const GetMyNewsComments = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyNewsComments");
    return res;
  } catch (error) {}
};
