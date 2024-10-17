import React from "react";
import { useNavigate } from "react-router-dom";
const MainBox = ({
  course,
  ImageContainer,
  Info,
  type = "courseList",
  showType = "Grid",
  style,
  tableImgConStyle = "",
  tableInfoStyle = "",
}) => {
  const navigate = useNavigate(); // Use Navigation
  return (
    <>
      <div
        onClick={() => {
          if (type == "courseList") {
            navigate("/CourseDetail/CourseId=" + course.courseId);
          } else {
            navigate("/NewsPageDetail/" + course.id);
          }
        }}
        className={`flex shadow-lg hover:shadow-2xl  dark:border dark:border-fontGray dark:hover:shadow-darkMainBoxShadow rounded-3xl  overflow-hidden bg-mainBoxGray dark:bg-primaryBlack ${style}`}
      >
        <ImageContainer
          course={course}
          type={type}
          tableImgConStyle={tableImgConStyle}
        />
        <Info
          course={course}
          type={type}
          showType={showType}
          shotableInfoStyle={tableInfoStyle}
        />
      </div>
    </>
  );
};

export default MainBox;
