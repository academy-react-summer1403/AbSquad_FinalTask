import http from "../../../Interceptor";
export const PostLoginAPI = async (user = "") => {
  try {
    const res = await http.post("/Sign/SendVerifyMessage", user);
    return res;
  } catch (error) {}
};
