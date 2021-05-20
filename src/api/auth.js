import axios from "axios";

import { config } from "../config";

export async function login(email, password) {
  return await axios.post(`${config.api_host}api/v1/sign-in`, {
    email,
    password,
  });
}
