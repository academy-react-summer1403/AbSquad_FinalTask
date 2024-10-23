import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { CircularProgress } from "@nextui-org/progress";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
const CourseBox = () => {
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
          <div className="monitor:basis-[16.66666%] h-full w-12  monitor:pr-5">
            <img
              className="w-4/5 h-[72px] rounded-3xl border"
              src="/ErrImg.jpg"
              alt=""
            />
          </div>
          {/* Name Of The Course */}
          <div className="text-base monitor:text-xl monitor:basis-[16.66666%]">
            ری اکت Js
          </div>

          {/* Teachers */}
          <textarea
            maxLength={10}
            readOnly
            disabled
            value={"محسن اسفندیاری، مهدی اصغری"}
            className="text-fontGray text-sm monitor:text-base monitor:text-primaryBlack resize-none bg-transparent monitor:truncate h-7 monitor:basis-[16.66666%]"
          />

          {/* Date Of Course */}
          <div className="text-sm text-fontGray monitor:text-primaryBlack monitor:text-base monitor:basis-[16.66666%]">
            25 اردبیهشت 1403
          </div>
          {/* Price of Course */}
          <div className="hidden monitor:flex monitor:text-base monitor:basis-[16.66666%]">
            <span className="text-xl">1,800,000</span> تومان
          </div>
          {/* Pay Progress Circle */}
          <div className="hidden monitor:flex monitor:text-base monitor:basis-[16.66666%]">
            <CircularProgress
              classNames={{
                svg: "w-16 h-16",
                indicator: "text-[#3772FF]",
                track: "text-[#3772FF]",
                value: "text-base text-primaryBlue",
              }}
              strokeWidth={3}
              aria-label="Loading..."
              value={70}
              size="136px"
              color="warning"
              showValueLabel={true}
            />
            <span className="flex justify-center items-center mr-2">
              پرداخت شده
            </span>
          </div>
          {/* Eye Button */}
          <div className="left-0 absolute flex justify-end monitor:grow">
            <div className="flex justify-center items-center gap-3 h-full rounded-full p-2">
              <IoEyeOutline
                size="24px"
                className="text-fontGray hover:text-primaryBlue cursor-pointer"
              />
              <LiaMoneyBillWaveAltSolid
                size="24px"
                className="text-fontGray hover:text-primaryBlue cursor-pointer"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { CourseBox };
