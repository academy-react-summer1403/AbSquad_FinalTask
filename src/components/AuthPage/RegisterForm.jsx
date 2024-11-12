import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import TextField from "../Common/Fields/TextField";
import { FaHouse } from "react-icons/fa6";
import { MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GetProfileInfo } from "../../core/Services/Api/Panel/GetProfileInfo";
import { useDispatch } from "react-redux";
import { setProfileInfo } from "../../redux/userSlice";
import { handleToken } from "../../redux/userSlice";
import CustomField from "../Common/Fields/Second Approach/CustomFIeld";
import Button from "../Common/Button/Button";
import { NavLink } from "react-router-dom";
import { PiShieldStarBold } from "react-icons/pi";
import { PostLoginAPI } from "../../core/Services/Api/AuthPage/Login/Login";
import { toast, Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { FinalStepRegister } from "../../core/Services/Api/AuthPage/register/registerLevel3";
import { useSelector } from "react-redux";
const RegisterForm = ({ step, stepLogin, handleNext }) => {
  const phoneNumber = useSelector((state) => state.phone.phoneNumber);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [Password, setPassword] = useState("");
  const [PhoneOrGmail, setPhoneOrGmail] = useState("");

  const validationSchema = Yup.object({
    PhoneOrGmail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const FetchProfile = async () => {
  //   try {
  //     const ProfileInfo = await GetProfileInfo();
  //     console.log("profile info clg", ProfileInfo);
  //     console.log(
  //       "this is what u dispatched",
  //       dispatch(setProfileInfo(ProfileInfo))
  //     );
  //     dispatch(setProfileInfo(ProfileInfo));
  //   } catch (error) {
  //     console.error("Error fetching profile info:", error);
  //   }
  // };
  // useEffect(() => {
  //   FetchProfile();
  // }, []);
  // const onSubmitLogin = async (event) => {
  //   event.preventDefault();
  //   const user = { PhoneOrGmail, Password, rememberMe: true };
  //   const res = await PostLoginAPI(user);
  //   const token = res.token;
  //   localStorage.setItem("token", token);
  //   dispatch(handleToken(token));
  //   console.log(res);
  //   if (res.success == true) {
  //     navigate("/panel/dashboard");
  //   }
  //   FetchProfile();
  //   console.log("");
  // };
  const onSubmitLogin = async (event) => {
    event.preventDefault();
    const user = { PhoneOrGmail, Password, rememberMe: true };
    const res = await PostLoginAPI(user);

    // Check if the token is not null or undefined before setting it in localStorage
    if (res.token) {
      const token = res.token;
      localStorage.setItem("token", token);
      dispatch(handleToken(token));
    } else {
      toast.error("Token is null or undefined");
    }

    console.log(res);
    if (res.success === true) {
      navigate("/panel/profile");
    }

    FetchProfile();
  };
  const RegisterLast = async (event) => {
    event.preventDefault();
    const gmail = PhoneOrGmail;
    const RegisterData = { gmail, Password, phoneNumber };
    const RegisterFinalStep = await FinalStepRegister(RegisterData);
    console.log(RegisterData, RegisterFinalStep);
    if (RegisterFinalStep.success == true) {
      navigate("/panel/dashboard");
    }
  };

  return (
    <Formik
      initialValues={{ PhoneOrGmail: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmitLogin}
    >
      {() => (
        <Form className="flex flex-col gap-6">
          <Toaster />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xl">ایمیل</span>
              <Field
                className="CourseField md:w-[538px]"
                placeholder="ایمیل خود را وارد کنید"
                icon={LuClipboardEdit}
                name="Phone or Email"
                onChange={(event) => setPhoneOrGmail(event.target.value)}
                value={PhoneOrGmail}
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <span className="text-xl">رمزعبور</span>
              <Field
                className="CourseField md:w-[538px]"
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
            <div className=" md:w-[540px] mb-6 max-md:flex-row-reverse max-md:flex max-md:gap-8">
              <NavLink to="/ForgotPass">
                <Button
                  phoneStyle="!text-primaryBlue h-[40px] w-[220px] !bg-LightBlueCustom gap-4 float-left max-md:w-[160px] max-md:text-xs "
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
                <span className=" float-start indent-1.5">
                  مرا به خاطر بسپار{" "}
                </span>
              </div>
            </div>
            {stepLogin == 0 && (
              <Button
                phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto"
                text="وLoginرود به حساب کاربری"
                onClick={onSubmitLogin}
                type="button"
              />
            )}
            {step == 2 && (
              <Button
                phoneStyle="h-[56px] w-[538px] max-md:w-[345px] mx-auto"
                text="ورregistetrود به حساب کاربری"
                onClick={RegisterLast}
                type="button"
              />
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
