import React from "react";
import VerificationInput from "react-verification-input";
import Timer from "./Timer";
const VerificationCode = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-lg ">کد تایید</span>
      <VerificationInput
        classNames={{
          container: "container",
          character: "input",
        }}
        placeholder={""}
        validChars="0-9"
      />
    </div>
  );
};

export default VerificationCode;
