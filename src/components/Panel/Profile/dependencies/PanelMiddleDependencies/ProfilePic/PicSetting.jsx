import React from "react";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
const PicSetting = () => {
  return (
    <div className="w-[200px]  bg-primaryGray rounded-2xl">
      <div className=" flex gap-2 p-2 border-b border-gray-500 w-11/12 mx-auto">
        <div className="text-green-600">
          <FaCheck />
        </div>
        <span className="text-[15px]">انتخاب عکس اصلی</span>
      </div>
      <div className="border-spacing-4 flex gap-2 p-3 text-red-500 ">
        <HiOutlineTrash />
        <span className="text-[15px]">حذف عکس</span>
      </div>
    </div>
  );
};

export default PicSetting;
