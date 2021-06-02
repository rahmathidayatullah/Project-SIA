import React from "react";
import IconClose from "assets/icon/Close";

export default function Modal({ show, close, header, content, footer }) {
  return (
    <div
      className={`fixed h-screen inset-0 w-full bg-black bg-opacity-80 z-10 duration-200 ${
        show ? "top-0" : "top-130%"
      }`}
    >
      <div
        className="bg-white absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg h-96 w-full xshome:w-96"
        style={{ maxHeight: "100vh" }}
      >
        {/* head */}
        <div className="flex items-center justify-between p-4 border-b relative z-10 bg-white rounded-tr-lg rounded-tl-lg z-50">
          {header}
          <IconClose onClick={close} />
        </div>

        {/* body */}
        {content}
        {/* foot */}
        {footer}
      </div>
    </div>
  );
}
