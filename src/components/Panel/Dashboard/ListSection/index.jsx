import React from "react";
import NewCoursesBox from "../NewCoursesBox";
import TopOfList from "./TopOfList";

const ListSection = ({ courseList }) => {
  return (
    <>
      {/* The List */}
      <div className="flex flex-col justify-start items-center gap-y-5">
        {/* Top Of The List */}
        <TopOfList />
        {/* Items Wrapper */}
        <div className="w-full h-[470px] flex flex-col justify-start items-start flex-nowrap overflow-y-scroll px-5">
          {courseList.map((it, index) => {
            return (
              <NewCoursesBox
                key={index}
                title={it.title}
                describe={it.describe}
                teacherName={it.teacherName}
                courseId={it.courseId}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListSection;
