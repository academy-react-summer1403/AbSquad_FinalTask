import React from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";
import ProfileComp from "../../../Common/ProfileComp";
const TeacherSection = () => {
  return (
    <div className="flex flex-col gap-3 w-full ">
      <FontGraySmallText text={"منتشرکننده"} />
      <ProfileComp name="محسن اسفندیاری" />
    </div>
  );
};

export { TeacherSection };
