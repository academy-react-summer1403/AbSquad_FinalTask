import React from "react";
import { HiArrowUpLeft } from "react-icons/hi2";
const ArrowIcon = ({ style, arrowColor }) => {
  return (
    <span
      className={`flex flex-row justify-center items-center rounded-full w-12 h-12 absolute left-4 ${style}`}
    >
      <HiArrowUpLeft color={arrowColor} size="20px" />
    </span>
  );
};

export default ArrowIcon;
