import React, { useEffect } from "react";
import PanelMiddleInfo from "./dependencies/PanelMiddleInfo";
import HamburgerMenu from "./dependencies/HamburgerMenu";
import { GetProfileInfo } from "../../../core/Services/Api/Panel/GetProfileInfo";
import { useSelector, useDispatch } from "react-redux";
import { setProfileInfo } from "../../../redux/userSlice";

const ProfileMain = () => {
  return (
    <div className="w-full">
      <PanelMiddleInfo />
      <HamburgerMenu />
    </div>
  );
};

export default ProfileMain;
