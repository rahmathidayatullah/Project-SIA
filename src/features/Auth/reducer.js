import { USER_LOGIN, USER_LOGOUT } from './constants';

let initialState =
  localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : { token: true, user: 'rahmat' }

export default function reducer(state = initialState, action) {

  switch (action.type) {

    // (1) logika menangani action USER_LOGIN
    case USER_LOGIN:
      return { token: action.token, access: action.user }

    // (2) logika state `USER_LOGOUT`
    case USER_LOGOUT:
      return { token: null, user: null }

    default:
      return state;
  }
}
