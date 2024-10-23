import React from "react";
import PanelCloseButton from "../../../Common/Panel/PanelCloseButton";
import TopOfList from "../ListSection/TopOfList";
import NewCoursesBox from "../NewCoursesBox";
import { FilterSection } from "./FilterSection";

const AllNewCourses = ({ func }) => {
  return (
    <>
      <div className="border rounded-2xl w-full flex flex-col gap-5 p-5 ">
        {/* Top Title And Close Btn  */}
        <div className="flex flex-row w-full items-center justify-between">
          <h1 className="text-[36px]">جدید ترین دوره ها</h1>
          <PanelCloseButton func={func} />
        </div>
        {/* Filter Section */}
        <FilterSection />
        {/* Top Of The List */}
        <div className="flex flex-col justify-start items-center gap-y-5">
          <TopOfList />
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
      </div>
    </>
  );
};

export default AllNewCourses;
