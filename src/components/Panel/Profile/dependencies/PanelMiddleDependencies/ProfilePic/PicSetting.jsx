import React from "react";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import { DeleteProfileImage } from "../../../../../../core/Services/Api/Panel/DeletePic";
import { SelectProfilePic } from "../../../../../../core/Services/Api/Panel/SelectProfilePic";

const PicSetting = ({ ImageID, setRefetch }) => {
  const HandleDelete = async () => {
    setRefetch((prev) => !prev);
    console.log("ImageID:", ImageID);
    try {
      const DeletePic = await DeleteProfileImage(ImageID);
      console.log("Delete Response:", DeletePic);
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };
  const SelectPicProfile = async () => {
    setRefetch((prev) => !prev);
    console.log("ImageID:", ImageID);
    try {
      const PFP = await SelectProfilePic(ImageID);
      console.log("Delete Response:", PFP);
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };
  return (
    <div className="w-[200px]  bg-primaryGray rounded-2xl absolute ">
      <div
        className=" flex gap-2 p-2 border-b border-gray-500 w-11/12 mx-auto"
        onClick={SelectPicProfile}
      >
        <div className="text-green-600">
          <FaCheck />
        </div>
        <span className="text-[15px]">انتخاب عکس اصلی</span>
      </div>
      <div
        className="border-spacing-4 flex gap-2 p-3 text-red-500 "
        onClick={HandleDelete}
      >
        <HiOutlineTrash />
        <span className="text-[15px]">حذف عکس</span>
      </div>
    </div>
  );
};

export default PicSetting;
