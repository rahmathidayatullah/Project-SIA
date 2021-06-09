import {
  PREV_PAGE,
  NEXT_PAGE,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
  SUCCESS_GET_QUIZ,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  status: statuslist.idle,
  // all data quiz
  dataQuiz: [],
  // all data quiz by index
  dataQuizByIndex: [],
  currentIndex: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        currentIndex:
          state.currentIndex === state.dataQuiz.length - 1
            ? state.currentIndex + 0
            : state.currentIndex + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentIndex:
          state.currentIndex === 0
            ? state.currentIndex - 0
            : state.currentIndex - 1,
      };

    case SUCCESS_GET_DATA_QUIZ_BY_ID:
      return {
        ...state,
        dataQuiz: action.data,
      };

    case SUCCESS_GET_QUIZ:
      return {
        ...state,
        dataQuizByIndex: action.dataSingle,
      };

    default:
      return state;
  }
}
