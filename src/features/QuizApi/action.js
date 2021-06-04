import {
  START_FETCHING_QUIZ,
  ERROR_FETCHING_QUIZ,
  SUCCESS_FETCHING_QUIZ,
  PREV_PAGE,
  NEXT_PAGE,
  SELECT_OPTION,
  CHANGE_CURRENT_INDEX,
  SENT_TIME_QUIS,
  SUCCESS_FETCH_API_QUIZ,
} from "./constants";

// import { quizData } from "api/quiz";
import { sendImage } from "api/home";

export const fetchQuiz = () => {
  return (dispatch, getState) => {
    let currentIndex = getState().quizApi.currentIndex || 0;

    let dataQuiz = getState().quizApi.allData;

    let data = dataQuiz[currentIndex];

    // send data first for show in page one by currentIndex from up var
    dispatch(successQuiz(data));
  };
};

export const successQuiz = (data) => {
  return {
    type: SUCCESS_FETCHING_QUIZ,
    data,
  };
};
export const errorQuiz = () => {
  return {
    type: ERROR_FETCHING_QUIZ,
  };
};

export const goToNextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const goToPrevPage = () => {
  return {
    type: PREV_PAGE,
  };
};
