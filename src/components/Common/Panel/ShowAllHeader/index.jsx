import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
const ShowAllHeader = ({ title, funcs }) => {
  return (
    <>
      <div className="w-full flex flex-row justify-between px-5">
        <span className="text-base monitor:text-2xl">{title}</span>
        <button className="flex items-start justify-center text-primaryBlue">
          <span onClick={funcs} className="text-sm monitor:text-base">
            مشاهده همه
          </span>
          <MdKeyboardArrowLeft size="24px" />
        </button>
      </div>
    </>
  );
};

export default ShowAllHeader;
