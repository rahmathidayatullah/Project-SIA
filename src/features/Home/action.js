import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_FETCHING_DATA,
  SUCCESS_SET_TIME_QUIS,
  SUCCESS_GET_STATUS_UJIAN,
} from "./constans";

import { getDataUjian, getStatusUjian } from "api/home";

export const fetchDataHome = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchHome());
    try {
      let {
        data: { data },
      } = await getDataUjian();
      console.log("dataasssssssssssssssssssss", data);
      dispatch(successFetchHome(data));
    } catch (error) {
      console.log(error);
      dispatch(errorFetchHome());
    }
  };
};

export const startFetchHome = () => {
  return {
    type: START_FETCHING_DATA,
  };
};
export const successFetchHome = (data) => {
  return {
    type: SUCCESS_FETCHING_DATA,
    data,
  };
};
export const errorFetchHome = () => {
  return {
    type: ERROR_FETCHING_DATA,
  };
};
export const setTimeQuis = () => {
  return async (dispatch, getState) => {
    try {
      let {
        data: {
          data: { ujian },
        },
      } = await getDataUjian();
      console.log("ujian redux", ujian.time_minutes);
      dispatch(succestSetTimeQuis(ujian.time_minutes));
    } catch (error) {
      console.log("ujian redux error", error);
    }
  };
};

export const succestSetTimeQuis = (value) => {
  return {
    type: SUCCESS_SET_TIME_QUIS,
    value,
  };
};

export const statusUjianGet = (id) => {
  return async (dispatch) => {
    try {
      let {
        data: { data },
      } = await getStatusUjian(id);
      console.log("data", data);
      dispatch(succesStatusUjianGet(data));
    } catch (error) {
      console.log("ujian redux error", error);
    }
  };
};

export const succesStatusUjianGet = (data) => {
  return {
    type: SUCCESS_GET_STATUS_UJIAN,
    data,
  };
};
