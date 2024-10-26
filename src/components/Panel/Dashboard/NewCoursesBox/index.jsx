import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const NewCoursesBox = () => {
  return (
    <>
      {/* Items   */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 2xl:border-none 2xl:grid 2xl:grid-cols-7 rounded-2xl hover:bg-primaryGray "
      >
        {/* EveryTHing But the Eye Button */}
        <div className="basis-10/12 flex flex-col gap-y-1 2xl:grid 2xl:grid-cols-6  2xl:col-span-6 2xl:items-center 2xl:gap-10">
          {/* Name Of The Course */}
          <div className="text-base 2xl:text-xl 2xl:pr-5">ری اکت Js</div>
          {/* About Course */}
          <div>
            {" "}
            <textarea
              readOnly
              disabled
              value={
                "آموزش صفر تا صد کتابخانه پرطرفدار بیل بیل بیل بیل بیل بیل بیل یبیلبیلسهتسیلهعساهعله"
              }
              className="hidden 2xl:flex text-fontGray text-base basis-2/12 bg-transparent resize-none truncate 2xl:h-7 2xl:col-span-1"
            />
          </div>
          {/* span */}
          <span></span>
          {/* Teachers */}
          <textarea
            readOnly
            disabled
            value={"محسن اسفندیاری، مهدی اصغری"}
            className="text-fontGray text-sm 2xl:text-base 2xl:basis-30 2xl:text-primaryBlack resize-none bg-transparent 2xl:truncate h-7"
          />

          {/* Date Of Course */}
          <div className="text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base">
            25 اردبیهشت 1403
          </div>
          {/* Price of Course */}
          <div className="hidden 2xl:flex 2xl:text-base">
            <span className="text-xl">1,800,000</span> تومان
          </div>
        </div>
        {/* Eye Button */}
        <div className="flex justify-end basis-2/12">
          <div className="h-full  rounded-full p-2 hover:bg-[#F0F0F0] cursor-pointer">
            <IoEyeOutline size="24px" className="text-fontGray" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NewCoursesBox;
