﻿import React, { useEffect, useState } from "react";
import MainBox from "../../../../../Common/MainCourseBox/index.jsx";
import { GetNewsPagination } from "../../../../../../core/Services/Api/News/news.pagination.api.js";
import CourseImgCon from "../../../../../Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../../../../Common/MainCourseBox/Info/index.jsx";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import ReactPaginate from "react-paginate";
import { useParams, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NewsList = ({ showType }) => {
  const [NewsListData, setNewsListData] = useState([]); // The Actual Data Of The Api
  const [totalNews, setTotalNews] = useState(""); // Number Of Total Pages in API
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Width of the screen
  const [widthBool, setWidthBool] = useState("false");
  const location = useLocation(); // Use Location
  //   Function For Fetching The Pagination API
  const fetchNewsPagination = async (sParam) => {
    const result = await GetNewsPagination(sParam);
    setTotalNews(result.totalCount); // passing it for the future calculations for page number
    setNewsListData(result.news); // passing the Whole courses API
  };

  const handlePagination = (info) => {
    const page = info + 1;
    setSearchParams((op) => {
      op.set("PageNumber", page);
      return op;
    });
  };
  // Use Effect For Fecthing the course API depending on the SearchParams
  useEffect(() => {
    if (location.search) fetchNewsPagination(location.search);
  }, [searchParams]);

  useEffect(() => {
    setSearchParams((op) => {
      op.set("RowsOfPage", showType == "Grid" ? "9" : "8");
      return op;
    });
  }, [showType]);
  // A Use Effect For Resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowWidth < "1024") {
      setSearchParams((op) => {
        op.set("RowsOfPage", "3");
        return op;
      });
      setWidthBool("true");
    } else {
      setSearchParams((op) => {
        op.set("RowsOfPage", showType == "Grid" ? "9" : "8");
        return op;
      });
      setWidthBool("false");
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  // Render
  return (
    <div
      className={`grid gap-6 justify-center items-center px-7 lg:justify-stretch lg:items-start basis-full w-full my-8 mb-20 relative  ${
        showType == "Grid" ? "lg:grid-cols-3" : "lg:grid-col-1"
      } `}
    >
      {NewsListData.map((it, index) => {
        return (
          <MainBox
            key={index}
            ImageContainer={CourseImgCon}
            Info={CourseInfo}
            type="LandingNews"
            showType={widthBool == "true" ? "Grid" : showType}
            course={it}
            style={`cursor-pointer ${
              widthBool == "true" || showType == "Grid"
                ? "flex-col h-[528px]"
                : "flex-row h-auto"
            }`}
          />
        );
      })}
      <ReactPaginate
        containerClassName="flex flex-row-reverse bg-primaryGray h-[48px] justify-between items-center rounded-2xl absolute right-3 -bottom-16 max-sm:right-[26.5px] dark:bg-primaryBlack dark:text-primaryWhite dark:border"
        pageLinkClassName="hover:bg-primaryBlue flex justify-center items-center rounded-lg block w-[48px] h-full"
        pageClassName="h-full"
        breakLabel="..."
        marginPagesDisplayed={1}
        pageRangeDisplayed={0}
        nextLabel={<SlArrowRight />}
        previousLabel={<SlArrowLeft />}
        pageCount={
          widthBool == "true"
            ? Math.ceil(totalNews / 3)
            : showType == "Grid"
            ? Math.ceil(totalNews / 9)
            : Math.ceil(totalNews / 8)
        }
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
    </div>
  );
};

export default NewsList;