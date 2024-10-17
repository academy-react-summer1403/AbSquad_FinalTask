import React, { useEffect, useState } from "react";
import Title from "./Title";
import Rank from "./Rank";
import Button from "../../../Common/Button/Button";
import TeacherDesc from "./TeacherDesc";

const TeacherSection = ({
  rank,
  name,
  pic,
  courseCount,
  linkDein = "No LinkDein",
  index,
}) => {
  return (
    <>
      <div
        className={
          index == 1
            ? "flex flex-col border-4 rounded-main border-solid border-primaryBlue w-full relative px-6 pb-4 gap-5 sm:w-[427px] "
            : "flex flex-col grayBox w-full relative px-6 pb-4 gap-5 sm:transform sm:scale-[85%] sm:w-[427px] "
        }
      >
        {/* Profile Pic */}
        <div
          className={
            index == 1
              ? "border-4 rounded-blueButton border-solid border-primaryBlue absolute  right-[40%] -top-9 bg-fontGray w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] sm:right-[40%] sm:-top-11 overflow-hidden"
              : " rounded-blueButton absolute  right-[40%] -top-9 bg-fontGray w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] sm:right-[40%] sm:-top-11 overflow-hidden"
          }
        >
          <img src={pic} alt="Pic" />
        </div>
        {/* Name and Rank */}
        <Title name={name} linkDein={linkDein} />
        <Rank rank={rank} index={index} courseCount={courseCount} />
        <TeacherDesc text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." />
        <div className="h-10 ">
          <Button
            text="صفحه استاد"
            phoneStyle="w-full text-base py-[18px] h-full"
          />
        </div>
      </div>
    </>
  );
};

export default TeacherSection;
