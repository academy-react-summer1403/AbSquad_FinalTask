import React from "react";

const TopOfList = ({ modal = "off" }) => {
  return (
    <>
      <div className="hidden w-full 2xl:flex justify-between rounded-2xl h-12 px-5">
        <div className="hidden w-full 2xl:grid 2xl:grid-cols-7 justify-start bg-[#F0F0F0] rounded-2xl h-12 2xl:gap-x-10 items-center text-fontGray">
          <span className="text-right pr-5 ">نام دوره</span>
          <span className={modal == "off" ? "col-span-2" : "col-span-1"}>
            درباره دوره
          </span>
          <span className="basis-30">اساتید دوره</span>
          <span className="">
            تاریخ برگذاری{" "}
            <span className={modal == "off" ? "hidden" : "inline"}> دوره</span>
          </span>
          <span
            className={`text-nowrap ${modal == "off" ? "hidden" : "inline"}`}
          >
            تاریخ پایان
            <span className={modal == "off" ? "hidden" : "inline"}> دوره</span>
          </span>
          <span className="">قیمت دوره</span>
        </div>
      </div>
    </>
  );
};

export default TopOfList;
