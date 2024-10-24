import React, { useEffect } from "react";
import DateTimeComp from "../DateTimeComp";
import { CgCalendarDates } from "react-icons/cg";
const DashboardDate = () => {
  const handleDate = () => {
    let formattedDate = "";
    const date = new Date();
    const d = date.toLocaleString("fa-IR", { day: "numeric" });
    const m = date.toLocaleString("fa-IR", { month: "long" });
    const y = date.toLocaleString("fa-IR", { year: "numeric" });
    formattedDate = d + " " + m + " " + y;

    return formattedDate;
  };

  return (
    <>
      <div className="basis-1/2 monitor:basis-1/4">
        <DateTimeComp
          title={"تاریخ"}
          Icon={CgCalendarDates}
          iconSize={"24px"}
          func={handleDate()}
        />
      </div>
    </>
  );
};

export { DashboardDate };
