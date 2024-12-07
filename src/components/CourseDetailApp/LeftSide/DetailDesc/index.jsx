import React, { useEffect, useState } from "react";
import SummarizerPopUp from "../../../Common/SummarizerPopUp";
import axios from "axios";
import { useParams, useSearchParams, useLocation } from "react-router-dom";

const DetailDesc = ({ title, desc }) => {
  const [summedText, setSummedText] = useState("");
  const [orgOrSum, setOrgOrSum] = useState("org");

  return (
    <>
      <div className="w-full dark:text-primaryWhite relative">
        <SummarizerPopUp
          text={desc}
          setOrgOrSum={setOrgOrSum}
          orgOrSum={orgOrSum}
          setSummedText={setSummedText}
          summedText={summedText}
        />
        <h1 className="sm:text-2xl text-xl mb-6 p-0 font-bold ">{title}</h1>
        <h2 className="sm:text-xl text-base">
          {orgOrSum == "org" ? desc : summedText}
        </h2>
        {/* start of Session khoda rahm kone */}
        <div></div>
      </div>
    </>
  );
};

export default DetailDesc;
