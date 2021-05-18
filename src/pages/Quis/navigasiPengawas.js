import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentIndex, fetchQuiz } from "features/Quiz/action";

export default function NavigasiPengawas() {
  let dispatch = useDispatch();
  const navigasi = useSelector((state) => state.quiz.allData);
  let dataQuiz = useSelector((state) => state.quiz);

  console.log("navigasi", navigasi);
  console.log("quiz", dataQuiz.currentIndex);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch, dataQuiz.currentIndex]);

  return (
    <div className="grid grid-cols-2 gap-4 mt-3">
      <div className="col-span-2 md:col-span-2">
        <div className="rounded-lg bg-white py-5">
          {/* head */}
          <div className="flex flex-col md:flex-row lg:items-center justify-between pb-2 border-b">
            <div className="flex items-center">
              {/* icon navigasi */}
              <p className="text-litle font-semibold text-gray-500">Navigasi</p>
            </div>
            <div className="flex items-center mt-3 md:mt-0">
              <div className="flex items-center mr-2">
                <div className="h-3 w-3 rounded-full mr-1 bg-blue"></div>
                {/* div bullet */}
                <p className="text-litle text-blue font-semibold fulllitle">
                  Sekarang
                </p>
              </div>
              <div className="flex items-center mr-2 ">
                {/* div bullet */}
                <div className="h-3 w-3 rounded-full mr-1 bg-green1 mr-1"></div>
                <p className="text-litle text-green1 whitespace-nowrap fulllitle">
                  Terjawab ({dataQuiz.totalAnswer})
                </p>
              </div>
              <div className="flex items-center">
                {/* div bullet */}
                <div className="h-3 w-3 rounded-full mr-1 bg-orange mr-1"></div>
                <p className="text-litle text-orange font-semibold whitespace-nowrap fulllitle">
                  Belum dijawab ({dataQuiz.totalNoAnswer})
                </p>
              </div>
            </div>
          </div>
          {/* body */}
          <div className="grid grid-cols-8 gap-1 xsquis:gap-2 mt-4">
            {navigasi.map((item, i) => {
              return (
                <button
                  className={`col-span-1 rounded-lg 
                  ${
                    i === dataQuiz.currentIndex
                      ? "bg-blue"
                      : item?.selected
                      ? "bg-green1"
                      : "bg-orange"
                  } 
                  hover:bg-opacity-80 duration-200 focus:outline-none outline-none`}
                  onClick={() => dispatch(changeCurrentIndex(i))}
                >
                  <p className="text-white text-center text-xs py-2 font-semibold">
                    {i + 1}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
