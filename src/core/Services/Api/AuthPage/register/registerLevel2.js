import axios from "axios";

export const VerificationCodeSent = async (sentData) => {
  try {
    const response = await axios.post(
      "https://classapi.sepehracademy.ir/api/Sign/VerifyMessage",
      sentData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
//fix this
