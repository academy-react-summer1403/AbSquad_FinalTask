import React from "react";
import { IoEyeOutline } from "react-icons/io5";
const NewCoursesBox = () => {
  return (
    <>
      {/* Items   */}
      <div className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 monitor:border-none monitor:grid monitor:grid-cols-7 ">
        {/* EveryTHing But the Eye Button */}
        <div className="basis-10/12 flex flex-col gap-y-1 monitor:grid monitor:grid-cols-6  monitor:col-span-6 monitor:items-center monitor:gap-10">
          {/* Name Of The Course */}
          <div className="text-base monitor:text-xl monitor:pr-5">
            ری اکت Js
          </div>
          {/* About Course */}
          <textarea
            readOnly
            disabled
            value={
              "آموزش صفر تا صد کتابخانه پرطرفدار بیل بیل بیل بیل بیل بیل بیل یبیلبیلسهتسیلهعساهعله"
            }
            className="hidden monitor:flex text-fontGray text-base basis-2/12 bg-transparent resize-none truncate monitor:h-5 monitor:col-span-1"
          />
          {/* span */}
          <span></span>
          {/* Teachers */}
          <textarea
            readOnly
            disabled
            value={"محسن اسفندیاری، مهدی اصغری"}
            className="text-fontGray text-sm monitor:text-base monitor:basis-30 monitor:text-primaryBlack resize-none bg-transparent monitor:truncate h-5"
          />

          {/* Date Of Course */}
          <div className="text-sm text-fontGray monitor:text-primaryBlack monitor:text-base">
            25 اردبیهشت 1403
          </div>
          {/* Price of Course */}
          <div className="hidden monitor:flex monitor:text-base">
            <span className="text-xl">1,800,000</span> تومان
          </div>
        </div>
        {/* Eye Button */}
        <div className="flex justify-end basis-2/12">
          <div className="h-full  rounded-full p-2 hover:bg-[#F0F0F0] cursor-pointer">
            <IoEyeOutline size="24px" className="text-fontGray" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCoursesBox;
