import React from "react";
import { CloseButton } from "./CloseButton";

const CloseSection = ({ func }) => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <span className="text-xl">حساب های کاربری</span>
        <CloseButton func={func} />
      </div>
    </>
  );
};

export { CloseSection };
