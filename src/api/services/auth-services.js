import httpClient from "api/http-client";
import { LOGIN, USER_REGISTRATION, REFRESH_TOKEN } from "../config";

const AuthServices = {
  login: (data) =>
    httpClient
      .post(LOGIN, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.data),

  registerUser: (data) =>
    httpClient
      .post(USER_REGISTRATION, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.data),

  getRefreshToken: () =>
    httpClient
      .get(REFRESH_TOKEN, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.data),
};

export default AuthServices;
