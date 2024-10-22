import React from "react";
import ProfileComp from "../../../Common/ProfileComp";
import DarkModeButton from "../../../Common/DarkModeButton";
import { PiBell } from "react-icons/pi";

const PanelTopBar = () => {
  return (
    <div className="bg-primaryWhite flex flex-row gap-2 w-full h-[80px] py-3 rounded-2xl justify-normal mt-3 p-4 max-md:w-screen dark:bg-primaryBlack dark:text-primaryWhite ">
      <ProfileComp name="پارسا آقایی " reply="hel" skill="ادمین ، دانشجو" />
      <div className="md:hidden">LOGOBAHR</div>
      <div className="flex gap-2 mr-auto ml-4">
        <div className="rounded-full border border-primaryBlack w-[56px] h-[56px] text-3xl flex items-center justify-center relative">
          <PiBell />
          <div className="pt-1 rounded-full border border-primaryBlack w-[20px] h-[20px]  flex items-center justify-center absolute right-0 bottom-0.5 bg-red-600 text-primaryWhite text-lg ">
            5
          </div>
        </div>
        <DarkModeButton />
      </div>
    </div>
  );
};

export default PanelTopBar;
