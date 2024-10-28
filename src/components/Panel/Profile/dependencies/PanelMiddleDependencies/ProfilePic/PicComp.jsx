import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import PicSetting from "./PicSetting";

const PicComp = ({
  imageSrc,
  isSelected,
  onSelected,
  optionsOpen,
  option,
  ImageID,
  setRefetch,
}) => {
  return (
    <div
      className="w-[300px] h-[300px] bg-primaryBlue rounded-2xl p-2 max-md:w-[148px] max-md:h-[148px] relative"
      onClick={onSelected}
    >
      <div className="flex gap-2 absolute" onClick={optionsOpen}>
        <div className="rounded-full bg-primaryWhite w-8 h-8 flex justify-center items-center dark:text-primaryBlack">
          <SlOptionsVertical />
        </div>
        {isSelected && (
          <div className="bg-green-700 rounded-full w-8 h-8 flex justify-center items-center">
            <FaCheck />
          </div>
        )}
      </div>
      {option && <PicSetting ImageID={ImageID} setRefetch={setRefetch} />}
      <img
        src={imageSrc}
        alt="Profile"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default PicComp;
