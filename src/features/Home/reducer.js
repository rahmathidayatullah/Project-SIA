import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_FETCHING_DATA,
  SET_DATA_SESI_UJIAN,
  SUCCESS_UJIAN_STATUS_CHECK,
  SUCCESS_GET_DATA_CHECK_UJIAN,
  SUCCESS_GET_DATA_QUIZ_BY_ID,
} from "./constans";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  status: statuslist.idle,
  // API Get Home
  data: [],
  // API Cek Ujian
  cekUjian: [],
  // API Mulai Sesi Ujian
  mulaiSesiUjian: [],
  mulaiTes: { id_ujian: 0, nama_sesi_ujian: "" },
  // API Kirim foto sebelum ujian
  dataQuiz: [],
  // API Kirim jawaban soal ujian
  kirimJawanSoalUjian: [],
  // state for soal from
  // API Kirim foto sebelum ujian
  // save data by array [index from 0]
  dataQuizByIndex: [],
  currentIndex: 0,
  //
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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

    case SET_DATA_SESI_UJIAN:
      return {
        ...state,
        mulaiTes: {
          id_ujian: action.ujian_sesi_id,
          sesi_ujian: action.ujian_sesi_nama,
        },
      };

    case SUCCESS_UJIAN_STATUS_CHECK:
      return {
        ...state,
        cekUjian: action.data,
      };

    case SUCCESS_GET_DATA_CHECK_UJIAN:
      return {
        ...state,
        mulaiSesiUjian: action.data,
      };

    case SUCCESS_GET_DATA_QUIZ_BY_ID:
      return {
        ...state,
        dataQuiz: action.data,
      };

    default:
      return state;
  }
}
