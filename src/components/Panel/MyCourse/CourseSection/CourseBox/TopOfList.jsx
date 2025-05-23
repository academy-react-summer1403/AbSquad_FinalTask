import React from "react";

const TopOfList = () => {
  return (
    <>
      <div className="hidden w-full 2xl:flex justify-between rounded-2xl h-12 px-5 dark:bg-primaryBlack dark:text-white">
        <div className="hidden w-full 2xl:flex justify-start bg-[#F0F0F0] rounded-2xl h-12 items-center text-fontGray dark:bg-primaryBlack dark:text-white">
          <span className="basis-[16.66%] pr-5">#</span>
          <span className="basis-[14.66%] text-right">نام دوره</span>
          <span className="basis-[18.5%] basis-30">اساتید دوره</span>
          <span className="basis-[12.66%]">تاریخ برگذاری</span>
          <span className="basis-[15.66%]">قیمت دوره</span>
          <span className="col-span-4">وضعیت پرداختی</span>
        </div>
      </div>
    </>
  );
};

export { TopOfList };
