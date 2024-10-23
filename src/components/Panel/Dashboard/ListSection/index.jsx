import React from "react";
import NewCoursesBox from "../NewCoursesBox";
import TopOfList from "./TopOfList";

const ListSection = () => {
  return (
    <>
      {/* The List */}
      <div className="flex flex-col justify-start items-center gap-y-5">
        {/* Top Of The List */}
        <TopOfList />
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
