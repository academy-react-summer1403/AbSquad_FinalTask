import React, { useEffect, useState } from "react";
import AddCommentSection from "./AddCommentSection";
import ModalTitles from "../ModalTitles";

const CommentAddModal = ({ onClickFunc, modalTitle, type = "" }) => {
  return (
    <>
      {/* White Div */}
      <div className=" absolute top-0 left-0 w-screen h-full z-40 bg-black bg-opacity-50 overflow-y-auto">
        {/* Add Comment Box  */}
        <div className="flex flex-col items-center justify-start w-[70%] h-full right-[15%] top-[0%] fixed z-50 bg-primaryWhite border dark:bg-primaryBlack dark:text-primaryWhite border-primaryGray rounded-3xl p-6 max-sm:right-0 max-sm:w-full max-sm:h-max max-sm:absolute max-sm:top-0 max-sm:rounded-none overflow-y-scroll">
          {/* Title And Close Btn */}
          <ModalTitles modalTitle={modalTitle} onClickFunc={onClickFunc} />
          {/* Comments */}

          <AddCommentSection type={type} />
        </div>
      </div>
    </>
  );
};

export default CommentAddModal;
