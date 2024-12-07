import http from "../../../Interceptor";

export const TwoStepLogin = async (sendData = {}, code = "") => {
  try {
    const res = await http.post(
      `/Sign/LoginTwoStep?VrifyCode=${code}`,
      sendData
    );
    return res;
  } catch (error) {
    console.error("Error in TwoStepLogin:", error.response || error.message);
    throw error; // Re-throw the error for the caller to handle
  }
};
