import React from "react";
import RateStars from "./RateStars";
import { MdOutlineStars } from "react-icons/md";
const RateSection = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <MdOutlineStars size={"20px"} className="text-primaryBlue" />
      <span className="sm:text-xl text-base ml-3 mr-2 dark:text-primaryWhite">
        امتیاز دهید
      </span>
      <RateStars />
    </div>
  );
};

export default RateSection;
