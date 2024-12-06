import React from "react";
import FontGraySmallText from "../FontGraySmallText";

const ProfileComp = ({
  name,
  skill,
  style,
  reply,
  pic = "",
  nameSize = "",
  skillSize = "",
  LeftLogo = "",
  leftLogoStyle = "",
}) => {
  return (
    <>
      <div
        className={`flex flex-row justify-start items-center gap-3 h-14 ${style} ${
          reply == "yes" ? "max-sm:right-[1%]" : ""
        }`}
      >
        {/* Profile Container*/}
        <div className="h-14 w-14">
          <div className="border rounded-full bg-primaryGray w-full h-full overflow-hidden">
            <img src={pic} alt="" />
          </div>
        </div>
        {/* Names Container */}
        <div
          className={`flex flex-col justify-start items-start ${
            LeftLogo ? "grow" : ""
          }`}
        >
          <div className={`sm:text-2xl text-base ${nameSize}`}>{name}</div>
          <div>
            <FontGraySmallText text={skill} style={skillSize} />
          </div>
        </div>
        {/* A Logo At THe Left Of The Component */}
        <div className="flex justify-end items-start h-full mt-5">
          {LeftLogo && <LeftLogo size={24} className={`w-10`} />}
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
