import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import NavLinkComp from "./NavLinks/NavLinksComp";
import HambMenu from "../HambMenu";
import BahrLogoComp from "../BahrLogoComp";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeButton from "../DarkModeButton";
import ProfileComp from "../ProfileComp";
import { useSelector, useDispatch } from "react-redux";
import { setProfileInfo } from "../../../redux/userSlice";
import { GetProfileInfo } from "../../../core/Services/Api/Panel/GetProfileInfo";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navOpen, setNavOpen] = useState("close");

  // Token Getting And Check
  const [tokenExist, setTokenExist] = useState("");
  const student = useSelector((state) => state.userSlice.profile);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenExist(token); // Set tokenExist state to the token or null
  }, []);

  // Fetching Profile
  const FetchProfile = async () => {
    if (!tokenExist) return; // Prevent API call if token doesn't exist
    try {
      const ProfileInfo = await GetProfileInfo(tokenExist);
      dispatch(setProfileInfo(ProfileInfo));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    FetchProfile();
  }, [tokenExist]);

  // Initialize Driver.js and Add Steps for Tour
  useEffect(() => {
    const hasRunTour = localStorage.getItem("hasRunTour");
    const token = localStorage.getItem("token");

    if (!hasRunTour) {
      const steps = [
        {
          element: "#HeaderContainer",
          popover: {
            title: "Header",
            description: "This is the main header.",
          },
        },
        {
          element: "#NavLinksContainer",
          popover: {
            title: "Navigation Links",
            description: "These are the navigation links.",
          },
        },
        {
          element: "#DarkModeButton",
          popover: {
            title: "Dark Mode",
            description: "Toggle dark mode here.",
          },
        },
      ];

      if (token) {
        steps.push({
          element: "#Exist",
          popover: {
            title: "Welcome Back!",
            description: "You are logged in. Check your account options here.",
          },
        });
      } else {
        steps.push({
          element: "#LoginButton",
          popover: {
            title: "Login/Sign Up",
            description: "Login or register to access more features.",
          },
        });
      }

      const driverObj = driver({
        showProgress: true,
        steps: steps,
      });
      driverObj.drive();

      localStorage.setItem("hasRunTour", "true");
    }
  }, []);

  const openNavModal = () => {
    setNavOpen("open");
  };

  return (
    <>
      {/* Header Container */}
      <div
        className="w-full h-[56px] flex gap-3 justify-between text-xl max-lg:h-10 max-lg:flex max-lg:flex-row dark:bg-primaryBlack dark:text-primaryWhite pt-5 box-content"
        id="HeaderContainer"
      >
        {/* Logo Container */}
        <div className=" flex flex-row justify-start items-center max-lg:grow ">
          <BahrLogoComp />
        </div>
        {/* Route Links */}
        <div id="NavLinksContainer">
          <NavLinkComp mainStyle="max-lg:hidden" />
        </div>
        {/* Night Mode And Sign Up Button */}
        <div className=" flex justify-center items-center gap-8 box box-border max-lg:flex-end max-lg:gap-0">
          {/* Night Mode Button */}
          <div id="DarkModeButton">
            <DarkModeButton />
          </div>
          {/* SignUp/Login Button  */}
          <div id="LoginPanel">
            {!tokenExist && (
              <NavLink to="/Register" id="LoginButton" className="h-full">
                <Button
                  phoneStyle="max-lg:text-base h-full"
                  text="ورود یا ثبت نام"
                />
              </NavLink>
            )}
          </div>

          {!!tokenExist && (
            <div
              id="Exist"
              className="cursor-pointer"
              onClick={() => navigate("/Panel/Dashboard")}
            >
              <ProfileComp
                name={`${student.fName} ${student.lName}`}
                reply="hel"
                skill="دانشجو"
                pic={student.currentPictureAddress}
              />
            </div>
          )}
          {/* Menu Phone */}
          <div
            id="HambMenuButton"
            className="lg:hidden  h-3/5  w-10 relative after:content-[' '] after:w-4  after:border  after:border-solid after:border-primaryBlack after:absolute after:top-0 after:left-0 after:rounded-t-lg before:content-[' '] before:w-3  before:border  before:border-solid before:border-primaryBlack before:absolute before:bottom-0 before:left-0 before:rounded-t-lg dark:after:border-primaryWhite dark:before:border-primaryWhite"
            onClick={openNavModal}
          >
            <span className="border-t-2 border-solid border-primaryBlack rounded-t-lg w-5 absolute top-[48%] left-0 dark:border-primaryWhite"></span>
          </div>
        </div>
      </div>
      {navOpen === "open" && (
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
