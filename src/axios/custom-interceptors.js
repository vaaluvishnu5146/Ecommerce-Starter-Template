import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add a request interceptor
API.interceptors.request.use(
  function (config) {
    console.log(config);
    // Do something before request is sent
    config.headers.set("token", "Test token");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default API;
