import React, { useState, useEffect } from "react";
import IconAccount from "assets/icon/Account";
import IconAlert from "assets/icon/Alert";
import IconTime from "assets/icon/Time";
import IconHero from "assets/icon/rahmatpng.png";
import IconKamera from "assets/icon/Kamera";
import IconCheck from "assets/icon/Check";
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
    <div className="w-screen lg:h-screen bg-home relative lg:p-4 overflow-y-scroll lg:overflow-hidden z-20">
      {/* itersect */}
      {/* <img src={Intersect} className="absolute" /> */}
      {/* <img src={Intersect1} /> */}
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
      <div className="grid grid-cols-12  h-full">
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
                      {/* icon logout */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* many text */}
          <div className="mt-10">
            <h1 className="text-base xshome:text-2xl xl:text-4xl text-white">
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
             xshome:text-sm 
              xl:text-base"
            >
              berikut adalah panduan ujian{" "}
            </h2>
            <ul className="mt-4 text-white text-litle xshome:text-xs xl:text-base">
              <li>1. Berdoalah sebelum mengejakan</li>
              <li>2. Peraturan :</li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;A. Ujian akan berlangsung dengan
                pantauan
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;B. Dilarang melakukan kecurangan dalam
                bentuk apapun
              </li>
              <li>3. Waktu ujjian akan dimulai ketika anda menekan Tombol </li>
            </ul>
          </div>
          {/* describe tkba tkd prodi */}
          <div
            className="bg-white rounded-md mt-10
          "
          >
            {/* here looping */}
            {sesi_ujian &&
              sesi_ujian.map((items, i) => {
                return (
                  <div
                    className="flex items-center w-full justify-between px-4 py-2 rounded-lg pb-3 border-b"
                    key={i}
                  >
                    <div className="text-green">
                      <p className="font-bold text-xs md:text-sm xl:text-base">
                        Sesi tes {items.nama_sesi_ujian}
                      </p>
                      <p className="text-xs md:text-sm mt-2">
                        Mulai pukul : {items.waktu_mulai}
                      </p>
                      <p className="text-xs md:text-sm">
                        Berakhir pukul : {items.waktu_selesai}
                      </p>
                      <p className="text-xs md:text-sm">
                        Waktu tes : {items.waktu_tes} Menit
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <IconTime className="hidden sm:block" />
                      <button
                        className="mt-2 px-6 py-2 rounded-lg bg-blue text-white hover:bg-opacity-80 duration-200 text-center cursor-pointer outline-none focus:outline-none"
                        onClick={() => verifikasiImage(items.id_sesi_ujian, i)}
                      >
                        Mulai Ujian
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 h-full overflow-y-scroll bg-white rounded-sm">
          <div className="p-4 h-full">
            {/* overlay validate camera */}

            {/* <div className="w-full flex justify-center items-center bg-orange py-2 xl:py-4 rounded-sm relative">
              <IconAlert className="mr-4 order-2 sm:order-none" />
              <h1 className="text-white text-litle xshome:text-sm xl:text-base order-1 sm:order-none pl-4 sm:pl-0">
                Validasi foto anda sebelum mulai ujian,&nbsp;
                <span
                  className="font-semibold cursor-pointer border-b border-transparent hover:border-white duration-150"
                  onClick={() => setShowModal(true)}
                >
                  klik untuk validasi
                </span>
              </h1>
            </div> */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-2 sm:mx-0 w-full">
              {/* card here */}
              <div className="rounded-lg bg-gray-400 px-10 py-6 bg-opacity-5 w-full shadow-md">
                <div className="grid gap-4 grid-cols-5">
                  <div className="col-span-3">
                    <div>
                      <h1 className="text-2xl font-bold pb-2 border-b border-green1 border-opacity-30 text-gray-600 mb-4">
                        {user && user.nama}
                      </h1>

                      <div>
                        <p className="font-normal text-gray-500 text-sm tracking-widest">
                          Email
                        </p>
                        <p className="font-semibold text-lg text-gray-500 tracking-widest leading-4">
                          {user && user.email}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="font-normal text-gray-500 text-sm tracking-widest">
                          Jenis kelamin
                        </p>
                        <p className="font-semibold text-lg text-gray-500 tracking-widest">
                          {user && user.jenis_kelamin === "L"
                            ? "Laki -laki"
                            : "Perempuan"}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="font-normal text-gray-500 text-sm tracking-widest leading-4">
                          Tanggal lahir
                        </p>
                        <p className="font-semibold text-gray-500 tracking-widest">
                          {user && user.tanggal_lahir}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="font-normal text-gray-500 text-sm tracking-widest leading-4">
                          Nomor handphone
                        </p>
                        <p className="font-semibold text-gray-500 tracking-widest">
                          {user && user.telepon}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="relative w-full h-full">
                      {/* <img
                        className="w-full rounded-lg absolute right-5 -top-11"
                        style={{ height: "135%" }}
                        src={image === "" ? IconHero : image}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* image profile */}
              {/* <div className="w-full justify-center items-center flex-col flex order-1 sm:order-none">
                <div className="w-32 h-32 border-2 rounded-2xl overflow-hidden">
                  <div className="h-full flex items-center">
                    <img className="" src={image === "" ? IconHero : image} />
                  </div>
                </div>

                <hr />
              </div> */}
            </div>
            {/* list identitas text */}
            {/* <div className="grid grid-cols-3 gap-2 xl:gap-8 mt-2 xl:mt-20 px-2 text-xs xshome:text-sm xl:text-base">
              <div className="col-span-3 sm:col-span-1">
                <div className="rounded-lg px-2 xl:px-6 py-3 text-white border bg-card">
                  <p className="font-bold">Nomor tes</p>
                  <p>0232893434232</p>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <div className="rounded-lg px-2 xl:px-6 py-3 text-white border bg-card">
                  <p className="font-bold">Nomor tes</p>
                  <p>0232893434232</p>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <div className="rounded-lg px-2 xl:px-6 py-3 text-white border bg-card">
                  <p className="font-bold">Nomor tes</p>
                  <p>0232893434232</p>
                </div>
              </div>
            </div> */}
            {/* list waktu tes */}
            {/* <div className="grid grid-cols-2 gap-2 sm:gap-8 mt-6 px-2 text-xs xshome:text-sm xl:text-base">
              <div className="col-span-2 border sm:border-none sm:col-span-1">
                <div className="flex items-center w-full justify-between shadow-lg px-4 py-2 rounded-lg border">
                  <div className="text-green">
                    <p className="font-bold">Waktu simulasi</p>
                    <p>08.00 , 12/03/2020</p>
                  </div>
                  <IconTime />
                </div>
              </div>
              <div className="col-span-2 border sm:border-none sm:col-span-1">
                <div className="flex items-center w-full justify-between shadow-lg px-4 py-2 rounded-lg border">
                  <div className="text-green">
                    <p className="font-bold">Waktu simulasi</p>
                    <p>08.00 , 12/03/2020</p>
                  </div>
                  <IconTime />
                </div>
              </div>
            </div> */}
            {/* button */}
            <div className="flex w-full justify-center items-center mt-5 xl:mt-10 pb-5 text-litle xshome:text-sm xl:text-base">
              {/* <Link
                to="/quis"
                className="mr-4 px-6 py-2 rounded-lg bg-blue text-white hover:bg-opacity-80 9uration-200 text-center cursor-pointer"
              >
                Mulai Tes
              </Link> */}

              <button
                className="px-6 py-2 rounded-lg bg-blue opacity-50 text-white hover:bg-opacity-80 duration-200 text-center cursor-not-allowed outline-none focus:outline-none"
                disabled
              >
                Mulai Simulasi
              </button>

              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="w-full  mt-3 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
                  placeholder="Nama"
                  type="file"
                  {...register("image")}
                />
                <button
                  className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
                  type="submit"
                ></button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
