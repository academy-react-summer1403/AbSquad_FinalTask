import React, { useState } from "react";
import TitleSpan from "./TitleSpan";
import { useSearchParams } from "react-router-dom";

const SelectField = ({ type = "", options, filterTitle, Icon, style = "" }) => {
  const [deleteOption, setDeleteOption] = useState("keep");
  const [selectValue, setSelectValue] = useState("انتخاب کنید...");
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params

  const handleTech = (val, type) => {
    if (type == "course") {
      setSearchParams((op) => {
        op.set("ListTech", val);
        return op;
      });
      setSearchParams((op) => {
        op.set("TechCount", "1");
        return op;
      });
    } else {
      setSearchParams((op) => {
        op.delete("ListTech");
        return op;
      });
      setSearchParams((op) => {
        op.delete("TechCount");
        return op;
      });
    }
    if (type == "news") {
      setSearchParams((op) => {
        op.set("NewsCategoryId", val);
        return op;
      });
    }
  };

  // Handle Level
  const handleLevel = (val) => {
    setSearchParams((op) => {
      op.set("courseLevelId", val);
      return op;
    });
  };
  const handleTeacher = (val) => {
    setSearchParams((op) => {
      op.set("TeacherId", val);
      return op;
    });
  };

  return (
    <>
      <div className={`flex flex-col justify-start items-center ${style}`}>
        <TitleSpan
          title={filterTitle}
          Icon={Icon}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          setSearchParams={setSearchParams}
        />
        <select
          defaultValue={"asdasdas"}
          onChange={(e) => {
            const optionIndex = e.target.selectedIndex;
            const optionId = e.target.options[optionIndex].dataset.id;
            setSelectValue(e.target.value);
            if (filterTitle == "دسته بندی" && type == "course") {
              handleTech(optionId, type);
            } else if (filterTitle == "دسته بندی" && type == "news") {
              handleTech(optionId, type);
            }
            if (filterTitle == "سطح آموزشی") {
              handleLevel(optionId);
            }
            if (filterTitle == "اساتید") {
              handleTeacher(optionId);
            }
          }}
          className="filterStyle dark:bg-primaryBlack dark:border"
        >
          {deleteOption == "keep" && (
            <option className="hidden" defaultValue="انتخاب کنید...">
              انتخاب کنید...
            </option>
          )}
          {options.map((it, index) => {
            return (
              <option key={index} value={it.name} data-id={it.id}>
                {it.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectField;
