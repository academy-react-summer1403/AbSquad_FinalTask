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
import { FaRegComments } from "react-icons/fa";
import { TbArrowGuide } from "react-icons/tb";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
const RightSection = () => {
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#dashboard-button",
        popover: {
          title: "داشبورد",
          description: "صفحه داشبورد شما، برای دسترسی به اطلاعات کلی.",
        },
      },
      {
        element: "#my-courses-button",
        popover: {
          title: "دوره‌های من",
          description: "اینجا دوره‌های فعلی شما نمایش داده می‌شود.",
        },
      },
      {
        element: "#my-reservations-button",
        popover: {
          title: "رزرو من",
          description: "اینجا می‌توانید رزرو‌های خود را مدیریت کنید.",
        },
      },
      {
        element: "#favorites-course-button",
        popover: {
          title: "علاقه‌مندی دوره",
          description: "دوره‌هایی که به آن‌ها علاقه‌مند هستید را مشاهده کنید.",
        },
      },
      {
        element: "#favorites-book-button",
        popover: {
          title: "علاقه‌مندی کتاب",
          description: "کتاب‌هایی که ذخیره کرده‌اید را ببینید.",
        },
      },
      {
        element: "#profile-button",
        popover: {
          title: "پروفایل",
          description: "اطلاعات پروفایل شخصی شما در این بخش قرار دارد.",
        },
      },
      {
        element: "#comments-button",
        popover: {
          title: "کامنت‌ها",
          description: "نظرات ثبت شده در این قسمت قرار دارند.",
        },
      },
      {
        element: "#payments-button",
        popover: {
          title: "پرداخت‌ها",
          description: "تاریخچه و اطلاعات مربوط به پرداخت‌های شما.",
        },
      },
    ],
  });

  const onClickGuide = () => {
    driverObj.drive(); // Start the tour
  };

  const [activeButton, setActiveButton] = useState("");
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex gap-3 flex-col my-3 mr-3 bg-primaryWhite rounded-2xl p-5 max-md:hidden dark:bg-primaryBlack dark:!text-primaryWhite h-[750px] sticky top-2 bottom-2">
      <NavLink to="/">
        <div className="flex flex-row justify-start items-start self-start mb-3">
          <BahrLogoComp />
        </div>
      </NavLink>
      <div>
        <Button
          phoneStyle={
            "h-[30px] w-[228px] flex gap-3 text-xl bg-lime-600 !text-white"
          }
          Icon={TbArrowGuide}
          text="راهنمایی کن منو"
          onClick={onClickGuide}
        />
      </div>
      <ul className="flex gap-1 flex-col">
        <span className="">عمومی</span>
        <li id="dashboard-button">
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
        <li id="my-courses-button">
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
        <li id="my-reservations-button">
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
        <li id="favorites-course-button">
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
        <li id="favorites-book-button">
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
        <li id="profile-button">
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
        <li id="comments-button">
          <NavLink to="/Panel/Comments">
            {({ isActive }) => (
              <Button
                phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl ${
                  isActive
                    ? "!bg-primaryBlue !text-white"
                    : "bg-primaryWhite !text-primaryBlack dark:bg-primaryBlack dark:!text-primaryWhite"
                }`}
                Icon={FaRegComments}
                text="کامنت ها"
                onClick={() => handleClick("comments")}
              />
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-3 flex-col mb-3">
        <span>مالی</span>
        <li id="payments-button">
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
        <li className="z-50">
          <ExitingAlert />
        </li>
      </ul>
    </div>
  );
};

export default RightSection;
