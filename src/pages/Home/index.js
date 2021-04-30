import React from "react";
import IconAccount from "assets/icon/Account";
import IconAlert from "assets/icon/Alert";
import IconTime from "assets/icon/Time";
import IconHero from "assets/icon/ImageHero.svg";
// import Intersect from "assets/icon/Intersect.svg";
// import Intersect1 from "assets/icon/Intersect (1).svg";
import Modal from "components/Modal";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="w-screen h-screen bg-home relative p-4">
      {/* itersect */}
      {/* <img src={Intersect} className="absolute" /> */}
      {/* <img src={Intersect1} /> */}
      <Modal
        header={
          <h1 className="absolute font-semibold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transform">
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
              <img src={IconHero} />
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-12 h-full">
        <div className="col-span-5 h-full py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-white text-2xl">
              S<span className="font-normal">IA</span>
            </h1>
            <div className="flex items-center text-xl">
              <p className="text-white mr-4">Rahmat Hidayatullah</p>
              <IconAccount />
            </div>
          </div>
          {/* many text */}
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <h1 className="text-4xl text-white">
              <span className="font-semibold">Selamat datang&nbsp;</span>di, SIA
              !
            </h1>
            <h2 className="pb-5 border-b-2 border-white text-white">
              berikut adalah panduan ujian{" "}
            </h2>
            <ul className="mt-4 text-white">
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
        <div className="col-span-7 h-full">
          <div className="bg-white p-4 h-full">
            <div className="w-full flex justify-center items-center bg-orange py-4">
              <IconAlert className="mr-4" />
              <h1 className="text-white">
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
            <div className="w-full justify-center items-center flex-col flex mt-12">
              <div className="w-32 h-32 border rounded-2xl">
                {/* here image */}
                <div className="relative">
                  <img src={IconHero} />
                </div>
              </div>
              <h1 className="mt-4 font-semibold text-green1 text-2xl">
                Rahmat Hidayatullah
              </h1>
              <hr />
            </div>
            {/* list identitas text */}
            <div className="grid grid-cols-3 gap-8 mt-6 px-10">
              <div className="col-span-1">
                <div className="rounded-lg px-6 py-3 text-white border bg-card">
                  <p className="font-bold">Nomor tes</p>
                  <p>0232893434232</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-lg px-6 py-3 text-white border bg-card">
                  <p className="font-bold">Nomor tes</p>
                  <p>0232893434232</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-lg px-6 py-3 text-white border bg-card">
                  <p className="font-bold">Nomor tes</p>
                  <p>0232893434232</p>
                </div>
              </div>
            </div>
            {/* list waktu tes */}
            <div className="grid grid-cols-2 gap-8 mt-6 px-10">
              <div className="col-span-1">
                <div className="flex items-center w-full justify-between shadow-lg px-4 py-2 rounded-lg">
                  <div className="text-green">
                    <p className="font-bold">Waktu simulasi</p>
                    <p>08.00 , 12/03/2020</p>
                  </div>
                  <IconTime />
                </div>
              </div>
              <div className="col-span-1">
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
            <div className="flex w-full justify-center items-center mt-10">
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
