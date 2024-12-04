import http from "../../../Interceptor";
export const GetJobHistoryForUser = async () => {
  try {
    const res = await http.get("/SharePanel/GetMyJobHistories");
    return res;
  } catch (error) {}
};
