import React from "react";
import { CloseSection } from "./CloseSection";
import ProfileComp from "../../../Common/ProfileComp";
import { IoIosLogOut } from "react-icons/io";
const AccountsModal = ({ func }) => {
  return (
    <>
      <div className="w-full 2xl:w-[700px] flex flex-col justify-start items-center p-5 bg-primaryWhite rounded-2xl gap-10 relative z-[500] mx-auto">
        <CloseSection func={func} />
        <div className={`w-full bg-primaryGray rounded-2xl`}>
          <ProfileComp
            name={"پارسا آقایی"}
            skill={"09129992222"}
            pic="/ErrImg.jpg"
            LeftLogo={IoIosLogOut}
          />
        </div>
      </div>
    </>
  );
};

export default AccountsModal;
