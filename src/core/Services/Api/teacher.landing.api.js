import http from "../Interceptor";
export const GetPopularTeacher = async () => {
  try {
    const res = await http.get("/Home/GetTeachers");
    return res;
  } catch (error) {
    console.log(error);
  }
};
