import React, { useRef } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { AddProfileImage } from "../../../../../../core/Services/Api/Panel/AddProfileImage";
import { useDispatch } from "react-redux";
import { setProfileInfo } from "../../../../../../redux/userSlice";
import { useSelector } from "react-redux";
const AddNewPic = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const userImage = useSelector((state) => state.userSlice.profile.userImage);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const response = await AddProfileImage(file);
        console.log("New Image Response:", response); // Log response to verify
        const newImage = response;
        dispatch(setProfileInfo({ userImage: [...userImage, newImage] }));
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  return (
    <div
      className="w-[310px] h-[310px] border border-primaryBlue rounded-2xl
     shadow-buttonShadow flex flex-col items-center justify-center gap-3 max-md:w-[148px] max-md:h-[148px] mb-4 dark:shadow-darkButtonShadow"
      onClick={handleClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="text-primaryBlue text-4xl">
        <MdAddAPhoto />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-primaryBlack text-[16px] dark:text-primaryWhite">
          اضافه کردن عکس
        </span>
        <span className="text-gray-400 text-[12px]">
          اندازه فریم ( 236*236 )
        </span>
      </div>
    </div>
  );
};

export default AddNewPic;
