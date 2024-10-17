import React from "react";
import Introduction from "./Introduction";
import Button from "../../../components/Common/Button/Button";
import QuickAccess from "./QuickAccess";
import BlueStrap from "./BlueStrap";
const HeroSection = () => {
  return (
    <>
      <Introduction />
      <Button
        text="شروع یادگیری"
        phoneStyle="py-2 m-auto mt-5 text-base sm:text-lg"
      />
      <QuickAccess />
      <BlueStrap />
    </>
  );
};

export default HeroSection;
