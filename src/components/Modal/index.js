import React from "react";
import IconClose from "assets/icon/Close";
import IconKamera from "assets/icon/Kamera";
import IconCheck from "assets/icon/Check";

export default function Modal({ show, close, header, content, footer }) {
  return (
    <div
      className={`fixed h-screen inset-0 w-full bg-black bg-opacity-80 z-10 duration-200 ${
        show ? "top-0" : "-top-full"
      }`}
    >
      <div
        className="bg-white absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg h-96 w-96"
        style={{ maxHeight: "100vh" }}
      >
        {/* head */}
        <div className="flex items-center justify-between p-4 border-b relative">
          {header}
          <IconClose onClick={close} />
        </div>

        {/* body */}
        <div>{content}</div>
        {/* foot */}
        <div className="absolute left-0 bottom-0 flex items-center justify-between w-full p-4 border-t bg-white rounded-bl-lg rounded-br-lg">
          <button className="px-4 py-2 rounded-lg border bg-blue font-medium text-white text-sm hover:bg-opacity-80 duration-200 flex items-center">
            <IconKamera className="mr-2" />
            <p>Ambil foto</p>
          </button>
          <button className="px-4 py-2 rounded-lg border bg-orange font-medium text-white text-sm hover:bg-opacity-80 duration-200 flex items-center">
            <IconCheck className="mr-2" />
            <p>Selesai</p>
          </button>
          {footer}
        </div>
      </div>
    </div>
  );
}
