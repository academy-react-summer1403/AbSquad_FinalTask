import http from "../../Interceptor";
export const GetNewsReplyComments = async (commentId = "") => {
  try {
    const res = await http.get(`/News/GetRepliesComments?Id=${commentId}`);
    return res;
  } catch (error) {}
};
