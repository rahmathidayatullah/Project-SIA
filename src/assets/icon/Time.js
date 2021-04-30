import React from "react";

export default function Time({ width, height, fill, className }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 39 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.9602 16.3134H26.255C26.0882 16.3134 25.9517 16.4499 25.9517 16.6167V18.4365C25.9517 18.6033 26.0882 18.7398 26.255 18.7398H35.9602C36.127 18.7398 36.2635 18.6033 36.2635 18.4365V16.6167C36.2635 16.4499 36.127 16.3134 35.9602 16.3134ZM30.8801 21.4693H26.255C26.0882 21.4693 25.9517 21.6058 25.9517 21.7726V23.5924C25.9517 23.7592 26.0882 23.8957 26.255 23.8957H30.8801C31.047 23.8957 31.1834 23.7592 31.1834 23.5924V21.7726C31.1834 21.6058 31.047 21.4693 30.8801 21.4693ZM18.2292 12.9204H16.5877C16.3526 12.9204 16.1631 13.11 16.1631 13.345V22.747C16.1631 22.8834 16.2275 23.0085 16.3375 23.0881L21.9824 27.2053C22.172 27.3418 22.4374 27.3039 22.5738 27.1143L23.5482 25.7836V25.7798C23.6846 25.5903 23.6429 25.3249 23.4534 25.1884L18.65 21.7158V13.345C18.6538 13.11 18.4605 12.9204 18.2292 12.9204Z"
        fill={fill}
      />
      <path
        d="M30.6451 26.2423H28.4539C28.2416 26.2423 28.0406 26.3523 27.9269 26.5342C27.4454 27.2962 26.8843 28.0014 26.2399 28.6459C25.1291 29.7567 23.8363 30.6286 22.3995 31.2352C20.9096 31.8645 19.3287 32.183 17.6985 32.183C16.0645 32.183 14.4836 31.8645 12.9975 31.2352C11.5607 30.6286 10.2679 29.7567 9.15715 28.6459C8.04636 27.5351 7.1744 26.2423 6.56783 24.8055C5.9385 23.3194 5.62005 21.7385 5.62005 20.1045C5.62005 18.4706 5.9385 16.8935 6.56783 15.4035C7.1744 13.9667 8.04636 12.674 9.15715 11.5632C10.2679 10.4524 11.5607 9.58041 12.9975 8.97384C14.4836 8.34451 16.0683 8.02606 17.6985 8.02606C19.3325 8.02606 20.9134 8.34451 22.3995 8.97384C23.8363 9.58041 25.1291 10.4524 26.2399 11.5632C26.8843 12.2076 27.4454 12.9128 27.9269 13.6748C28.0406 13.8568 28.2416 13.9667 28.4539 13.9667H30.6451C30.9067 13.9667 31.0735 13.6938 30.956 13.4625C28.4842 8.54544 23.4724 5.34954 17.8767 5.28509C9.68411 5.18273 2.87908 11.8892 2.86392 20.0742C2.84875 28.2743 9.49456 34.9277 17.6947 34.9277C23.3624 34.9277 28.4577 31.7205 30.956 26.7465C31.0735 26.5153 30.9029 26.2423 30.6451 26.2423Z"
        fill={fill}
      />
    </svg>
  );
}

Time.defaultProps = {
  width: "39",
  height: "40",
  fill: "#128C7E",
};
