import http from "../../Interceptor";
export const DisLikeCourse = async (params = "") => {
  try {
    const res = await http.post("/Course/AddCourseDissLike?CourseId=" + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
