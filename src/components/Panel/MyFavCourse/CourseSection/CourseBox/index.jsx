import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { LuBookDown } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import "react-circular-progressbar/dist/styles.css";
const CourseBox = ({ func }) => {
  return (
    <>
      {/* Items   */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 monitor:border-none rounded-2xl hover:bg-primaryGray "
      >
        {/* Whole Rect */}
        <div className="basis-full flex flex-col gap-y-1 monitor:flex-row monitor:items-center">
          {/* Course Image */}
          <div className="monitor:basis-[15%] h-full w-12  monitor:pr-5">
            <img
              className="w-4/5 h-[72px] rounded-3xl border"
              src="/ErrImg.jpg"
              alt=""
            />
          </div>
          {/* Name Of The Course */}
          <div className="text-base monitor:text-xl monitor:basis-[15%]">
            ری اکت Js
          </div>

          {/* Teachers */}
          <div className="monitor:basis-[15%]">
            <textarea
              maxLength={10}
              readOnly
              disabled
              value={"محسن اسفندیاری، مهدی اصغری"}
              className="text-fontGray text-sm monitor:text-base monitor:text-primaryBlack resize-none bg-transparent monitor:truncate h-7 w-3/4"
            />
          </div>

          {/* Date Of Course */}
          <div className="text-sm text-fontGray monitor:text-primaryBlack monitor:text-base monitor:basis-[15%]">
            25 اردبیهشت 1403
          </div>
          {/* Price of Course */}
          <div className="hidden monitor:flex monitor:text-base monitor:basis-[16.66666%]">
            <span className="text-xl">1,800,000</span> تومان
          </div>
          {/* Icons */}
          <div className="hidden monitor:flex justify-end  items-center monitor:text-base monitor:grow">
            {/* Eye Button */}
            <div className="flex justify-end">
              <div className="flex justify-center items-center gap-3 h-full rounded-full p-2">
                <IoEyeOutline
                  onClick={func}
                  size="24px"
                  className="text-fontGray hover:text-primaryBlue cursor-pointer"
                />
                <LuBookDown
                  size="24px"
                  className="text-fontGray hover:text-primaryBlue cursor-pointer"
                />
                <RxCross1
                  size="24px"
                  className="text-instaRed cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { CourseBox };
