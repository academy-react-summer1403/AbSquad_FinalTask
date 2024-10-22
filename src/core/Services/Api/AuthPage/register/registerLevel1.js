import http from "../../../Interceptor";
export const PhoneNumberPost = async (PhoneNumber = "") => {
  try {
    const res = await http.post("/Sign/SendVerifyMessage", PhoneNumber);
    return res;
  } catch (error) {}
};
