import React from "react";
import { RxCross1 } from "react-icons/rx";
const CloseBtn = ({ setNavOpen }) => {
  return (
    <>
      <button
        onClick={() => {
          setNavOpen("close");
        }}
        className="flex flex-row  justify-center items-center gap-2 h-full rounded-blueButton py-[9px] px-4 cursor-pointer shadow-[0px_0px_0px_1px_#ff4242] text-instaRed"
      >
        <RxCross1 />
        بستن
      </button>
    </>
  );
};

export default CloseBtn;
