import React from "react";
import ProfileComp from "../../../Common/ProfileComp";
import { CiCirclePlus } from "react-icons/ci";
import { IconContext } from "react-icons";
import { MdOutlinePhoneIphone } from "react-icons/md";
const OtherUsers = () => {
  return (
    <div className="flex flex-col  bg-primaryGray rounded-2xl p-3 gap-3">
      <span className="text-2xl">حساب های کاربری</span>
      <div className="">
        <ProfileComp
          name="users"
          skill="09121231234"
          style=""
          reply=""
          pic=""
        />
      </div>
      <div>
        <ProfileComp
          name="users"
          skill="09121231234"
          style=""
          reply=""
          pic=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <IconContext.Provider value={{ color: "blue", size: "30px" }}>
          <div>
            <CiCirclePlus />
          </div>
        </IconContext.Provider>
        <span className="text-lg">اضافه کردن حساب کاربری</span>
      </div>
    </div>
  );
};

export default OtherUsers;
