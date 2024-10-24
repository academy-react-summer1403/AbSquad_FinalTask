import React from "react";
import Button from "../../../Common/Button/Button";
import LikeDislikeCircle from "../../../Common/LikeDislikeCircle";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const LikeDislike = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <Button text="صفحه دوره" phoneStyle={"!h-[55px]"} />
        <div className="flex flex-row justify-center gap-3 monitor:gap-5">
          <LikeDislikeCircle
            Icon={AiOutlineLike}
            iconSize={"24px"}
            style={"max-sm:!h-14 max-sm:!w-14 max-sm:!p-0"}
          />
          <LikeDislikeCircle
            Icon={AiOutlineDislike}
            iconSize={"24px"}
            style={"max-sm:!h-14 max-sm:!w-14 max-sm:!p-0"}
          />
        </div>
      </div>
    </>
  );
};

export { LikeDislike };
