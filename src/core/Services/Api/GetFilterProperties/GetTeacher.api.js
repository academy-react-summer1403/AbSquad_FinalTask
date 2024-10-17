import http from "../../Interceptor";
export const GetTeacher = async () => {
  try {
    const res = await http.get("/Home/GetTeachers");
    return res;
  } catch (error) {
    console.log(error);
  }
};
