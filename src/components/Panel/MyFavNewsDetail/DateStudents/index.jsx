import React from "react";
import LittleRect from "../../../Common/MainCourseLittleRect";
import { CgCalendarDates } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
const DateStudents = () => {
  return (
    <div className="flex flex-col w-full gap-3 ">
      <LittleRect
        title={"20 اردیبهشت 1403"}
        subText="(شروع)"
        Icon={CgCalendarDates}
        iconSize="25px"
        textSize="sm:!text-xl "
      />
      <LittleRect
        title={"98"}
        Icon={IoEyeOutline}
        iconSize="25px"
        textSize="sm:!text-xl "
      />
    </div>
  );
};

export { DateStudents };
