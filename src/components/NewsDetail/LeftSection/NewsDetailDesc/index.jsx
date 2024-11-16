import React, { useState } from "react";
import SummarizerPopUp from "../../../Common/SummarizerPopUp";
const NewsDetailDesc = ({ title, desc }) => {
  const [summedText, setSummedText] = useState("");
  const [orgOrSum, setOrgOrSum] = useState("org");
  return (
    <>
      <SummarizerPopUp
        text={desc}
        setOrgOrSum={setOrgOrSum}
        orgOrSum={orgOrSum}
        setSummedText={setSummedText}
        summedText={summedText}
      />
      <div className="w-full dark:text-primaryWhite">
        <h1 className="sm:text-2xl text-xl mb-6 p-0 font-bold ">{title}</h1>
        <h2 className="sm:text-xl text-base">
          {" "}
          {orgOrSum == "org" ? desc : summedText}
        </h2>
      </div>
    </>
  );
};

export default NewsDetailDesc;
