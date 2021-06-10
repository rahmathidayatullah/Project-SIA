import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchQuiz,
  selectOption,
  goToNextPage,
  goToPrevPage,
} from "features/QuizApi/action";

import { sendDataJawaban } from "api/home";

export default function Soal() {
  let dispatch = useDispatch();
  let history = useHistory();
  const { id, question, option } = useSelector((state) => state.quizApi.data);
  const dataQuizSingle = useSelector((state) => state.quizApi);
  const soal = useSelector((state) => state.quizApi.allData);
  const totalAnswer = useSelector((state) => state.quizApi.totalAnswer);
  const handleErrorSoal = () => {
    alert(
      "error hapus dulu localstorage nya terus reload lagi, karena data soal nya gada."
    );
    localStorage.removeItem("idUjian");
    localStorage.removeItem("listSoal");
    localStorage.removeItem("soalSingle");
    history.push("/home");
  };

  const submitExam = async () => {
    let temp = [];
    soal.forEach((parent) => {
      let idJawaban = 0;
      parent.option.forEach((child) => {
        if (child.selected) {
          idJawaban = child.id;
        }
      });
      if (parent.selected) {
        temp.push({ idSoal: parent.id, idJawaban: idJawaban });
      }
    });
    //
    let jawaban = { jawaban_soal: temp };
    let id = JSON.parse(localStorage.getItem("idUjian"));
    try {
      let { data } = await sendDataJawaban(id, jawaban);
      if (data.code === 200) {
        localStorage.removeItem("idUjian");
        localStorage.removeItem("listSoal");
        alert("soal anda telah disubmit");
        history.push("/home");
      } else {
        alert("gagal submit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("idUjian")) {
      history.push("/home");
    }
  }, [localStorage.getItem("idUjian")]);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch, dataQuizSingle.currentIndex, dataQuizSingle.totalSelect]);

  return (
    <div className="border relative overflow-y-scroll h-auto md:h-86vh">
      <div
        className="p-4 overflow-y-scroll scroll-hidden"
        style={{ height: "77vh" }}
      >
        <div className="flex">
          <h1 className="font-semibold">{dataQuizSingle.currentIndex + 1}.</h1>
          <div
            className="ml-2"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>
        <div className="flex flex-wrap mt-2">
          {option &&
            option.map((item, i) => {
              return (
                <button
                  className={`rounded-lg text-xs
                  ${
                    item.selected === true
                      ? "border-green1 border bg-green1 text-white"
                      : "bg-transparent text-green1 border-green1 border hover:bg-green1 hover:text-white"
                  }
                        
                        p-2 mr-3 hover:bg-opacity-80 duration-200 cursor-pointer mt-2 sm:mt-2 focus:outline-none outline-none`}
                  onClick={() => dispatch(selectOption(i))}
                >
                  <div className="flex">
                    {item.alfabet}.
                    <div
                      className="ml-2 desc-option"
                      dangerouslySetInnerHTML={{ __html: item.jawaban }}
                    />
                  </div>
                </button>
              );
            })}
        </div>
      </div>
      <div className="static md:absolute bottom-0 flex flex-wrap justify-between items-center w-full p-2">
        <div className="flex justify-between sm:justify-start w-full sm:w-auto items-center order-2 sm:order-none mt-5 sm:mt-0">
          <button
            className="px-4 py-2 bg-blue rounded-lg text-white text-sm hover:bg-opacity-80 duration-200 focus:outline-none"
            onClick={() => dispatch(goToPrevPage())}
          >
            Sebelumnya
          </button>
          <button
            className="px-4 py-2 bg-blue rounded-lg text-white text-sm hover:bg-opacity-80 duration-200 focus:outline-none mx-3"
            onClick={() => dispatch(goToNextPage())}
          >
            Lanjut
          </button>
          {totalAnswer > 0 ? (
            <button
              className="px-4 py-2 bg-red-600 rounded-lg text-white text-sm hover:bg-opacity-80 duration-200 focus:outline-none"
              onClick={() => submitExam()}
            >
              Submit
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center order-1 sm:order-none mt-2 sm:mt-0">
          <p className="text-xs text-gray-600 mr-3">Progress</p>
          <div className="w-56 h-6 rounded-2xl bg-white relative border overflow-hidden">
            <div
              className="absolute inset-0 bg-green1 rounded-2xl"
              style={{
                width: dataQuizSingle.totalSelect + "%",
              }}
            >
              <p
                className={`absolute ${
                  dataQuizSingle.totalSelect === 0
                    ? "text-green1"
                    : "text-white"
                } top-1/2 transform left-1 -translate-y-1/2 text-litle`}
              >
                {dataQuizSingle.totalSelect === 0 ? (
                  <p>0%</p>
                ) : (
                  parseFloat(dataQuizSingle.totalSelect).toFixed(1) + "%"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
