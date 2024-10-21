import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
const FilterDeleteButton = ({ setSelectValue, setSearchParams, title }) => {
  console.log(title);
  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1, type: "spring" }}
        exit={{ scale: 0 }}
        onClick={() => {
          setSelectValue("انتخاب کنید...");
          if (title == "دسته بندی") {
            setSearchParams((op) => {
              op.delete("TechCount");
              return op;
            });
            setSearchParams((op) => {
              op.delete("ListTech");
              return op;
            });
          }
          if (title == "سطح آموزشی") {
            setSearchParams((op) => {
              op.delete("courseLevelId");
              return op;
            });
          }
          if (title == "اساتید") {
            setSearchParams((op) => {
              op.delete("TeacherId");
              return op;
            });
          }
        }}
        className="flex flex-row  justify-center items-center gap-2 h-full rounded-blueButton py-[9px] px-4 cursor-pointer shadow-[0px_0px_0px_1px_#ff4242] text-instaRed"
      >
        <RxCross1 />
        حذف
      </motion.button>
    </>
  );
};

export default FilterDeleteButton;
