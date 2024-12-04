import React, { useEffect, useState } from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";
import { GetCourseComments } from "../../../../core/Services/Api/CourseComments/course.comments.api";
import { GetNewsComments } from "../../../../core/Services/Api/NewsComments/detail.comments.api";
import { LiaCommentMedicalSolid } from "react-icons/lia";
import { comment } from "postcss";
const CommentSection = ({
  setCommentModalOpen,
  courseDetail = "",
  newsDetail = "",
  type = "",
}) => {
  const [comments, setComments] = useState([]);
  const [commentNumber, setCommentNumber] = useState(2);
  const handleCommentNumbers = (num) => {
    setCommentNumber(num + 2);
  };
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
  // Only News
  useEffect(() => {
    if (newsDetail && type == "news") {
      handleComments(newsDetail.id, "news");
    }
  }, [newsDetail]);

  return (
    <>
      <div className="flex flex-col my-20 w-full">
        <h1 className="sm:text-[48px] text-3xl mb-9">نظرات</h1>
        {/* Comment Section */}
        <div className="flex flex-col items-center grayBox p-5">
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
                index < commentNumber && (
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
                )
              );
            })}
          <Button
            text={"نمایش بیشتر"}
            phoneStyle={
              "w-full !bg-primaryGray !text-primaryBlack lg:text-xl h-10 mt-3"
            }
            Icon={LiaCommentMedicalSolid}
            iconSize="30px"
            iconStyle="ml-2"
            onClick={() => {
              handleCommentNumbers(commentNumber);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CommentSection;
