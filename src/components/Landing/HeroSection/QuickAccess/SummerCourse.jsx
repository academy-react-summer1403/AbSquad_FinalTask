import React from "react";
import CssIcon from "../../../../assets/Svgs/Landing/css3.png";
import HtmlIcon from "../../../../assets/Svgs/Landing/Html5.png";
import UxIcon from "../../../../assets/Svgs/Landing/Ux.png";
import FigmaIcon from "../../../../assets/Svgs/Landing/Figma.png";
import ReactIcon from "../../../../assets/Svgs/Landing/react.png";
import ArrowIcon from "./ArrowIcon";
const SummerCourse = () => {
  return (
    <>
      <div className=" flex flex-col gap-3 pt-4 pr-6 h-[332px] rounded-main bg-primaryBlue text-primaryWhite relative  cursor-pointer lg:basis-4/12 sm:basis-1/2">
        <h1 className="text-xl font-extrabold sm:text-3xl">
          دوره‌های جدید تابستانه!
        </h1>
        <h3 className="text-sm w-52 h-80 sm:text-base">
          شروع دوره های جدید مبتدی و پیشرفته برای همین تابستان
        </h3>
        {/* Arrow Icon */}
        <ArrowIcon
          style="bg-primaryWhite max-lg:hidden "
          arrowColor="#272727"
        />
        {/* Image Box */}
        <div className="absolute left-0 -bottom-6  w-56 h-56">
          <img
            className="absolute left-0 w-[133px] rotate-[-20deg]"
            src={CssIcon}
            alt="CssIcon"
          />
          <img
            className="absolute right-0 w-[133px] rotate-12"
            src={HtmlIcon}
            alt=""
          />
          <img
            className="absolute  rotate-45 w-[133px] bottom-9 left-2"
            src={ReactIcon}
            alt=""
          />

          <img
            className="absolute rotate-[10deg] w-[133px] bottom-8 right-3"
            src={FigmaIcon}
            alt=""
          />
          <img
            className="absolute rotate-[10deg] w-[74px] bottom-6 right-2"
            src={UxIcon}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SummerCourse;
