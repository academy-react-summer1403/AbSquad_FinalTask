import React, { useEffect, useState } from "react";
import VerificationInput from "react-verification-input";
import Timer from "./Timer";
import { VerificationCodeSent } from "../../core/Services/Api/AuthPage/register/registerLevel2";
import Button from "../Common/Button/Button";
import { useSelector } from "react-redux";
const VerificationCode = ({ handleNext }) => {
  const phoneNumber = useSelector((state) => state.phone.phoneNumber);
  const [value, setValue] = useState("");
  const onSubmit = async () => {
    const sentData = { phoneNumber: phoneNumber, verifyCode: value };
    try {
      const res = await VerificationCodeSent(sentData);
      console.log("Response:", res);
      handleNext();
      console.log("Phone Number:", sentData);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.ErrorMessage
      ) {
        console.log("Error Message:", error.response.data);
      } else {
        console.error("Unknown Error:", error);
      }
    }
  };

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
        onChange={(e) => setValue(e)}
      />
      <Button
        phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto mt-10"
        text="ارسال کد تایید"
        type="submit" // This ensures the button triggers form submit
        onClick={onSubmit}
      />
    </div>
  );
};

export default VerificationCode;
