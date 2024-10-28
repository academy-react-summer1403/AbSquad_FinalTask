import http from "../../Interceptor";

export const DeleteProfileImage = async (SentIDDelete) => {
  const formData = new FormData();
  formData.append("DeleteEntityId", SentIDDelete);
  console.log(SentIDDelete, "inside inter");
  try {
    const res = await http.delete("/SharePanel/DeleteProfileImage", {
      data: formData,
    });
    return res.data;
  } catch (error) {
    console.error("Delete failed:", error);
    throw error;
  }
};
