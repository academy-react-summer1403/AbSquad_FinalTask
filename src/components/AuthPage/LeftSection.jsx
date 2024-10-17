import { div } from "framer-motion/client"; //?????
import Button from "../Common/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import Countdown from "react-countdown";
import Timer from "./Timer";
import BahrLogoComp from "../Common/BahrLogoComp";
import { PiShieldStarBold } from "react-icons/pi";
import { useState } from "react";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
const LeftSection = ({
  stepLogin,
  textB,
  textN,
  descL,
  title,
  RightData,
  LeftData,
  Main,
  destination,
  handleNext,
  handleBack,
  disableNext,
  disableBack,
  step,
  titleF,
  stepForgot,
}) => {
  // const [loginData, setLoginData] = useState({
  //   PhoneOrGmail: "",
  //   Password: "",
  // });

  // const handleFormData = (PhoneOrGmail, Password) => {
  //   setLoginData({ PhoneOrGmail, Password });
  //   console.log("Received from child:", PhoneOrGmail, Password);
  // };
  // const OnClick = async (event) => {
  //   event.preventDefault();
  //   const user = { PhoneOrGmail, Password, rememberMe: true };

  //   const res = await axios.post(
  //     "https://classapi.sepehracademy.ir/api/Sign/Login",
  //     user
  //   );

  //   const token = res.data.token;
  //   console.log(token);
  //   localStorage.setItem("token", token);
  //   dispatch(handleToken(token));
  // };
  return (
    <div className="flex md:justify-start flex-col items-center md:basis-2/3 md:mt-20 max-md:items-center max-md:p-6 max-md:w-full">
      <div className="flex flex-row justify-start items-start self-start md:hidden mb-16 ">
        <BahrLogoComp />
      </div>
      <h2 className="md:text-4xl md:-indent-14 md:mb-10 text-2xl text-center">
        {title}
      </h2>
      <p className="text-xs md:text-xl md:w-[538px] mb-8 w-[270px] ">{descL}</p>
      <div className="mb-6 max-md:w-full">
        {Main && <Main titleF={titleF} />}
      </div>
      {stepLogin === 0 && (
        <div className=" md:w-[540px] mb-6 max-md:flex-row-reverse max-md:flex max-md:gap-8">
          <NavLink to="/ForgotPass">
            <Button
              phoneStyle="!text-primaryBlue h-[40px] w-[220px] !bg-LightBlueCustom gap-4 float-left max-md:w-[160px] max-md:text-xs "
              text={textB}
              onClick={handleBack}
              disabled={disableBack}
              Icon={PiShieldStarBold}
            />
          </NavLink>
          <div>
            <input
              className="justify-self-start float-start rounded-lg 
              appearance-none w-[24px] h-[24px] bg-primaryGray checked:bg-primaryBlue checked:border-transparent focus:outline-none
              
                "
              type="checkbox"
            />
            <span className=" float-start indent-1.5">مرا به خاطر بسپار </span>
          </div>
        </div>
      )}
      <Button
        phoneStyle="h-[56px] w-[538px] max-md:w-[345px] "
        text={textN}
        onClick={handleNext}
        disabled={disableNext}
      />

      {(step === 0 || stepLogin === 0 || stepForgot === 0) && (
        <div className="mt-6">
          <span>{RightData}</span>
          <NavLink to={destination}>
            <span className="underline font-IRANYekan font-bold cursor-pointer">
              {LeftData}
            </span>
          </NavLink>
        </div>
      )}
      {(step || stepLogin) === 1 && (
        <div className="flex flex-row-reverse md:gap-24 mt-6 gap-4 max-md:w-full  ">
          {step === 1 && (
            <Button
              phoneStyle="!text-primaryBlue h-[40px] w-[220px] !bg-LightBlueCustom flex flex-row-reverse gap-4  "
              text={textB}
              onClick={handleBack}
              disabled={disableBack}
              Icon={PiArrowBendUpLeftLight}
            />
          )}
          <Timer />
        </div>
      )}
    </div>
  );
};

export default LeftSection;
//hi this is a test
