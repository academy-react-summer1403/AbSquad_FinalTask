// Adjust path as necessary
import http from "../../Interceptor";

export const AddProfileImage = async (file) => {
  const formData = new FormData();
  formData.append("formFile", file);

  try {
    const res = await http.post("/SharePanel/AddProfileImage", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};
