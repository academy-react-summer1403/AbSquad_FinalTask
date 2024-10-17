import React from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { PiBell } from "react-icons/pi";
import { GrEdit } from "react-icons/gr";
import { GrDocumentUpload } from "react-icons/gr";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Button from "../../Common/Button/Button";
import { RxDashboard } from "react-icons/rx";
import { PiClockCountdownLight } from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import HamburgerMenu from "./HamburgerMenu";
import { SlOptions } from "react-icons/sl";
import MenuOptions from "./menuOptions";
const LeftSection = () => {
  const [value, setValue] = useState(0);
  const [RenderHamMenu, setRenderHamMenu] = useState("");
  const [activeButton, setActiveButton] = useState("");

  // Function to handle click and set the active button
  const handleClick = (buttonName) => {
    setActiveButton(buttonName); // Set the clicked button as active
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="bg-primaryWhite flex flex-row gap-2 w-[1096px] h-[80px] py-3 rounded-2xl justify-normal mt-3 p-4 max-md:w-screen dark:bg-primaryBlack dark:text-primaryWhite ">
        <div className="rounded-full border border-primaryGray w-[56px] h-[56px] text-3xl flex flex-row-reverse items-center justify-center bg-red-500 relative mr-2 max-md:hidden">
          pic
          <div className="rounded-full border border-primaryGray w-[16px] h-[16px]  flex items-center justify-center absolute right-0 bottom-0.5 bg-primaryBlue text-primaryWhite text-xs">
            <GrEdit />
          </div>
        </div>
        <div className="flex flex-col mt-2 max-md:hidden ">
          <span>پارسا آقایی </span>
          <span className="text-xs text-primaryBlue">ادمین ، دانشجو</span>
        </div>
        <div className="md:hidden">LOGOBAHR</div>
        <div className="flex gap-2 mr-auto ml-4">
          <div className="rounded-full border border-primaryBlack w-[56px] h-[56px] text-3xl flex items-center justify-center relative">
            <PiBell />
            <div className="pt-1 rounded-full border border-primaryBlack w-[20px] h-[20px]  flex items-center justify-center absolute right-0 bottom-0.5 bg-red-600 text-primaryWhite text-lg ">
              5
            </div>
          </div>
          <div className="rounded-full border border-primaryGray w-[56px] h-[56px] text-3xl flex items-center justify-center">
            <HiOutlineMoon />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-primaryWhite rounded-t-2xl mt-3 max-md:w-screen dark:bg-primaryBlack  ">
        <div className="bg-primaryBlue w-[1096px] h-[113px] rounded-t-2xl max-md:w-screen">
          <div className="bg-primaryWhite w-[136px] h-[136px] rounded-full relative top-16 right-10">
            <div className="bg-red-500 w-32 h-32 rounded-full absolute top-1 left-1">
              <div className="bg-primaryBlue h-6 w-6 rounded-full bottom-0 absolute right-3 text-primaryWhite flex items-center justify-center">
                <GrDocumentUpload />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 flex max-md:flex-col dark:bg-primaryBlack dark:text-primaryWhite ">
          <div>
            {" "}
            <div className="mb-4">
              <span className="text-3xl">پارسا آقایی</span>
              <span>( ادمین ، دانشجو )</span>
            </div>
            <div className="flex gap-4 items-center justify-end max-md:flex-col">
              <div className="flex gap-2">
                <GrDocumentUpload />
                <span>09121231234</span>
              </div>
              <div className="flex items-center justify-center max-md:hidden">
                <span className="block h-9 text-xl ">.</span>
              </div>
              <div className="flex gap-2">
                <GrDocumentUpload />
                <span>0372235050</span>
              </div>
              <div className="flex items-center justify-center max-md:hidden">
                <span className="block h-9 text-xl">.</span>
              </div>
              <div className="flex gap-2">
                <GrDocumentUpload />
                <span>Example@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col mr-auto">
            <span>درباره من</span>
            <p className="w-[400px] h-[66px]">
              من پارسا آقایی دانشجوی نوب سگ هستم که اخیرا دارم یاد میگیرم برنامه
              نویسی رو و امیدوارم از نوبیت دربیام و بتونم یه کاری پیدا کنم تو 😊
              دنیای دیجیتال ، ممنون از همه
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primaryWhite max-md:w-screen dark:bg-primaryBlack dark:!text-primaryWhite ">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="اطلاعات شخصی" className=" dark:text-primaryWhite " />
          <Tab label="عکس پروفایل" />
          <Tab label="آدرس سکونت" />
          <Tab label="لینک ها" />
        </Tabs>
      </div>
      {/* hamburger menu start */}
      <HamburgerMenu />
    </div>
  );
};

export default LeftSection;
