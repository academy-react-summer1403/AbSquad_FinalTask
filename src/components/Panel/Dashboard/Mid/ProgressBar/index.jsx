import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ProgressBar = () => {
  const [percentage, setPercentage] = useState("90");

  let color;
  if (percentage < 40) {
    color = "red";
  } else if (percentage < 70) {
    color = "#FFC619";
  } else {
    color = "#3772FF";
  }
  return (
    <>
      {/* Top Info */}
      <div className="flex flex-row w-full justify-between basis-1/4">
        <span className="text-xl ">وضعیت اطلاعات حساب</span>
        <button className="flex items-start cursor-default">
          <RiEdit2Line
            size="24px"
            className="text-primaryBlue cursor-pointer"
          />
        </button>
      </div>

      {/* The Circle */}
      <div className="basis-2/4">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          className="w-[200px] h-[200px]"
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: color,
          })}
        />
      </div>
      {/* A Label For It */}
      <span className="text-primaryBlue text-base basis-1/4 flex items-center justify-center">
        اطلاعات حساب کاربری شما تکمیل است
      </span>
    </>
  );
};

export default ProgressBar;
