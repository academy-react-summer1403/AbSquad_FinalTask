import http from "../../Interceptor";

export const EditSecurityInfo = async (Data = {}) => {
  try {
    const res = await http.put("/SharePanel/EditSecurity", Data); // Send Data as JSON in the body
    return res.data; // Return response data
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
