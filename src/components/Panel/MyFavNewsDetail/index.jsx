import React from "react";
import { ImagePart } from "./ImagePart";
import { LikeDislike } from "./LikeDislike";
import { CourseTitle } from "./CourseTitle";
import { Description } from "./Description";
import { CloseSection } from "./CloseSection";
import { TeacherSection } from "./TeacherSection";
import { DateStudents } from "./DateStudents";

const CourseDetail = ({ func }) => {
  return (
    <>
      <div className="w-full 2xl:w-[700px] flex flex-col justify-start items-center p-5 bg-primaryWhite rounded-2xl gap-10 relative z-[100] mx-auto">
        <CloseSection func={func} />
        <ImagePart />
        <LikeDislike />
        <CourseTitle />
        <Description />
        <TeacherSection />
        <DateStudents />
      </div>
    </>
  );
};

export { CourseDetail };
