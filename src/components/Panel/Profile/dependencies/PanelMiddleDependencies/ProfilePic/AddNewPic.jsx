import React from "react";
import { MdAddAPhoto } from "react-icons/md";
const AddNewPic = () => {
  return (
    <div
      className="w-[310px] h-[310px] border border-primaryBlue rounded-2xl
     shadow-buttonShadow flex flex-col items-center justify-center gap-3 max-md:w-[148px] max-md:h-[148px] mb-4 dark:shadow-darkButtonShadow"
    >
      <div className="text-primaryBlue text-4xl">
        <MdAddAPhoto />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-primaryBlack text-[16px] dark:text-primaryWhite">
          اضافه کردن عکس
        </span>
        <span className="text-gray-400 text-[12px]">
          اندازه فریم ( 236*236 )
        </span>
      </div>
    </div>
  );
};

export default AddNewPic;
