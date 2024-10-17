import React from "react";

const LittleRect = ({ title, subText = "", Icon, iconSize }) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center text-sm dark:text-primaryWhite sm:text-base">
        <Icon size={iconSize} />
        <span className="text-sm font-bold pr-3  sm:text-base">
          {title}
          <span className="text-fontGray text-sm sm:text-base">{subText}</span>
        </span>
      </div>
    </>
  );
};

export default LittleRect;
