import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const LikeDisLike = ({ course, type, showType, style = "" }) => {
  // currentLikeCount
  return (
    <>
      <div
        className={`w-4/12 flex flex-row justify-evenly items-center dark:text-primaryWhite ${
          showType !== "Grid" ? " order-1" : " order-2"
        }`}
      >
        <div className="flex flex-row basis-1/2 justify-start gap-2 items-center cursor-pointer">
          <AiOutlineLike size="24px" />
          <span>
            {type == "LandingNews" ? course.currentLikeCount : course.likeCount}
          </span>
        </div>
        <div className="flex flex-row basis-1/2 justify-start gap-2 items-center cursor-pointer">
          <AiOutlineDislike size="24px" />
          <span>
            {type == "LandingNews"
              ? course.currentDissLikeCount
              : course.dissLikeCount}
          </span>
        </div>
      </div>
    </>
  );
};

export default LikeDisLike;
