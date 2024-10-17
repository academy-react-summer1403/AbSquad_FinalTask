import React, { useState } from "react";
import TextField from "../Common/Fields/TextField";
import { FaHouse } from "react-icons/fa6";
import { MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
const NewPass = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 relative">
        <span className="text-xl"> رمزعبور جدید</span>
        <TextField
          placeholder="رمزعبور جدید خود را وارد کنید"
          type={showPassword ? "text" : "password"}
          icon={MdLockOutline}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute left-4 top-12"
        >
          {showPassword ? (
            <MdVisibilityOff size={24} />
          ) : (
            <MdVisibility size={24} />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-2 relative">
        <span className="text-xl"> تکرار رمزعبور </span>
        <TextField
          placeholder="رمزعبور جدید خود را دوباره وارد کنید"
          type={showPassword ? "text" : "password"}
          icon={MdLockOutline}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute left-4 top-12"
        >
          {showPassword ? (
            <MdVisibilityOff size={24} />
          ) : (
            <MdVisibility size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default NewPass;
