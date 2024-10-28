import http from "../../Interceptor";

export const UpdateProfileInfo = async (formData) => {
  try {
    const res = await http
      .put("/SharePanel/UpdateProfileInfo", formData)
      .then((response) => {
        console.log("Successful Response:", response.data);
      })
      .catch((error) => {
        console.error("Error Response:", error.response);
      });
    return res;
  } catch (error) {
    console.error("API error:", error);
  }
};
