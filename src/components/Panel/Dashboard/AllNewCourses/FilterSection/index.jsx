import React from "react";
import SearchField from "../../../../Common/NewFields/SearchField";
import SelectField from "../../../../Common/NewFields/SelectField";
import CalField from "../../../../Common/Fields/CalField";
import { FilterOptions } from "../../../../../core/utilities/FilterOptions/filter.utils";
import RangeSliderField from "../../../../Common/Fields/RangeSliderField";
import Button from "../../../../Common/Button/Button";
const FilterSection = ({ phoneStyle }) => {
  return (
    <>
      <div
        className={`flex flex-col px-10 gap-5 2xl:flex-row justify-evenly items-center 2xl:gap-10 ${phoneStyle}`}
      >
        <div className="basis-1/4 h-full w-full">
          <SearchField />
        </div>
        <div className="basis-1/4  w-full">
          <CalField />
        </div>

        <div className="basis-1/4  w-full">
          {FilterOptions.map((it, index) => {
            return (
              index == 2 && (
                <SelectField
                  key={index}
                  options={it.label}
                  filterTitle={it.filterTitle}
                  Icon={it.icon}
                  type={"course"}
                />
              )
            );
          })}
        </div>
        <div className="basis-1/4  w-full">
          <RangeSliderField />
        </div>
        <Button text={"اعمال"} phoneStyle="xl:hidden h-12 !w-full " />
      </div>
    </>
  );
};

export { FilterSection };
