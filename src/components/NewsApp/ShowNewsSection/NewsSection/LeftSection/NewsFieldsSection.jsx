import React from "react";
import SelectField from "../../../../Common/NewFields/SelectField";
import SearchField from "../../../../Common/NewFields/SearchField";
import CalField from "../../../../Common/Fields/CalField.jsx";
import Button from "../../../../Common/Button/Button.jsx";
import { NewsFilterOptions } from "../../../../../core/utilities/NewsFilterOptions/news.filter.api.js";
import { SortOptions } from "../../../../../core/utilities/SortOptions/sort.utils.js";
const NewsFieldsSection = ({ style = "", newsFilterOpen }) => {
  return (
    <div>
      <div
        className={`flex flex-col gap-10  w-full bg-mainBoxGray p-4 order-1 xl:gap-5 xl:flex  xl:rounded-3xl xl:order-2 xl:basis-full xl:flex-col ml-3 dark:bg-primaryBlack dark:text-primaryWhite ${style}`}
      >
        {newsFilterOpen == "close" && <SearchField />}
        {NewsFilterOptions.map((it, index) => {
          return (
            <SelectField
              key={index}
              options={it.label}
              filterTitle={it.filterTitle}
              Icon={it.icon}
              type={"news"}
            />
          );
        })}

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
    </div>
  );
};

export default NewsFieldsSection;
