import axios, { AxiosInstance } from "axios";
const myAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  withCredentials: true,
});

myAxios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
  }
);

myAxios.interceptors.response.use(
  function (response) {
    console.log(response);
    const { data } = response;
    console.log(data);
    if (data.code === 40100) {
      if (
        !response.request.responseURL.includes("user/current") &&
        !window.location.pathname.includes("user/login")
      ) {
        window.location.href = `user/login?redirect=${window.location.href}`;
      }
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default myAxios;
