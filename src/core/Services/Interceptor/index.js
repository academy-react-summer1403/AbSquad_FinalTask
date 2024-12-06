import axios from "axios";
import { toast } from "react-hot-toast";

const baseUrl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseUrl,
});

// Handle success responses
const onSuccess = (response) => {
  if (response.data) {
    toast.success("Request successful!"); // Display success toast
    return response.data; // Return the response data directly
  }
  return response;
};

// Handle errors
const onError = (error) => {
  if (error.response) {
    const errorMessage =
      error.response.data?.message || "Something went wrong!";
    toast.error(errorMessage); // Display error toast
    console.error("API Error:", error.response.data);
    return Promise.reject(error.response); // Reject the full error response
  } else {
    const errorMessage = error.message || "An unknown error occurred!";
    toast.error(errorMessage); // Display error toast
    console.error("Error:", errorMessage);
    return Promise.reject({ error: errorMessage });
  }
};

// Intercept responses
instance.interceptors.response.use(onSuccess, onError);

// Intercept requests
instance.interceptors.request.use((opt) => {
  const token = localStorage.getItem("token");
  if (token) {
    opt.headers.Authorization = `Bearer ${token}`;
  }
  // Uncomment below if you need to force JSON content type for all requests
  // opt.headers["Content-Type"] = "application/json";
  return opt;
});

export default instance;
