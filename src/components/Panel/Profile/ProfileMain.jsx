import React, { useState } from "react";
import PanelMiddleInfo from "./dependencies/PanelMiddleInfo";
import HamburgerMenu from "./dependencies/HamburgerMenu";
const ProfileMain = () => {
  const [RenderHamMenu, setRenderHamMenu] = useState("");
  const [activeButton, setActiveButton] = useState("");
  return (
    <div>
      <PanelMiddleInfo />
      <HamburgerMenu />
    </div>
  );
};

export default ProfileMain;
