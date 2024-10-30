import http from "../../Interceptor";
export const LikeCourse = async (params = "") => {
  try {
    const res = await http.post("/Course/AddCourseLike?CourseId=" + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
