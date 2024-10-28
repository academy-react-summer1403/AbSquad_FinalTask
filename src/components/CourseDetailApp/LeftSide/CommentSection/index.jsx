import React, { useEffect, useState } from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";
import { GetNewsComments } from "../../../../core/Services/Api/DetailComments/detail.comments.api";
import { GetCourseComments } from "../../../../core/Services/Api/CourseComments/course.comments.api";
import { GetCourseCommentsReply } from "../../../../core/Services/Api/CourseCommentsReply/course.reply.api";

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

  // Fetch Replies FOR COURSES
  const [replyComments, setReplyComments] = useState([]);
  const handleReplyComments = async (id, courseId, type) => {
    // if (type == "news") {
    //   const res = await GetNewsReplyComments(id);
    //   setComments(res);
    // }
    if (type == "course") {
      const res = await GetCourseCommentsReply(id, courseId);
      return res;
    }
  };
  // useEffect(() => {
  //   if (newsDetail) {
  //     handleReplyComments(newsDetail.id, "news");
  //   }
  // }, [newsDetail]);

  //fetching All Comments
  // useEffect(() => {
  //   const array = [];
  //   if (comments) {
  //     comments.map(async (it, index) => {
  //       if (it.acceptReplysCount !== 0) {
  //         array.push(
  //           ...(await handleReplyComments(it.id, it.courseId, "course"))
  //         );
  //       }
  //     });
  //   }
  // }, [comments]);
  // useEffect(() => {
  //   if (replyComments) console.log(replyComments);
  // }, [replyComments]);

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
                    repliedTo={it.acceptReplysCount || it.replyCount}
                  />
                  {/* {replyComments &&
                    replyComments.map((it2, index2) => {
                      return (
                        it.id == it2.parentId && (
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
                            repliedTo={it2.acceptReplysCount || it2.replyCount}
                          />
                        )
                      );
                    })} */}
                </>
              );
              // End Of Reply Section
            })}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
