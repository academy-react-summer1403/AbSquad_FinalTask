import React from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";
import ProfileComp from "../../../Common/ProfileComp";
const TeacherSection = () => {
  return (
    <div className="flex flex-col gap-3 w-full ">
      <FontGraySmallText text={"مدرس دوره"} />
      <ProfileComp name="محسن اسفندیاری" skill="سنیور فرانت اند" />
      <ProfileComp name="مهدی اصغری" skill="سنیور فرانت اند" />
    </div>
  );
};

export { TeacherSection };
