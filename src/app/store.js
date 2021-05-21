import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "features/Auth/reducer";
import quizReducer from "features/Quiz/reducer";
import homeReducer from "features/Home/reducer";

import thunk from "redux-thunk";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  home: homeReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

// (6) export store
export default store;
