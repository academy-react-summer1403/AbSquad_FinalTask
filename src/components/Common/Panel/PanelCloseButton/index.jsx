import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

const PanelCloseButton = ({ func, setSearchParams }) => {
  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1, type: "spring" }}
        exit={{ scale: 0 }}
        onClick={() => {
          func();
          setSearchParams((op) => {
            op.delete("Query");
            return op;
          });
          setSearchParams((op) => {
            op.delete("TeacherId");
            return op;
          });
          setSearchParams((op) => {
            op.delete("CostDown");
            return op;
          });
          setSearchParams((op) => {
            op.delete("CostUp");
            return op;
          });
        }}
        className="flex flex-row  justify-center items-center gap-2 h-full rounded-blueButton py-[9px] px-4 cursor-pointer shadow-[0px_0px_0px_1px_#ff4242] text-instaRed"
      >
        <RxCross1 />
        بستن
      </motion.button>
    </>
  );
};

export default PanelCloseButton;
