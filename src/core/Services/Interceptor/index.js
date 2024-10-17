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

export default instance;
