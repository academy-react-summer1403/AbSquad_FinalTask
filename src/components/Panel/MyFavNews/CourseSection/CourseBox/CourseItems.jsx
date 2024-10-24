import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { LuBookDown } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import "react-circular-progressbar/dist/styles.css";
const CourseItems = ({ func }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 monitor:border-none rounded-2xl hover:bg-primaryGray "
      >
        {/* Whole Rect */}
        <div className="basis-full flex flex-row gap-y-1 monitor:flex-row monitor:items-center">
          {/* Course Image */}
          <div className="monitor:basis-[18%] h-full basis-1/2 monitor:pr-5">
            <img
              className=" w-11/12 monitor:w-4/5 monitor:h-[80px] h-20 rounded-lg border"
              src="/ErrImg.jpg"
              alt=""
            />
          </div>
          {/* Second Part Of The Div */}
          <div className="grow monitor:basis-full flex flex-col gap-y-1 monitor:flex-row monitor:items-center">
            {/* Name Of The Course */}
            <div className="text-base monitor:text-xl monitor:basis-[18%]">
              ری اکت Js
            </div>
            {/* About Article */}
            <div className="hidden monitor:flex monitor:basis-[18%]">
              <textarea
                maxLength={10}
                readOnly
                disabled
                value={
                  "آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های مفید برای یادگیری بهتر"
                }
                className=" text-fontGray text-sm monitor:text-base monitor:text-primaryBlack resize-none bg-transparent monitor:truncate h-7 w-3/4"
              />
            </div>
            {/* Publisher */}
            <div className="monitor:basis-[17%]">
              <textarea
                maxLength={10}
                readOnly
                disabled
                value={"محسن اسفندیاری ، مهدی اصغری"}
                className="text-fontGray text-sm monitor:text-base monitor:text-primaryBlack resize-none bg-transparent truncate h-7 monitor:basis-[21.33338%] monitor:w-[70%]"
              />
            </div>
            {/*Publish Date */}
            <div className=" monitor:flex monitor:text-base monitor:basis-[16.66666%] text-fontGray monitor:text-primaryBlack">
              25 اردیبهشت 1403
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
                  <RxCross1
                    size="24px"
                    className="text-instaRed cursor-pointer"
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
