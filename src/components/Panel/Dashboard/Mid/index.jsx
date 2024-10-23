import React from "react";
import DashCalender from "./DateCalender";
import ProgressBar from "./ProgressBar";
import ShowAllHeader from "../../../Common/Panel/ShowAllHeader";

const Mid = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-2 monitor:flex-row monitor:flex-nowrap">
      {/* Comments */}
      <div className="w-full basis-[287px] border border-white order-2 rounded-2xl monitor:h-[374px]  monitor:order-1 monitor:basis-1/2 bg-primaryWhite py-5">
        <ShowAllHeader title={"نظرات شما"} />
      </div>

      {/* Date Picker */}
      <div className="w-full basis-[287px] rounded-2xl monitor:order-2 monitor:basis-1/4">
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
