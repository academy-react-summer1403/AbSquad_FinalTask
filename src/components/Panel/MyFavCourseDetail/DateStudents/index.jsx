import React from "react";
import LittleRect from "../../../Common/MainCourseLittleRect";
import { PiStudentBold } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
const DateStudents = () => {
  return (
    <div className="flex flex-col w-full">
      <LittleRect
        title={" 80 / 120 دانشجو"}
        Icon={PiStudentBold}
        iconSize="25px"
        textSize="sm:!text-xl"
      />
      <LittleRect
        title={"20 اردیبهشت 1403"}
        subText="(شروع)"
        Icon={CgCalendarDates}
        iconSize="25px"
        textSize="sm:!text-xl "
      />
      <LittleRect
        title={"20 اردیبهشت 1403"}
        subText="(پایان)"
        Icon={CgCalendarDates}
        iconSize="25px"
        textSize="sm:!text-xl"
      />
    </div>
  );
};

export { DateStudents };
