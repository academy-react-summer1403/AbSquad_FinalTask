import React from "react";
import CommentCloseButton from "../CommentAddModal/CommentCloseButton";
const ModalTitles = ({ modalTitle, onClickFunc, FuncStatus }) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center w-full mb-10">
        <h1 className="grow text-4xl">
          {modalTitle}
          <span className="text-2xl pr-2">📄</span>
        </h1>
        <CommentCloseButton
          title={"بستن"}
          onClickFunc={onClickFunc}
          FuncStatus={FuncStatus}
          style={"basis-1/12"}
        />
      </div>
    </>
  );
};

export default ModalTitles;
