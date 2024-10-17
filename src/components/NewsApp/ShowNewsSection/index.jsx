import React from "react";
import TextAboveCourse from "../../CourseApp/ShowCourseSection/TextAboveCourse";
import NewsSection from "./NewsSection";
const ShowNewsSection = () => {
  return (
    <>
      <div className="h-full">
        <TextAboveCourse title={"لیست اخبار و مقالات"} />
        <NewsSection />
      </div>
    </>
  );
};

export default ShowNewsSection;
