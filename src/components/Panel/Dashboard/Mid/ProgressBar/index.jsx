import React from "react";
import { CircularProgress } from "@nextui-org/progress";
import { RiEdit2Line } from "react-icons/ri";
const ProgressBar = () => {
  return (
    <>
      {/* Top Info */}
      <div className="flex flex-row w-full justify-between basis-1/4">
        <span className="text-xl ">وضعیت اطلاعات حساب</span>
        <button className="flex items-start cursor-default">
          <RiEdit2Line
            size="24px"
            className="text-primaryBlue cursor-pointer"
          />
        </button>
      </div>

      {/* The Circle */}
      <div className="basis-2/4">
        <CircularProgress
          classNames={{
            svg: "w-52 h-52",
            indicator: "text-[#3772FF]",
            track: "text-[#3772FF]",
            value: "text-[36px] text-primaryBlue",
          }}
          strokeWidth={3}
          aria-label="Loading..."
          value={100}
          size="136px"
          color="warning"
          showValueLabel={true}
        />
      </div>
      {/* A Label For It */}
      <span className="text-primaryBlue text-base basis-1/4 flex items-center justify-center">
        اطلاعات حساب کاربری شما تکمیل است
      </span>
    </>
  );
};

export default ProgressBar;
