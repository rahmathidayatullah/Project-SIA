import store from './store';

let currentAuth;

function listener() {

  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;

  console.log("object")
  console.log(store.getState())

  if (currentAuth !== previousAuth) {
    localStorage.setItem('auth', JSON.stringify(currentAuth));
  }
}

function listen() {
  console.log("object")
  store.subscribe(listener);

}

export { listen }