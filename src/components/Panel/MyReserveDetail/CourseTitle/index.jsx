import React from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";

const CourseTitle = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <FontGraySmallText text={"نام دوره"} style="!text-base" />
        <h1 className="text-2xl">ری اکت جی اس</h1>
      </div>
    </>
  );
};

export { CourseTitle };
