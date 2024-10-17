import React from "react";

const TeacherDesc = ({ text }) => {
  return (
    <>
      <div className="basis-2/12  text-ellipsis overflow-hidden  ">
        <textarea
          readOnly
          disabled
          maxLength={50}
          className="text-fontGray bg-primaryWhite text-ellipsis overflow-hidden resize-none w-full text-center dark:bg-primaryBlack dark:text-primaryWhite sm:text-sm"
        >
          {text}
        </textarea>
      </div>
    </>
  );
};

export default TeacherDesc;
