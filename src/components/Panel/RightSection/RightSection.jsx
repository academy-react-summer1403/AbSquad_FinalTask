import React, { useState } from "react";
import BahrLogoComp from "../../Common/BahrLogoComp";
import Button from "../../Common/Button/Button";
import { RxDashboard } from "react-icons/rx";
import {
  PiBookBookmarkLight,
  PiClockCountdownLight,
  PiMoneyWavy,
} from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineExitToApp } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";

const RightSection = () => {
  // State to track the currently active button
  const [activeButton, setActiveButton] = useState("");

  // Function to handle click and set the active button
  const handleClick = (buttonName) => {
    setActiveButton(buttonName); // Set the clicked button as active
  };

  return (
    <div className="flex gap-3 flex-col my-3 mr-8 bg-primaryWhite rounded-2xl p-5 max-md:hidden dark:bg-primaryBlack dark:text-primaryWhite">
      <div className="flex flex-row justify-start items-start self-start  mb-8 ">
        <BahrLogoComp />
      </div>
      <ul className="flex gap-2 flex-col ">
        <span className="">عمومی</span>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite  ${
              activeButton === "dashboard"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={RxDashboard}
            text="داشبورد"
            onClick={() => handleClick("dashboard")} // Pass the button name
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite  ${
              activeButton === "courses"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={VscBook}
            text="دوره من"
            onClick={() => handleClick("courses")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite  ${
              activeButton === "reservations"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={PiClockCountdownLight}
            text="رزرو من"
            onClick={() => handleClick("reservations")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite  ${
              activeButton === "favoritesCourse"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={PiBookBookmarkLight}
            text="علاقعمندی دوره"
            onClick={() => handleClick("favoritesCourse")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite   ${
              activeButton === "favoritesBook"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={CiBookmark}
            text="علاقهمندی کتاب"
            onClick={() => handleClick("favoritesBook")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite  ${
              activeButton === "profile"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={PiMoneyWavy}
            text="پروفایل"
            onClick={() => handleClick("profile")}
          />
        </li>
      </ul>
      <ul className="flex gap-3 flex-col mb-3">
        <span>مالی</span>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite  ${
              activeButton === "payments"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={CgProfile}
            text="پرداخت ها"
            onClick={() => handleClick("payments")}
          />
        </li>
      </ul>
      <ul className="flex gap-3 flex-col">
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack dark:text-primaryWhite  ${
              activeButton === "accountSettings"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={TbUserEdit}
            text="حساب های کاربری"
            onClick={() => handleClick("accountSettings")}
          />
        </li>
        <li>
          <Button
            phoneStyle="h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack  text-red-500"
            Icon={MdOutlineExitToApp}
            text="خروج از حساب"
          />
        </li>
      </ul>
    </div>
  );
};

export default RightSection;
