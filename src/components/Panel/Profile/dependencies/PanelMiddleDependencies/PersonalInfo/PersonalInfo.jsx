import React from "react";
import LeftSection from "./LeftSection";
import RightSec from "./RightSec";

const PersonalInfo = () => {
  return (
    <div className="flex justify-between p-6 max-md:flex-col-reverse max-md:items-center">
      <RightSec />
      <LeftSection />
    </div>
  );
};

export default PersonalInfo;
