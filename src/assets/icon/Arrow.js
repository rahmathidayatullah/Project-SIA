import React from "react";

export default function Arrow({
  width,
  height,
  className,
  strokeColor,
  strokeWidth,
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.08596 11.0001H3.66663L1.85438 3.79048C1.84277 3.74858 1.83571 3.70556 1.8333 3.66215C1.81313 3.00123 2.54096 2.5429 3.17163 2.8454L20.1666 11.0001L3.17163 19.1547C2.5483 19.4545 1.82963 19.009 1.8333 18.36C1.83515 18.302 1.84534 18.2446 1.86355 18.1895L3.2083 13.7501"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
Arrow.defaultProps = {
  width: "22",
  height: "22",
  strokeColor: "white",
  strokeWidth: "2",
};
