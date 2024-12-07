import React from "react";

const TopOfList = () => {
  return (
    <>
      <div className="hidden w-full 2xl:flex justify-between rounded-2xl h-12 px-5 dark:bg-primaryBlack dark:text-white">
        <div className="hidden w-full 2xl:flex 2xl:flex-row justify-start items-center bg-[#F0F0F0] rounded-2xl h-12  text-fontGray dark:bg-primaryBlack dark:text-white">
          <span className="2xl:basis-[15%] pr-5">#</span>
          <span className="2xl:basis-[15%] text-right">عنوان</span>
          <span className="2xl:basis-[15%] basis-30">درباره مقاله</span>
          <span className="2xl:basis-[15%]">منتشر کننده</span>
          <span className="2xl:grow">تاریخ انتشار</span>
        </div>
      </div>
    </>
  );
};

export { TopOfList };
