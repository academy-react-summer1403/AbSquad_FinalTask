import React, { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import FontGraySmallText from "../../Common/FontGraySmallText";
import TeacherProfSection from "./TeacherProfSection";
import DetailDesc from "./DetailDesc";
import RateSection from "./RateSection";
import CommentSection from "./CommentSection";

const LeftSide = ({ courseDetail, setCommentModalOpen }) => {
  return (
    <>
      <div className="basis-3/5 flex flex-col items-start justify-start gap-5">
        <ImageContainer image={courseDetail.imageAddress} />
        <div className="flex flex-col gap-3 w-full ">
          <FontGraySmallText text="مدرس" />
          <TeacherProfSection courseDetail={courseDetail} />
        </div>
        <FontGraySmallText text="توضیحات" />
        <div className="w-full">
          <DetailDesc
            title={courseDetail.miniDescribe}
            desc={courseDetail.describe}
          />
        </div>
        <RateSection />

        <CommentSection setCommentModalOpen={setCommentModalOpen} />
      </div>
    </>
  );
};

export default LeftSide;
