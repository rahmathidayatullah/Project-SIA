import React, { useState, useEffect } from "react";
import IconTime from "assets/icon/Time";
import IconNavigasi from "assets/icon/Navigasi";
import IconAsk from "assets/icon/Ask";
import IconArrow from "assets/icon/Arrow";
import IconHero from "assets/icon/ImageHero.svg";
import Webcam from "react-webcam";
import IconClose from "assets/icon/Close";
import { useTimer } from "react-timer-hook";
import Modal from "components/Modal";
import { quizData } from "components/quiz/fakeData";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchDataHome,
  resetIdUjian,
  succesStatusUjianGet,
} from "features/Home/action";
import { sendTimeQuis } from "features/Quiz/action";
// component
import Soal from "./soal";
import NavigasiPengawas from "./navigasiPengawas";
import Bantuan from "./bantuan";
import ModalTimeout from "./modal/timeout";
import moment from "moment";

// time
import { GetTime } from "utils/getTime";

export default function Quiz() {
  let dispatch = useDispatch();
  let history = useHistory();
  const { ujian } = useSelector((state) => state.home.data);
  const id_ujian = useSelector((state) => state.home.id_ujian);
  const timeQuis = useSelector((state) => state.home.timeQuis);
  const dataQuis = useSelector((state) => state.quiz.dataQuis);

  const data1 = new Date();

  const waktucustom = moment(data1).add(30, "seconds").format("LL HH:mm:ss");

  const [timeDuration, setTimeDuration] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  const setTime = () => {
    const times = setInterval(() => {
      const tanggalTujuan = new Date(waktucustom).getTime();
      // const tanggalTujuan = new Date("Juni 4, 2021 13:15:00").getTime();

      const sekarang = new Date().getTime();

      const selisih = tanggalTujuan - sekarang;

      const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
      const jam = Math.floor(
        (selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
      const detik = Math.floor((selisih % (1000 * 60)) / 1000);
      if (selisih < 0) {
        clearInterval(times);
        setTimeDuration({
          ...timeDuration,
          hari: 0,
          jam: 0,
          menit: 0,
          detik: 0,
        });
        setIsShow(true);
      } else {
        setTimeDuration({
          ...timeDuration,
          hari: hari,
          jam: jam,
          menit: menit,
          detik: detik,
        });
      }
    }, 1000);
  };
  // console.log("timeDuration", timeDuration);

  // alert new tab
  // const valueAlert = () => {
  //   alert("tidak boleh buka tab baru !!");
  // };

  // let data = ujian && ujian.time_minutes * 60;
  // console.log("timeQuiz", data);

  // set time over
  // const time = new Date();
  // console.log("new Date()", time);
  // time.setSeconds(time.getSeconds() + 10);

  // const { seconds, minutes, hours, start, restart } = useTimer({
  //   expiryTimestamp: time,
  //   onExpire: () => setIsShow(true),
  // });

  // let dataTime = [{ detik: seconds, menit: minutes, jam: hours }];
  // localStorage.setItem("time_quis", JSON.stringify(dataTime));

  // console.log("seconds", seconds);
  // state massage bantuan
  const [showBantuan, setShowBantuan] = useState(false);
  const [showPengawas, setShowPengawas] = useState(false);
  // state webcame
  const [image, setImage] = React.useState("");
  const [field, setField] = React.useState({
    image: "",
  });
  const webcamRef = React.useRef(null);
  // func capture
  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const handleSaveImage = () => {
    setField({ ...field, image: image });
  };

  const [isShow, setIsShow] = useState(false);
  // close modal
  const closeModal = () => {
    setIsShow(false);
    // history.push("/home");
    // restart(time);
  };

  useEffect(() => {
    // start();
    setTime();
    dispatch(fetchDataHome());
    // send data action time quis
    // dispatch(sendTimeQuis(seconds, minutes, hours));
    // window.addEventListener("focus", valueAlert);
  }, []);
  return (
    <div className="bg-gray2 h-screen w-screen p-2 overflow-y-hidden">
      {/* <div id="modalTimeOver"></div> */}
      {/* {isShow && timeOutQuiz()} */}
      <div className="grid grid-cols-12 gap-4 h-full relative w-full overflow-x-hidden">
        <div className="col-span-12 xl:col-span-8 h-full">
          {/* head */}
          <div className="p-2 bg-white rounded-lg">
            <div className="flex flex-wrap justify-between border-b pb-2 relative">
              <p className="font-semibold text-md mt-2 xsquis:mt-0">
                Soal ujian
              </p>

              <p className="font-semibold text-md mt-2 xsquis:mt-0 mt-2 border-b-4 border-gray-500">
                {id_ujian && id_ujian === 1
                  ? "Sesi TKBI"
                  : id_ujian === 2
                  ? "Sesi TKDA"
                  : id_ujian === 3
                  ? "Sesi Prodi"
                  : ""}
              </p>

              <button
                className="text-sm px-2 py-1 rounded-md duration-200 hover:bg-opacity-80 bg-orange text-white focus:outline-none"
                onClick={() => history.push("/home")}
              >
                Kembali ke Home
              </button>

              <div className="flex flex-wrap items-center mt-2 xsquis:mt-0 mb-3 xsquis:mb-0">
                <p className="text-orange text-sm mr-3 mt-2 xsquis:mt-0">
                  Sisa waktu
                </p>
                <div className="flex items-center text-sm pl-1 pr-3 py-1 rounded-md bg-orange text-white mr-2 xl:mr-2 mt-2 xsquis:mt-0">
                  {/* icon time */}
                  <IconTime
                    width="19"
                    height="19"
                    fill="white"
                    className="mr-1"
                  />
                  <p>
                    {timeDuration.jam} : {timeDuration.menit} :
                    {timeDuration.detik}
                    {/* {hours} : {minutes} : {seconds} */}
                  </p>
                </div>
                <button
                  className="text-sm px-2 py-1 rounded-md duration-200 hover:bg-opacity-80 bg-orange text-white focus:outline-none mt-2 xsquis:mt-0 mr-2"
                  onClick={() =>
                    setShowBantuan(showBantuan === false ? true : false)
                  }
                >
                  Menu bantuan
                </button>
                <button
                  className="block xl:hidden text-sm px-2 py-1 rounded-md duration-200 hover:bg-opacity-80 bg-orange text-white focus:outline-none mt-2 xsquis:mt-0"
                  onClick={() =>
                    setShowPengawas(showBantuan === false ? true : false)
                  }
                >
                  Navigasi soal
                </button>
              </div>
            </div>
            {/* section soal */}
            <Soal />
          </div>
          {/* bottom section */}
        </div>
        {/* check pengawas */}
        <div
          className={`absolute xl:static top-0  ${
            showPengawas === false
              ? "right-250% xsquis:right-130% md:-right-full"
              : "right-0"
          }  col-span-12 xl:static xl:col-span-4 bg-white xl:bg-auto max-w-xl xl:max-w-none h-screen xl:h-auto overflow-y-scroll border-2 xl:border-none duration-300 rounded-lg scroll-hidden`}
        >
          <div className="bg-white p-3 rounded-lg relative">
            {/* <div
              className="hidden lg:flex items-center px-4 py-2 rounded-lg bg-green1 max-w-max text-sm text-white mb-2 cursor-pointer hover:bg-opacity-80"
              onClick={() => setShowBantuan(false)}
            >
              <IconClose className="mr-2" fill="white" />
              <p>Close bantuan</p>
            </div> */}
            <button
              className="bg-blue text-white rounded-lg px-3 py-1 text-sm mb-2 outline-none focus:outline-none duration-200 hover:bg-opacity-80 block xl:hidden"
              onClick={() => setShowPengawas(false)}
            >
              Close
            </button>

            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1">
                <div className="relative h-full">
                  <p className="font-extrabold text-red-600 absolute right-3 text-6xl">
                    !
                  </p>
                  <img src={IconHero} />
                  <div className="absolute bottom-0 left-0 right-0 bg-green1 rounded-br-lg rounded-bl-lg">
                    <p className="text-white p-2 font-semibold text-xs">
                      Pengawas
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative h-full">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    mirrored={true}
                  />
                  <div className="absolute bottom-0 left-0 right-0 rounded-br-lg rounded-bl-lg bg-green1 p-2">
                    <p className="text-white font-semibold text-xs">
                      Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* navigasi soal */}
            <NavigasiPengawas />
          </div>
        </div>

        {/* Bantuan */}
        <div
          className={`absolute top-0  ${
            showBantuan === false
              ? "right-250% xsquis:right-130% md:-right-full"
              : "right-0"
          }  col-span-12 xl:col-span-4 bg-white xl:bg-auto max-w-xl xl:max-w-none h-screen overflow-y-scroll scroll-hidden border-2 xl:border duration-300`}
        >
          <div className="bg-white p-3 rounded-lg mt-3">
            <div className="pb-3 border-b flex items-center justify-between">
              <div className="flex items-center">
                <IconAsk className="mr-2" />
                <p className="text-gray-600 font-semibold text-xs">
                  Chat bantuan
                </p>
              </div>
              <button
                className="bg-blue text-white rounded-lg px-3 py-1 text-sm outline-none focus:outline-none duration-200 hover:bg-opacity-80"
                onClick={() => setShowBantuan(false)}
              >
                Close
              </button>
            </div>

            <ul
              className="mt-4 overflow-y-scroll scroll-hidden"
              style={{ height: "72vh" }}
            >
              <li className="flex items-start justify-center flex-col w-full text-gray-500 font-semibold text-xs">
                <p className="text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-gray-200 flex items-center justify-between mt-2">
                  <p className="mr-7">
                    Jika mengalami kesulitan, tulis keterangan
                  </p>
                  <p>12:30</p>
                </div>
              </li>
              <li className="flex items-end justify-center flex-col w-full text-white font-semibold text-xs mt-4">
                <p className="text-right text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-green1 flex items-center justify-between mt-2">
                  <p className="mr-7">Baik, terimakasih!</p>
                  <p>12:32</p>
                </div>
              </li>
              <li className="flex items-start justify-center flex-col w-full text-gray-500 font-semibold text-xs">
                <p className="text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-gray-200 flex items-center justify-between mt-2">
                  <p className="mr-7">Apakah sudah lancar?</p>
                  <p>12:36</p>
                </div>
              </li>
              <li className="flex items-end justify-center flex-col w-full text-white font-semibold text-xs mt-4">
                <p className="text-right text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-green1 flex items-center justify-between mt-2">
                  <p className="mr-7">Lancar pak...</p>
                  <p>12:39</p>
                </div>
              </li>
              <li className="flex items-start justify-center flex-col w-full text-gray-500 font-semibold text-xs">
                <p className="text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-gray-200 flex items-center justify-between mt-2">
                  <p className="mr-7">Apakah sudah lancar?</p>
                  <p>12:36</p>
                </div>
              </li>
              <li className="flex items-end justify-center flex-col w-full text-white font-semibold text-xs mt-4">
                <p className="text-right text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-green1 flex items-center justify-between mt-2">
                  <p className="mr-7">Lancar pak...</p>
                  <p>12:39</p>
                </div>
              </li>
              <li className="flex items-start justify-center flex-col w-full text-gray-500 font-semibold text-xs">
                <p className="text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-gray-200 flex items-center justify-between mt-2">
                  <p className="mr-7">Apakah sudah lancar?</p>
                  <p>12:36</p>
                </div>
              </li>
              <li className="flex items-end justify-center flex-col w-full text-white font-semibold text-xs mt-4">
                <p className="text-right text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-green1 flex items-center justify-between mt-2">
                  <p className="mr-7">Lancar pak...</p>
                  <p>12:39</p>
                </div>
              </li>

              <li className="flex items-start justify-center flex-col w-full text-gray-500 font-semibold text-xs">
                <p className="text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-gray-200 flex items-center justify-between mt-2">
                  <p className="mr-7">Apakah sudah lancar?</p>
                  <p>12:36</p>
                </div>
              </li>
              <li className="flex items-end justify-center flex-col w-full text-white font-semibold text-xs mt-4">
                <p className="text-right text-gray-600">Pengawas</p>
                <div className="p-2 rounded-lg bg-green1 flex items-center justify-between mt-2">
                  <p className="mr-7">Lancar pak...</p>
                  <p>12:39</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="absolute md:static flex items-center px-4 bottom-3 w-full border-t pt-2">
            <input
              type="text"
              className="border rounded-lg p-2 text-gray-600 border-gray-300 focus-within:outline-none text-xs mr-3 w-full"
              placeholder="Ketikan pesan ..."
            />
            <button className="bg-green1 h-8 w-10 rounded-lg relative hover:bg-opacity-80">
              <IconArrow className="absolute top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2" />
            </button>
          </div>
        </div>
        {/* timeout */}
        <Modal
          show={isShow}
          close={() => history.push("/home")}
          header={
            <h1 className="absolute left-1/2 transform -translate-x-1/2">
              Modal title
            </h1>
          }
          content={
            <div className="absolute inset-0 z-10">
              <h1 className="text-center font-semibold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-full">
                Waktu anda telah habis
              </h1>
              <footer className="absolute bottom-0 w-full left-0 border-t flex justify-center pb-2">
                <button
                  className="mt-2 px-6 py-2 rounded-lg bg-blue text-white hover:bg-opacity-80 duration-200 text-center cursor-pointer outline-none focus:outline-none"
                  onClick={() => history.push("/home")}
                >
                  Kembali ke halaman utama
                </button>
              </footer>
            </div>
          }
        />
      </div>
    </div>
  );
}
