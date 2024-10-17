import React from "react";
import { FilterOptions } from "../../../../../core/utilities/FilterOptions/filter.utils.js";
import SelectField from "../../../../Common/NewFields/SelectField";
import SearchField from "../../../../Common/NewFields/SearchField";
import RangeSliderField from "../../../../Common/Fields/RangeSliderField.jsx";
import CalField from "../../../../Common/Fields/CalField.jsx";
import { SortOptions } from "../../../../../core/utilities/SortOptions/sort.utils.js";
import Button from "../../../../Common/Button/Button.jsx";
const FieldsSection = ({ style = "", filterOpen }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-10  w-full bg-mainBoxGray p-4 order-1 xl:gap-5 xl:flex  xl:rounded-3xl xl:order-2 xl:basis-full xl:flex-col ml-3 dark:bg-primaryBlack dark:text-primaryWhite ${style}`}
      >
        {filterOpen == "close" && <SearchField />}
        {FilterOptions.map((it, index) => {
          return (
            <SelectField
              key={index}
              options={it.label}
              filterTitle={it.filterTitle}
              Icon={it.icon}
              type={"course"}
            />
          );
        })}
        <RangeSliderField />
        <CalField />

        {SortOptions.map((it, index) => {
          return (
            <SelectField
              key={index}
              options={it.label}
              filterTitle={it.filterTitle}
              Icon={it.icon}
              style="xl:hidden mb-5"
            />
          );
        })}
        <Button text={"اعمال"} phoneStyle={"h-14 text-base xl:hidden"} />
      </div>
    </>
  );
};

export default FieldsSection;
