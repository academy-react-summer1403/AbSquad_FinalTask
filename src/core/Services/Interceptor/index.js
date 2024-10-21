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
const onError = (error) => {};
instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = localStorage.getItem("token");
  opt.headers.Authorization = "Bearer " + token;
  return opt;
});
export default instance;
