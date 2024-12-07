import http from "../../Interceptor";
export const AddNewsComments = async (data = "") => {
  try {
    const res = await http.post("/News/CreateNewsComment", data);
    return res;
  } catch (error) {}
};
