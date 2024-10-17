import React, { useState } from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";
const CommentSection = ({ setCommentModalOpen }) => {
  return (
    <>
      <div className="flex flex-col my-20 w-full">
        <h1 className="sm:text-[48px] text-3xl mb-9">نظرات</h1>
        {/* Comment Section */}
        <div className="flex flex-col items-center grayBox p-5 ">
          <Button
            text={"نظر شما"}
            phoneStyle={"w-full sm:text-xl text-base h-10 gap-3 mb-10"}
            Icon={BsChatLeftText}
            iconSize={"20px"}
            onClick={() => setCommentModalOpen("open")}
          />
          <CommentBox
            name={"ممدعلی"}
            skill={"هیچی"}
            style={" absolute -right-[30px]"}
            reply="no"
            repliedTo="yes"
          />
          <CommentBox
            name={"Asghar"}
            skill={"Mamdialiam"}
            style={" absolute -right-[30px]"}
            reply="yes"
            repliedTo="no"
          />
          <CommentBox
            name={"ممدعلی"}
            skill={"هیچی"}
            style={" absolute -right-[30px]"}
            reply="no"
            repliedTo="no"
          />
        </div>
      </div>
    </>
  );
};

export default CommentSection;
