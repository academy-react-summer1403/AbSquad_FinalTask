import React from "react";
import ProfileComp from "../../../Common/ProfileComp";

const TeacherProfSection = ({ courseDetail }) => {
  return (
    <>
      <div className="flex flex-row justify-start dark:text-primaryWhite">
        <ProfileComp
          name={courseDetail.teacherName}
          skill={courseDetail.courseGroupCount}
        />
      </div>
    </>
  );
};

export default TeacherProfSection;
