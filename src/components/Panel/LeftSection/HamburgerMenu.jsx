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

import { SlOptions } from "react-icons/sl";
import MenuOptions from "./menuOptions";
const HamburgerMenu = () => {
  const [value, setValue] = useState(0);
  const [RenderHamMenu, setRenderHamMenu] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const handleClick = (buttonName) => {
    setActiveButton(buttonName); // Set the clicked button as active
  };
  return (
    <div className=" w-[360px] rounded-[47px] h-[72px] bg-primaryWhite mx-auto mt-3 md:hidden dark:bg-primaryBlack dark:!text-primaryWhite">
      <ul className="flex justify-evenly py-1 ">
        <li>
          <Button
            phoneStyle={`h-16 w-16 flex gap-3 text-3xl bg-primaryWhite !text-black dark:bg-primaryBlack dark:!text-primaryWhite ${
              activeButton === "dashboard"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={RxDashboard}
            onClick={() => (setRenderHamMenu(0), handleClick("dashboard"))}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-16 w-16 flex gap-3 text-3xl bg-primaryWhite !text-black dark:bg-primaryBlack dark:!text-primaryWhites ${
              activeButton === "courses"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={VscBook}
            onClick={() => (setRenderHamMenu(0), handleClick("courses"))}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-16 w-16 flex gap-3 text-3xl bg-primaryWhite !text-black dark:bg-primaryBlack dark:!text-primaryWhite ${
              activeButton === "reservations"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={PiClockCountdownLight}
            onClick={() => (setRenderHamMenu(0), handleClick("reservations"))}
          />
        </li>
        <li>
          <Button
            phoneStyle={
              "h-16 w-16 flex gap-3 text-xl !bg-primaryWhite !text-black dark:bg-primaryBlack dark:!text-primaryWhite"
            }
            onClick={() => console.log("hi")}
            text="pic"
          />
        </li>
        <li className="relative">
          {RenderHamMenu === 1 && <MenuOptions />}
          <Button
            phoneStyle={`h-16 w-16 flex gap-3 text-3xl bg-primaryWhite !text-black dark:bg-primaryBlack dark:!text-primaryWhite ${
              activeButton === "rest"
                ? "!bg-primaryBlue !text-white"
                : "!justify-start"
            }`}
            Icon={SlOptions}
            onClick={(e) => (handleClick("rest"), setRenderHamMenu(1))}
          />
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
