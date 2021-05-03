import React from "react";
import IconAccount from "assets/icon/Account";
import IconAlert from "assets/icon/Alert";
import IconTime from "assets/icon/Time";
import IconHero from "assets/icon/ImageHero.svg";
import IconKamera from "assets/icon/Kamera";
import IconCheck from "assets/icon/Check";
import Modal from "components/Modal";
import Webcam from "react-webcam";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const webcamRef = React.useRef(null);
  const [image, setImage] = React.useState("");
  const [field, setField] = React.useState({
    image: "",
  });

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const handleSaveImage = () => {
    setField({ ...field, image: image });
  };

  return (
    <div className="w-screen lg:h-screen bg-home relative lg:p-4 overflow-y-scroll lg:overflow-hidden z-20">
      {/* itersect */}
      {/* <img src={Intersect} className="absolute" /> */}
      {/* <img src={Intersect1} /> */}
      <Modal
        header={
          <h1 className="absolute font-semibold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transform ">
            Verifikasi foto
          </h1>
        }
        show={showModal}
        close={() => setShowModal(false)}
        content={
          <div
            className="flex items-center justify-center pt-5 w-full"
            style={{ height: "35vh" }}
          >
            {/* here image */}
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
          </div>
        }
        footer={
          <div className="absolute left-0 bottom-0 flex items-center justify-between w-full p-4 border-t bg-white rounded-bl-lg rounded-br-lg">
            <button
              onClick={capture}
              className="px-4 py-2 rounded-lg border bg-blue font-medium text-white text-sm hover:bg-opacity-80 duration-200 flex items-center focus:outline-none outline-none"
            >
              <IconKamera className="mr-2" />
              <p>Ambil foto</p>
            </button>
            <button
              onClick={() => {
                handleSaveImage();
              }}
              className="px-4 py-2 rounded-lg border bg-orange font-medium text-white text-sm hover:bg-opacity-80 duration-200 flex items-center focus:outline-none outline-none"
            >
              <IconCheck className="mr-2" />
              <p>Selesai</p>
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-12  h-full">
        <div className="col-span-12 lg:col-span-5 h-full py-4 px-6 relative">
          <div className="flex items-center justify-between border-b-2 pb-2 sm:pb-0 sm:border-none">
            <h1 className="font-bold text-white text-2xl">
              S<span className="font-normal">IA</span>
            </h1>
            <div className="flex items-center text-xs xshome:text-xl">
              <p className="text-white mr-4">Rahmat Hidayatullah</p>
              <IconAccount />
            </div>
          </div>
          {/* many text */}
          <div className="static lg:absolute top-1/2 transform-none lg:transform -translate-y-1/2 mt-5 sm:mt-3 lg:mt-0">
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
        </div>
        <div className="col-span-12 lg:col-span-7 h-full overflow-y-scroll bg-white rounded-sm">
          <div className="p-4 h-full">
            <div className="w-full flex justify-center items-center bg-orange py-2 xl:py-4 rounded-sm ">
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
            </div>
            {/* image profile */}
            <div className="w-full justify-center items-center flex-col flex mt-5 xl:mt-12">
              <div className="w-32 h-32 border-2 rounded-2xl overflow-hidden">
                {/* here image */}
                <div className="relative h-full flex items-center">
                  <img className="" src={image === "" ? IconHero : image} />
                </div>
              </div>
              <h1 className="mt-4 font-semibold text-green1 text-base xshome:text-xl xl:text-2xl">
                Rahmat Hidayatullah
              </h1>
              <hr />
            </div>
            {/* list identitas text */}
            <div className="grid grid-cols-3 gap-2 xl:gap-8 mt-2 xl:mt-6 px-2 xl:px-10 text-xs xshome:text-sm xl:text-base">
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
            </div>
            {/* list waktu tes */}
            <div className="grid grid-cols-2 gap-2 sm:gap-8 mt-6 px-2 xl:px-10 text-xs xshome:text-sm xl:text-base">
              <div className="col-span-2 border sm:border-none sm:col-span-1">
                <div className="flex items-center w-full justify-between shadow-lg px-4 py-2 rounded-lg">
                  <div className="text-green">
                    <p className="font-bold">Waktu simulasi</p>
                    <p>08.00 , 12/03/2020</p>
                  </div>
                  <IconTime />
                </div>
              </div>
              <div className="col-span-2 border sm:border-none sm:col-span-1">
                <div className="flex items-center w-full justify-between shadow-lg px-4 py-2 rounded-lg">
                  <div className="text-green">
                    <p className="font-bold">Waktu simulasi</p>
                    <p>08.00 , 12/03/2020</p>
                  </div>
                  <IconTime />
                </div>
              </div>
            </div>
            {/* button */}
            <div className="flex w-full justify-center items-center mt-5 xl:mt-10 pb-5 text-litle xshome:text-sm xl:text-base">
              <button className="mr-4 px-6 py-2 rounded-lg bg-blue text-white hover:bg-opacity-80 9uration-200">
                Mulai simulasi
              </button>
              <button className=" px-6 py-2 rounded-lg bg-orange text-white hover:bg-opacity-90 duration-200">
                Mulai simulasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
