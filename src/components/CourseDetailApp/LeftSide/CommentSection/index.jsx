import React, { useEffect, useState } from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";
import { GetNewsComments } from "../../../../core/Services/Api/DetailComments/detail.comments.api";
import { GetCourseComments } from "../../../../core/Services/Api/CourseComments/course.comments.api";

const CommentSection = ({
  setCommentModalOpen,
  courseDetail = "",
  newsDetail = "",
}) => {
  const [comments, setComments] = useState([]);
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
  useEffect(() => {
    if (newsDetail) {
      handleComments(newsDetail.id, "news");
    }
  }, [newsDetail]);

  //fetching All Comments
  useEffect(() => {
    if (courseDetail) {
      handleComments(courseDetail.courseId, "course");
    }
  }, [courseDetail]);

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
                  name={it.author || it.autor}
                  title={it.title}
                  subTitle={it.describe}
                  pic={it.pictureAddress}
                  likeCount={it.likeCount}
                  disLikeCount={it.disslikeCount}
                  skill={"هیچی"}
                  style={" absolute -right-[30px]"}
                  reply={it.acceptReplysCount || it.replyCount}
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
