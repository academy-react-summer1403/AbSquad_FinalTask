import React, { useState } from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";
import ApprovalStatus from "../../MyReserve/CourseSection/CourseBox/ApprovalStatus";
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
      <FontGraySmallText text={"وضعیت ثبت نام"} style="!text-base" />
      <div className="flex flex-row w-full h-full justify-between items-center">
        {/*Reserve Button*/}
        <ApprovalStatus statusId="1" textSize="!text-sm" />
      </div>
    </div>
  );
};

export { SignUpStatus };
