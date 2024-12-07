import React, { useEffect } from "react";
import PanelMiddleInfo from "./dependencies/PanelMiddleInfo";
import HamburgerMenu from "./dependencies/HamburgerMenu";

const ProfileMain = () => {
  return (
    <div className="w-full">
      <PanelMiddleInfo />
      <HamburgerMenu />
    </div>
  );
};

export default ProfileMain;
