import React from "react";
import SearchField from "../../../../Common/NewFields/SearchField";
import CalField from "../../../../Common/Fields/CalField";
const FilterSection = ({ phoneStyle }) => {
  return (
    <>
      <div
        className={`flex flex-col monitor:flex-row justify-start items-center w-full !gap-10 ${phoneStyle} `}
      >
        <div className="w-4/5 monitor:basis-1/4">
          <SearchField
            bgStyle={"!bg-fontGray !bg-opacity-15"}
            title="جست‌جو اخبار یا مقالات"
          />
        </div>
        <div className="w-4/5 monitor:basis-1/4">
          <CalField
            bgStyle="!bg-fontGray !bg-opacity-15"
            title="تاریخ انتشار"
          />
        </div>
      </div>
    </>
  );
};

export { FilterSection };
