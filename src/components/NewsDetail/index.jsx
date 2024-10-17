import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentAddModal from "../Common/CommentAddModal";
import CourseImgCon from "../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../components/Common/MainCourseBox/Info";
import MainBox from "../Common/MainCourseBox";
import RightSection from "./RightSection";
import { GetNewsDetail } from "../../core/Services/Api/NewsDetail/news.detail.api.js";
import LeftSection from "./LeftSection";

const NewsDetailApp = () => {
  const { Id } = useParams();
  const [newsDetail, setNewsDetail] = useState({});

  const fecthDetail = async () => {
    const res = await GetNewsDetail(Id);
    setNewsDetail(res.detailsNewsDto);
  };
  useEffect(() => {
    fecthDetail();
  }, [Id]);
  const [commentModalOpen, setCommentModalOpen] = useState("close");
  return (
    <>
      <div className="flex xl:flex-row xl:gap-16 my-10 flex-col">
        <RightSection newsDetail={newsDetail} />
        <LeftSection
          setCommentModalOpen={setCommentModalOpen}
          newsDetail={newsDetail}
        />
        {/* Other Courses */}
      </div>

      {/* Add Comment Modal  */}
      {commentModalOpen == "open" && (
        <CommentAddModal onClickFunc={setCommentModalOpen} modalTitle="نظرات" />
      )}
    </>
  );
};

export default NewsDetailApp;
