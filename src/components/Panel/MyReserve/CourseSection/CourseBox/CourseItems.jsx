import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import ApprovalStatus from "./ApprovalStatus";
import { GetCourseDetail } from "../../../../../core/Services/Api/CourseDetail/course.detail.api";
import { handleDateFormat } from "../../../../../core/utilities/DateConverter/data.convert.utils";

const CourseItems = ({ func, statusId, courseId }) => {
  const [courseDetail, setCourseDetail] = useState({});
  const handleGetCourseDetail = async (id) => {
    const res = await GetCourseDetail("CourseId=" + id);
    setCourseDetail(res);
  };
  useEffect(() => {
    if (courseId) handleGetCourseDetail(courseId);
  }, [courseId]);

  // Converting Dates ********************************************************************
  const [formattedDateStart, setFormattedDateStart] = useState("");
  useEffect(() => {
    if (courseDetail.startTime !== undefined)
      setFormattedDateStart(handleDateFormat(courseDetail.startTime));
  }, [courseDetail.startTime]);

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
              src={
                courseDetail.imageAddress != "testimg"
                  ? courseDetail.imageAddress
                  : "/ErrImg.jpg"
              }
              alt=""
            />
          </div>
          {/* Second Part Of DIv  */}
          <div className="grow 2xl:basis-full flex flex-col gap-y-1 2xl:flex-row 2xl:items-center">
            {/* Name Of The Course */}
            <div className="text-base 2xl:text-xl 2xl:basis-[18%] truncate">
              {courseDetail.title}
            </div>

            {/* Teachers */}
            <div className="flex 2xl:w-[20%]">
              <textarea
                maxLength={10}
                readOnly
                disabled
                value={"محسن اسفندیاری، مهدی اصغری"}
                className="text-fontGray text-sm 2xl:text-base 2xl:text-primaryBlack resize-none bg-transparent truncate overflow-hidden h-7 2xl:basis-3/4"
              />
            </div>

            {/* Date Of Course */}
            <div className="hidden 2xl:flex text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base 2xl:basis-[17.5%]">
              {formattedDateStart}
            </div>
            {/* Price of Course */}
            <div className="hidden 2xl:flex 2xl:text-base 2xl:basis-[18%]">
              <span className="text-xl">
                {parseInt(courseDetail.cost).toLocaleString()}
              </span>{" "}
              تومان
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
