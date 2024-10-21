import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const LikeDisLikeComment = ({ likeCount, disLikeCount }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-start sm:gap-9 gap-2">
        <div className="flex items-start justify-start gap-2">
          <AiOutlineLike size={"24px"} />
          <span className="text-lg">{likeCount}</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiOutlineDislike size={"24px"} />
          <span className="text-lg">{disLikeCount}</span>
        </div>
      </div>
    </>
  );
};

export default LikeDisLikeComment;
