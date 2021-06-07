import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchQuiz, goToNextPage, goToPrevPage } from "features/QuizApi/action";
import { optionSelect } from "features/Quiz/action";

export default function Soal() {
  let dispatch = useDispatch();

  // API Kirim Foto Sebelum Ujian
  const dataSendImageBeforeExam = useSelector((state) => state.home.datQuiz);
  console.log("data Quiz :", dataSendImageBeforeExam);
  //
  const dataQuiz = useSelector((state) => state.quizApi.dataQuizByIndex);
  //
  const dataQuizApi = useSelector((state) => state.quizApi);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dataQuizApi.currentIndex]);

  return (
    <div className="border relative overflow-y-scroll h-auto md:h-86vh">
      <div
        className="p-4 overflow-y-scroll scroll-hidden"
        style={{ height: "77vh" }}
      >
        <h1 className="font-semibold">
          {dataQuiz && dataQuiz.id}. {dataQuiz && dataQuiz.question}
        </h1>

        {/* {dataSingle.option &&
          dataSingle.option.map((item, i) => {
            return (
              <button className="rounded-lg text-xs border-green1 border bg-green1 text-white p-2 mr-3 hover:bg-opacity-80 duration-200 cursor-pointer mt-2 sm:mt-0 focus:outline-none outline-none">
                {item.alfabet}. {item.jawaban}
              </button>
            );
          })} */}
        {/* {console.log(
          "dataSingle.option",
          dataSingle.option && dataSingle.option
        )} */}

        {/* {console.log("dataSoal.data", dataSoal.data.soal)} */}
      </div>
      <div className="static md:absolute bottom-0 flex flex-wrap justify-between items-center w-full p-2">
        <div className="flex justify-between sm:justify-start w-full sm:w-auto items-center order-2 sm:order-none mt-5 sm:mt-0">
          <button
            className="px-4 py-2 bg-blue rounded-lg text-white text-sm mr-3 hover:bg-opacity-80 duration-200 focus:outline-none"
            onClick={() => dispatch(goToPrevPage())}
          >
            Sebelumnya
          </button>
          <button
            className="px-4 py-2 bg-blue rounded-lg text-white text-sm hover:bg-opacity-80 duration-200 focus:outline-none"
            onClick={() => dispatch(goToNextPage())}
          >
            Lanjut
          </button>
        </div>
        <div className="flex items-center order-1 sm:order-none mt-2 sm:mt-0">
          <p className="text-xs text-gray-600 mr-3">Progress</p>
          <div className="w-56 h-6 rounded-2xl bg-white relative border overflow-hidden">
            <div className="absolute inset-0 bg-green1 rounded-2xl">
              <p
                className={`absolute"text-white"
                } top-1/2 transform left-1 -translate-y-1/2 text-litle`}
              >
                <p>0%</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
