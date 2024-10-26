import React, { useState } from "react";
import PanelCloseButton from "../../../Common/Panel/PanelCloseButton";
import TopOfList from "../ListSection/TopOfList";
import NewCoursesBox from "../NewCoursesBox";
import { FilterSection } from "./FilterSection";
import Button from "../../../Common/Button/Button";
import HambMenu from "../../../Common/HambMenu";
import ReactPaginate from "react-paginate";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { useSearchParams } from "react-router-dom";

const AllNewCourses = ({ func, courseList, totalCourses }) => {
  const [openFilter, setOpenFilter] = useState("close");
  const handleOpenFilter = () => {
    setOpenFilter("open");
  };
  // Pagination
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params
  const handlePagination = (info) => {
    const page = info + 1;
    setSearchParams((op) => {
      op.set("PageNumber", page);
      return op;
    });
  };
  return (
    <>
      <div className="border rounded-2xl w-full flex flex-col gap-5 p-5 bg-primaryWhite">
        {/* Top Title And Close Btn  */}
        <div className="flex flex-row w-full items-center justify-between">
          <h1 className="text-xl 2xl:text-[36px]">جدید ترین دوره ها</h1>
          <PanelCloseButton func={func} />
        </div>
        {/* Filter Section */}
        <Button
          text={"ترتیب و فیلتر"}
          phoneStyle="xl:hidden h-12 float-left"
          onClick={handleOpenFilter}
        />
        <FilterSection phoneStyle="hidden 2xl:!flex" />
        {/* Top Of The List */}
        <div className="flex flex-col justify-start items-center gap-y-5">
          <TopOfList modal="on" />
          <div className="border rounded-3xl w-full h-[470px] flex flex-col justify-start items-start flex-nowrap overflow-y-scroll px-5">
            {courseList.map((it, index) => {
              return (
                <NewCoursesBox
                  modal="on"
                  key={index}
                  title={it.title}
                  describe={it.describe}
                  teacherName={it.teacherName}
                  courseId={it.courseId}
                  cost={parseInt(it.cost)}
                  totalCourses={totalCourses}
                />
              );
            })}
          </div>
        </div>
        <ReactPaginate
          containerClassName="flex flex-row-reverse bg-primaryGray h-[48px] justify-between items-center rounded-2xl w-max m-auto dark:bg-primaryBlack dark:text-primaryWhite dark:border"
          pageLinkClassName="hover:bg-primaryBlue flex justify-center items-center rounded-lg block w-[48px] h-full"
          pageClassName="h-full"
          breakLabel="..."
          marginPagesDisplayed={5}
          pageRangeDisplayed={0}
          nextLabel={<SlArrowRight />}
          previousLabel={<SlArrowLeft />}
          pageCount={Math.ceil(totalCourses / 10)}
          activeLinkClassName="bg-primaryBlue"
          nextLinkClassName={
            "flex justify-center items-center block w-[48px] active:text-primaryBlue h-full active:border active:border-primaryBlue rounded-r-2xl"
          }
          nextClassName="h-full"
          previousClassName="h-full"
          previousLinkClassName={
            "flex justify-center items-center block w-[48px] active:text-primaryBlue active:border active:border-primaryBlue h-full rounded-l-2xl"
          }
          onClick={(e) => {
            if (e.nextSelectedPage == undefined) {
              return false;
            }
            handlePagination(e.nextSelectedPage);
          }}
        />
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
