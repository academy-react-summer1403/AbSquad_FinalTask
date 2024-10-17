import React from "react";

const NewsDetailDesc = ({ title, desc }) => {
  return (
    <>
      <div className="w-full dark:text-primaryWhite">
        <h1 className="sm:text-2xl text-xl mb-6 p-0 font-bold ">{title}</h1>
        <h2 className="sm:text-xl text-base">{desc}</h2>
      </div>
    </>
  );
};

export default NewsDetailDesc;
