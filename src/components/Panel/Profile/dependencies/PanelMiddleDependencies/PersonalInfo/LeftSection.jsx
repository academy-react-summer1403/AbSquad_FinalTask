import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeftSection = () => {
  const percentage = 60;
  return (
    <div className="w-[259px] h-[287px] flex flex-col mr-20 items-center border border-sky-500">
      <span className="mb-5 text-xs">وضعیت اطلاعات حساب</span>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className="w-[136px] h-[136px]"
      />
      <span className="text-xs">اطلاعات حساب‌کابری شما تکمیل نیست</span>
    </div>
  );
};

export default LeftSection;
