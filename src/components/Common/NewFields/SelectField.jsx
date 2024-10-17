import React, { useState } from "react";
import TitleSpan from "./TitleSpan";
import { useSearchParams } from "react-router-dom";

const SelectField = ({ type = "", options, filterTitle, Icon, style = "" }) => {
  const [deleteOption, setDeleteOption] = useState("keep");
  const [selectValue, setSelectValue] = useState("انتخاب کنید...");
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params
  const handleTech = (val, type) => {
    if (selectValue != "انتخاب کنید..." && type == "course") {
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
    if (selectValue != "انتخاب کنید..." && type == "news") {
      setSearchParams((op) => {
        op.set("NewsCategoryId", val);
        return op;
      });
    } else {
      setSearchParams((op) => {
        op.delete("NewsCategoryId");
        return op;
      });
    }
  };

  // Handle Level
  const handleLevel = (val) => {
    if (selectValue != "انتخاب کنید...") {
      setSearchParams((op) => {
        op.set("courseLevelId", val);
        return op;
      });
    } else {
      setSearchParams((op) => {
        op.delete("courseLevelId");
        return op;
      });
    }
  };
  const handleTeacher = (val) => {
    if (selectValue != "انتخاب کنید...") {
      setSearchParams((op) => {
        op.set("TeacherId", val);
        return op;
      });
    } else {
      setSearchParams((op) => {
        op.delete("TeacherId");
        return op;
      });
    }
  };

  return (
    <>
      <div className={`flex flex-col justify-start items-center ${style}`}>
        <TitleSpan title={filterTitle} Icon={Icon} />
        <select
          onInput={(e) => {
            setDeleteOption("delete");
            setSelectValue("");
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
              <option
                key={index}
                value={it.name}
                onClick={() => {
                  if (filterTitle == "دسته بندی" && type == "course") {
                    handleTech(it.id, type);
                  } else if (filterTitle == "دسته بندی" && type == "news") {
                    handleTech(it.id, type);
                  }
                  if (filterTitle == "سطح آموزشی") {
                    handleLevel(it.id);
                  }
                  if (filterTitle == "اساتید") {
                    handleTeacher(it.id);
                  }
                }}
              >
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
