import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import NavLinkComp from "./NavLinks/NavLinksComp";
import HambMenu from "../HambMenu";
import BahrLogoComp from "../BahrLogoComp";
import { NavLink } from "react-router-dom";
import DarkModeButton from "../DarkModeButton";

const Header = () => {
  const [navOpen, setNavOpen] = useState("close");
  const openNavModal = () => {
    setNavOpen("open");
  };
  return (
    <>
      {/* Header Container */}
      <div className="w-full h-[56px] grid grid-cols-4 text-xl max-lg:h-10 max-lg:flex max-lg:flex-row dark:bg-primaryBlack dark:text-primaryWhite pt-5 box-content">
        {/* Logo Container */}
        <div className=" flex flex-row justify-start items-center max-lg:grow ">
          <BahrLogoComp />
        </div>
        {/* Route Links */}
        {<NavLinkComp mainStyle="max-lg:hidden" />}
        {/* Night Mode And Sign Up Button */}
        <div className=" flex justify-center items-center gap-8 box box-border max-lg:flex-end max-lg:gap-0">
          {/* Night Mode Button */}
          <DarkModeButton />
          {/* SignUp/Login Button  */}
          <NavLink to="/Register" className="h-full">
            <Button
              phoneStyle="max-lg:text-base h-full"
              text="ورود یا ثبت نام"
            />
          </NavLink>
          {/* Menu Phone  */}
          <div
            className="lg:hidden  h-3/5  w-10 relative after:content-[' '] after:w-4  after:border  after:border-solid after:border-primaryBlack after:absolute after:top-0 after:left-0 after:rounded-t-lg before:content-[' '] before:w-3  before:border  before:border-solid before:border-primaryBlack before:absolute before:bottom-0 before:left-0 before:rounded-t-lg dark:after:border-primaryWhite dark:before:border-primaryWhite"
            onClick={openNavModal}
          >
            <span className="border-t-2 border-solid border-primaryBlack rounded-t-lg w-5 absolute top-[48%] left-0 dark:border-primaryWhite"></span>
          </div>
        </div>
      </div>
      {navOpen == "open" && (
        <HambMenu
          Component={NavLinkComp}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          compBg="bg-primaryWhite"
          hambMenuStyle="lg:hidden"
          closeExist="no"
        />
      )}
    </>
  );
};

export default Header;
