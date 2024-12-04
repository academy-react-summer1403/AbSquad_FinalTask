import http from "../../../Interceptor";
export const EditJobAPI = async (SendData = "") => {
  try {
    const res = await http.post("/SharePanel/UpdateJobHistory", SendData);
    return res;
  } catch (error) {}
};
