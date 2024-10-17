import React from "react";
import ArrowLeftComp from "./ArrowLeftComp";
import { PiUserCircleDashed } from "react-icons/pi";
import { AiOutlineProfile } from "react-icons/ai";
const ReserveVisual = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full gap-2">
        <ArrowLeftComp style={"relative bottom-3 max-sm:text-sm"} />
        <div className="flex flex-col justify-center items-center ">
          <div className="bg-primaryBlue sm:p-[28px] p-1 rounded-full">
            <PiUserCircleDashed size="48px" className="text-primaryWhite" />
          </div>
          <span className="sm:text-xl text-sm">رزرو من</span>
        </div>
        <ArrowLeftComp style={"relative bottom-3 max-sm:text-sm"} />

        <div className="flex flex-col justify-center items-center">
          <div className="border-[5px] border-primaryGray sm:p-[28px] p-1 rounded-full">
            <AiOutlineProfile size="48px" className="text-primaryBlack" />
          </div>
          <span className="sm:text-xl text-sm">دوره من</span>
        </div>
      </div>
    </>
  );
};

export default ReserveVisual;
