import React from "react";
import PanelCloseButton from "../../../Common/Panel/PanelCloseButton";
import SearchField from "../../../Common/NewFields/SearchField";
import SelectField from "../../../Common/NewFields/SelectField";
import CalField from "../../../Common/Fields/CalField";
import { FilterOptions } from "../../../../core/utilities/FilterOptions/filter.utils";
import RangeSliderField from "../../../Common/Fields/RangeSliderField";
const AllNewCourses = ({ func }) => {
  return (
    <>
      <div className="border rounded-2xl w-full flex flex-col gap-5 p-5 ">
        {/* Top Title And Close Btn  */}
        <div className="flex flex-row w-full items-center justify-between">
          <h1 className="text-[36px]">جدید ترین دوره ها</h1>
          <PanelCloseButton func={func} />
        </div>
        {/* Filter Section */}
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
            {" "}
            <RangeSliderField />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNewCourses;
