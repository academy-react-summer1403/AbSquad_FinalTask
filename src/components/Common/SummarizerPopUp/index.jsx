import React, { useEffect, useState } from "react";
import { MdEditNote } from "react-icons/md";
import { motion } from "framer-motion";
import axios from "axios";
import { SummarizerApi } from "../../../core/Services/Api/Summarizer/summarizer.api";
const SummarizerPopUp = ({
  text,
  setShownText,
  setOrgOrSum,
  orgOrSum,
  setSummedText,
  summedText,
}) => {
  const [bounce, setBounce] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 1000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  //   summarizing Text
  const handleSummarize = async (text) => {
    const res = await SummarizerApi(text);
    setSummedText(res);
  };
  return (
    <motion.div
      initial={{ x: "-100%" }}
      whileInView={{ x: "0" }}
      whileHover={() => {
        setBounce(false);
      }}
      onClick={() => {
        if (orgOrSum == "org") {
          if (summedText == "") handleSummarize(text);
          setOrgOrSum("sum");
        } else {
          setOrgOrSum("org");
        }
      }}
      transition={{ ease: "circInOut" }}
      className={`rounded-full px-2 text-primaryWhite shadow-sm w-fit h-10 flex justify-end items-center absolute left-0 -top-10 animate__animated  ${
        bounce ? "animate__bounce" : ""
      } cursor-pointer bg-primaryBlue`}
    >
      <MdEditNote size={32} />
      {orgOrSum == "org" ? "خلاصه سازی" : "متن اصلی"}
    </motion.div>
  );
};

export default SummarizerPopUp;
