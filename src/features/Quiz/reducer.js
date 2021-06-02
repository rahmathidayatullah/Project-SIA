import {
  START_FETCHING_QUIZ,
  ERROR_FETCHING_QUIZ,
  SUCCESS_FETCHING_QUIZ,
  PREV_PAGE,
  NEXT_PAGE,
  SELECT_OPTION,
  CHANGE_CURRENT_INDEX,
  SENT_TIME_QUIS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  // get data by currrent
  data: [],
  // current index sort data
  currentIndex: 0,
  // count all count
  totalSoal: 0,
  status: statuslist.idle,
  // key for validate data all and data reduce
  fetchKey: false,
  // var data from reduce for use all data
  allData: [],
  // count selected for persentase
  totalSelect: 0,
  // count answer
  totalAnswer: 0,
  // count noAnwer
  totalNoAnswer: 0,
  // set time quis
  timeQuis: [{ detik: 0, menit: 0, jam: 0 }],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // reducer daily
    case START_FETCHING_QUIZ:
      return {
        ...state,
        status: statuslist.process,
        totalSoal: action.totalSoal - 1,
        allData: action.allData,
        totalNoAnswer: action.totalSoal,
      };

    case SUCCESS_FETCHING_QUIZ:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        fetchKey: action.fetchKey,
      };

    case ERROR_FETCHING_QUIZ:
      return { ...state, status: statuslist.error };

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
    case SELECT_OPTION:
      return {
        ...state,
        allData: action.data,
        fetchKey: action.fetch,
        totalSelect: action.hasilSelect,
        totalAnswer: action.totalSelect,
        totalNoAnswer: action.totalNoSelect,
      };

    case CHANGE_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.i,
      };

    case SENT_TIME_QUIS:
      return {
        ...state,
        timeQuis: action.value,
      };

    default:
      return state;
  }
}
