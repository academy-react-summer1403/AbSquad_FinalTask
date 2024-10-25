import React from "react";

const TopOfList = () => {
  return (
    <>
      <div className="hidden w-full 2xl:flex justify-between rounded-2xl h-12 px-5">
        <div className="hidden w-full 2xl:flex 2xl:flex-row justify-start items-center bg-[#F0F0F0] rounded-2xl h-12  text-fontGray">
          <span className="2xl:basis-[15%] pr-5">#</span>
          <span className="2xl:basis-[15%] text-right">نام دوره</span>
          <span className="2xl:basis-[16.66666%] basis-30">اساتید دوره</span>
          <span className="2xl:basis-[15%]">شروع دوره</span>
          <span className="2xl:basis-[15%]">قیمت دوره</span>
          <span className="2xl:grow">وضعیت ثبت نام</span>
        </div>
      </div>
    </>
  );
};

export { TopOfList };
