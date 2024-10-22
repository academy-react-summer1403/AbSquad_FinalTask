import React from "react";

const DateTimeComp = ({ title, Icon, iconSize, func }) => {
  return (
    <>
      {/* The WHole Component */}
      <div className="flex flex-row justify-start items-center gap-2 monitor:gap-4">
        {/* The Icon Part */}
        <div className="border border-white h-10 w-10 rounded-full bg-primaryWhite flex justify-center items-center monitor:h-12 monitor:w-12">
          <Icon size={iconSize} />
        </div>
        {/* The Value */}
        <div className="grow flex flex-row flex-wrap justify-start items-start">
          <span className="basis-full text-sm text-fontGray monitor:text-base">
            {title}
          </span>
          <span className="basis-full text-base monitor:text-lg dark:text-primaryWhite">
            {func}
          </span>
        </div>
      </div>
    </>
  );
};

export default DateTimeComp;
