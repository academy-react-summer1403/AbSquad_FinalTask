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

import PanelTopBar from "./dependencies/PanelTopBar";

const LeftSection = () => {
  return (
    <div className="w-full sticky top-2 z-50">
      <PanelTopBar />
    </div>
  );
};

export default LeftSection;
