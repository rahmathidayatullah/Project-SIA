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

export async function getStatusUjian(id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}api/v1/exam-session/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export async function sendImage(id, imageSrc) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(
    `${config.api_host}api/v1/send-photo-before-exam/${id}`,
    imageSrc,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
}
