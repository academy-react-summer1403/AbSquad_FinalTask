import React, { useEffect, useState } from "react";
import { IoEyeOutline, IoLogoPaypal } from "react-icons/io5";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import ApprovalStatus from "./ApprovalStatus";
import { GetCourseDetail } from "../../../../../core/Services/Api/CourseDetail/course.detail.api";
import { handleDateFormat } from "../../../../../core/utilities/DateConverter/data.convert.utils";
import { Formik, Form, Field } from "formik";
import ReactModal from "react-modal";
import { PaymentFirstStep } from "../../../../../core/Services/Api/Payment/StudentPaymentSteps/PaymentFirstStep";
const CourseItems = ({ func, statusId, courseId, accept, groupName, paid }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 2xl:border-none rounded-2xl hover:bg-primaryGray"
      >
        {/* Whole Rect */}
        <div className="basis-full flex flex-row gap-y-1 2xl:flex-row 2xl:items-center">
          {/* Second Part Of Div */}
          <div className="grow 2xl:basis-full flex flex-col gap-y-1 2xl:flex-row 2xl:items-center">
            {/* Name Of The Course */}
            <div className="text-base 2xl:text-xl 2xl:basis-[18%] truncate">
              {groupName}
            </div>
            {/* Date Of Course */}
            <div className="hidden 2xl:flex text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base 2xl:basis-[17.5%]">
              {/* {formattedDateStart} */}
            </div>
            {/* Price of Course */}
            <div className="hidden 2xl:flex 2xl:text-base 2xl:basis-[18%]">
              <span className="text-xl">{paid}</span> تومان
            </div>
            {/* Sign Up Status */}
            <div className="">
              <ApprovalStatus accept={accept} />
            </div>
            {/* Icons */}
            <div className="hidden 2xl:flex justify-end items-center 2xl:text-base 2xl:grow">
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
