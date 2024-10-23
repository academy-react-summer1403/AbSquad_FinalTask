import React, { useState } from "react";
import { DatePicker } from "zaman";
import TitleSpan from "../NewFields/TitleSpan";
import { LuCalendarRange } from "react-icons/lu";

const CalField = ({ bgStyle = "" }) => {
  const [selectValue, setSelectValue] = useState("");
  return (
    <>
      <div className="flex flex-col w-full text-align">
        <TitleSpan
          title="تاریخ برگذاری"
          Icon={LuCalendarRange}
          setSelectValue={setSelectValue}
          selectValue={selectValue}
        />
        <DatePicker
          className="relative text-right z-[60]"
          onChange={(e) => {
            setSelectValue(e.from);
          }}
          inputClass={`filterStyle  dark:bg-primaryBlack dark:border relative z-[60] ${bgStyle}`}
          round="x4"
          range
        />
      </div>
    </>
  );
};
export default CalField;
