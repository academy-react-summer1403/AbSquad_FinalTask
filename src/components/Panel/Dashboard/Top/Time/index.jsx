import React from "react";
import DateTimeComp from "../DateTimeComp";
import { GoClock } from "react-icons/go";
const Time = () => {
  const getTime = () => {
    let time = "";
    var date = new Date();
    let currentH = date.getHours();
    let currentM = date.getMinutes();
    if (currentH < 10) {
      currentH = "0" + currentH;
    }
    if (currentM < 10) {
      currentM = "0" + currentM;
    }

    time = currentH + ":" + currentM;
    return time;
  };
  return (
    <div className="basis-1/2 2xl:basis-52 dark:bg-primaryBlack dark:text-primaryWhite">
      <DateTimeComp
        title={"ساعت"}
        Icon={GoClock}
        iconSize={"24px"}
        func={getTime()}
      />
    </div>
  );
};

export { Time };
