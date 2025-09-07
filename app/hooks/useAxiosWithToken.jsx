import { NotifyMessage } from "@/enums";
import { notify } from "@/helper";
import axios from "axios";
const useAxiosWithToken = axios.create();
useAxiosWithToken.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token;
  /* config.headers.Authorization = "bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxdVMtNU9za081ZmtnX29VcDI1TXRZNlV5SUNBdVZGY1BQRW9zY251ek1ZIn0.eyJleHAiOjE3MTg1NjMxNDQsImlhdCI6MTcxODUyNzE0NCwianRpIjoiYTIzYmUxNjEtZDE3NC00ZDFlLWE5NmQtY2M2ZjRjMTEyMjQ2IiwiaXNzIjoiaHR0cHM6Ly9zc28udGF6bWlubWFzaGluLmNvbS9yZWFsbXMvc2FuYWFwIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImI3Mjg1ZjkzLTM3OTktNGZjZC1iYjExLTRlYzBhYjljMWJjMyIsInR5cCI6IkJlYXJlciIsImF6cCI6InNhbmFhcC1yZXN0LWFwaSIsInNlc3Npb25fc3RhdGUiOiI3Nzc2NmQwMi1iMWYxLTQ0Y2QtOGEyOC03YTdhZDBjYzQ0YmEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtc2FuYWFwIiwib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsic2FuYWFwLXJlc3QtYXBpIjp7InJvbGVzIjpbImNsaWVudF9hZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiNzc3NjZkMDItYjFmMS00NGNkLThhMjgtN2E3YWQwY2M0NGJhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0YXptaW4ifQ.L8CzD2CywziUYdhZWxG7fJPuCUnW9e_zdbidcXrvteIAOW-YAx_XKspmy1qUw2HT2L4pRmnJ9xAULZcrE1-DSlZ-qsN0WLG0mFyhqY4AJE-HO_Pj04PFOBLWHBE6d_aJe7yhgvkLTQk1EtVZLIpNKl6lKKerSSLczfF1vqyxbalsInkKo9VB4iqWqKYLag5VGx9ON8kYfnNPGtkBQQRZuN9NWtqKCTt7xJT2ZuqBbHWNVkxwFo9Ssdg80L4W-w5rFFZGRVjQPJOD4ENDgx58_n-iwh37fuIVRME0I1PAQIFBZS61F4iAiSl7Zdb2LWPvAuQpgelHN8QJx4ol5oRRdw"; */
  return config;
});
useAxiosWithToken.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error  
    if (error?.response?.status === 401) {
      window.location.href = "/login";
      localStorage.clear()
    }
    else {
      if (error.response?.data?.messageFa) {
        notify.Error(error.response?.data?.messageFa)
      }
      else {
        notify.Error(NotifyMessage.GLOBAL_ERROR)
      }
    }
    return Promise.reject(error);
  },
);
export default useAxiosWithToken;
