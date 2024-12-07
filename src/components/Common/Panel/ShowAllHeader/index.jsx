﻿import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
const ShowAllHeader = ({ title, funcs }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full flex flex-row justify-between px-5 dark:bg-primaryBlack dark:text-primaryWhite">
        <span className="text-base 2xl:text-2xl">{title}</span>
        <button className="flex items-start justify-center text-primaryBlue">
          <span
            onClick={() => {
              funcs();
              scrollToTop();
            }}
            className="text-sm 2xl:text-base"
          >
            مشاهده همه
          </span>
          <MdKeyboardArrowLeft size="24px" />
        </button>
      </div>
    </>
  );
};

export default ShowAllHeader;
