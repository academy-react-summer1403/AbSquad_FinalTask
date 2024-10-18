import React from "react";

const TitleSubCommentSection = ({ title, subTitle }) => {
  return (
    <>
      <div className="sm:h-36 h-40 flex flex-col justify-end items-start gap-2 pr-10">
        <h1 className="sm:text-2xl text-lg font-bold">{title}</h1>
        <h2 className="sm:text-xl text-[15px] ">{subTitle}</h2>
      </div>
    </>
  );
};

export default TitleSubCommentSection;
