import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import ApprovalStatus from "./ApprovalStatus";
const CourseItems = ({ func, statusId }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 2xl:border-none rounded-2xl hover:bg-primaryGray "
      >
        {/* Whole Rect */}
        <div className="basis-full flex flex-row gap-y-1 2xl:flex-row 2xl:items-center">
          {/* Course Image */}
          <div className="2xl:basis-[18%] h-full basis-1/2 2xl:pr-5">
            <img
              className="w-11/12 2xl:w-4/5 2xl:h-[80px] h-20 rounded-lg border"
              src="/ErrImg.jpg"
              alt=""
            />
          </div>
          {/* Second Part Of DIv  */}
          <div className="grow 2xl:basis-full flex flex-col gap-y-1 2xl:flex-row 2xl:items-center">
            {/* Name Of The Course */}
            <div className="text-base 2xl:text-xl 2xl:basis-[18%]">
              ری اکت Js
            </div>

            {/* Teachers */}
            <div className="2xl:basis-[20%]">
              <textarea
                maxLength={10}
                readOnly
                disabled
                value={"محسن اسفندیاری، مهدی اصغری"}
                className="text-fontGray text-sm 2xl:text-base 2xl:text-primaryBlack resize-none bg-transparent truncate h-7 2xl:basis-[21.33338%]"
              />
            </div>

            {/* Date Of Course */}
            <div className="hidden 2xl:flex text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base 2xl:basis-[17.5%]">
              25 اردبیهشت 1403
            </div>
            {/* Price of Course */}
            <div className="hidden 2xl:flex 2xl:text-base 2xl:basis-[18%]">
              <span className="text-xl">1,800,000</span> تومان
            </div>
            {/* Sign Up Status */}
            <div className="">
              <ApprovalStatus statusId={statusId} />
            </div>
            {/* Icons */}
            <div className="hidden 2xl:flex justify-end  items-center 2xl:text-base 2xl:grow">
              {/* Eye Button */}
              <div className="flex justify-end">
                <div className="flex justify-center items-center gap-3 h-full rounded-full p-2">
                  <IoEyeOutline
                    onClick={func}
                    size="24px"
                    className="text-fontGray hover:text-primaryBlue cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { CourseItems };
