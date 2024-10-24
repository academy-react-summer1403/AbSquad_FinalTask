import React from "react";
import Button from "../Button/Button";
import { MdOutlineExitToApp } from "react-icons/md";

const PopUpMessages = ({
  OnclickRight,
  OnclickLeft,
  TopSpan,
  BottomSpan,
  IconComponent,
  RightPhoneStyle,
  RightIconComponent,
  RightText,
  LeftIconComponent,
  LeftPhoneStyle,
  LeftText,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 flex-col">
      <div className="bg-primaryGray rounded-2xl w-[330px] h-[330px] flex flex-col justify-evenly items-center">
        <div>{IconComponent && <IconComponent size={48} />}</div>
        <div className="flex flex-col justify-center items-center">
          <span>{TopSpan}</span>
          <span className="w-[292px] text-center text-[15px] text-gray-500">
            {BottomSpan}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            phoneStyle={RightPhoneStyle}
            Icon={RightIconComponent}
            text={RightText}
            onClick={OnclickRight}
          />
          <Button
            phoneStyle={LeftPhoneStyle}
            Icon={LeftIconComponent}
            text={LeftText}
            onClick={OnclickLeft}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUpMessages;
