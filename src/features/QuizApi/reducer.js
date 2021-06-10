import {
  PREV_PAGE,
  NEXT_PAGE,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
  SUCCESS_GET_QUIZ,
  START_FETCHING_QUIZ,
  SUCCESS_FETCHING_QUIZ,
  SELECT_OPTION,
  CHANGE_CURRENT_INDEX,
  SUCCESS_JAWABAN_DATA_SEND,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  status: statuslist.idle,
  // key for validate data all and data reduce
  fetchKey: false,
  // get data by currrent
  data: [],
  // var data from reduce for use all data
  allData: [],
  // count all count
  // count selected for persentase
  totalSelect: 0,
  // count answer
  totalAnswer: 0,
  // count noAnwer
  totalNoAnswer: 0,
  totalSoal: 0,
  // all data quiz by index
  dataQuizByIndex: [],
  currentIndex: 0,
  // jawaban exam
  //
  jawaban: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_QUIZ:
      return {
        ...state,
        status: statuslist.process,
        totalSoal: action.totalSoal - 1,
        allData: action.allData,
      };

    case SUCCESS_FETCHING_QUIZ:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        fetchKey: action.fetchKey,
      };

    case SELECT_OPTION:
      return {
        ...state,
        allData: action.data,
        totalSelect: action.hasilSelect,
        totalAnswer: action.totalSelect,
        totalNoAnswer: action.totalNoSelect,
        fetchKey: action.fetch,
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentIndex:
          state.currentIndex === state.totalSoal
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

    case CHANGE_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.i,
      };

    case SUCCESS_JAWABAN_DATA_SEND:
      return {
        ...state,
        jawaban: action.data,
      };

    default:
      return state;
  }
}
