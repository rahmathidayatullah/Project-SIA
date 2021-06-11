import {
  START_FETCHING_QUIZ,
  SUCCESS_FETCHING_QUIZ,
  PREV_PAGE,
  NEXT_PAGE,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
  SUCCESS_GET_QUIZ,
  SELECT_OPTION,
  CHANGE_CURRENT_INDEX,
  PUSH_DATA_ANSWER_ID,
  RESET,
} from "./constants";

import { sendDataJawaban } from "api/home";

export const fetchQuiz = () => {
  return (dispatch, getState) => {
    console.log("FETCH DATA");
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
    //
    // for (let i = 0; i < data.length; i++) {
    //   let array = [];
    //   if (i === indexOption) {
    //     let idSoal = 0;
    //     let idJawaban = 0;
    //     data.forEach((element) => {
    //       if (element.selected) {
    //         console.log("element", element);
    //         idSoal = element.id;
    //         element.option.forEach((items) => {
    //           if (items.selected) {
    //             console.log("items.id", items.id);
    //             idJawaban = items.id;
    //           }
    //         });
    //       }
    //     });
    //     let jawaban = { idSoal: idSoal, idJawaban: idJawaban };
    //     array.push(jawaban);
    //   }
    //   console.log("array", array);
    // }
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].selected) {
        let idSoal = 0;
        let idJawaban = 0;
        idSoal = data[i].id;
        // console.log("idJawaban", idSoal);
        data[i].option.forEach((element) => {
          if (element.selected) {
            idJawaban = element.id;
            // console.log("idJawaban", idJawaban);
          }
        });
        let jawaban = { idSoal: idSoal, idJawaban: idJawaban };

        temp.push(jawaban);

        console.log("jawaban", jawaban);
      }
    }
    let answerById = { jawaban_soal: temp };
    dispatch(pushDataAnswerId(answerById));

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

export const pushDataAnswerId = (answerById) => {
  return {
    type: PUSH_DATA_ANSWER_ID,
    answerById,
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

export const reset = () => {
  return {
    type: RESET,
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

    // console.log("soalSingle", JSON.parse(localStorage.getItem("soalSingle")));
    // console.log("listSoal", JSON.parse(localStorage.getItem("listSoal")));
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
