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

  // Ensure Driver.js runs only once
  useEffect(() => {
    const hasRunTour = localStorage.getItem("hasRunTour");

    if (!hasRunTour) {
      // Initialize Driver.js
      const driverObj = driver({
        showProgress: true,
        steps: [
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
          {
            element: "#LoginButton",
            popover: {
              title: "Login/Sign Up",
              description: "Login or register here.",
            },
          },
          {
            element: "#Exist",
            popover: {
              title:
                "Login/Sign Uasdasdasdajgiruefnjqnwiegthiuerifwjepiworebhiuoivjeoqpeiwbfp",
              description: "Login or register here.",
            },
          },
        ],
      });
      driverObj.drive();

      // Mark tour as completed in localStorage

      if (token) {
        // Add step for existing user
        steps.push({
          element: "#Exist",
          popover: {
            title: "Welcome Back!",
            description: "You are logged in. Check your account options here.",
          },
        });
      } else {
        // Add step for login/signup
        steps.push({
          element: "#LoginButton",
          popover: {
            title: "Login/Sign Up",
            description: "Login or register to access more features.",
          },
        });
      }
      localStorage.setItem("hasRunTour", "true");
    }
  }, []); // Empty dependency array ensures it runs only once after app load

  useEffect(() => {
    // Checking The Token
    const token = localStorage.token;
    setTokenExist(token);
  }, []);

  // Fetching Profile
  const FetchProfile = async () => {
    try {
      const ProfileInfo = await GetProfileInfo(tokenExist);
      dispatch(setProfileInfo(ProfileInfo));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchProfile();
  }, [tokenExist]);

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
          {/* Menu Phone  */}
          <div
            id="HambMenuButton"
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
