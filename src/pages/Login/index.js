import React from "react";
import IconKey from "assets/icon/Key";
import IconMessage from "assets/icon/Message";
import IconSetting from "assets/icon/Setting";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden bg-login">
      {/* overlay */}
      <div className="absolute bg-green-400 inset-0 bg-opacity-50"></div>
      {/* wrap login */}
      <form className="flex border rounded-2xl border-gray-500 border-opacity-10 shadow-none sm:shadow px-2 py-2 sm:px-16 sm:py-10 flex-col relative z-10 bg-white bg-opacity-0 sm:bg-opacity-100 w-497px mx-4 sm:mx-0">
        <div className="flex items-center justify-start sm:justify-center text-white sm:text-green pb-2 sm:pb-0 border-b sm:border-none">
          <IconSetting className="mr-4" fill="currentColor" />
          <h3 className="text-center text-lg sm:text-2xl font-bold currentColor">
            Silahkan login
          </h3>
        </div>
        <div className="relative mt-12 mb-4 text-white sm:text-green1">
          <input
            type="text"
            className="bg-transparent sm:bg-white pr-2 outline-none sm:border-b py-2 sm:pt-0 rounded-none placeholder-white sm:placeholder-gray-400 pl-4 sm:pl-0 sm:pb-4 border-b  border-white sm:border-green1 focus:outline-none duration-200 w-full text-sm sm:text-lg text-white sm:text-gray-500 duration-150"
            placeholder="masukan email"
          />
          <IconMessage className="absolute right-4 top-2" fill="currentColor" />
        </div>
        <div className="relative mt-4 text-white sm:text-green1">
          <input
            type="text"
            className="bg-transparent sm:bg-white pr-2 outline-none sm:border-b py-2 sm:pt-0 rounded-none placeholder-white sm:placeholder-gray-400 pl-4 sm:pl-0 sm:pb-4 border-b  border-white sm:border-green1 focus:outline-none duration-200 w-full text-sm sm:text-lg text-white sm:text-gray-500 duration-150"
            placeholder="masukan password"
          />
          <IconKey className="absolute right-4 top-2" fill="currentColor" />
        </div>

        <Link
          to="/home"
          className="py-2 sm:py-3 mt-14 bg-white sm:bg-green1 px-4 border rounded-lg duration-200 text-green1 sm:text-white font-semibold text-sm sm:text-xl sm:hover:bg-opacity-80 cursor-pointer text-center"
        >
          Masuk
        </Link>
      </form>
    </div>
  );
}
