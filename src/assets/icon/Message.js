import React from "react";

export default function Message({ width, height, className, fill }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.1875 1.15625L0.78125 0.5625H16.2188L16.8125 1.15625V11.8438L16.2188 12.4375H0.78125L0.1875 11.8438V1.15625ZM1.375 2.38531V11.25H15.625V2.3865L8.86813 7.56875H8.14375L1.375 2.38531ZM14.4731 1.75H2.52688L8.5 6.34444L14.4731 1.75Z"
        fill={fill}
      />
    </svg>
  );
}
Message.defaultProps = {
  width: "17",
  height: "13",
  fill: "#0CA593",
};
