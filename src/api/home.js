import axios from "axios";

import { config } from "../config";

export async function getDataUjian() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}api/v1/home`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
