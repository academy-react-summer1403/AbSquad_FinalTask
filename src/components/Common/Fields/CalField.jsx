import React, { useState } from "react";
import { DatePicker } from "zaman";
import TitleSpan from "../NewFields/TitleSpan";
import { LuCalendarRange } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

const CalField = ({ bgStyle = "", title = "تاریخ برگذاری", type = "" }) => {
  const [selectValue, setSelectValue] = useState("انتخاب کنید...");
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params
  const handleDateSort = (startDate, endDate) => {
    setSearchParams((op) => {
      op.set("StartDate", startDate);
      return op;
    });
    setSearchParams((op) => {
      op.set("EndDate", endDate);
      return op;
    });
  };

  return (
    <>
      <div className="flex flex-col w-full text-align">
        <TitleSpan
          title={title}
          Icon={LuCalendarRange}
          setSelectValue={setSelectValue}
          selectValue={selectValue}
          setSearchParams={setSearchParams}
        />
        <DatePicker
          className="relative text-right z-[60]"
          onChange={(e) => {
            setSelectValue(e.from);
            handleDateSort(e.from.toISOString(), e.to.toISOString());
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
