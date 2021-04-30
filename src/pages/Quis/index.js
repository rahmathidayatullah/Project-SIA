import * as React from "react";
import IconTime from "assets/icon/Time";
import IconNavigasi from "assets/icon/Navigasi";
import IconAsk from "assets/icon/Ask";
import IconArrow from "assets/icon/Arrow";
import IconHero from "assets/icon/ImageHero.svg";
import Webcam from 'react-webcam'

export default function Quiz() {
  const [image, setImage] = React.useState("")
  const [field, setField] = React.useState({
    image: ''
  })

  const webcamRef = React.useRef(null)

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
  }, [webcamRef])

  const handleSaveImage = () => {
    setField({ ...field, image: image })
  }
  return (
    <div className="bg-gray2 h-screen p-3">
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className="col-span-8 h-full">
          {/* head */}
          <div className="p-2 bg-white rounded-lg">
            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold text-md">Soal ujian</p>
              <div className="flex items-center">
                <p className="text-orange text-sm mr-3">Sisa waktu</p>
                <div className="flex items-center text-sm pl-1 pr-3 py-1 rounded-md bg-orange text-white">
                  {/* icon time */}
                  <IconTime
                    width="19"
                    height="19"
                    fill="white"
                    className="mr-1"
                  />
                  <p>12 : 00 : 00</p>
                </div>
              </div>
            </div>
            {/* section soal */}
            <div
              className="border relative overflow-y-scroll"
              style={{ height: "52vh" }}
            >
              {/* form soal */}
              <div className="p-4">
                <h1 className="font-bold">Pertanyaan 1</h1>
                <p className="mt-3 text-sm">
                  1) Dalam skala Richter, kekuatan R dari suatu gempa bumi
                  dengan intensitas I dimodelkan dengan, di mana I 0 = 1
                  merupakan intensitas minimum yang digunakan untuk
                  perbandingan. Intensitas masing-masing gempa bumi berikut
                  adalah….. (Intensitas merupakan ukuran energy gelombang dari
                  suatu gempa bumi D. I. Yogyakarta dan Klaten pada tahun 2006 :
                  R = 5,9)
                </p>
                <div className="flex items-center mr-3 mt-4">
                  <div className="rounded-lg text-xs bg-green1 text-white p-2 mr-3 hover:bg-opacity-80 duration-200 cursor-pointer">
                    <p>A. 316.000.000</p>
                  </div>
                  <div className="rounded-lg text-xs bg-white text-gray-600 border border-gray-400 p-2 mr-3 hover:bg-green1 duration-200 hover:text-white cursor-pointer">
                    <p>B. 214.000.000</p>
                  </div>
                  <div className="rounded-lg text-xs bg-white text-gray-600 border border-gray-400 p-2 mr-3 hover:bg-green1 duration-200 hover:text-white cursor-pointer">
                    <p>C. 214.000.000</p>
                  </div>
                  <div className="rounded-lg text-xs bg-white text-gray-600 border border-gray-400 p-2 hover:bg-green1 duration-200 hover:text-white cursor-pointer">
                    <p>D. 214.000.000</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 flex justify-between items-center w-full p-2">
                <div className="flex items-center">
                  <button className="px-4 py-2 bg-blue rounded-lg text-white text-sm mr-3 hover:bg-opacity-80 duration-200">
                    Sebelumnya
                  </button>
                  <button className="px-4 py-2 bg-blue rounded-lg text-white text-sm hover:bg-opacity-80 duration-200">
                    Lanjut
                  </button>
                </div>
                <div className="flex items-center">
                  <p className="text-xs text-gray-600 mr-3">Progress</p>
                  <div className="w-48 h-6 rounded-2xl bg-white relative border overflow-hidden">
                    <div className="absolute inset-0 bg-green1 w-3/5 rounded-2xl">
                      <p className="absolute text-white top-1/2 transform left-2 -translate-y-1/2 text-litle">
                        87%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="col-span-1">
              <div className="rounded-lg bg-white px-4 py-5">
                {/* head */}
                <div className="flex items-center justify-between pb-2 border-b">
                  <div className="flex items-center">
                    {/* icon navigasi */}
                    <IconNavigasi className="mr-1" />
                    <p className="text-litle font-semibold text-gray-500">
                      Navigasi
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <div className="h-3 w-3 rounded-full mr-1 bg-blue"></div>
                      {/* div bullet */}
                      <p className="text-litle text-blue font-semibold">
                        Sekarang
                      </p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      {/* div bullet */}
                      <div className="h-3 w-3 rounded-full mr-1 bg-green1 mr-1"></div>
                      <p className="text-litle text-green1">Terjawab (10)</p>
                    </div>
                    <div className="flex items-center">
                      {/* div bullet */}
                      <div className="h-3 w-3 rounded-full mr-1 bg-orange mr-1"></div>
                      <p className="text-litle text-orange font-semibold">
                        Belum dijawab (13)
                      </p>
                    </div>
                  </div>
                </div>
                {/* body */}
                <div className="grid grid-cols-8 gap-2 mt-4">
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-blue hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-blue hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-orange hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-orange hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-green-600 hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2 font-semibold">
                      1
                    </p>
                  </button>
                  <button className="col-span-1 rounded-lg bg-orange hover:bg-opacity-80 duration-200">
                    <p className="text-white text-center text-xs py-2">1</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-lg bg-white px-4 py-5">
                <div className="flex items-center justify-between pb-2 border-b">
                  <div className="flex items-center">
                    {/* icon navigasi */}
                    <IconNavigasi className="mr-1" />
                    <p className="text-litle font-semibold text-gray-500">
                      Keterangan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-white p-3 rounded-lg">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1">
                <div className="h-44 w-full relative border rounded-lg flex justify-center">
                  {/* here image */}
                  <div className="relative">
                    {/* <img src={IconHero} /> */}
                    <div className="d-flex flex-column wrapVideos">
                      <Webcam
                        audio={false}
                        height={420}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={'500'}
                        mirrored={true}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-green1 rounded-br-lg rounded-bl-lg">
                    <p className="text-white p-2 font-semibold text-xs">
                      Pengawas
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="h-44 w-full relative border rounded-lg flex justify-center">
                  {/* here image */}
                  <div className="relative">
                    {/* <img src={IconHero} /> */}
                    <div className="d-flex flex-column wrapVideos">
                      <Webcam
                        audio={false}
                        height={420}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={'500'}
                        mirrored={true}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 rounded-br-lg rounded-bl-lg bg-green1 p-2">
                    <p className="text-white font-semibold text-xs">
                      Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg mt-3">
            <div className="pb-3 border-b flex items-center">
              <IconAsk className="mr-2" />
              <p className="text-gray-600 font-semibold text-xs">
                Chat bantuan
              </p>
            </div>

            <ul className="mt-4">
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
            </ul>
            <div className="relative flex items-center mt-5">
              <input
                type="text"
                className="border rounded-lg p-2 text-gray-600 border-gray-300 focus-within:outline-none text-xs mr-3 w-4/5"
                placeholder="Ketikan pesan ..."
              />
              <button className="bg-green1 h-8 w-10 rounded-lg relative hover:bg-opacity-80">
                <IconArrow className="absolute top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
