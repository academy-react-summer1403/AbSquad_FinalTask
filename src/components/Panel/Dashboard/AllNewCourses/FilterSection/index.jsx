import React from "react";
import SearchField from "../../../../Common/NewFields/SearchField";
import SelectField from "../../../../Common/NewFields/SelectField";
import CalField from "../../../../Common/Fields/CalField";
import { FilterOptions } from "../../../../../core/utilities/FilterOptions/filter.utils";
import RangeSliderField from "../../../../Common/Fields/RangeSliderField";
const FilterSection = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center gap-10">
        <div className="basis-1/4 h-full">
          <SearchField />
        </div>
        <div className="basis-1/4">
          <CalField />
        </div>

        <div className="basis-1/4">
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
        <div className="basis-1/4">
          <RangeSliderField />
        </div>
      </div>
    </>
  );
};

export { FilterSection };
