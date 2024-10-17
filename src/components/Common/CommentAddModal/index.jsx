import React from "react";
import CommentBox from "../CommentBox";
import AddCommentSection from "./AddCommentSection";
import ModalTitles from "../ModalTitles";
const CommentAddModal = ({ onClickFunc, modalTitle }) => {
  return (
    <>
      {/* White Div */}
      <div className=" absolute top-0 left-0 w-screen h-full z-40 bg-black bg-opacity-50">
        {/* Add Comment Box  */}
        <div className="flex flex-col items-center justify-start w-[1020px] h-[805px] right-[33%] top-[10%] fixed z-50 bg-primaryWhite border dark:bg-primaryBlack dark:text-primaryWhite border-primaryGray rounded-3xl p-6 max-sm:right-0 max-sm:w-full max-sm:h-max max-sm:absolute max-sm:top-0 max-sm:rounded-none">
          {/* Title And Close Btn */}
          <ModalTitles modalTitle={modalTitle} onClickFunc={onClickFunc} />
          {/* Comments */}
          <CommentBox
            name={"اصغر علی ممدی"}
            skill={"سنیور فرانت اند"}
            style={"absolute -right-[30px]"}
            reply="no"
            repliedTo="yes"
          />
          <CommentBox
            name={"Aiden Pearce"}
            skill={"سنیور فرانت اند"}
            reply="yes"
            style={"absolute -right-[30px]"}
            repliedTo="no"
          />
          <AddCommentSection />
        </div>
      </div>
    </>
  );
};

export default CommentAddModal;
