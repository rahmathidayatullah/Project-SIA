import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { goToNextPage, goToPrevPage } from "features/QuizApi/action";
import { optionSelect } from "features/Quiz/action";

export default function Soal() {
  let dispatch = useDispatch();
  let history = useHistory();
  // API Kirim Foto Sebelum Ujian
  const dataSendImageBeforeExam = useSelector((state) => state.home.datQuiz);
  //
  const [currentIndex, setCurrentIndex] = useState(0);
  const [soal, setSoal] = useState(
    JSON.parse(localStorage.getItem("listSoal"))
  );

  const handleErrorSoal = () => {
    alert(
      "error hapus dulu localstorage nya terus reload lagi, karena data soal nya gada."
    );
    localStorage.removeItem("idUjian");
    localStorage.removeItem("listSoal");
    localStorage.removeItem("soalSingle");
    history.push("/home");
  };

  const { id, question, option } =
    soal[currentIndex] === undefined ? handleErrorSoal() : soal[currentIndex];

  const goToPrevPage = () => {
    setCurrentIndex(currentIndex === 0 ? currentIndex - 0 : currentIndex - 1);
  };
  const goToNextPage = () => {
    setCurrentIndex(
      currentIndex === soal.length - 1 ? currentIndex + 0 : currentIndex + 1
    );
  };

  const selectAnswer = (idJawaban, i) => {
    // let temp = [...soal];

    // temp.forEach((cur) => {
    //   cur?.option.forEach((curChild, i) => {
    //     if (curChild.id === idJawaban) {
    //       curChild.isChecked = true;
    //     } else {
    //       curChild.isChecked = false;
    //     }
    //   });
    // });

    // temp[currentIndex].option[index]["isChecked"] = true;
    // temp[currentIndex]["isChecked"] = true;
    setSoal(
      soal.map((item, index) =>
        index === currentIndex
          ? {
              ...item,
              isChecked: true,
              option: option.map((items, index) =>
                index === i
                  ? { ...items, isChecked: true }
                  : { ...items, isChecked: false }
              ),
            }
          : item
      )
    );

    console.log(soal);
  };
  // console.log(soal);

  // const [field, setField] = React.useState({
  //   id: "",
  // });

  // const fetchSoal = () => {
  //   let a = JSON.parse(localStorage.getItem("listSoal"));
  //   setSoal(a);
  //   setField({ ...field, id: a[currentIndex].id });
  // };
  // useEffect(() => {
  //   fetchSoal();
  //   // dispatch(fetchQuiz());
  // }, []);

  // const filterSoal = (currentIndex) => {
  //   setField({ ...field, id: soal[currentIndex].id });
  // };

  // const goToNextPage = () => {
  //   setCurrentIndex(currentIndex + 1);
  //   filterSoal(currentIndex + 1);
  // };

  useEffect(() => {}, []);

  return (
    <div className="border relative overflow-y-scroll h-auto md:h-86vh">
      <div
        className="p-4 overflow-y-scroll scroll-hidden"
        style={{ height: "77vh" }}
      >
        <h1 className="font-semibold">
          {/* {soal.id}. {soal.question} */}
          {/* {field.id} */}
          {id}
          {question}
        </h1>
        {option.map((item, i) => {
          return (
            <button
              className={`rounded-lg text-xs border-green1 border ${
                item.isChecked === false ? "bg-green1" : "bg-blue"
              } text-white p-2 mr-3 hover:bg-opacity-80 duration-200 cursor-pointer mt-2 sm:mt-0 focus:outline-none outline-none`}
              onClick={() => selectAnswer(item.id, i)}
            >
              {item.alfabet}. {item.jawaban}
            </button>
          );
        })}
        {/* {console.log(
          "dataSingle.option",
          dataSingle.option && dataSingle.option
        )}

        {/* {console.log("dataSoal.data", dataSoal.data.soal)} */}
      </div>
      <div className="static md:absolute bottom-0 flex flex-wrap justify-between items-center w-full p-2">
        <div className="flex justify-between sm:justify-start w-full sm:w-auto items-center order-2 sm:order-none mt-5 sm:mt-0">
          <button
            className="px-4 py-2 bg-blue rounded-lg text-white text-sm mr-3 hover:bg-opacity-80 duration-200 focus:outline-none"
            onClick={() => goToPrevPage()}
          >
            Sebelumnya
          </button>
          <button
            className="px-4 py-2 bg-blue rounded-lg text-white text-sm hover:bg-opacity-80 duration-200 focus:outline-none"
            onClick={() => goToNextPage()}
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
