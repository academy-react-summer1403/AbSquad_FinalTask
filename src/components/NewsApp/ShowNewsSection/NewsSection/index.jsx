import React from "react";
import { RightSection } from "./RightSection";
import { LeftSection } from "./LeftSection";
const NewsSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center xl:flex-row lg:justify-center lg:items-center xl:justify-start xl:items-start h-full grayBox pt-5">
        <RightSection />
        <LeftSection />
      </div>
    </>
  );
};

export default NewsSection;
