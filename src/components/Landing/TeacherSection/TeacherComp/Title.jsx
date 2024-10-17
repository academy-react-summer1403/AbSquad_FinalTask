import React from "react";
const Title = ({ name, linkDein }) => {
  return (
    <>
      <div className="flex flex-col justify-end items-center basis-24">
        <h1 className="text-xl dark:text-primaryWhite sm:text-2xl text-nowrap">
          {name}
        </h1>
        <h3 className="h-5 text-sm text-fontGray sm:text-base">{linkDein}</h3>
      </div>
    </>
  );
};

export default Title;
