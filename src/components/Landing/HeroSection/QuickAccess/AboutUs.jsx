import React from "react";
import { CountUp } from "use-count-up";
import ArrowIcon from "./ArrowIcon";
const AboutUs = () => {
  return (
    <>
      <div className="  flex-col justify-start items-start gap-10 grayBox py-4 pr-6 relative grow dark:text-primaryWhite cursor-pointer sm:grow lg:basis-4/12 lg:flex sm:hidden">
        <h1 className="text-2xl sm:text-3xl">
          درباره ما
          <br />
          بیشتر بخوانید
        </h1>
        <span className="font-bold text-3xl">
          +
          <CountUp isCounting end={1000} easing="easeOutCubic" duration={5} />
          <span className="block text-base">دانشجو آنلاین در دوره</span>
        </span>
        <span className="font-bold text-3xl">
          +
          <CountUp isCounting end={13} easing="easeOutCubic" duration={5} />
          <span className="block text-base">سال سابقه آموزش تخصصی</span>
        </span>
        <ArrowIcon style="bg-primaryBlue " arrowColor="#FEFDFF" />
      </div>
    </>
  );
};

export default AboutUs;
