import React from "react";
import IconKey from "assets/icon/Key";
import IconMessage from "assets/icon/Message";
import IconSetting from "assets/icon/Setting";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden bg-login">
      {/* overlay */}
      <div className="absolute bg-green-400 inset-0 bg-opacity-50"></div>
      {/* wrap login */}
      <form
        className="flex border rounded-2xl border-gray-500 border-opacity-10 shadow px-16 py-10 flex-col relative z-10 bg-white"
        style={{ width: "497px" }}
      >
        <div className="flex items-center justify-center">
          <IconSetting className="mr-4" />
          <h3 className="text-center text-2xl font-bold text-green">
            Silahkan login
          </h3>
        </div>
        <div className="relative mt-12 mb-4">
          <input
            type="text"
            className="pr-2 outline-none border-b pb-4 border-green1 focus:outline-none duration-200 w-full text-lg text-gray-500 duration-150"
            placeholder="masukan email"
          />
          <IconMessage className="absolute right-4 top-2" />
        </div>
        <div className="relative mt-4">
          <input
            type="text"
            className="pr-2 outline-none border-b pb-4 border-green1 focus:outline-none duration-200 w-full text-lg text-gray-500 duration-150"
            placeholder="masukan password"
          />
          <IconKey className="absolute right-4 top-2" />
        </div>

        <button className="py-3 mt-14 bg-green1 px-4 border rounded-lg duration-200 text-white font-semibold text-xl hover:bg-opacity-80">
          Masuk
        </button>
      </form>
    </div>
  );
}
