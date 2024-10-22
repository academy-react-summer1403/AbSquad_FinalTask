import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL: baseUrl,
});
const onSuccess = (response) => {
  if (response.data) {
    return response.data;
  }
};
const onError = (error) => {
  if (error.response) {
    // Log the error details from the response
    console.error("API Error:", error.response.data); // This will log the full error including ErrorType, ErrorMessage, and StatusCode
    return Promise.reject(error.response.data); // Return the error response data
  } else {
    // If no response (e.g., network error)
    console.error("Error:", error.message);
    return Promise.reject({ error: error.message });
  }
};
instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = localStorage.getItem("token");
  opt.headers.Authorization = "Bearer " + token;
  opt.headers["Content-Type"] = "application/json";
  return opt;
});
export default instance;
