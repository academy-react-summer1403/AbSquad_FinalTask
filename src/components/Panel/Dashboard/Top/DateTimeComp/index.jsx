import React from "react";

const DateTimeComp = ({ title, Icon, iconSize, func }) => {
  return (
    <>
      {/* The WHole Component */}
      <div className="flex flex-row justify-start items-center gap-2 2xl:gap-4 dark:bg-primaryBlack dark:text-primaryWhite">
        {/* The Icon Part */}
        <div className="border border-white h-10 w-10 rounded-full bg-primaryWhite flex justify-center items-center 2xl:h-12 2xl:w-12">
          <Icon size={iconSize} />
        </div>
        {/* The Value */}
        <div className="grow flex flex-row flex-wrap justify-start items-start">
          <span className="basis-full text-sm text-fontGray 2xl:text-base">
            {title}
          </span>
          <span className="basis-full text-base 2xl:text-lg dark:text-primaryWhite">
            {func}
          </span>
        </div>
      </div>
    </>
  );
};

export default DateTimeComp;
