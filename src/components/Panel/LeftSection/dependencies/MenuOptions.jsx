import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineExitToApp } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { PiBookBookmarkLight } from "react-icons/pi";
import { PiMoneyWavy } from "react-icons/pi";
import HamburgerMenu from "./HamburgerMenu";
const MenuOptions = () => {
  return (
    <div className="absolute left-5 bottom-20 bg-primaryBlue w-[220px] rounded-2xl px-4 py-3">
      <ul className="flex flex-col gap-3">
        <li>
          <div className="flex justify-start items-center gap-2">
            <CiBookmark />
            علاقه‌مندی دوره
          </div>
        </li>
        <li>
          <div className="flex justify-start items-center gap-2">
            <PiBookBookmarkLight />
            علاقه‌مندی مقاله
          </div>
        </li>
        <li>
          <div className="flex justify-start items-center gap-2">
            <PiMoneyWavy />
            پرداخت ها
          </div>
        </li>
        <li>
          <div className="flex justify-start items-center gap-2">
            <TbUserEdit />
            حساب‌های کاربری
          </div>
        </li>
        <li>
          <div className="flex justify-start items-center gap-2">
            <MdOutlineExitToApp />
            خروج از حساب
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
