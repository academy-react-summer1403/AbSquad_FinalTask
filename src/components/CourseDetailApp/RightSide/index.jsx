﻿import React, { useEffect, useState } from "react";
import CourseStatus from "../../Common/MainCourseBox/CourseStatus";
import Title from "../../Common/MainCourseBox/Info/Title";
import RoundedDiv from "../../Common/MainCourseBox/Info/RoundedDiv";
import LittleRect from "../../Common/MainCourseLittleRect";
import { PiStudentBold } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import PriceTag from "../../Common/MainCourseBox/Info/PriceTag";
import Button from "../../Common/Button/Button";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import LikeDislikeCircle from "../../Common/LikeDislikeCircle";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { handleDateFormat } from "../../../core/utilities/DateConverter/data.convert.utils";
import { AddReserve } from "../../../core/Services/Api/Student/AddReserve/add.reserve.api";
import { GetReserve } from "../../../core/Services/Api/Student/AddReserve/get.reserve.api";
import { LikeCourse } from "../../../core/Services/Api/LikeDislikeCourseDetail/like.course.api";
import { DisLikeCourse } from "../../../core/Services/Api/LikeDislikeCourseDetail/dislike.course.api";
import { toast } from "react-hot-toast";
const RightSide = ({ courseDetail, setReserveModalOpen }) => {
  // Reserve Api **********************************************
  const handleReserveCourse = async (id) => {
    const res = await AddReserve({ courseId: id });
    console.log(res);
    handleGetReservedCourses();
  };

  // Getting All Course Reserves
  const [reservedCourses, setReservedCourses] = useState([]);
  const handleGetReservedCourses = async () => {
    const res = await GetReserve();
    setReservedCourses(res);
  };
  useEffect(() => {
    handleGetReservedCourses();
  }, []);
  // END OF RESERVE API **********************************************
  const handleReserveModalOpen = () => {
    setReserveModalOpen("open");
  };
  // Converting Dates
  const [formattedDateStart, setFormattedDateStart] = useState("");
  const [formattedDateEnd, setFormattedDateEnd] = useState("");
  useEffect(() => {
    if (courseDetail.startTime !== undefined)
      setFormattedDateStart(handleDateFormat(courseDetail.startTime));
    if (courseDetail.endTime !== undefined)
      setFormattedDateEnd(handleDateFormat(courseDetail.endTime));
  }, [courseDetail.startTime && courseDetail.startTime]);

  // Like And DisLike Api
  const handleLikeCourse = (id) => {
    LikeCourse(id);
  };
  const handleDisLikeCourse = (id) => {
    DisLikeCourse(id);
  };
  return (
    // Right Side Container
    <div className="xl:basis-2/5">
      {/* Gray Box */}
      <div className="grayBox flex flex-col gap-0 px-5 py-3 top-0 ">
        <CourseStatus course={courseDetail} style="mr-0 !text-sm" />
        <Title title={courseDetail.title} style="text-[28px]" />
        <div className="flex flex-row items-center justify-start gap-2">
          <RoundedDiv text={courseDetail.techs} />
          <RoundedDiv text={courseDetail.courseLevelName} />
        </div>
        <div className="flex flex-col gap-3 my-5">
          <LittleRect
            title={courseDetail.currentRegistrants + " دانشجو"}
            iconSize={"24px"}
            Icon={PiStudentBold}
          />
          <LittleRect
            title={formattedDateStart}
            Icon={CgCalendarDates}
            iconSize="24px"
            subText="(شروع)"
          />
          <LittleRect
            title={formattedDateEnd}
            Icon={CgCalendarDates}
            iconSize="24px"
            subText="(پایان)"
          />
        </div>
        <PriceTag
          price={parseInt(courseDetail.cost)}
          showType={"Grid"}
          priceSize="text-2xl sm:text-3xl"
          style="!order-none"
        />
        <div className="flex flex-row sm:gap-10 gap-2 sm:h-14 h-12">
          <Button
            text={"رزرو دوره"}
            phoneStyle={"h-full basis-1/2 sm:text-xl "}
            onClick={() => {
              if (
                reservedCourses.some(
                  (it) => it.courseId == courseDetail.courseId
                ) == false
              ) {
                handleReserveModalOpen();
                handleReserveCourse(courseDetail.courseId);
              } else {
                toast("این دوره رزرو شده!", {
                  icon: "⚠️", // Warning icon
                  style: {
                    border: "2px solid #ffa726", // Orange border
                    padding: "16px",
                    color: "#5a5a5a", // Subtle text color
                    background: "linear-gradient(to right, #fff3e0, #ffcc80)", // Gradient background
                    fontWeight: "bold",
                    borderRadius: "10px", // Rounded corners
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                  },
                });
              }
            }}
          />
          <div className="flex flex-row justify-center gap-1 sm:gap-10 basis-1/2 h-full">
            <LikeDislikeCircle
              Icon={MdOutlineBookmarkAdd}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
              courseId={courseDetail.courseId}
              type={"course"}
              btnType="bookMark"
            />
            <LikeDislikeCircle
              Icon={AiOutlineLike}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
              onClickFunc={() => handleLikeCourse(courseDetail.courseId)}
              btnType="like"
            />
            <LikeDislikeCircle
              Icon={AiOutlineDislike}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
              onClickFunc={() => handleDisLikeCourse(courseDetail.courseId)}
              btnType="disLike"
            />
          </div>
        </div>
      </div>
      {/* End OF Gray Box */}
    </div>
  );
};

export default RightSide;
