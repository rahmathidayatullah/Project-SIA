import React from "react";

export default function Alert({ width, height, className }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99976 6.60034V10.6004"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.99976 13.4005V13.8005"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1.18524 14.6133L7.67978 1.84182C8.25019 0.719394 9.75183 0.719394 10.3214 1.84182L16.8152 14.6133C17.36 15.6885 16.6352 17.0005 15.4927 17.0005H2.50607C1.36444 17.0005 0.638826 15.6885 1.18604 14.6133H1.18524Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Alert.defaultProps = {
  widht: "18",
  height: "18",
};
