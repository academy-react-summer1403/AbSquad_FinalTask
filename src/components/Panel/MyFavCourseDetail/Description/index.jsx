import React from "react";
import FontGraySmallText from "../../../Common/FontGraySmallText";

const Description = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <FontGraySmallText text={"توضیح مختصر"} style="!text-base" />
        <h1 className="text-base">
          آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های مفید
          برای یادگیری بهتر
        </h1>
      </div>
    </>
  );
};

export { Description };
