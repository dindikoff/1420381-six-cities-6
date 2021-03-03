import axios from 'axios';

const BACKEND_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIME = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIME,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    throw new Error(error.status);
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
