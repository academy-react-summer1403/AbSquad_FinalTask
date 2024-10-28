import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { GetCourseDetail } from "../../../../core/Services/Api/CourseDetail/course.detail.api";
import { handleDateFormat } from "../../../../core/utilities/DateConverter/data.convert.utils";

const NewCoursesBox = ({
  modal = "off",
  courseId,
  title,
  describe,
  teacherName,
  cost,
  totalCourses,
}) => {
  // ************************* FETCHING DETAILS FOR DATES *************************
  const [courseDetail, setCourseDetail] = useState({}); // For Getting The Details, Especially Start And End Date

  const fecthDetail = async (id) => {
    const res = await GetCourseDetail("CourseId=" + id);
    setCourseDetail(res);
  };

  useEffect(() => {
    if (courseId) {
      fecthDetail(courseId);
    }
  }, [courseId]);
  // ************************* END OF FETCHING DETAILS FOR DATES *************************

  // Converting Dates ********************************************************************
  const [formattedDateStart, setFormattedDateStart] = useState("");
  const [formattedDateEnd, setFormattedDateEnd] = useState("");
  useEffect(() => {
    if (courseDetail.startTime !== undefined)
      setFormattedDateStart(handleDateFormat(courseDetail.startTime));
    if (courseDetail.endTime !== undefined)
      setFormattedDateEnd(handleDateFormat(courseDetail.endTime));
  }, [courseDetail.startTime && courseDetail.endTime]);

  // Render Start ***********************************************************************
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
          <div className="text-base 2xl:text-xl 2xl:pr-5 text-nowrap truncate">
            {title}
          </div>
          {/* About Course */}
          <div className={modal == "off" ? "col-span-2" : "col-span-1"}>
            <textarea
              readOnly
              disabled
              value={describe}
              className="w-full hidden 2xl:flex text-fontGray text-base  bg-transparent truncate resize-none  2xl:h-7 "
            />
          </div>
          {/* Teachers */}
          <textarea
            readOnly
            disabled
            value={teacherName}
            className="text-fontGray text-sm 2xl:text-base 2xl:basis-30 2xl:text-primaryBlack resize-none bg-transparent 2xl:truncate h-7 truncate"
          />

          {/* Date Of Course */}
          <div className="text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base">
            {formattedDateStart}
          </div>
          {/* Date of End Course */}
          <div
            className={`text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base ${
              modal == "off" ? "hidden" : "block"
            }`}
          >
            {formattedDateEnd}
          </div>
          {/* Price of Course */}
          <div className="hidden 2xl:flex 2xl:text-base">
            <span className="text-xl">{cost.toLocaleString()}</span> تومان
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
