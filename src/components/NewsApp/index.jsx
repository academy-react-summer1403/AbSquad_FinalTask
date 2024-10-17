import React from "react";
import NewsPageMainTitleSection from "./NewsPageMainTitleSection";
import ShowNewsSection from "./ShowNewsSection";

// import ShowCourseSection from "./ShowCourseSection";
const NewsApp = () => {
  return (
    <div className="h-full">
      <NewsPageMainTitleSection />
      <ShowNewsSection />
    </div>
  );
};

export default NewsApp;
