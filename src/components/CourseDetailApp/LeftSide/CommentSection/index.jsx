import React, { useEffect, useState } from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";

import { GetCourseComments } from "../../../../core/Services/Api/CourseComments/course.comments.api";

const CommentSection = ({
  setCommentModalOpen,
  courseDetail = "",
  newsDetail = "",
  type = "",
}) => {
  const [comments, setComments] = useState([]);

  //fetching All Comments
  const handleComments = async (id, type) => {
    if (type == "news") {
      const res = await GetNewsComments(id);
      setComments(res);
    }
    if (type == "course") {
      const res = await GetCourseComments(id);
      setComments(res);
    }
  };
  // Only Course
  useEffect(() => {
    if (courseDetail && type == "course") {
      handleComments(courseDetail.courseId, "course");
    }
  }, [courseDetail]);
  // *******************************************************************************
  useEffect(() => {
    if (newsDetail && type == "news") {
      handleComments(newsDetail.id, "news");
    }
  }, [newsDetail]);

  // Fetch Replies FOR COURSES


  // useEffect(() => {
  //   if (newsDetail) {
  //     handleReplyComments(newsDetail.id, "news");
  //   }
  // }, [newsDetail]);

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

          {/* Comment Rendering */}
          {comments &&
            comments.map((it, index) => {
              return (
                <>
                  <CommentBox
                    key={index}
                    name={it.author || it.autor}
                    title={it.title}
                    subTitle={it.describe}
                    pic={it.pictureAddress}
                    likeCount={it.likeCount}
                    disLikeCount={it.disslikeCount}
                    skill={"هیچی"}
                    style={" absolute -right-[30px]"}
                    reply={"no"}
                    commentId={it.id}
                    courseId={it.courseId}
                    type={type}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
