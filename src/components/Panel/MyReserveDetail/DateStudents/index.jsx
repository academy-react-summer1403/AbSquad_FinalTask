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
        textSize="!text-xl"
      />
      <LittleRect
        title={"20 اردیبهشت 1403"}
        subText="(شروع)"
        Icon={CgCalendarDates}
        iconSize="25px"
        textSize="!text-xl"
      />
      <div className="flex flex-row justify-between items-center">
        <LittleRect
          title={"20 اردیبهشت 1403"}
          subText="(پایان)"
          Icon={CgCalendarDates}
          iconSize="25px"
          textSize="!text-xl"
        />
        <span className="hidden 2xl:block 2xl:text-3xl text-[28px]">
          1,800,000
          <span className="text-primaryBlue text-base">تومان</span>
        </span>
      </div>
      <span className="2xl:hidden text-[28px]">
        1,800,000
        <span className="text-primaryBlue text-base">تومان</span>
      </span>
    </div>
  );
};

export { DateStudents };
