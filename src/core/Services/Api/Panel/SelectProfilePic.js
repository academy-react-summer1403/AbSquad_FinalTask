import http from "../../Interceptor";

export const SelectProfilePic = async (SentIDPFP) => {
  const formData = new FormData();
  formData.append("ImageId", SentIDPFP);
  console.log(SentIDPFP, "inside pfp");
  try {
    const res = await http.post("/SharePanel/SelectProfileImage", formData);
    return res.data;
  } catch (error) {
    console.error("Delete failed:", error);
    throw error;
  }
};
