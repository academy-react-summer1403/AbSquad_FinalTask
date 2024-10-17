import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const LikeDisLikeComment = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-start sm:gap-9 gap-2">
        <div className="flex items-start justify-start gap-2">
          <AiOutlineLike size={"24px"} />
          <span className="text-lg">10</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiOutlineDislike size={"24px"} />
          <span className="text-lg">2</span>
        </div>
      </div>
    </>
  );
};

export default LikeDisLikeComment;
