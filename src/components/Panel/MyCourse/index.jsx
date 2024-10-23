import React from "react";
import PageTitle from "./PageTitle";
import { FilterSection } from "./CourseSection/FilterSection";
import { CourseSection } from "./CourseSection";

const MyCourse = () => {
  return (
    <>
      <div className="flex flex-col my-10 gap-5">
        <PageTitle />
        <FilterSection />
        <CourseSection />
      </div>
    </>
  );
};

export default MyCourse;
