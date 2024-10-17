import React, { useEffect, useState } from "react";
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

const RightSide = ({ courseDetail, setReserveModalOpen }) => {
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
            onClick={handleReserveModalOpen}
          />
          <div className="flex flex-row justify-center gap-1 sm:gap-10 basis-1/2 h-full">
            <LikeDislikeCircle
              Icon={MdOutlineBookmarkAdd}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
            />
            <LikeDislikeCircle
              Icon={AiOutlineLike}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
            />
            <LikeDislikeCircle
              Icon={AiOutlineDislike}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
            />
          </div>
        </div>
      </div>
      {/* End OF Gray Box */}
    </div>
  );
};

export default RightSide;
