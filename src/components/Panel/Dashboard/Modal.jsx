import React from "react";

const Modal = ({ Component }) => {
  return (
    <>
      <div className=" hidden absolute top-0 right-0 bg-primaryBlack bg-opacity-50 w-full h-full">
        {Component && <Component />}
      </div>
    </>
  );
};

export { Modal };
