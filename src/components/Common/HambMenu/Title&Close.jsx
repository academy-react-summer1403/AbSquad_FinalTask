import React from "react";
import CloseBtn from "./CloseBtn";
const TitleAndClose = ({ title, setNavOpen }) => {
  return (
    <>
      <div className="flex flex-row justify-between px-10 pt-5 items-center bg-mainBoxGray w-full dark:bg-primaryBlack">
        <h2 className="m-0 p-0 text-xl">{title}</h2>
        <CloseBtn setNavOpen={setNavOpen} />
      </div>
    </>
  );
};

export default TitleAndClose;
