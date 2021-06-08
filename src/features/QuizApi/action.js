import {
  ERROR_FETCHING_QUIZ,
  SUCCESS_FETCHING_QUIZ,
  PREV_PAGE,
  NEXT_PAGE,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
} from "./constants";

import { getDataQuizByID } from "api/home";

// action set data from response home
export const fetchQuiz = () => {
  return (dispatch, getState) => {
    let currentIndex = getState().quizApi.currentIndex;

    // let dataQuiz = getState().quizApi.dataQuiz.data.soal;
    let dataQuiz = getState().quizApi.dataQuiz;
    console.log("dataQuiddz :", dataQuiz);
    let data = dataQuiz[currentIndex];
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

// next pagination
export const goToNextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

// prev pagination
export const goToPrevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

// action send image and get response soal by id sesi soal
export const sendImageAndGetExam = (id, dataImageSend) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await getDataQuizByID(id, dataImageSend);
      console.log("data quiz action:", data);
      // console.log("data quiz just object:", data);
      // let datas = data.data.soal;
      dispatch(successGetDataQuizByID(data));
    } catch (error) {
      console.log("error getDataQuizByID", error);
      console.log("error getDataQuizByID reponse", error.response);
    }
  };
};
export const successGetDataQuizByID = (data) => {
  return {
    type: SUCCESS_GET_DATA_QUIZ_BY_ID,
    data,
  };
};
