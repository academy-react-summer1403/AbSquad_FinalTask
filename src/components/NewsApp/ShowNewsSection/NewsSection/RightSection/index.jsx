import React, { useState } from "react";
import SortAndGrid from "../../../../CourseApp//ShowCourseSection/CourseSection/RightSide/SortAndGrid";
import NewsList from "./NewsList";
const RightSection = () => {
  const [showType, setShowType] = useState("Table");
  return (
    <>
      <div className="flex flex-col justify-start items-center basis-3/4  lg:max-xl:basis-full  h-full order-2 xl:order-1">
        <SortAndGrid setShowType={setShowType} page="News" />
        <NewsList showType={showType} />
      </div>
    </>
  );
};

export { RightSection };
