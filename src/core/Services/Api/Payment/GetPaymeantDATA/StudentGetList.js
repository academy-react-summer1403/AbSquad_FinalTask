import http from "../../../Interceptor";
export const GetStudentPayList = async () => {
  try {
    const res = await http.get("/CoursePayment/StudentUserPayList");
    return res;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};
