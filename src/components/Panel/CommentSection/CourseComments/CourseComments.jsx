import React, { useState, useEffect } from "react";
import PageTitle from "./dependencies/PageTitle";
import Header from "./dependencies/Header";
import { GetMyCourseComments } from "../../../../core/Services/Api/GetCommentsForNewsAndCourse/GetCourseComments";
import CourseMapping from "./dependencies/CourseMapping";

const CourseComments = () => {
  const [courseComments, setCourseComments] = useState({ myCommentsDtos: [] }); // Default value ensures structure

  const FetchCourseComments = async () => {
    try {
      const res = await GetMyCourseComments();
      setCourseComments(res || { myCommentsDtos: [] }); // Ensure fallback to default structure
      console.log(res);
    } catch (error) {
      console.error("Error fetching course comments", error);
      setCourseComments({ myCommentsDtos: [] }); // Handle errors gracefully
    }
  };

  useEffect(() => {
    FetchCourseComments();
  }, []);

  return (
    <div className="h-[640px]">
      <div className="flex flex-col bg-primaryWhite rounded-2xl p-3 mt-2 mb-5 gap-2">
        <PageTitle />
        <div className="flex flex-row gap-3">
          <Header courseComments={courseComments} />
        </div>
      </div>
      <div className="flex flex-col bg-primaryWhite rounded-2xl p-3">
        <CourseMapping courseComments={courseComments.myCommentsDtos} />
      </div>
    </div>
  );
};

export default CourseComments;
