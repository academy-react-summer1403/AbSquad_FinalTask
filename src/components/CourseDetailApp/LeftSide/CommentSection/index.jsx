import React, { useEffect, useState } from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";
import { GetCourseComments } from "../../../../core/Services/Api/CourseComments/course.comments.api";
import { GetCourseCommentsReply } from "../../../../core/Services/Api/CourseCommentsReply/course.reply.api";

const CommentSection = ({ setCommentModalOpen, courseDetail }) => {
  const [comments, setComments] = useState([]);
  const handleComments = async (id) => {
    const res = await GetCourseComments(id);
    setComments(res);
  };
  //fetching All Comments
  useEffect(() => {
    if (courseDetail) {
      handleComments(courseDetail.courseId);
    }
  }, [courseDetail]);

  // Getting Replies
  useEffect(() => {
    if (comments) {
    }
  }, [comments]);

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
          {comments &&
            comments.map((it, index) => {
              return (
                <CommentBox
                  key={index}
                  name={it.author}
                  title={it.title}
                  subTitle={it.describe}
                  pic={it.pictureAddress}
                  likeCount={it.likeCount}
                  disLikeCount={it.disslikeCount}
                  skill={"هیچی"}
                  style={" absolute -right-[30px]"}
                  reply={it.acceptReplysCount}
                  repliedTo="yes"
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
