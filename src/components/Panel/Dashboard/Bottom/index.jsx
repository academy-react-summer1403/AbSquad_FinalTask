import React, { useEffect, useState } from "react";
import ShowAllHeader from "../../../Common/Panel/ShowAllHeader";
import ListSection from "../ListSection";
import { Modal } from "../Modal";
import AllNewCourses from "../AllNewCourses";
import { GetCourseList } from "../../../../core/Services/Api/CoursePage/course.pagination.api";
import { useLocation, useSearchParams } from "react-router-dom";
const Bottom = () => {
  const [openAll, setOpenAll] = useState("close");
  const handleOpenAll = () => {
    setOpenAll("open");
  };
  const handleCloseAll = () => {
    setOpenAll("close");
  };
  // ******************** API *************************
  const [courseList, setCourseList] = useState([]); // The Actual Data Of The Api
  const [totalCourses, setTotalCourses] = useState(""); // Number Of Total Pages in API
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params
  const location = useLocation(); // Use Location
  const fetchCoursePagination = async (sParam) => {
    const result = await GetCourseList(sParam);
    setTotalCourses(result.totalCount); // passing it for the future calculations for page number
    setCourseList(result.courseFilterDtos); // passing the Whole courses API
  };
  // For
  const handlePagination = (info) => {
    const page = info + 1;
    setSearchParams((op) => {
      op.set("PageNumber", page);
      return op;
    });
  };

  // Use Effect For Fecthing the course API depending on the SearchParams
  useEffect(() => {
    if (location.search) fetchCoursePagination(location.search);
  }, [searchParams]);

  // Setting The Amount Of Datas Shown in the page
  useEffect(() => {
    setSearchParams((op) => {
      op.set("RowsOfPage", "10");
      return op;
    });
  }, []);
  return (
    <>
      <div className="w-full h-full bg-primaryWhite py-5 rounded-2xl flex flex-col  gap-y-10">
        {/* Intro Top Part */}
        <ShowAllHeader title={"جدیدترین دوره ها"} funcs={handleOpenAll} />
        {/* List */}
        <ListSection courseList={courseList} totalCourses={totalCourses} />
      </div>
      {openAll == "open" && (
        <Modal
          Component={AllNewCourses}
          courseList={courseList}
          totalCourses={totalCourses}
          func={setOpenAll}
        />
      )}
    </>
  );
};

export { Bottom };
