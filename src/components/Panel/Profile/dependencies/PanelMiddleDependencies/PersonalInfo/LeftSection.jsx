import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./LeftSectionField.css";
import { useSelector } from "react-redux";

const LeftSection = () => {
  const profile = useSelector((state) => state.userSlice.profile);
  let incompleteFields = 0;
  for (const key in profile) {
    if (!profile[key]) {
      incompleteFields += 1;
    }
  }
  const totalFields = Object.keys(profile).length;
  let percentage =
    totalFields > 0
      ? ((totalFields - incompleteFields) / totalFields) * 100
      : 0;
  percentage = Math.ceil(percentage / 5) * 5;

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
