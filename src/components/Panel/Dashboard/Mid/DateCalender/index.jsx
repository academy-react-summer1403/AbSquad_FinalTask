import React, { useState } from "react";
import { Calendar, CalendarProvider } from "zaman";
import Style from "./Calender.module.css";

const DashCalender = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <>
      <CalendarProvider round="x4" locale="fa" accentColor="#3772FF">
        <Calendar
          defaultValue={calendarValue}
          onChange={(e) => setCalendarValue(new Date(e.value))}
          className={`${Style.Datewrapper} dark:bg-primaryBlack dark:text-white`}
        />
      </CalendarProvider>
    </>
  );
};

export default DashCalender;
