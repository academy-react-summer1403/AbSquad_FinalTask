import React, { useEffect, useState } from "react";
import ProfileComp from "../ProfileComp";
import TitleSubCommentSection from "./TitleSubCommentSection";
import Button from "../Button/Button";
import { TbMessageReply } from "react-icons/tb";
import LikeDisLikeComment from "../../CourseDetailApp/LeftSide/CommentSection/LikeDisLikeComment";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GetCourseCommentsReply } from "../../../core/Services/Api/CourseCommentsReply/course.reply.api";
import { GetNewsReplyComments } from "../../../core/Services/Api/NewsCommentsReply/course.reply.api";

const CommentBox = ({
  name,
  skill,
  style,
  title = "",
  subTitle = "",
  pic = "",
  likeCount = 43,
  disLikeCount = 32,
  reply = "",
  courseId = "",
  commentId = "",
  type = "",
}) => {
  const [replyComments, setReplyComments] = useState([]);
  const [replyCommentNumber, setReplyCommentNumber] = useState(1);
  const [replyCommentLength, setReplyCommentLength] = useState(1);
  useEffect(() => {
    setReplyCommentLength(replyComments.length);
  }, [replyComments]);

  const handleReplyComments = async (commentId, courseId, type) => {
    if (type == "course") {
      const res = await GetCourseCommentsReply(commentId, courseId);
      setReplyComments(res);
    }
    if (type == "news") {
      const res = await GetNewsReplyComments(commentId);
      setReplyComments(res);
    }
  };
  useEffect(() => {
    if (commentId) {
      handleReplyComments(commentId, courseId, type);
    }
  }, [commentId]);

  return (
    <>
      <div
        className={` border-2  bg-primaryWhite dark:bg-primaryBlack dark:text-primaryWhite border-l-0 border-t-0  w-11/12 h-[276px] relative ${
          reply == "no" && replyComments != 0
            ? "border-fontGray rounded-br-3xl"
            : reply == "yes" && replyComments == 0
            ? "-top-[30px] w-5/6 right-[5%] border-r-0 border-b-0 after:content-[' '] after:absolute after:-right-[8%] after:bottom-0 after:border after:border-solid after:border-primaryGray after:w-full  "
            : reply == "no" && replyComments == 0
            ? "border-none"
            : ""
        }`}
      >
        <ProfileComp
          name={name}
          skill={skill}
          style={style}
          reply={reply}
          pic={pic}
        />
        <TitleSubCommentSection title={title} subTitle={subTitle} />
        {/* Reply And Like Section */}
        <div className="flex flex-row items-center sm:gap-14 gap-5 my-5 pr-10">
          <Button
            text={"جواب دادن"}
            Icon={TbMessageReply}
            iconStyle="ml-2 hidden sm:flex"
            phoneStyle={
              "bg-secondaryBlue !text-primaryBlue h-10 sm:text-base text-sm !px-4"
            }
          />
          <LikeDisLikeComment
            likeCount={likeCount}
            disLikeCount={disLikeCount}
          />
          <div
            className={`flex-row justify-start items-center cursor-pointer ${
              replyComments.length != 0 ? "flex" : "hidden"
            }`}
          >
            <span
              onClick={() => {
                if (replyCommentNumber != replyCommentLength) {
                  setReplyCommentNumber(replyCommentLength);
                  // setReplyCommentLength(1);
                } else {
                  setReplyCommentNumber(1);
                  // setReplyCommentLength(replyComments.length);
                }
              }}
              className="text-base underline hidden sm:flex"
            >
              {replyComments.length - replyCommentNumber != 0
                ? ` مشاهده جواب ها (${
                    replyComments.length - replyCommentNumber
                  })`
                : "بستن جواب ها"}
            </span>
            <MdOutlineKeyboardArrowDown
              className="hidden sm:block"
              size={"16px"}
            />
          </div>
        </div>
      </div>
      {replyComments &&
        replyComments.map((it2, index2) => {
          return (
            index2 < replyCommentNumber && (
              <CommentBox
                key={index2}
                name={it2.author || it2.autor}
                title={it2.title}
                subTitle={it2.describe}
                pic={it2.pictureAddress}
                likeCount={it2.likeCount}
                disLikeCount={it2.disslikeCount}
                skill={"هیچی"}
                style={" absolute -right-[30px]"}
                reply={"yes"}
              />
            )
          );
        })}
    </>
  );
};

export default CommentBox;
