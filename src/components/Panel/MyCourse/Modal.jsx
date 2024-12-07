import React from "react";

const Modal = ({ Component, func }) => {
  return (
    <>
      <div className="absolute top-0 right-0 bg-primaryBlack bg-opacity-50 w-full h-full dark:bg-primaryBlack dark:text-white ">
        {Component && <Component func={func} />}
      </div>
    </>
  );
};

export { Modal };
