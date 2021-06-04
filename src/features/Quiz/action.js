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

import { quizData } from "api/quiz";
import { sendImage } from "api/home";

export const fetchQuiz = () => {
  return (dispatch, getState) => {
    // get default fetchKey from reduce
    let fetchKey = getState().quiz.fetchKey;

    // validate after choices in action selectOption and this no use again
    if (fetchKey === false) {
      let allData = quizData;
      dispatch(startQuiz(quizData.length, allData));
    }

    let currentIndex = getState().quiz.currentIndex || 0;

    let dataQuiz = getState().quiz.allData;

    let data = dataQuiz[currentIndex];

    // send data first for show in page one by currentIndex from up var
    dispatch(successQuiz(data, fetchKey));
  };
};

export const startQuiz = (totalSoal, allData) => {
  return {
    type: START_FETCHING_QUIZ,
    totalSoal,
    allData,
  };
};
export const successQuiz = (data, fetchKey) => {
  return {
    type: SUCCESS_FETCHING_QUIZ,
    data,
    fetchKey,
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
    fetch,
    hasilSelect,
    totalSelect,
    totalNoSelect,
  };
};

export const selectOption = (indexOption) => {
  return (dispatch, getState) => {
    let currentIndex = getState().quiz.currentIndex || 0;

    let dataQuiz = getState().quiz.allData;

    // get option destruct from all data
    let { option } = getState().quiz.data;

    // add selected and select in option in dataAll in reduce
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
    // change fetch for reduce fetchKey
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

    console.log("totalNoSelect", totalNoSelect);

    // action to all var
    dispatch(
      optionSelect(data, fetch, hasilSelect, totalSelect, totalNoSelect)
    );
    dispatch(fetchQuiz());
  };
};

export const changeCurrentIndex = (i) => {
  return {
    type: CHANGE_CURRENT_INDEX,
    i,
  };
};

// export const sendTimeQuis = (seconds, minutes, hours) => {
//   return (dispatch, getState) => {
//     let [{ detik, menit, jam }] = getState().quiz.timeQuis;

//     if (detik && menit && jam === 0) {
//     }
//   };
// };

// action send func to get data quis from api
export const fetchQuizApi = (indexSesiQuis, imageSrc) => {
  return async (dispatch, getState) => {
    try {
      let {
        data: { data },
      } = await sendImage(indexSesiQuis, imageSrc);
      // console.log("data from action imagesend", data.soal);
      dispatch(successFetchQuizApi(data));
    } catch (error) {
      console.log("error", error);
      console.log("error response", error.response);
    }
  };
};

export const successFetchQuizApi = (data) => {
  return {
    type: SUCCESS_FETCH_API_QUIZ,
    data,
  };
};
