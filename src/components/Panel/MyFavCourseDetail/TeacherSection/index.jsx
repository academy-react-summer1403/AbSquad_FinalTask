import React from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";
import ProfileComp from "../../../Common/ProfileComp";
const TeacherSection = () => {
  return (
    <div className="flex flex-col gap-3 w-full ">
      <FontGraySmallText text={"مدرس دوره"} style="!text-base" />
      <ProfileComp
        name="محسن اسفندیاری"
        skill="سنیور فرانت اند"
        nameSize="!text-xl"
        skillSize="!text-base"
      />
      <ProfileComp
        name="مهدی اصغری"
        skill="سنیور فرانت اند"
        nameSize="!text-xl"
        skillSize="!text-base"
      />
    </div>
  );
};

export { TeacherSection };
