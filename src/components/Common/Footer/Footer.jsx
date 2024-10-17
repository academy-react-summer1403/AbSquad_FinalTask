import React from "react";
import FullBahrLogo from "../../../assets/Svgs/Header/bahrLogo/FullBahrLogo.png";
import InstaIcon from "../../../assets/Svgs/Footer/instagram.svg";
import TelegramIcon from "../../../assets/Svgs/Footer/telegram.svg";
import EnamadLogo from "../../../assets/Svgs/Footer/Enamad.png";
import FooterList from "./FooterList";
const Footer = () => {
  return (
    <>
      {/* The Footer Div */}
      <div className="flex flex-row  rounded-main h-[345px] bg-secondaryGray pt-10 px-3 gap-20 relative after:content-[' '] after:border after:border-solid after:border-primaryGray after:absolute  after:w-11/12 after:right-12 after:bottom-10 max-lg:h-auto max-lg:flex-wrap max-lg:gap-0 max-lg:justify-between max-lg:after:border-none max-lg:pb-5 dark:bg-primaryBlack dark:text-primaryWhite dark:border dark:border-primaryGray mt-24">
        {/* Social Media Routes */}
        <div className=" flex flex-col justify-start items-start text-base gap-4 pr-4 relative top-[-15px] max-lg:order-1 max-lg:w-2 max-lg:basis-5/12 max-lg:top-0 ">
          {/* Bahr Logo */}
          <img
            className="w-[91px] h-[102px] max-lg:absolute max-lg:bottom-0 "
            src={FullBahrLogo}
            alt="Bahr Logo"
          />
          {/* Instagram Div */}
          <div className="flex flex-row justify-center items-center gap-2 px-5 py-2 text-instaRed border border-solid border-primaryGray  rounded-blueButton bg-primaryWhite text-primaryRed mt-4 max-lg:hidden dark:bg-primaryBlack">
            <img className="w-6" src={InstaIcon} alt="Insta Icon" />
            <span>اینستاگرام</span>
          </div>
          {/* Telegram Div */}
          <div className="flex flex-row justify-center items-center gap-2 px-4 py-2 text-primaryBlue  border border-solid border-primaryGray  rounded-blueButton bg-primaryWhite text-primaryRed max-lg:hidden dark:bg-primaryBlack">
            <img className="w-6" src={TelegramIcon} alt="Insta Icon" />
            <span>تلگرام</span>
          </div>
        </div>
        {/*About The Academy */}
        <div className="flex flex-col items-start justify-start gap-9 basis-1/4 max-lg:flex-row max-lg:flex-wrap max-lg:order-4 max-lg:basis-full max-lg:mt-12 max-lg:gap-5">
          <h1 className="text-2xl font-extrabold max-lg:text-xl max-lg:basis-full">
            آکادمی کد نویسی بحر
          </h1>
          <h3 className="font-extrabold text-fontGray max-lg:text-sm max-lg:basis-full max-lg:mb-10">
            +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا
            بزرگسال. هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم
            برای موفقیت در دنیای فناوری و برنامه نویسی مجهز کنیم.
          </h3>
          {/* Phone Size Social Media Routes */}
          {/* Instagram Div */}
          <div className="hidden  flex-row justify-center items-center gap-2 px-4 py-2 text-instaRed border border-solid border-primaryGray  rounded-blueButton bg-primaryWhite text-primaryRed mt-4  max-lg:flex max-lg:mt-0 dark:bg-primaryBlack">
            <img className="w-6" src={InstaIcon} alt="Insta Icon" />
            <span>اینستاگرام</span>
          </div>
          {/* Telegram Div */}
          <div className="hidden flex-row justify-center items-center gap-2 px-4 py-2 text-primaryBlue border border-solid border-primaryGray  rounded-blueButton bg-primaryWhite text-primaryRed max-lg:flex dark:bg-primaryBlack">
            <img className="w-6" src={TelegramIcon} alt="Insta Icon" />
            <span>تلگرام</span>
          </div>
        </div>
        {/* Footer Links */}
        <div className="basis-1/4 flex flex-row   text-xl justify-around text-extrabold max-lg:order-3 max-lg:basis-full max-lg:mt-12 max-lg:text-base">
          {/* Pages Ul */}
          <FooterList
            title="صفحات"
            it1="خانه"
            it2="دوره ها"
            it3="اخبار و مقالات"
          />
          {/* About Us */}
          <FooterList
            title="ما"
            it1="اساتید"
            it2="درباره ما"
            it3="ارتباط با ما"
          />
        </div>
        {/* Electronic Issue */}
        <div className="lg:grow max-lg:order-2 max-lg:basis-5/12 ">
          <img
            className="w-[120px] float-left ml-20 max-lg:ml-0  max-lg:float-right"
            src={EnamadLogo}
            alt="نماد الکترونیک"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
