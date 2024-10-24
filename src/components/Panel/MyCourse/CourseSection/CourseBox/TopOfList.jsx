import React from "react";

const TopOfList = () => {
  return (
    <>
      <div className="hidden w-full monitor:flex justify-between rounded-2xl h-12 px-5">
        <div className="hidden w-full monitor:grid monitor:grid-cols-6 justify-start bg-[#F0F0F0] rounded-2xl h-12 items-center text-fontGray">
          <span className=" pr-5">#</span>
          <span className="text-right">نام دوره</span>
          <span className="basis-30">اساتید دوره</span>
          <span className="">تاریخ برگذاری</span>
          <span className="">قیمت دوره</span>
          <span className="">وضعیت پرداختی</span>
        </div>
      </div>
    </>
  );
};

export { TopOfList };
