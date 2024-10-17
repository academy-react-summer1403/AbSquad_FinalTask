import React from "react";
import PageMainTitle from "../../Common/PageMainTitle";
import { FaStarOfLife } from "react-icons/fa";
import Glass from "../../../assets/Svgs/CoursePage/Glass.png";
import { GoStarFill } from "react-icons/go";
const NewsPageMainTitleSection = () => {
  return (
    <>
      <div className="mt-20 mb-10 flex flex-col justify-center items-center relative">
        <PageMainTitle
          title="اخبار و مقالات آکادمی"
          desc="اخبار و مقالات که میتوانند برای پیشرفت و یادگیری شما مفید باشند رو ما در اختیار شما قرار میدیم"
        />
        <FaStarOfLife className="absolute top-2 w-6 h-6 left-0 rotate-45 text-primaryBlue 2xl:w-8 2xl:h-8 2xl:-top-5 2xl:left-[500px] xl:left-[300px]" />
        <GoStarFill className="absolute -bottom-10 w-6 h-6 right-0 rotate-12 text-[#3773ff9d] 2xl:w-8 2xl:h-8 2xl:top-16 2xl:right-[480px] xl:right-[280px] " />
        <img
          src={Glass}
          className="hidden lg:block absolute w-20 h-12 rotate-[30deg] left-[330px] bottom-0 2xl:left-[400px] 2xl:-bottom-2 xl:left-[250px]"
          alt="Glass"
        />
      </div>
    </>
  );
};

export default NewsPageMainTitleSection;
