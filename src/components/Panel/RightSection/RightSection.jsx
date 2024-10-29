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

import { TbUserEdit } from "react-icons/tb";
import ExitingAlert from "./dependencies/ExitingAlert";
import { NavLink } from "react-router-dom";
import OtherUsers from "./dependencies/OtherUsers";
const RightSection = () => {
  const [activeButton, setActiveButton] = useState("");
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="flex gap-3 flex-col my-3 mr-3 bg-primaryWhite rounded-2xl p-5 max-md:hidden dark:bg-primaryBlack dark:!text-primaryWhite h-[700px] sticky top-2 bottom-2">
      <div className="flex flex-row justify-start items-start self-start  mb-3 ">
        <BahrLogoComp />
      </div>
      <ul className="flex gap-1 flex-col ">
        <span className="">عمومی</span>
        <li>
          <NavLink to="/Panel/Dashboard">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={RxDashboard}
                text="داشبورد"
                onClick={() => handleClick("dashboard")}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Panel/MyCourse">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={VscBook}
                text="دوره من"
                onClick={() => handleClick("courses")}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Panel/MyReserve">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={PiClockCountdownLight}
                text="رزرو من"
                onClick={() => handleClick("reservations")}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Panel/MyFavCourse">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={PiBookBookmarkLight}
                text="علاقعمندی دوره"
                onClick={() => handleClick("favoritesCourse")}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Panel/MyFavNews">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={CiBookmark}
                text="علاقهمندی کتاب"
                onClick={() => handleClick("favoritesBook")}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Panel/Profile">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={PiMoneyWavy}
                text="پروفایل"
                onClick={() => handleClick("profile")}
              />
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-3 flex-col mb-3">
        <span>مالی</span>
        <li>
          <NavLink to="/panel/Payment">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={CgProfile}
                text="پرداخت ها"
                onClick={() => handleClick("payments")}
              />
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-1 flex-col">
        <li>
          <div className="md:hidden">
            <OtherUsers />
          </div>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite ${
              activeButton === "accountSettings"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={TbUserEdit}
            text="حساب های کاربری"
            onClick={() => handleClick("accountSettings")}
          />
        </li>
        <li className="z-50">
          <ExitingAlert />
        </li>
      </ul>
    </div>
  );
};

export default RightSection;
