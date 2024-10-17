import React, { useState } from "react";
import RightSection from "../../components/AuthPage/RightSection";
import LeftSection from "../../components/AuthPage/LeftSection";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { LuClipboardEdit } from "react-icons/lu";
import PhoneInput from "../../components/AuthPage/PhoneInput";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import NewPass from "../../components/AuthPage/NewPass";
const stepperData = [
  {
    left: {
      title: "فراموشی رمزعبور؟🔐",
      titleF: "شماره همراه",
      descL:
        "اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک صفحه تغییر رمزعبور برای شما ارسال شود",
      text: "ارسال لینک",
      RightData: "رمزعبور خود فراموش نکردید؟",
      textN: " ارسال لینک",
      textB: "",
      LeftData: "ورود به حساب کاربری",
      Main: PhoneInput,
      destination: "/login",
    },
    right: [
      {
        Icon: LuClipboardEdit,
        desc: "وارد کردن ایمیل",
      },
      {
        Icon: TbPasswordMobilePhone,
        desc: "وارد کردن رمزعبور جدید",
        classNameDesc: "notActiveDesc",
        classNameButton: "notActiveButton",
      },
    ],
  },
  {
    left: {
      title: "رمزعبور جدید🔐",
      descL: "لطفا کد ارسال شده به شماره ؟؟؟؟؟؟؟؟09 وارد کنید",
      textN: "تایید",
      textB: "تغییر شماره همراه",
      text: "تایید",
      RightData: "حساب کاربری دارید؟",
      LeftData: "ورود به حساب کاربری",
      Main: NewPass,
      destination: "/login",
    },
    right: [
      {
        Icon: LuClipboardEdit,
        desc: "وارد کردن شماره ایمیل    ",
        classNameDesc: "notActiveDesc",
      },
      {
        Icon: TbPasswordMobilePhone,
        desc: "وارد کردن رمزعبور جدید",
      },
    ],
  },
];
const ForgotPass = () => {
  const [stepForgot, setStep] = useState(0);

  const handleNext = () => {
    if (stepForgot < stepperData.length - 1) {
      setStep(stepForgot + 1);
    }
  };

  const handleBack = () => {
    if (stepForgot > 0) {
      setStep(stepForgot - 1);
    }
  };
  return (
    <div className="flex flex-col-reverse md:flex-row">
      {/* <VerificationInput /> */}
      <RightSection rightSecData={stepperData[stepForgot].right} />
      <LeftSection
        title={stepperData[stepForgot].left.title}
        titleF={stepperData[stepForgot].left.titleF}
        descL={stepperData[stepForgot].left.descL}
        textN={stepperData[stepForgot].left.textN}
        textB={stepperData[stepForgot].left.textB}
        RightData={stepperData[stepForgot].left.RightData}
        LeftData={stepperData[stepForgot].left.LeftData}
        Main={stepperData[stepForgot].left.Main}
        destination={stepperData[stepForgot].left.destination}
        setCurrentRightSecData={() => {}}
        handleNext={handleNext}
        handleBack={handleBack}
        disableNext={stepForgot === stepperData.length - 1}
        disableBack={stepForgot === 0}
        stepForgot={stepForgot}
      />
    </div>
  );
};

export default ForgotPass;
