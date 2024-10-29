import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const SortDeleteButton = ({ title, setDeleteActive, setPopUpDelete }) => {
  return (
    <button
      onClick={() => {
        setDeleteActive("on");
        setPopUpDelete("notPop");
      }}
      className="flex flex-row  justify-center items-center gap-2 h-full rounded-blueButton py-[9px] px-4 cursor-pointer shadow-[0px_0px_0px_1px_#ff4242] text-instaRed"
    >
      <RxCross1 />
      {title}
    </button>
  );
};

export default SortDeleteButton;
