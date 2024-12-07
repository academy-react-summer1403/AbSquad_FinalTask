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
            <img src={pic ? pic : "/ErrImg.jpg"} alt="" />
          </div>
        </div>
        {/* Names Container */}
        <div className="flex flex-col justify-start items-start">
          <div className={`sm:text-xl text-base ${nameSize}`}>{name}</div>
          <div>
            <FontGraySmallText text={skill} style={skillSize} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
