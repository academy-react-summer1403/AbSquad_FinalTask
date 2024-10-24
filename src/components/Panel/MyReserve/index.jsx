import React, { useState } from "react";
import PageTitle from "./PageTitle";
import { FilterSection } from "./CourseSection/FilterSection";
import { CourseSection } from "./CourseSection";
import { Modal } from "./Modal";
import { CourseDetail } from "../MyReserveDetail";
const MyReserve = () => {
  const [openAll, setOpenAll] = useState("close");
  const handleOpenAll = () => {
    setOpenAll("open");
  };
  return (
    <>
      <div className="flex flex-col my-10 gap-5">
        <PageTitle />
        <FilterSection />
        <CourseSection func={handleOpenAll} />
      </div>
      {openAll == "open" && (
        <Modal Component={CourseDetail} func={setOpenAll} />
      )}
    </>
  );
};

export default MyReserve;
