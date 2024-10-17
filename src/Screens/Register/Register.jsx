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
      title: "به آکادمی بحر خوش اومدی!😍",
      titleF: "شماره همراه",
      descL:
        "لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد تایید ارسال شود",
      text: "ارسال کد تایید",
      RightData: "حساب کاربری دارید؟",
      textN: "ارسال کد تایید",
      textB: "",
      LeftData: "ورود به حساب کاربری",
      Main: PhoneInput,
      destination: "/login",
    },
    right: [
      {
        Icon: LuClipboardEdit,
        desc: "وارد کردن شماره همراه",
      },
      {
        Icon: TbPasswordMobilePhone,
        desc: "تایید کد ارسال شده به شماره همراه",
        classNameDesc: "notActiveDesc",
        classNameButton: "notActiveButton",
      },
      {
        Icon: ImProfile,
        desc: "وارد کردن اطلاعات حساب کاربری",
        classNameDesc: "notActiveDesc",
        classNameButton: "notActiveButton",
      },
    ],
  },
  {
    left: {
      title: "به آکادمی بحر خوش اومدی!😍",
      descL: "لطفا کد ارسال شده به شماره ؟؟؟؟؟؟؟؟09 وارد کنید",
      textN: "تایید",
      textB: "تغییر شماره همراه",
      text: "تایید",
      RightData: "حساب کاربری دارید؟",
      LeftData: "ورود به حساب کاربری",
      Main: VerificationCode,
      destination: "/login",
    },
    right: [
      {
        Icon: LuClipboardEdit,
        desc: "وارد کردن شماره همراه",
        classNameDesc: "notActiveDesc",
      },
      {
        Icon: TbPasswordMobilePhone,
        desc: "تایید کد ارسال شده به شماره همراه",
      },
      {
        Icon: ImProfile,
        desc: "وارد کردن اطلاعات حساب کاربری",
        classNameDesc: "notActiveDesc",
        classNameButton: "notActiveButton",
      },
    ],
  },
  {
    left: {
      title: "به آکادمی بحر خوش اومدی!😍",
      descL: "لطفا اطلاعات شخصی حساب کاربری خود را وارد کنید ",
      textN: "ثبت اطلاعات",
      RightData: "حساب کاربری دارید؟",
      LeftData: "ورود به حساب کاربری",
      Main: RegisterInfoForm,
      destination: "/login",
    },
    right: [
      {
        Icon: LuClipboardEdit,
        desc: "وارد کردن شماره همراه",
        classNameDesc: "notActiveDesc",
      },
      {
        Icon: TbPasswordMobilePhone,
        desc: "تایید کد ارسال شده به شماره همراه",
        classNameDesc: "notActiveDesc",
      },
      {
        Icon: ImProfile,
        desc: "وارد کردن اطلاعات حساب کاربری",
      },
    ],
  },
];

const Register = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < stepperData.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  return (
    <div className="flex  flex-col-reverse md:flex-row ">
      {/* <VerificationInput /> */}
      <RightSection rightSecData={stepperData[step].right} />
      <LeftSection
        title={stepperData[step].left.title}
        titleF={stepperData[step].left.titleF}
        descL={stepperData[step].left.descL}
        textN={stepperData[step].left.textN}
        textB={stepperData[step].left.textB}
        RightData={stepperData[step].left.RightData}
        LeftData={stepperData[step].left.LeftData}
        Main={stepperData[step].left.Main}
        destination={stepperData[step].left.destination}
        setCurrentRightSecData={() => {}}
        handleNext={handleNext}
        handleBack={handleBack}
        disableNext={step === stepperData.length - 1}
        disableBack={step === 0}
        step={step}
      />
    </div>
  );
};

export default Register;
