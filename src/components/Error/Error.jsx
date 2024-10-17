import React from "react";
import Button from "../Common/Button/Button";
import LeftGlass from "../../assets/Svgs/ErrorPage/LeftGlass.png";
import RightGlass from "../../assets/Svgs/ErrorPage/RightGlass.png";
import { NavLink } from "react-router-dom";
const ErrorNotFound = () => {
  return (
    // Error Box Container
    <div className="dark:bg-primaryBlack h-screen">
      {/* Error Box */}
      <div className=" flex flex-col items-center text-center pt-40 relative lg:w-full lg:mx-0 mx-auto w-80">
        <h1 className="lg:text-8xl text-7xl text-primaryBlue w-content">404</h1>
        <h2 className="text-primaryBlue lg:text-2xl  text-base lg:w-80 w-64">
          ما صفحه‌ای که دنبالش هستی رو نتونستیم پیدا کنیم!
        </h2>
        <NavLink to="/">
          <Button text="صفحه اصلی" phoneStyle="my-10 py-[14px] px-6" />
        </NavLink>
        <img
          className="absolute lg:w-20 lg:left-[600px] lg:top-32 top-36 -left-10 w-12"
          src={LeftGlass}
          alt=""
        />
        <img
          className="absolute lg:w-20 lg:right-[580px] lg:bottom-0 w-16 -right-10 bottom-8"
          src={RightGlass}
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorNotFound;
