import React, { useState } from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const PaymentStatus = () => {
  const [percentage, setPercentage] = useState("70");
  let color;
  if (percentage < 40) {
    color = "red";
  } else if (percentage < 70) {
    color = "#FFC619";
  } else {
    color = "#3772FF";
  }
  return (
    <div className="w-full flex flex-col gap-5">
      <FontGraySmallText text={"وضعیت پرداختی"} style="!text-base" />
      <div className="flex gap-5 flex-row flex-wrap w-full h-full justify-between items-center">
        {/* Progress Bar */}
        <div className="flex basis-full items-center justify-start monitor:flex monitor:text-base ">
          <div className="w-16 h-16">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathTransitionDuration: 0.5,
                pathColor: color,
                textColor: color,
              })}
            />
          </div>
          <span className="flex justify-center items-center mr-2">
            پرداخت شده
          </span>
        </div>
        {/* Price */}
        <span className="text-3xl">
          1,800,000 / 1,500,000
          <span className="text-base text-primaryBlue">تومان</span>
        </span>
      </div>
    </div>
  );
};

export { PaymentStatus };
