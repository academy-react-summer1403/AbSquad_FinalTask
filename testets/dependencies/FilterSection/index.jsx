import React from "react";
// import searchfield
import CalField from "../../../../../Common/Fields/CalField";
const FilterSection = ({ phoneStyle }) => {
  return (
    <>
      <div
        className={`flex flex-col 2xl:flex-row justify-start items-center w-full !gap-10 ${phoneStyle} `}
      >
        <div className="w-4/5 2xl:basis-1/4">
          <SearchField bgStyle={"!bg-fontGray !bg-opacity-15"} />
        </div>
        <div className="w-4/5 2xl:basis-1/4 ">
          <CalField bgStyle="!bg-fontGray !bg-opacity-15" />
        </div>
      </div>
    </>
  );
};

export { FilterSection };
