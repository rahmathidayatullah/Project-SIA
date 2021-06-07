import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_FETCHING_DATA,
  SET_DATA_SESI_UJIAN,
  SUCCESS_UJIAN_STATUS_CHECK,
  SUCCESS_GET_DATA_CHECK_UJIAN,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
} from "./constans";

import {
  getDataUjian,
  checkStatusUjian,
  getStatusUjian,
  getDataQuizByID,
} from "api/home";

// action set data from response home
export const fetchDataHome = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchHome());
    try {
      let { data } = await getDataUjian();
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

// action set data from response cek ujian

export const ujianStatusCheck = () => {
  return async (dispatch, getState) => {
    try {
      let { data } = await checkStatusUjian();
      dispatch(successUjianStatusCheck(data));
    } catch (error) {
      console.log("error ujianStatusCheck", error);
      console.log("error ujianStatusCheck reponse", error.response);
    }
  };
};

export const successUjianStatusCheck = (data) => {
  return {
    type: SUCCESS_UJIAN_STATUS_CHECK,
    data,
  };
};

// action set data from mulai sesi ujian

export const getDataCheckUjian = (id) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await getStatusUjian(id);
      dispatch(successGetDataCheckUjian(data));
    } catch (error) {
      console.log("error getDataCheckUjian", error);
      console.log("error getDataCheckUjian reponse", error.response);
    }
  };
};

export const successGetDataCheckUjian = (data) => {
  return {
    type: SUCCESS_GET_DATA_CHECK_UJIAN,
    data,
  };
};

//

export const mulaiTes = (ujian_sesi_id, ujian_sesi_nama) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await getStatusUjian(ujian_sesi_id);
    } catch (error) {
      console.log("error mulaiTes", error);
      console.log("error mulaiTes reponse", error.response);
    }
  };
};

export const setDataSesiUjian = (ujian_sesi_id, ujian_sesi_nama) => {
  return {
    type: SET_DATA_SESI_UJIAN,
    ujian_sesi_id,
    ujian_sesi_nama,
  };
};
