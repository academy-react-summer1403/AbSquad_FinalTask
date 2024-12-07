import React, { useEffect, useState } from "react";
import SummarizerPopUp from "../../../Common/SummarizerPopUp";
import axios from "axios";
import { useParams, useSearchParams, useLocation } from "react-router-dom";

const DetailDesc = ({ title, desc }) => {
  const [summedText, setSummedText] = useState("");
  const [orgOrSum, setOrgOrSum] = useState("org");
  const [searchParams] = useSearchParams();

  const location = useLocation();

  // Extract the CourseId value from the URL
  const getCourseIdFromURL = () => {
    const query = location.pathname.split("CourseId="); // Split the URL at "CourseId="
    return query[1] || ""; // Return the part after "CourseId=" or an empty string
  };

  // const courseId = getCourseIdFromURL();

  // console.log(
  //   courseId,
  //   "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
  // );
  useEffect(() => {}, []);
  const FetchSession = async () => {
    try {
      const res = await axios.get("http://localhost:8080/chapters", {
        params: { cId: idParams },
      });
      console.log(res, "wtgy84iubfnjadbfyurirgnofvsbgwuirgnwogryuoselfnvu");
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    FetchSession();
  }, []);

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
