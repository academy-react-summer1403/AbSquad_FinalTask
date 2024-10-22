import React, { useState } from "react";
import PanelMiddleInfo from "./dependencies/PanelMiddleInfo";
import HamburgerMenu from "./dependencies/HamburgerMenu";
const ProfileMain = () => {
  const [RenderHamMenu, setRenderHamMenu] = useState("");
  const [activeButton, setActiveButton] = useState("");
  return (
    <div className="w-full">
      <PanelMiddleInfo />
      <HamburgerMenu />
    </div>
  );
};

export default ProfileMain;
