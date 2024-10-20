import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
const FilterDeleteButton = ({ setSelectValue }) => {
  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1, type: "spring" }}
        exit={{ scale: 0 }}
        onClick={() => {
          setSelectValue("انتخاب کنید...");
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
