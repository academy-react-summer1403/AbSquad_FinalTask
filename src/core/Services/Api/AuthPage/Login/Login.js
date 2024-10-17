import http from "../../../Interceptor";
export const PostLoginAPI = async (user) => {
  try {
    const res = await http.post("/Sign/Login", user);
    return res;
  } catch (error) {
    console.log(error);
  }
};
