import http from "../../Interceptor";
export const GetProfileInfo = async () => {
  try {
    const res = await http.get("/SharePanel/GetProfileInfo");

    return res;
  } catch (error) {}
};
