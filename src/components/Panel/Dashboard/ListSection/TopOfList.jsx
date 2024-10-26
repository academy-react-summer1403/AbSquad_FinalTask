import React from "react";

const TopOfList = () => {
  return (
    <>
      <div className="hidden w-full 2xl:flex justify-between rounded-2xl h-12 px-5">
        <div className="hidden w-full 2xl:grid 2xl:grid-cols-7 justify-start bg-[#F0F0F0] rounded-2xl h-12 2xl:gap-x-10 items-center text-fontGray">
          <span className="text-right pr-5">نام دوره</span>
          <span className="basis-2/12 col-span-2">درباره دوره</span>
          <span className="basis-30">اساتید دوره</span>
          <span className="">تاریخ برگذاری</span>
          <span className="">قیمت دوره</span>
        </div>
      </div>
    </>
  );
};

export default TopOfList;
