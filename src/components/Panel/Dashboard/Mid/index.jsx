﻿import React from "react";
import DashCalender from "./DateCalender";
import ProgressBar from "./ProgressBar";
import ShowAllHeader from "../../../Common/Panel/ShowAllHeader";

const Mid = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center rounded-2xl gap-2 2xl:flex-row 2xl:flex-nowrap dark:bg-primaryBlack dark:text-primaryWhite">
      {/* Comments */}
      <div className="w-[320px] basis-[372px] border border-white dark:border-none order-2 rounded-2xl 2xl:h-[374px]  2xl:order-1 2xl:basis-5/12 bg-primaryWhite py-5 dark:bg-primaryBlack dark:text-primaryWhite">
        <ShowAllHeader title={"نظرات شما"} />
      </div>

      {/* Date Picker */}
      <div className="w-full basis-[287px] rounded-2xl 2xl:order-2 2xl:basis-1/4 dark:bg-primaryBlack dark:text-primaryWhite">
        <DashCalender />
      </div>

      {/* Progress Bar */}
      <div className="flex-col items-center justify-start hidden rounded-3xl h-[374px] bg-primaryWhite 2xl:flex 2xl:order-3 2xl:grow 2xl:px-5 2xl:py-5 dark:bg-primaryBlack dark:text-primaryWhite">
        <ProgressBar />
      </div>
    </div>
  );
};

export { Mid };
