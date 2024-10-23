import React from "react";
import NewCoursesBox from "../NewCoursesBox";

const ListSection = () => {
  return (
    <>
      {/* The List */}
      <div className="flex flex-col justify-start items-center gap-y-5">
        {/* Top Of The List */}
        <div className="hidden w-full monitor:flex justify-between rounded-2xl h-12 px-5">
          <div className="hidden w-full monitor:grid monitor:grid-cols-7 justify-start bg-[#F0F0F0] rounded-2xl h-12 monitor:gap-x-10 items-center text-fontGray">
            <span className="text-right pr-5">نام دوره</span>
            <span className="basis-2/12 col-span-2">درباره دوره</span>
            <span className="basis-30">اساتید دوره</span>
            <span className="">تاریخ برگذاری</span>
            <span className="">قیمت دوره</span>
          </div>
        </div>
        {/* Items Wrapper */}
        <div className="w-full h-[470px] flex flex-col justify-start items-start flex-nowrap overflow-y-scroll px-5">
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
          <NewCoursesBox />
        </div>
      </div>
    </>
  );
};

export default ListSection;
