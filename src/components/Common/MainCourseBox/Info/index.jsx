import React, { useEffect, useState } from "react";
import LittleRect from "../../MainCourseLittleRect";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CgCalendarDates } from "react-icons/cg";
import { PiStudentBold } from "react-icons/pi";
import { RiQuillPenLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import PriceTag from "./PriceTag";
import LikeDisLike from "./LikeDisLike";
import Title from "./Title";
import Description from "./Description";
import Button from "../../Button/Button";
import { handleDateFormat } from "../../../../core/utilities/DateConverter/data.convert.utils";

const Info = ({ course, type, tableInfoStyle, showType }) => {
  const [formattedDates, setFormattedDates] = useState("");
  useEffect(() => {
    if (course.insertDate || course.lastUpdate !== undefined)
      setFormattedDates(
        handleDateFormat(
          course.insertDate == undefined ? course.lastUpdate : course.insertDate
        )
      );
  }, [course.insertDate && course.lastUpdate]);

  return (
    <>
      <div className={`flex flex-col grow gap-4 pr-4 pl-4 ${tableInfoStyle}`}>
        {/* Title */}
        <Title title={course.title} />
        {/* Description */}
        <Description
          desc={type == "LandingNews" ? course.miniDescribe : course.describe}
          type="LandingNews"
        />
        {/* LittleRects */}
        {/* Landing Courses Only */}
        {type !== "LandingNews" && (
          <LittleRect
            title={course.teacherName}
            Icon={LiaChalkboardTeacherSolid}
            iconSize="25px"
          />
        )}

        {type !== "LandingNews" && (
          <LittleRect
            title={formattedDates}
            Icon={CgCalendarDates}
            iconSize="25px"
          />
        )}
        {type !== "LandingNews" && (
          <LittleRect
            title={
              course.currentRegistrants !== undefined
                ? course.currentRegistrants
                : course.typeName
            }
            Icon={PiStudentBold}
            iconSize="25px"
          />
        )}
        {/* ******************************* END OF LANDING COURSES */}
        {/* Landing News Only */}
        {type == "LandingNews" && (
          <LittleRect
            title={course.addUserFullName}
            Icon={RiQuillPenLine}
            iconSize="25px"
          />
        )}

        {type == "LandingNews" && (
          <LittleRect
            title={course.currentView}
            Icon={IoEyeOutline}
            iconSize="25px"
          />
        )}
        {type == "LandingNews" && showType == "Table" && (
          <LittleRect
            title={formattedDates}
            Icon={CgCalendarDates}
            iconSize="25px"
          />
        )}
        {/* ******************************* END OF LANDING NEWS */}
        {/* Like And Price Div */}

        <div
          className={`h-10 w-full flex flex-row justify-between items-center ${
            showType == "Table" ? "mb-4" : ""
          }`}
        >
          {type !== "LandingNews" && (
            <PriceTag
              price={parseInt(course.cost)}
              type={type}
              showType={showType}
              priceSize="text-xl sm:text-2xl"
            />
          )}
          <LikeDisLike course={course} type={type} showType={showType} />

          {type == "LandingNews" && (
            <Button
              text="بیشتر بخوانید"
              phoneStyle={`sm:text-base h-full ${
                showType == "Table" ? "order-2" : ""
              }`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Info;
