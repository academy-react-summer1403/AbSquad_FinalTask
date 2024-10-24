﻿import React, { useState } from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../../../Common/Button/Button";
const SignUpStatus = () => {
  const [percentage, setPercentage] = useState("10");
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
      <FontGraySmallText text={"وضعیت ثبت نام"} />
      <div className="flex flex-row w-full h-full justify-between items-center">
        {/*Reserve Button*/}
        <Button text={"رزرو دوره"} phoneStyle={"h-12"} />
      </div>
    </div>
  );
};

export { SignUpStatus };