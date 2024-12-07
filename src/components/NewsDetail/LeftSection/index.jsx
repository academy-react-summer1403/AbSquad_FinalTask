import React, { useEffect } from "react";
import ImageContainer from "./ImageContainer";
import NewsDetailDesc from "./NewsDetailDesc";
import RateSection from "../../CourseDetailApp/LeftSide/RateSection";
import CommentSection from "../../CourseDetailApp/LeftSide/CommentSection";
import { useParams } from "react-router-dom";

const LeftSection = ({ newsDetail, setCommentModalOpen }) => {
  const { Id } = useParams();

  return (
    <>
      <div className="basis-3/5 flex flex-col items-start justify-start gap-5">
        <ImageContainer image={newsDetail.currentImageAddress} />

        <div className="w-full">
          <NewsDetailDesc
            title={newsDetail.miniDescribe}
            desc={newsDetail.describe}
          />
        </div>

        <RateSection />

        <CommentSection
          setCommentModalOpen={setCommentModalOpen}
          newsDetail={newsDetail}
          type="news"
          newsId={Id}
        />
      </div>
    </>
  );
};

export default LeftSection;
