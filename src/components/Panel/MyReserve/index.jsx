﻿import React, { useState } from "react";
import PageTitle from "./PageTitle";
import { FilterSection } from "./CourseSection/FilterSection";
import { CourseSection } from "./CourseSection";
import { Modal } from "./Modal";
import { CourseDetail } from "../MyReserveDetail";
import HambMenu from "../../Common/HambMenu";
const MyReserve = () => {
  const [openAll, setOpenAll] = useState("close");
  const handleOpenAll = () => {
    setOpenAll("open");
  };
  const [openFilter, setOpenFilter] = useState("close");
  const handleOpenFilter = () => {
    setOpenFilter("open");
  };
  return (
    <>
      <div className="flex flex-col my-10 gap-5">
        <PageTitle handleOpenFilter={handleOpenFilter} />
        <FilterSection phoneStyle={"!hidden monitor:!flex"} />
        <CourseSection func={handleOpenAll} />
      </div>
      {openAll == "open" && (
        <Modal Component={CourseDetail} func={setOpenAll} />
      )}
      {openFilter == "open" && (
        <HambMenu
          setNavOpen={setOpenFilter}
          Component={FilterSection}
          compWrapperStyle="sm:mx-auto sm:w-[600px] sm:rounded-2xl h-screen"
          compBg="bg-transparent"
          title="فیلتر"
          hambMenuStyle="xl:hidden !bg-opacity-100 !bg-primaryWhite"
          TitleDivStyle="!bg-primaryWhite"
        />
      )}
    </>
  );
};

export default MyReserve;
