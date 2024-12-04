import React from "react";

const CourseMapping = ({ courseComments }) => {
  return (
    <div className="flex flex-col bg-primaryWhite rounded-2xl p-3 gap-2">
      {/* Header for columns */}
      <div className="flex flex-row justify-between font-bold border-b pb-2">
        <div className="w-1/3">عنوان</div>
        <div className="w-1/6 text-center">تعداد لایک</div>
        <div className="w-1/6 text-center">تعداد دیسلایک</div>
        <div className="w-1/6 text-center">تعداد ریپلای</div>
        <div className="w-1/6 text-center">توضیحات</div>
      </div>

      {/* Mapping over course comments */}
      {courseComments.map((comment, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center border-b py-2"
        >
          <div className="w-1/3">{comment.title}</div>
          <div className="w-1/6 text-center">{comment.likeCount}</div>
          <div className="w-1/6 text-center">{comment.dislikeCount}</div>
          <div className="w-1/6 text-center">{comment.replyCount}</div>
          <div className="w-1/6 text-center">{comment.describe}</div>
        </div>
      ))}
    </div>
  );
};

export default CourseMapping;
