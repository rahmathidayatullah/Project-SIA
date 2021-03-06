import { config } from "../config";
import axios from 'axios'

export async function getData(url, params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')) : {};
  if (!token) return;

  return await axios.get(`${config.api_host}/${url}`, {
    params,
    headers: { "x-access-token": token }
  });
}

export async function postData(url, payload) {

  if (url !== 'accounts/signin') {
    let { token } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth')) : {};
    if (!token) return;
    return await axios.post(`${config.api_host}/${url}`, payload, {
      headers: { "x-access-token": token }
    });
  } else {
    return await axios.post(`${config.api_host}/${url}`, payload);
  }
}

export async function putData(url, payload) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')) : {};
  if (!token) return;

  return await axios.put(`${config.api_host}/${url}`, payload, {
    headers: { "x-access-token": token }
  });
}

export async function deleteData(url) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')) : {};
  if (!token) return;

  return await axios.delete(`${config.api_host}/${url}`, {
    headers: { "x-access-token": token }
  });
}
