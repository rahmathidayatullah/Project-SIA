import {
  START_FETCHING_QUIZ,
  SUCCESS_FETCHING_QUIZ,
  PREV_PAGE,
  NEXT_PAGE,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
  SUCCESS_GET_QUIZ,
  SELECT_OPTION,
  CHANGE_CURRENT_INDEX,
} from "./constants";

import { sendDataJawaban } from "api/home";

export const fetchQuiz = () => {
  return (dispatch, getState) => {
    let allDatas = JSON.parse(localStorage.getItem("listSoal"));

    // get default fetchKey from reduce
    let fetchKey = getState().quizApi.fetchKey;

    if (fetchKey === false) {
      let allData = allDatas;
      dispatch(startFetchQuiz(allData.length, allData));
    }

    let currentIndex = getState().quizApi.currentIndex || 0;

    let dataQuiz = getState().quizApi.allData;

    let data = dataQuiz[currentIndex];

    dispatch(successQuiz(data));
  };
};

export const startFetchQuiz = (totalSoal, allData) => {
  return {
    type: START_FETCHING_QUIZ,
    totalSoal,
    allData,
  };
};

export const successQuiz = (data) => {
  return {
    type: SUCCESS_FETCHING_QUIZ,
    data,
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

//

export const selectOption = (indexOption) => {
  return (dispatch, getState) => {
    let currentIndex = getState().quizApi.currentIndex || 0;
    let dataQuiz = getState().quizApi.allData;

    let { option } = getState().quizApi.data;

    let data = dataQuiz.map((item, index) => {
      return index === currentIndex
        ? {
            ...item,
            selected: true,
            option: option.map((items, index) =>
              index === indexOption
                ? { ...items, selected: true }
                : { ...items, selected: false }
            ),
          }
        : item;
    });
    console.log("data", data);
    let fetch = true;

    // get data select
    const select = data.filter((item, i) => item.selected === true);
    // get total noAnswer
    const totalSelect = select.length;
    // get total for value use percentase style
    const hasilSelect = (totalSelect / dataQuiz.length) * 100;
    // logic no answer behind/dibalik answer
    const noSelect = data.filter((item, i) => item.selected !== true);
    const totalNoSelect = noSelect.length;

    // action to all var
    dispatch(
      optionSelect(data, fetch, hasilSelect, totalSelect, totalNoSelect)
    );

    dispatch(fetchQuiz());
  };
};

export const optionSelect = (
  data,
  fetch,
  hasilSelect,
  totalSelect,
  totalNoSelect
) => {
  return {
    type: SELECT_OPTION,
    data,
    hasilSelect,
    totalSelect,
    totalNoSelect,
    fetch,
  };
};

export const changeCurrentIndex = (i) => {
  return {
    type: CHANGE_CURRENT_INDEX,
    i,
  };
};

//
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
