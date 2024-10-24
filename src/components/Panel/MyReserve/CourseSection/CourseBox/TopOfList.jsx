import React from "react";

const TopOfList = () => {
  return (
    <>
      <div className="hidden w-full monitor:flex justify-between rounded-2xl h-12 px-5">
        <div className="hidden w-full monitor:flex monitor:flex-row justify-start items-center bg-[#F0F0F0] rounded-2xl h-12  text-fontGray">
          <span className="monitor:basis-[15%] pr-5">#</span>
          <span className="monitor:basis-[15%] text-right">نام دوره</span>
          <span className="monitor:basis-[16.66666%] basis-30">
            اساتید دوره
          </span>
          <span className="monitor:basis-[15%]">شروع دوره</span>
          <span className="monitor:basis-[15%]">قیمت دوره</span>
          <span className="monitor:grow">وضعیت ثبت نام</span>
        </div>
      </div>
    </>
  );
};

export { TopOfList };
