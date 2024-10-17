import React from "react";
import ImageContainer from "./ImageContainer";
import NewsDetailDesc from "./NewsDetailDesc";
import RateSection from "../../CourseDetailApp/LeftSide/RateSection";
import CommentSection from "../../CourseDetailApp/LeftSide/CommentSection";

const LeftSection = ({ newsDetail, setCommentModalOpen }) => {
  return (
    <>
      <div className="basis-3/5 flex flex-col items-start justify-start gap-5">
        <ImageContainer image={newsDetail.imageAddress} />

        <div className="w-full">
          <NewsDetailDesc
            title={newsDetail.miniDescribe}
            desc={newsDetail.describe}
          />
        </div>
        <RateSection />

        <CommentSection setCommentModalOpen={setCommentModalOpen} />
      </div>
    </>
  );
};

export default LeftSection;
