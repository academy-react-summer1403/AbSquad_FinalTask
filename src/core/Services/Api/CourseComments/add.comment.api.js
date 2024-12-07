import http from "../../Interceptor";
export const AddCourseComments = async (data = "") => {
  try {
    const res = await http.post("/Course/AddCommentCourse", data);
    return res;
  } catch (error) {}
};
