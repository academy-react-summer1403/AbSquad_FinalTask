import http from "../../Interceptor";

export const GetSecurityInfo = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage");
      throw new Error("No token found in localStorage");
    }

    const res = await http.get("/SharePanel/GetSecurityInfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res; // Ensure this is the actual data being returned
  } catch (error) {
    console.error("Error in GetSecurityInfo:", error.response || error.message);
    throw error;
  }
};
