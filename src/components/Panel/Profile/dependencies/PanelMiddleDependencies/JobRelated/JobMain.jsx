import React from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
const JobMain = () => {
  return (
    <div className="flex justify-between p-10">
      <RightSection />
      <LeftSection />
    </div>
  );
};

export default JobMain;
