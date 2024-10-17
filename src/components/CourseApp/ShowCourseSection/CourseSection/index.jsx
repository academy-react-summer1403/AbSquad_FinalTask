import React from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
const CourseSection = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:flex-row lg:justify-center lg:items-center xl:justify-start xl:items-start h-full grayBox pt-5">
      <RightSide />
      <LeftSide />
    </div>
  );
};

export default CourseSection;
