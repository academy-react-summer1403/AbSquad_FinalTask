import React, { useState } from "react";
import { PostLoginAPI } from "../../core/Services/Api/AuthPage/Login/Login";
import TextField from "../Common/Fields/TextField";
import { FaHouse } from "react-icons/fa6";
import { MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleToken } from "../../redux/userSlice";
import CustomField from "../Common/Fields/Second Approach/CustomFIeld";
import { Field } from "formik";
import Button from "../Common/Button/Button";
import { NavLink } from "react-router-dom";
import { PiShieldStarBold } from "react-icons/pi";
import { GetProfileInfo } from "../../core/Services/Api/Panel/GetProfileInfo";
const RegisterInfoForm = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [Password, setPassword] = useState("");
  const [PhoneOrGmail, setPhoneOrGmail] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = { PhoneOrGmail, Password, rememberMe: true };

    const res = await PostLoginAPI(user);

    const token = res.data.token;
    const result = await GetProfileInfo(token);
    console.log(result);

    localStorage.setItem("token", token);
    dispatch(handleToken(token));

    // if (res.data.success == true) {
    //   navigate("/panel");
    // }
  };
  return (
    <div className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <span className="text-xl">ایمیل</span>
        <TextField
          placeholder="ایمیل خود را وارد کنید"
          icon={LuClipboardEdit}
          name="Phone or Email"
          onChange={(event) => setPhoneOrGmail(event.target.value)}
          value={PhoneOrGmail}
        />
      </div>
      <div className="flex flex-col gap-2 relative">
        <span className="text-xl">رمزعبور</span>
        <TextField
          placeholder="رمزعبور خود را وارد کنید"
          type={showPassword ? "text" : "password"}
          icon={MdLockOutline}
          name="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
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
      <Button
        phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto"
        text="ورود به حساب کاربری"
        onClick={onSubmit}
      />
      {/* <div className=" md:w-[540px] mb-6 max-md:flex-row-reverse max-md:flex max-md:gap-8">
        <NavLink to="/ForgotPass">
          <Button
            phoneStyle="mx-auto !text-primaryBlue h-[40px] w-[220px] !bg-LightBlueCustom gap-4 float-left max-md:w-[160px] max-md:text-xs "
            text="فراموشی رمزعبور"
            Icon={PiShieldStarBold}
          />
        </NavLink>
        <div>
          <input
            className="justify-self-start float-start rounded-lg 
          appearance-none w-[24px] h-[24px] bg-primaryGray checked:bg-primaryBlue checked:border-transparent focus:outline-none
          
            "
            type="checkbox"
          />
          <span className=" float-start indent-1.5">مرا به خاطر بسپار </span>
        </div>
      </div> */}
    </div>
  );
};

export default RegisterInfoForm;
