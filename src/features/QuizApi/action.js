import {
  PREV_PAGE,
  NEXT_PAGE,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
  SUCCESS_GET_QUIZ,
} from "./constants";

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

export const fetchGetDataQuizByID = (data) => {
  return async (dispatch, getState) => {
    dispatch(successGetDataQuizByID(data));

    let currentIndex = getState().quizApi.currentIndex;

    let dataQuiz = getState().quizApi.dataQuiz;

    let listSoal = JSON.parse(localStorage.getItem("listSoal"));

    let dataSingle = dataQuiz[currentIndex];
    let dataSingleStorage = listSoal[currentIndex];
    localStorage.setItem("soalSingle", JSON.stringify(dataSingleStorage));

    console.log("soalSingle", JSON.parse(localStorage.getItem("soalSingle")));
    console.log("listSoal", JSON.parse(localStorage.getItem("listSoal")));
    dispatch(successGetQuiz(dataSingle));
  };
};
export const successGetDataQuizByID = (data) => {
  return {
    type: SUCCESS_GET_DATA_QUIZ_BY_ID,
    data,
  };
};

export const successGetQuiz = (dataSingle) => {
  return {
    type: SUCCESS_GET_QUIZ,
    dataSingle,
  };
};
