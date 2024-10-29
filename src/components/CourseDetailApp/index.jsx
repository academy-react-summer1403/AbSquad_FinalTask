import React, { useEffect, useState } from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { useParams } from "react-router-dom";
import { GetCourseDetail } from "../../core/Services/Api/CourseDetail/course.detail.api";
import CommentAddModal from "../Common/CommentAddModal";
import CourseImgCon from "../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../components/Common/MainCourseBox/Info";
import MainBox from "../Common/MainCourseBox";
import { GetPopularCourse } from "../../core/Services/Api/course.api";
import ReserveCourseModal from "./ReserveCourseModal";

const CourseDetailApp = () => {
  const { CourseId } = useParams();
  const [courseDetail, setCourseDetail] = useState({});
  const [commentModalOpen, setCommentModalOpen] = useState("close");
  const [reserveModalOpen, setReserveModalOpen] = useState("close");
  const [otherCourses, setOtherCourses] = useState([]);

  const fecthDetail = async (id) => {
    const res = await GetCourseDetail(id);
    setCourseDetail(res);
  };

  const fetchOtherCourses = async () => {
    const res = await GetPopularCourse();
    setOtherCourses(res);
  };

  useEffect(() => {
    if (CourseId) {
      fecthDetail(CourseId);
    }
  }, [CourseId]);

  useEffect(() => {
    fetchOtherCourses();
    // this changes the scrolling behavior to "smooth"
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="flex xl:flex-row xl:gap-16 my-10 flex-col">
        <RightSide
          setReserveModalOpen={setReserveModalOpen}
          courseDetail={courseDetail}
        />
        <LeftSide
          setCommentModalOpen={setCommentModalOpen}
          courseDetail={courseDetail}
        />
        {/* Other Courses */}
      </div>
      <div className="">
        <h1 className="text-[48px] mb-10">دوره های دیگر</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {otherCourses.map((it, index) => {
            return (
              index !== 3 && (
                <MainBox
                  ImageContainer={CourseImgCon}
                  Info={CourseInfo}
                  key={index}
                  course={it}
                  style={"cursor-pointer flex-col h-[528px]"}
                />
              )
            );
          })}
        </div>
      </div>

      {/* Add Comment Modal  */}
      {commentModalOpen == "open" && (
        <CommentAddModal onClickFunc={setCommentModalOpen} modalTitle="نظرات" />
      )}
      {reserveModalOpen == "open" && (
        <ReserveCourseModal setReserveModalOpen={setReserveModalOpen} />
      )}
    </>
  );
};

export default CourseDetailApp;
