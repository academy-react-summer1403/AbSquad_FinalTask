import React from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { PiBell } from "react-icons/pi";
import { GrEdit } from "react-icons/gr";
import { GrDocumentUpload } from "react-icons/gr";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Button from "../../../Common/Button/Button";
import { RxDashboard } from "react-icons/rx";
import { PiClockCountdownLight } from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import PanelTopBar from "../../LeftSection/dependencies/PanelTopBar";
import { SlOptions } from "react-icons/sl";
import PersonalInfo from "./PanelMiddleDependencies/PersonalInfo/PersonalInfo";
import Links from "./PanelMiddleDependencies/Links/Links";
import AddressTab from "./PanelMiddleDependencies/Address/AddressTab";
import ProfilePic from "./PanelMiddleDependencies/ProfilePic/ProfilePic";
import { GetProfileInfo } from "../../../../core/Services/Api/Panel/GetProfileInfo";
import { useSelector, useDispatch } from "react-redux";
import { setProfileInfo } from "../../../../redux/userSlice";
import { useEffect } from "react";

const PanelMiddleInfo = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userSlice.profile);
  // console.log(profile, "this is profile null");

  const [value, setValue] = useState(0);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const FetchProfile = async () => {
    try {
      const storedToken = localStorage.getItem("token");
      const ProfileInfo = await GetProfileInfo(storedToken);
      // console.log(ProfileInfo);
      dispatch(setProfileInfo(ProfileInfo));
    } catch (error) {
      console.error(error);
    }
  };
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    FetchProfile();
  }, [refetch]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-col bg-primaryWhite rounded-t-2xl mt-3 max-md:w-screen dark:bg-primaryBlack  ">
        <div className="bg-primaryBlue w-full h-[113px] rounded-t-2xl max-md:w-screen">
          <div className="bg-primaryWhite w-[136px] h-[136px] rounded-full relative top-16 right-10">
            <div className="bg-red-500 w-32 h-32 rounded-full absolute top-1 left-1">
              <img
                src={profile.currentPictureAddress}
                alt=""
                className="rounded-full"
              />
              <div className="bg-primaryBlue h-6 w-6 rounded-full bottom-0 absolute right-3 text-primaryWhite flex items-center justify-center">
                <GrDocumentUpload />
              </div>
            </div>
          </div>
        </div>
        {/*  currentPictureAddress: "Not-set",
      profileCompletionPercentage: 0,
      userImage: [],
      email: "Example@gmail.com",
      phoneNumber: "09XXXXXXXXX",
      lastName: "LastName",
      firstName: "FirstName",
      aboutMe: "hiiiiiiiiiiiiiiiiiiii",
      linkdinProfile: null,
      telegramLink: null,
      receiveMessageEvent: false,
      address: null,
      nationalCode: null,
      gender: false,
      birthDate: "0001-01-01T00:00:00",
      latitude: null,
      longitude: null, */}
        <div className="mt-28 flex max-md:flex-col dark:bg-primaryBlack dark:text-primaryWhite p-10">
          <div>
            {" "}
            <div className="mb-4 flex flex-col gap-3">
              <span className="text-3xl">
                {profile.fName} {profile.lName}
              </span>
              <span>( ادمین ، دانشجو )</span>
            </div>
            <div className="flex gap-4 items-center justify-end max-md:flex-col max-md:items-start max-md:mr-1">
              <div className="flex gap-2">
                <GrDocumentUpload />
                <span>{profile.phoneNumber}</span>
              </div>
              <div className="flex items-center justify-center max-md:hidden">
                <span className="block h-9 text-xl ">.</span>
              </div>
              <div className="flex gap-2">
                <GrDocumentUpload />
                <span>{profile.nationalCode}</span>
              </div>
              <div className="flex items-center justify-center max-md:hidden">
                <span className="block h-9 text-xl">.</span>
              </div>
              <div className="flex gap-2">
                <GrDocumentUpload />
                <span>{profile.email}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col mr-auto">
            <span>درباره من</span>
            <p className="w-[400px] h-[66px] max-md:w-[350px] p-2 mb-3">
              {profile.userAbout}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primaryWhite max-md:w-screen dark:bg-primaryBlack dark:!text-primaryWhite ">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="اطلاعات شخصی" className=" dark:text-primaryWhite " />
          <Tab label="عکس پروفایل" className=" dark:text-primaryWhite " />
          <Tab label="آدرس سکونت" className=" dark:text-primaryWhite " />
          <Tab label="لینک ها" className=" dark:text-primaryWhite " />
        </Tabs>
        {value === 0 && <PersonalInfo setRefetch={setRefetch} />}
        {value === 1 && <ProfilePic setRefetch={setRefetch} />}
        {value === 2 && <AddressTab setRefetch={setRefetch} />}
        {value === 3 && <Links setRefetch={setRefetch} />}
      </div>
    </div>
  );
};

export default PanelMiddleInfo;
