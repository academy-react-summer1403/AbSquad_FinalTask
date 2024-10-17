import React from "react";

const PageMainTitle = ({ title, desc, images }) => {
  return (
    <>
      <h1 className="xl:text-5xl text-center line leading-normal text-3xl dark:text-primaryWhite mb-5 lg:mb-10">
        {title}
      </h1>
      <h3 className="text-center text-fontGray text-sm   lg:w-[500px] sm:text-xl ">
        {desc}
      </h3>
    </>
  );
};

export default PageMainTitle;
