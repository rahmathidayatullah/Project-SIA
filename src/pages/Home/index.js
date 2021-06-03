import React, { useState, useEffect } from "react";
import IconAccount from "assets/icon/Account";
import IconAlert from "assets/icon/Alert";
import IconTime from "assets/icon/Time";
import IconHero from "assets/icon/rahmatpng.png";
import IconKamera from "assets/icon/Kamera";
import IconCheck from "assets/icon/Check";
import Intersect from "assets/icon/Intersect.svg";
import Intersect1 from "assets/icon/Intersect (1).svg";
import Modal from "components/Modal";
import Webcam from "react-webcam";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataHome,
  setTimeQuis,
  statusUjianGet,
} from "features/Home/action";
import ReactLoading from "react-loading";
import { sendImage } from "api/home";
//
import { useForm } from "react-hook-form";
import IconFemale from "assets/icon/Female";
import IconMale from "assets/icon/Male";
import IconTanggal from "assets/icon/Tanggal";
import IconPager from "assets/icon/Pager";
import IconPhone from "assets/icon/Phone";

export default function Home() {
  let dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const { user, sesi_ujian } = useSelector((state) => state.home.data);
  const { isUjian } = useSelector((state) => state.home);
  const [toggleLogout, setToggleLogout] = useState("opacity-0");
  const [showModal, setShowModal] = React.useState();
  const [modalLoad, setModalLoad] = useState(false);
  const webcamRef = React.useRef(null);
  const [image, setImage] = React.useState("");
  const [indexSesiQuis, setIndexSesiQuis] = useState(0);

  const { register, handleSubmit, errors, setError } = useForm();

  const onSubmit = async (data) => {
    let image = data.image[0];

    const formData = new FormData();
    console.log("dataaaaaaaaa", image);
  };
  const [field, setField] = React.useState({
    image: "",
  });

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setModalLoad(true);

    console.log("indexSesiQuis", indexSesiQuis);
    try {
      console.log("berhasil get api");
      let { data } = await sendImage(indexSesiQuis, imageSrc);
      console.log("data response success", data);
      setTimeout(() => {
        history.push("/quis");
      }, 2500);
    } catch (error) {
      console.log("gagal get response 1", error);
      console.log("gagal get response 2", error.response);
    }
    dispatch(setTimeQuis());
  }, [webcamRef]);

  // const handleSaveImage = () => {
  //   setField({ ...field, image: image });
  // };

  const logout = () => {
    setToggleLogout("opacity-0");
    localStorage.removeItem("auth");
    history.push("/");
  };

  const verifikasiImage = (id_sesi_ujian, index) => {
    if (isUjian === false) {
      alert("Ujian belum dimulai");
    } else {
      setShowModal(true);
      console.log("id_sesi_ujian", id_sesi_ujian);
      dispatch(statusUjianGet(id_sesi_ujian));
      setIndexSesiQuis(index);
    }
  };

  const closeModalMulti = () => {
    setModalLoad(false);
    // setShowModal(true);
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchDataHome());
    dispatch(statusUjianGet());
  }, []);

  return (
    <div className="w-screen lg:h-screen bg-home relative lg:p-0 overflow-y-scroll lg:overflow-hidden z-20">
      {/* itersect */}
      <img src={Intersect} className="absolute" />
      <img src={Intersect1} className="absolute" />
      {/* modal verifikasi foto */}

      <Modal
        header={
          <h1 className="absolute font-semibold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transform z-10">
            Verifikasi foto
          </h1>
        }
        show={showModal}
        // close modal func 2 set state
        close={() => closeModalMulti()}
        content={
          <div
            className="flex items-center justify-center pt-5 w-full"
            style={{ height: "35vh" }}
          >
            {/* here image */}
            {modalLoad === false ? (
              <div className="relative">
                {/* <img src={IconHero} /> */}
                <div className="d-flex flex-column wrapVideos">
                  <Webcam
                    audio={false}
                    height={420}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={"500"}
                    mirrored={true}
                  />
                </div>
              </div>
            ) : (
              <ReactLoading
                type={"cylon"}
                color={"#B7BDC9"}
                height={168}
                width={120}
              />
            )}
          </div>
        }
        footer={
          <div className="absolute left-0 bottom-0 flex items-center justify-center w-full p-4 border-t bg-white rounded-bl-lg rounded-br-lg">
            {modalLoad === false ? (
              <button
                onClick={capture}
                className="px-4 py-2 rounded-lg border bg-blue font-medium text-white text-sm hover:bg-opacity-80 duration-200 flex items-center focus:outline-none outline-none"
              >
                <IconKamera className="mr-2" />
                <p>Ambil foto</p>
              </button>
            ) : (
              <button
                onClick={capture}
                className="px-4 py-2 rounded-lg border bg-blue font-medium text-white text-sm hover:bg-opacity-80 duration-200 flex items-center focus:outline-none outline-none"
              >
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    // stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing verifikasi foto
              </button>
            )}
            {/* <button
              onClick={() => {
                handleSaveImage();
              }}
              className="px-4 py-2 rounded-lg border bg-orange font-medium text-white text-sm hover:bg-opacity-80 duration-200 flex items-center focus:outline-none outline-none"
            >
              <IconCheck className="mr-2" />
              <p>Selesai</p>
            </button> */}
          </div>
        }
      />
      {/* modal loading when verifikasi image */}
      {/* <Modal content="tes" show={modalLoad} /> */}
      <div className="grid grid-cols-12  h-full relative z-40">
        <div className="col-span-12 lg:col-span-5 h-full py-4 px-6 relative">
          <div className="flex items-center justify-between border-b-2 pb-2 sm:pb-0 sm:border-none">
            <h1 className="font-bold text-white text-2xl">
              S<span className="font-normal">IA</span>
            </h1>
            <div className="flex items-center text-xs xshome:text-xl">
              <p className="text-white mr-4">{auth.user && auth.user.nama}</p>
              <div className="relative">
                <div
                  className="hover:bg-gray-50 hover:bg-opacity-20 cursor-pointer duration-200 p-2"
                  onClick={() =>
                    setToggleLogout(
                      toggleLogout === "opacity-0" ? "opacity-100" : "opacity-0"
                    )
                  }
                >
                  <IconAccount />
                </div>
                <ul
                  className={`${toggleLogout} duration-200 absolute -bottom-12 right-0`}
                >
                  <li
                    className="cursor-pointer duration-200 hover:bg-gray-50 px-4 py-2 bg-white text-gray-600"
                    onClick={() => logout()}
                  >
                    <div className="flex items-center">
                      <p className="text-sm">Logout</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative xl:absolute  top-1/2 transform -translate-y-1/2">
            <h1 className="text-2xl xl:text-4xl text-white">
              <span className="font-semibold">Selamat datang&nbsp;</span>di, SIA
              !
            </h1>
            <h2
              className="
            pb-2 
            sm:pb-5 
            border-b 
            sm:border-b-2 
            border-white
             text-white
             text-xs 
             xshome:text-lg 
              xl:text-base"
            >
              berikut adalah panduan ujian{" "}
            </h2>
            <ul
              className="mt-4 text-white text-xs 
             xshome:text-lg 
              xl:text-base"
            >
              <li>1. Berdoalah sebelum mengejakan</li>
              <li className="mt-2">2. Peraturan :</li>
              <li className="mt-2">
                &nbsp;&nbsp;&nbsp;&nbsp;A. Ujian akan berlangsung dengan
                pantauan
              </li>
              <li className="mt-2">
                &nbsp;&nbsp;&nbsp;&nbsp;B. Dilarang melakukan kecurangan dalam
                bentuk apapun
              </li>
              <li className="mt-2">
                3. Waktu ujjian akan dimulai ketika anda menekan Tombol{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 h-full overflow-y-hidden sm:mt-0 mt-4">
          <div className="h-full flex flex-col items-center bg-white rounded-lg xl:rounded-md m-0 sm:m-4 overflow-y-scroll p-4">
            <div
              className="w-40 h-40 rounded-lg overflow-hidden"
              style={{ minWidth: "10rem", minHeight: "10rem" }}
            >
              <img
                className="w-full rounded-lg"
                src={image === "" ? IconHero : image}
              />
            </div>
            <div className="my-6">
              <h1 className="text-green2 font-semibold text-2xl text-center">
                {user && user.nama}
              </h1>
              <h4 className="font-semibold text-base text-gray2">
                {user && user.email}
              </h4>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="flex items-center rounded-lg p-2 shadow-md border mr-4">
                  <IconMale className="mr-2" />
                  <p className="text-green2 font-semibold text-base">
                    {user && user.jenis_kelamin === "L"
                      ? "Laki -laki"
                      : "Perempuan"}
                  </p>
                </div>
                <div className="flex items-center rounded-lg p-2 shadow-md border">
                  <IconTanggal className="mr-2" />
                  <p className="text-green2 font-semibold text-base">
                    {user && user.tanggal_lahir}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center rounded-lg p-2 shadow-md border mr-4 mt-4">
                  <IconPager className="mr-2" />
                  <p className="text-green2 font-semibold text-base whitespace-nowrap">
                    <span className="font-light text-gray4 mr-2">Id Tes</span>
                    {user && user.id}
                  </p>
                </div>
                <div className="flex items-center rounded-lg p-2 shadow-md border mt-4">
                  <IconPhone className="mr-2" />
                  <p className="text-green2 font-semibold text-base">
                    {user && user.telepon}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="px-6 py-2 my-10 rounded-lg bg-blue opacity-50 text-white hover:bg-opacity-80 duration-200 text-center cursor-not-allowed outline-none focus:outline-none"
              disabled
            >
              Mulai Simulasi
            </button>
            <div className="grid sm:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-full pb-12">
              {sesi_ujian &&
                sesi_ujian.map((items, i) => {
                  return (
                    <div className="col-span-1 mt-6 sm:mt-0" key={i}>
                      <div className="shadow-lg border rounded-lg p-4 relative">
                        <div>
                          <p className="text-xs text-gray3">Durasi</p>
                          <p className="text-green1 text-base font-semibold">
                            {items.waktu_tes} Menit
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs text-gray3">Mulai :</p>
                          <p className="text-green1 text-base font-semibold">
                            {items.waktu_mulai}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs">Berakhir</p>
                          <p className="text-green1 text-base font-semibold">
                            {items.waktu_selesai}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs">Sesi ujian :</p>
                          <p className="text-green1 text-base font-semibold">
                            {items.nama_sesi_ujian}
                          </p>
                        </div>
                        <button
                          className="px-4 py-2 bg-orange rounded-lg text-white text-sm hover:bg-opacity-80 duration-200 focus:outline-none absolute right-0 -bottom-5"
                          onClick={() =>
                            verifikasiImage(items.id_sesi_ujian, i)
                          }
                        >
                          Mulai tes
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
