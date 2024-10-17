import http from "../../Interceptor";
export const getTeacherDetail = async (teacherId) => {
  try {
    const res = await http.get(
      "/Home/GetTeacherDetails?TeacherId=" + teacherId
    );
    return res;
  } catch (error) {}
};
