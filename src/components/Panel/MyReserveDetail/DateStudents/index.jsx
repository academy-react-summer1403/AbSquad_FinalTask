import React from "react";
import LittleRect from "../../../Common/MainCourseLittleRect";
import { PiStudentBold } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
const DateStudents = () => {
  return (
    <div className="flex flex-col w-full gap-3">
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
      <div className="flex flex-row justify-between items-center">
        <LittleRect
          title={"20 اردیبهشت 1403"}
          subText="(پایان)"
          Icon={CgCalendarDates}
          iconSize="25px"
          textSize="sm:!text-xl"
        />
        <span className="monitor:text-3xl">
          1,800,000
          <span className="text-primaryBlue monitor:text-base">تومان</span>
        </span>
      </div>
    </div>
  );
};

export { DateStudents };
