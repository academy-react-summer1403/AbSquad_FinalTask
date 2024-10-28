import http from "../../../Interceptor";

export const PostLoginAPI = async (user = "") => {
  try {
    const res = await http.post("/Sign/Login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.error("Error in PostLoginAPI:", error);
    throw error; // Optional: re-throw to handle errors in calling code
  }
};
