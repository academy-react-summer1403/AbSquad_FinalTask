import React from "react";
import DashCalender from "./DateCalender";
import ProgressBar from "./ProgressBar";
const Mid = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-2 monitor:flex-row">
      {/* Comments */}
      <div className="w-full basis-[287px] border border-white order-2 rounded-2xl monitor:h-[374px]  monitor:order-1 monitor:basis-1/2">
        s
      </div>

      {/* Date Picker */}
      <div className="w-full basis-[287px] border border-black rounded-2xl monitor:order-2 monitor:basis-1/4">
        <DashCalender />
      </div>

      {/* Progress Bar */}
      <div className="flex-col items-center justify-start hidden rounded-3xl h-[374px] bg-primaryWhite monitor:flex monitor:order-3 monitor:basis-1/4 monitor:px-5 monitor:py-5">
        <ProgressBar />
      </div>
    </div>
  );
};

export { Mid };
