import http from "../../../Interceptor";

export const FinalStepRegister = async (RegisterDataApi = "") => {
  try {
    const res = await http.post("/Sign/Register", RegisterDataApi);
    return res.data;
  } catch (error) {
    console.error("API Error in FinalStepRegister:", error);
    throw error;
  }
};
