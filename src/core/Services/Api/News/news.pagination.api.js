import http from "../../Interceptor";
export const GetNewsPagination = async (searchParams = "") => {
  try {
    const res = await http.get("/News" + searchParams);
    return res;
  } catch (error) {
    console.log(error);
  }
};
