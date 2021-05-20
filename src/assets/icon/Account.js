import React from "react";

export default function Account({ width, height, fill, className, onClick }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.65 6H21V8H13.65V6ZM14.7 10H21V12H14.7V10ZM12.6 2H21V4H12.6V2ZM2.1 14H12.6V13C12.6 10.243 10.2448 8 7.35 8H5.25C2.35515 8 0 10.243 0 13V14H2.1ZM6.3 7C8.39475 7 9.975 5.495 9.975 3.5C9.975 1.505 8.39475 0 6.3 0C4.20525 0 2.625 1.505 2.625 3.5C2.625 5.495 4.20525 7 6.3 7Z"
        fill={fill}
      />
    </svg>
  );
}

Account.defaultProps = {
  width: "21",
  height: "14",
  fill: "white",
};
