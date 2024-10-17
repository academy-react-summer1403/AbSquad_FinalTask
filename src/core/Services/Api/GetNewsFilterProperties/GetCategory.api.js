import http from "../../Interceptor";
export const GetCategory = async () => {
  try {
    const res = await http.get("/News/GetListNewsCategory");
    return res;
  } catch (error) {
    console.log(error);
  }
};
