import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./LeftSectionField.css";

const LeftSection = () => {
  const percentage = 20;

  let color;
  if (percentage < 40) {
    color = "red";
  } else if (percentage < 70) {
    color = "#FFC619";
  } else {
    color = "#3772FF";
  }
  return (
    <div className="w-[350px] h-[287px] flex flex-col gap-5 items-center justify-around mx-[100px] max-md:gap-0 ">
      <span className=" text-lg">وضعیت اطلاعات حساب</span>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className="w-[200px] h-[200px] max-md:w-36 max-md:h-36"
        styles={buildStyles({
          strokeLinecap: "butt",
          pathTransitionDuration: 0.5,
          pathColor: color,
          textColor: color,
        })}
      />
      <span className="text-[18px]">اطلاعات حساب‌کابری شما تکمیل نیست</span>
    </div>
  );
};

export default LeftSection;
