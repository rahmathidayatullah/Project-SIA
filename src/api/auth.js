import axios from "axios";

import { config } from "../config";

export async function login(email, password) {
  return await axios.post(`${config.api_host}api/v1/sign-in`, {
    email,
    password,
  });
}

export async function logout() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  return await axios
    .post(`${config.api_host}api/v1/logout`, null, {
      header: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.removeItem("auth");
      return response;
    });
}
