import React from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";
import ProfileComp from "../../../Common/ProfileComp";
const TeacherSection = () => {
  return (
    <div className="flex flex-col gap-3 w-full ">
      <FontGraySmallText text={"منتشرکننده"} style="!text-base" />
      <ProfileComp name="محسن اسفندیاری" nameSize="!text-xl" />
    </div>
  );
};

export { TeacherSection };
