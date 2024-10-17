import React from "react";
import { DatePicker } from "zaman";
import TitleSpan from "../NewFields/TitleSpan";
import { LuCalendarRange } from "react-icons/lu";
const CalField = () => {
  return (
    <>
      <div className="flex flex-col w-full text-align">
        <TitleSpan title="تاریخ برگذاری" Icon={LuCalendarRange} />
        <DatePicker
          className="relative z-[60]"
          inputClass="filterStyle text-left dark:bg-primaryBlack dark:border relative z-[60]"
          round="x4"
          range
        />
      </div>
    </>
  );
};
export default CalField;
