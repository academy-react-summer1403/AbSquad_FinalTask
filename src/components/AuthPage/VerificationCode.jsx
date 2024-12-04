import React, { useEffect, useState } from "react";
import VerificationInput from "react-verification-input";
import Timer from "./Timer";
import { VerificationCodeSent } from "../../core/Services/Api/AuthPage/register/registerLevel2";
import Button from "../Common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { TwoStepLogin } from "../../core/Services/Api/AuthPage/TwoStepLogin/TwoStepLogin";
import { handleToken } from "../../redux/userSlice";

const VerificationCode = ({ stepLogin, handleNext, step }) => {
  const Password = useSelector(
    (state) => state.LoginInforSlice.LoginInfo.Password
  );
  const PhoneOrGmail = useSelector(
    (state) => state.LoginInforSlice.LoginInfo.PhoneOrGmail
  );
  const dispatch = useDispatch();
  console.log("/", Password, PhoneOrGmail);
  const phoneNumber = useSelector((state) => state.phone.phoneNumber);
  const [value, setValue] = useState("");
  const onSubmitRegister = async () => {
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
  const onSubmitLogin = async () => {
    const SendDataLogin = { Password, PhoneOrGmail, rememberMe: true };
    const verifyCode = value; // Replace with the actual verification code
    try {
      const res = await TwoStepLogin(SendDataLogin, verifyCode); // Call the API
      console.log("Response:", res); // Log the response data
      console.log(SendDataLogin, verifyCode, "this is what u asked for");
      const token = res.token;
      localStorage.setItem("token", token);
      dispatch(handleToken(token));
    } catch (error) {
      console.error("Error during login:", error.response || error.message);
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
      {step == 1 && (
        <Button
          phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto mt-10"
          text="ارسال کد تایید"
          type="submit" // This ensures the button triggers form submit
          onClick={onSubmitRegister}
        />
      )}
      {stepLogin == 1 && (
        <Button
          phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto mt-10"
          text="ارسال  lpginکد تایید"
          type="submit" // This ensures the button triggers form submit
          onClick={onSubmitLogin}
        />
      )}
    </div>
  );
};

export default VerificationCode;
