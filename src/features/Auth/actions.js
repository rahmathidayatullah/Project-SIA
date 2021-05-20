// (1) import constant
import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, user, ujian) {
  return {
    type: USER_LOGIN,
    token,
    user,
    ujian,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
