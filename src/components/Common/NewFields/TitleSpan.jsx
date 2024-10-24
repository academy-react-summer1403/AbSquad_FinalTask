import React from "react";
import FilterDeleteButton from "../FilterDeleteButton";

const TitleSpan = ({
  title = "",
  Icon,
  style = "",
  selectValue = "",
  setSelectValue = "",
  setSearchParams = "",
}) => {
  return (
    <>
      <div
        className={`flex flex-row justify-start gap-3 items-center w-full mb-2 ${style}`}
      >
        <Icon className="w-8 h-8" />
        <span className="block grow">{title}</span>
        {selectValue != "انتخاب کنید..." &&
          title != "قیمت" &&
          title != "جست‌جو دوره" &&
          title != "تاریخ برگذاری" && (
            <FilterDeleteButton
              setSelectValue={setSelectValue}
              setSearchParams={setSearchParams}
              title={title}
            />
          )}
      </div>
    </>
  );
};

export default TitleSpan;
