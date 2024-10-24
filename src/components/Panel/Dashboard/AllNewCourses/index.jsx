import React, { useState } from "react";
import PanelCloseButton from "../../../Common/Panel/PanelCloseButton";
import TopOfList from "../ListSection/TopOfList";
import NewCoursesBox from "../NewCoursesBox";
import { FilterSection } from "./FilterSection";
import Button from "../../../Common/Button/Button";
import HambMenu from "../../../Common/HambMenu";
const AllNewCourses = ({ func }) => {
  const [openFilter, setOpenFilter] = useState("close");
  const handleOpenFilter = () => {
    setOpenFilter("open");
  };
  return (
    <>
      <div className="border rounded-2xl w-full flex flex-col gap-5 p-5 bg-primaryWhite ">
        {/* Top Title And Close Btn  */}
        <div className="flex flex-row w-full items-center justify-between">
          <h1 className="text-xl monitor:text-[36px]">جدید ترین دوره ها</h1>
          <PanelCloseButton func={func} />
        </div>
        {/* Filter Section */}
        <Button
          text={"ترتیب و فیلتر"}
          phoneStyle="xl:hidden h-12 float-left"
          onClick={handleOpenFilter}
        />
        <FilterSection phoneStyle="hidden" />
        {/* Top Of The List */}
        <div className="flex flex-col justify-start items-center gap-y-5">
          <TopOfList />
          <div className="border rounded-3xl w-full h-[470px] flex flex-col justify-start items-start flex-nowrap overflow-y-scroll px-5">
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
            <NewCoursesBox />
          </div>
        </div>
        {/* Hamb Menu */}
        {openFilter == "open" && (
          <HambMenu
            setNavOpen={setOpenFilter}
            Component={FilterSection}
            compWrapperStyle="sm:mx-auto sm:w-[600px] sm:rounded-2xl"
            compBg="bg-transparent"
            title="ترتیب و فیلتر"
            hambMenuStyle="xl:hidden !bg-opacity-100 !bg-primaryWhite"
            TitleDivStyle="!bg-primaryWhite"
          />
        )}
      </div>
    </>
  );
};

export default AllNewCourses;
