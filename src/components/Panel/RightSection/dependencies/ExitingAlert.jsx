import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Button from "../../../Common/Button/Button";
import { MdOutlineExitToApp } from "react-icons/md";
import PopUpMessages from "../../../Common/PopUpMessages/PopUpMessages";
const ExitingAlert = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleExitClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmExit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  };

  const handleCancelExit = () => {
    setShowConfirmation(false); // Close the confirmation dialog
  };

  return (
    <div>
      <button onClick={handleExitClick}>
        <Button
          phoneStyle="h-[53px] w-[228px] flex gap-3 text-xl bg-primaryWhite text-black dark:bg-primaryBlack  text-red-500"
          Icon={MdOutlineExitToApp}
          text="خروج از حساب"
        />
      </button>

      {showConfirmation && (
        <PopUpMessages
          OnclickRight={handleConfirmExit}
          OnclickLeft={handleCancelExit}
          TopSpan="آیا از حذف دوره مطمئن هستید؟"
          BottomSpan="در صورت تایید این دوره از لیست علاقه‌مندی دوره شما حذف خواهد شد"
          IconComponent={MdOutlineExitToApp}
          RightPhoneStyle="h-[53px] w-[150px] flex gap-3 text-xl bg-red-500 !text-black-500 dark:bg-primaryBlack"
          RightIconComponent={MdOutlineExitToApp}
          RightText="خروج"
          LeftIconComponent={MdOutlineExitToApp}
          LeftPhoneStyle="h-[53px] w-[150px] flex gap-3 text-xl  dark:bg-primaryBlack"
          LeftText="انصراف"
        />
      )}
    </div>
  );
};

export default ExitingAlert;
