import axios from "axios";

import { config } from "../config";

//HOME -> get home
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

// UJIAN -> get cek ujian
export async function checkStatusUjian() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}api/v1/check-exam`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
// UJIAN -> get mulai sesi ujian
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

// UJIAN -> post kirim foto sebelum ujian
export async function getDataQuizByID(id, dataImageSend) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(
    `${config.api_host}api/v1/send-photo-before-exam/${id}`,
    dataImageSend,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
}

// UJIAN -> post kirim data jawaban
export async function sendDataJawaban(id, data) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(
    `${config.api_host}api/v1/submit-answer-exam/${id}`,
    data,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
}
