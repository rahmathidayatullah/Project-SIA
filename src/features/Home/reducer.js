import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_FETCHING_DATA,
  SUCCESS_SET_TIME_QUIS,
  SUCCESS_GET_STATUS_UJIAN,
} from "./constans";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
  timeQuis: 0,
  isUjian: false,
  id_ujian: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // reducer daily
    case START_FETCHING_DATA:
      return {
        ...state,
        status: statuslist.process,
      };

    case SUCCESS_FETCHING_DATA:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };

    case ERROR_FETCHING_DATA:
      return { ...state, status: statuslist.error };

    case SUCCESS_SET_TIME_QUIS:
      return { ...state, timeQuis: action.value * 60 };

    case SUCCESS_GET_STATUS_UJIAN:
      return { ...state, isUjian: action.data, id_ujian: action.id_ujian };

    default:
      return state;
  }
}
