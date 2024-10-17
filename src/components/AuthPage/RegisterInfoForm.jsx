import React, { useState } from "react";
import TextField from "../Common/Fields/TextField";
import { FaHouse } from "react-icons/fa6";
import { MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleToken } from "../../redux/userSlice";

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

    const res = await axios.post(
      "https://classapi.sepehracademy.ir/api/Sign/Login",
      user
    );

    const token = res.data.token;

    console.log(token);
    localStorage.setItem("token", token);
    dispatch(handleToken(token));

    // navigate("/profile");

    // console.log("title", title);
  };

  // console.log("111");
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
      <button onClick={onSubmit}>Save</button>
    </div>
  );
};

export default RegisterInfoForm;
