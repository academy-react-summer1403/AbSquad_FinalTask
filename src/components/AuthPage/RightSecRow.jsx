import React from "react";

const RightSecRow = ({ desc, Icon, classNameDesc, classNameButton }) => {
  return (
    <>
      <div className={`flex mb-3 md:mb-14 max-md:w-[300px]`}>
        <div
          className={`bg-primaryBlue rounded-full min-w-[72px] max-w-[72px] h-[72px] flex justify-center  items-center relative md:w-[72px] ${classNameButton}`}
        >
          {Icon && <Icon size="2em" />}
        </div>
        <div
          className={`py-5 ps-3 font-IRANYekan text-primaryBlack md:text-2xl max-md:w-[220px]  ${classNameDesc}`}
        >
          {desc}
        </div>
      </div>
    </>
  );
};

export default RightSecRow;
