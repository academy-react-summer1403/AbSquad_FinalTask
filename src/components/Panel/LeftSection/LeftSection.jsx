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
import HamburgerMenu from "./dependencies/HamburgerMenu";
import { SlOptions } from "react-icons/sl";
import MenuOptions from "./dependencies/MenuOptions";
import PanelTopBar from "./dependencies/PanelTopBar";
import PanelMiddleInfo from "./dependencies/PanelMiddleInfo";
const LeftSection = () => {
  const [RenderHamMenu, setRenderHamMenu] = useState("");
  const [activeButton, setActiveButton] = useState("");

  // Function to handle click and set the active button

  return (
    <div className="w-full">
      <PanelTopBar />
      <PanelMiddleInfo />
      <HamburgerMenu />
    </div>
  );
};

export default LeftSection;
