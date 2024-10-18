import http from "../../Interceptor";
export const GetCourseCommentsReply = async (commentId = "", courseId = "") => {
  try {
    const res = await http.get(
      `/Course/GetCourseCommnets/${courseId}/${commentId}`
    );
    return res;
  } catch (error) {}
};
