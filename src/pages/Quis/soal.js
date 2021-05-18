import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuiz,
  goToNextPage,
  goToPrevPage,
  selectOption,
} from "features/Quiz/action";

export default function Soal() {
  let dispatch = useDispatch();
  let dataQuiz = useSelector((state) => state.quiz);
  console.log("dataQuiz", dataQuiz.totalSelect);
  const { id, img, quistion, option, pilihan, esai, checkbox } = useSelector(
    (state) => state.quiz.data
  );

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch, dataQuiz.currentIndex, dataQuiz.select]);

  return (
    <div className="border relative overflow-y-scroll h-auto md:h-86vh">
      {/* form soal */}
      <div
        className="p-4 overflow-y-scroll scroll-hidden"
        style={{ height: "77vh" }}
      >
        <h1 className="font-bold">
          {/* Pertanyaan 1 */}
          {id}.&nbsp;{quistion}
        </h1>
        <img className="mt-4" src={img} />
        <div className="flex items-center flex-wrap mr-3 mt-4">
          {/* soal 2 */}
          <ul className="mb-6">
            {pilihan === undefined
              ? ""
              : pilihan.map((item) => {
                  return (
                    <li>
                      <div className="flex">
                        <p style={{ width: "45rem" }}>{item.title}</p>
                        <select>
                          {item.option.map((items) => {
                            return <option>{items}</option>;
                          })}
                        </select>
                      </div>
                    </li>
                  );
                })}
          </ul>
          {/* soal 9 */}
          <ul className="mb-6">
            {checkbox === undefined
              ? ""
              : checkbox.map((item) => {
                  return (
                    <li>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-4" />
                        <p>{item}</p>
                      </div>
                    </li>
                  );
                })}
          </ul>
          {/* soal 3 */}
          <ul className="mb-6 w-full">
            {esai === undefined
              ? ""
              : esai.map((item) => {
                  return (
                    <li>
                      <div className="flex items-center">
                        <p className="mr-4">Jawaban :</p>
                        <input
                          type="text"
                          className="focus:outline-none outline-none border py-2 px-4 text-sm rounded-md w-1/2"
                          placeholder={item.title}
                        />
                      </div>
                    </li>
                  );
                })}
          </ul>
          {/* soal 1 */}

          {option &&
            option.map((items, indexOption) => {
              return (
                <button
                  className={`rounded-lg text-xs 

                        ${
                          items.selected === true
                            ? "border-green1 border bg-green1 text-white"
                            : "bg-transparent text-green1 border-green1 border hover:bg-green1 hover:text-white"
                        }

                      p-2 mr-3 hover:bg-opacity-80 duration-200 cursor-pointer mt-2 sm:mt-0 focus:outline-none outline-none`}
                  onClick={() => dispatch(selectOption(indexOption))}
                >
                  <p>{items.title}</p>
                </button>
              );
            })}

          {/* <button className="rounded-lg text-xs bg-green1 text-white p-2 mr-3 hover:bg-opacity-80 duration-200 cursor-pointer mt-2 sm:mt-0">
            <p>A. 316.000.000</p>
          </button>
          <button className="rounded-lg text-xs bg-white text-gray-600 border border-gray-400 p-2 mr-3 hover:bg-green1 duration-200 hover:text-white cursor-pointer mt-2 sm:mt-0">
            <p>B. 214.000.000</p>
          </button>
          <button className="rounded-lg text-xs bg-white text-gray-600 border border-gray-400 p-2 mr-3 hover:bg-green1 duration-200 hover:text-white cursor-pointer mt-2 sm:mt-0">
            <p>C. 214.000.000</p>
          </button>
          <button className="rounded-lg text-xs bg-white text-gray-600 border border-gray-400 p-2 hover:bg-green1 duration-200 hover:text-white cursor-pointer mt-2 sm:mt-0">
            <p>D. 214.000.000</p>
          </button> */}
        </div>
      </div>
      {/* wrap btn */}
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
          <div className="w-48 h-6 rounded-2xl bg-white relative border overflow-hidden">
            <div
              className="absolute inset-0 bg-green1 rounded-2xl"
              style={{
                width: dataQuiz.totalSelect + "%",
              }}
            >
              <p
                className={`absolute ${
                  dataQuiz.totalSelect === 0 ? "text-green1" : "text-white"
                } top-1/2 transform left-2 -translate-y-1/2 text-litle`}
              >
                {dataQuiz.totalSelect === 0 ? (
                  <p>0%</p>
                ) : (
                  parseFloat(dataQuiz.totalSelect).toFixed(1) + "%"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
