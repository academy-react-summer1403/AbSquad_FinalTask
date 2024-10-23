import React from "react";
import { TopOfList } from "./CourseBox/TopOfList";
import { CourseBox } from "./CourseBox";
const CourseSection = ({ func }) => {
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-y-5 bg-primaryWhite rounded-2xl pt-5">
        {/* Top Of The List */}
        <TopOfList />
        {/* Items Wrapper */}
        <div className="w-full h-[470px] flex flex-col justify-start items-start flex-nowrap overflow-y-scroll px-5">
          <CourseBox func={func} />
        </div>
      </div>
    </>
  );
};

export { CourseSection };
