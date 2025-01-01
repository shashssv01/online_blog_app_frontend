import axios from "axios";
import AuthServices from './services/auth-services';

const httpClient = axios.create({
  baseURL: 'http://localhost:80', // Backend HOST
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

const logout = () => {
  localStorage.clear();
  window.location.href = '/';
};

const getAuthToken = async () => {
  try {
    const { accessToken } = await AuthServices.getRefreshToken();
    localStorage.setItem('authToken', accessToken);
  } catch (error) {
    throw error;
  }
};

const onSuccess = (response) => Promise.resolve(response);

const onError = async ({ response }) => {
  if (response?.status === 401) {
    try {
      await getAuthToken();
    } catch (error) {
      logout();
      throw error;
    }
  } else if (response?.status === 422) {
    logout();
    throw response;
  }

  return Promise.reject(response);
};

httpClient.interceptors.request.use((req) => {
  if (req.url === "/refresh") {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "refreshToken"
    )}`;
  } else {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "authToken"
    )}`;
  }
  return req;
});

httpClient.interceptors.response.use(onSuccess, onError);

export default httpClient;