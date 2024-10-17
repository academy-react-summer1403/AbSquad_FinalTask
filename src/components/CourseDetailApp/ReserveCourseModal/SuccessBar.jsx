import React from "react";
import { FiCheckCircle } from "react-icons/fi";
const SuccessBar = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-2 bg-primaryGreen w-full rounded-[40px] px-1 py-2 text-primaryWhite sm:text-xl text-sm">
        دوره با موفقیت به لیست رزرو های شما اضافه شد
        <span>
          <FiCheckCircle />
        </span>
      </div>
    </>
  );
};

export default SuccessBar;
