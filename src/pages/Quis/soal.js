import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sound from "react-sound";
import SoundTrack from "assets/audio/tes.mp3";

import {
  fetchQuiz,
  goToNextPage,
  goToPrevPage,
  selectOption,
} from "features/Quiz/action";

export default function Soal(
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) {
  // tes audio

  const [isPlaying, setIsPlaying] = useState(false);
  let dispatch = useDispatch();
  let dataQuiz = useSelector((state) => state.quiz);
  const {
    id,
    img,
    quistion,
    option,
    pilihan,
    esai,
    checkbox,
    image_desc,
    titleVerbal,
  } = useSelector((state) => state.quiz.data);

  const dataQuis = useSelector((state) => state.quiz.dataQuis);

  // from api data quis
  const dataQuisApi = useSelector((state) => state.home);

  const [dataQuisArray, setDataQuisArray] = useState();

  const [arrayLength, setArrayLength] = useState(0);

  useEffect(() => {
    setDataQuisArray(dataQuis.soal);
    dispatch(fetchQuiz());
  }, [dispatch, dataQuiz.currentIndex, dataQuiz.select]);

  return (
    <div className="border relative overflow-y-scroll h-auto md:h-86vh">
      {/* form soal */}
      <div
        className="p-4 overflow-y-scroll scroll-hidden"
        style={{ height: "77vh" }}
      >
        <h1 className="font-bold mb-4">{titleVerbal}</h1>
        <h1 className="font-semibold">
          {/* Pertanyaan 1 */}
          {id}.&nbsp;{quistion}
        </h1>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {!isPlaying ? "Play" : "Stop"}
        </button>
        <Sound
          url={SoundTrack}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={3000}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={handleSongFinishedPlaying}
        />
        <img className="mt-4" src={img} />
        {/* validate when option ada image */}
        {/* {option === undefined
          ? ""
          : option[0].image
          ? "Jika gambar diatas diputar, manakah gambar di bawah ini yang identik dengan gambar sola dibawah. "
          : ""} */}

        <p>{image_desc}</p>
        <div className="flex items-center flex-wrap mr-3">
          {/* soal 2 */}
          <ul className="mb-6">
            {pilihan &&
              pilihan.map((item, i) => {
                return (
                  <li
                    // update
                    key={i}
                    // update
                  >
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
            {checkbox &&
              checkbox.map((item) => {
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
            {esai &&
              esai.map((item) => {
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
                <div className="flex items-center flex-col">
                  <img className="mr-3 mb-2" src={items.image} />
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
                </div>
              );
            })}
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
          <div className="w-56 h-6 rounded-2xl bg-white relative border overflow-hidden">
            <div
              className="absolute inset-0 bg-green1 rounded-2xl"
              style={{
                width: dataQuiz.totalSelect + "%",
              }}
            >
              <p
                className={`absolute ${
                  dataQuiz.totalSelect === 0 ? "text-green1" : "text-white"
                } top-1/2 transform left-1 -translate-y-1/2 text-litle`}
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
