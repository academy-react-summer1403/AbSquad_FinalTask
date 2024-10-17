import http from "../../Interceptor";
export const GetType = async () => {
  try {
    const res = await http.get("/Home/GetTechnologies");
    return res;
  } catch (error) {
    console.log(error);
  }
};
