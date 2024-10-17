import React from "react";

const CourseStatus = ({ course, style = "" }) => {
  return (
    <div
      className={`text-xs rounded-xl text-instaRed bg-[#FFD1CB] w-max mr-3 mb-3 px-3 py-1 sm:text-sm z-10 ${style}`}
    >
      {course.statusName == undefined
        ? course.courseStatusName
        : course.statusName}
    </div>
  );
};

export default CourseStatus;
