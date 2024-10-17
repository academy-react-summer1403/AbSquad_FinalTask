import React, { useState } from "react";
import RightSection from "../../components/AuthPage/RightSection";
import LeftSection from "../../components/AuthPage/LeftSection";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { LuClipboardEdit } from "react-icons/lu";
import PhoneInput from "../../components/AuthPage/PhoneInput";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import VerificationCode from "../../components/AuthPage/VerificationCode";
import RegisterInfoForm from "../../components/AuthPage/RegisterInfoForm";
const stepperData = [
  {
    left: {
      title: "خوش برگشتی👋",
      titleF: "شماره همراه",
      descL:
        "لطفا برای ورود به پنل خود ایمیل یا شماره همراه و رمزعبور خود را وارد کنید",
      text: "ارسال کد تایید",
      RightData: "حساب کاربری دارید؟",
      textN: "ورود به حساب کاربری",
      textB: "فراموشی رمزعبور",
      LeftData: "ایجاد حساب کاربری",
      Main: RegisterInfoForm,
      destination: "/register",
    },
    right: [
      {
        Icon: LuClipboardEdit,
        desc: " وارد شماره همراه یا ایمیل",
      },
      {
        Icon: TbPasswordMobilePhone,
        desc: "تایید کد ارسال شده" + "(درصورتی که دو مرحله ای فعال باشد)",
        classNameDesc: "notActiveDesc",
        classNameButton: "notActiveButton",
      },
    ],
  },
  {
    left: {
      title: "خوش برگشتی",
      titleF: "شماره همراه",
      descL:
        "👋لطفا برای ورود به پنل خود ایمیل یا شماره همراه و رمزعبور خود را وارد کنید",
      text: "ارسال کد تایید",
      RightData: "حساب کاربری دارید؟",
      textN: "ورود به حساب کاربری",
      textB: "",
      LeftData: "ایجاد حساب کاربری",
      Main: VerificationCode,
      destination: "/register",
    },
    right: [
      {
        Icon: LuClipboardEdit,
        desc: " وارد شماره همراه یا ایمیل",
        classNameDesc: "notActiveDesc",
      },
      {
        Icon: TbPasswordMobilePhone,
        desc: "تایید کد ارسال شده",
        // "                                " +
        // "(درصورتی که دو مرحله ای فعال باشد)",
      },
    ],
  },
];
const Login = (desc, Icon) => {
  const [stepLogin, setStepLogin] = useState(0);

  const handleNext = () => {
    if (stepLogin < stepperData.length - 1) {
      setStepLogin(stepLogin + 1);
    }
  };

  const handleBack = () => {
    if (stepLogin > 0) {
      setStepLogin(stepLogin - 1);
    }
  };
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row ">
        <RightSection rightSecData={stepperData[stepLogin].right} />
        <LeftSection
          title={stepperData[stepLogin].left.title}
          titleF={stepperData[stepLogin].left.titleF}
          descL={stepperData[stepLogin].left.descL}
          textN={stepperData[stepLogin].left.textN}
          textB={stepperData[stepLogin].left.textB}
          RightData={stepperData[stepLogin].left.RightData}
          LeftData={stepperData[stepLogin].left.LeftData}
          Main={stepperData[stepLogin].left.Main}
          destination={stepperData[stepLogin].left.destination}
          setCurrentRightSecData={() => {}}
          handleNext={handleNext}
          handleBack={handleBack}
          disableNext={stepLogin === stepperData.length - 1}
          disableBack={stepLogin === 0}
          stepLogin={stepLogin}
        />
      </div>
    </>
  );
};
export default Login;
