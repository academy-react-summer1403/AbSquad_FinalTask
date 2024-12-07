import http from "../../../Interceptor";
export const CreateJobHistory = async (SendData = "") => {
  try {
    const res = await http.post("/SharePanel/CreateJobHistory", SendData);
    return res;
  } catch (error) {}
};
