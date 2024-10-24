import React from "react";
import Button from "../../../Common/Button/Button";
import LikeDislikeCircle from "../../../Common/LikeDislikeCircle";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const LikeDislike = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <Button text="صفحه مقاله" phoneStyle={"!h-[55px]"} />
        <div className="flex flex-row justify-center monitor:gap-5">
          <LikeDislikeCircle
            Icon={AiOutlineLike}
            iconSize={"24px"}
            style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
          />
          <LikeDislikeCircle
            Icon={AiOutlineDislike}
            iconSize={"24px"}
            style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
          />
        </div>
      </div>
    </>
  );
};

export { LikeDislike };
