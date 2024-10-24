import React from "react";
import SearchField from "../../../../Common/NewFields/SearchField";
import CalField from "../../../../Common/Fields/CalField";
const FilterSection = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center w-full gap-10">
        <div className="basis-1/4">
          <SearchField bgStyle={"!bg-fontGray !bg-opacity-15"} />
        </div>
        <div className="basis-1/4">
          <CalField bgStyle="!bg-fontGray !bg-opacity-15" />
        </div>
      </div>
    </>
  );
};

export { FilterSection };
