import React from "react";

const Modal = ({ Component, func, courseList }) => {
  return (
    <>
      <div className="absolute top-0 right-0 bg-primaryBlack bg-opacity-50 w-full h-full ">
        {Component && <Component func={func} courseList={courseList} />}
      </div>
    </>
  );
};

export { Modal };
