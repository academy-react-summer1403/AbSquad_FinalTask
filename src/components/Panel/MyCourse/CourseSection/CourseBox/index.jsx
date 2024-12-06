﻿import React, { useState, useEffect } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { GetMyCourse } from "../../../../../core//Services//Api/Student/MyCourse/get.myCourses.api";
import { getTeacherDetail } from "../../../../../core/Services/Api/GetTeacherDetail/teacher.detail.api";
import "react-circular-progressbar/dist/styles.css";
const CourseBox = ({ func }) => {
  const [parameters, setParameters] = useState({
    PageNumber: 1,
    RowsOfPage: 10,
  });

  const [courses, setCourses] = useState([]);
  const [teacher, setTeacher] = useState({});

  const handleGetMyCourse = async (data) => {
    const res = await GetMyCourse(data);
    setCourses(res.listOfMyCourses);
  };
  const handleGetTeacherDetail = async (id) => {
    const res = await getTeacherDetail(id);
    setTeacher(res);
  };
  useEffect(() => {
    if (teacher) console.log(teacher);
  }, [teacher]);

  useEffect(() => {
    if (courses.teacherId) {
      handleGetTeacherDetail(courses.teacherId);
    }
  }, [courses.teacherId]);

  useEffect(() => {
    handleGetMyCourse(parameters);
  }, [parameters]);

  const [percentage, setPercentage] = useState("10");
  let color;
  if (percentage < 40) {
    color = "red";
  } else if (percentage < 70) {
    color = "#FFC619";
  } else {
    color = "#3772FF";
  }
  return (
    <>
      {/* Items   */}
      {courses.map((it, index) => {
        return (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 2xl:border-none rounded-2xl hover:bg-primaryGray "
          >
            {/* Whole Rect */}
            <div className="basis-full flex flex-row gap-y-1 2xl:flex-row 2xl:items-center">
              {/* Course Image */}
              <div className="2xl:basis-[19.66666%] h-full basis-1/2 2xl:pr-5">
                <img
                  className=" w-11/12 2xl:w-4/5 2xl:h-[80px] h-20 rounded-lg border"
                  src={
                    it.tumbImageAddress ? it.tumbImageAddress : "/ErrImg.jpg"
                  }
                  alt=""
                />
              </div>
              {/* Second part of the rect which is the rest */}
              <div className="grow 2xl:basis-full flex flex-col gap-y-1 2xl:flex-row 2xl:items-center">
                {/* Name Of The Course */}
                <div className="text-base 2xl:text-xl 2xl:basis-[19.33338%]">
                  {it.courseTitle}
                </div>

                {/* Teachers */}
                <textarea
                  maxLength={10}
                  readOnly
                  disabled
                  value={() => {
                    handleGetTeacherDetail(it.teacherId);
                  }}
                  className="text-fontGray text-sm 2xl:text-base 2xl:text-primaryBlack resize-none bg-transparent truncate h-7 2xl:basis-[21.33338%]"
                />

                {/* Date Of Course */}
                <div className="text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base 2xl:basis-[20.33338%] text-center">
                  25 اردبیهشت 1403
                </div>
                {/* Price of Course */}
                <div className="hidden 2xl:flex 2xl:text-base 2xl:basis-[19.66666%]">
                  <span className="text-xl text-center">
                    {parseInt(it.cost).toLocaleString()}
                  </span>{" "}
                  تومان
                </div>
                {/* Pay Progress Circle */}
                <div className="hidden 2xl:flex justify-start  items-center 2xl:text-base 2xl:grow">
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        pathTransitionDuration: 0.5,
                        pathColor: color,
                        textColor: color,
                      })}
                    />
                  </div>
                  {/*  */}
                  <span className="flex justify-center items-center mr-2 text-nowrap">
                    {it.paymentStatus}
                  </span>
                  {/* Eye Button */}
                  <div className="flex justify-end">
                    <div className="flex justify-center items-center gap-3 h-full rounded-full p-2">
                      <IoEyeOutline
                        onClick={func}
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
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export { CourseBox };
