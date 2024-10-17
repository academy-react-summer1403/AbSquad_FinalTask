import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
const ArrowLeftComp = ({ style }) => {
  return (
    <span className={`flex items-center text-xl ${style} `}>
      ------------------
      <MdKeyboardArrowLeft className="relative sm:left-[7px] left-[5px] sm:top-[1px] top-[0px]" />
    </span>
  );
};

export default ArrowLeftComp;
