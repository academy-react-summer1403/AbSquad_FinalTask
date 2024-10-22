import React from "react";

const CourseDetailImage = ({ image }) => {
  return (
    <>
      <img
        className="w-full h-full"
        src={image && image != "testimg" ? image : "/ErrImg.jpg"}
        alt=""
      />
    </>
  );
};

export default CourseDetailImage;
