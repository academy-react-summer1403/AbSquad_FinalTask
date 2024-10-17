import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const TextAboveCourse = ({ title }) => {
  return (
    <div className="hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-2 text-fontGray mb-16">
      <span>{title}</span>
      <MdKeyboardDoubleArrowDown className="text-fontGray w-6 h-6" />
    </div>
  );
};

export default TextAboveCourse;
