import React from "react";
const Introduction = () => {
  return (
    <>
      <h1 className="text-5xl text-center line leading-normal mb-4 max-sm:text-[27px] dark:text-primaryWhite">
        تجربه ای بی نظیر در یادگیری
        {/* The Curly Brace Span */}
        <span className="lg:shadow-lg lg:inline-block lg:relative lg:top-4 lg:right-1 lg:rounded-full lg:w-14 lg:h-14 hidden dark:shadow-primaryWhite">
          <span className="flex flex-row justify-center items-center rounded-full border-2 border-solid border-primaryBlack w-3/5 h-3/5 absolute top-2.5 right-2.5 text-lg  ">
            <span className="inline-block ">{"{"}</span>{" "}
            <span className="inline-block relative bottom-[3px] font-semibold">
              ..
            </span>{" "}
            <span className="inline-block">{"}"}</span>
          </span>
        </span>
        {/* End OF Curly Brace Span */}
        <br className="sm:hidden" /> کدنویسی؛
        <br /> از
        <span className="text-primaryBlue"> مبتدی</span> تا
        <span className="text-instaRed"> حرفه ای</span>!
      </h1>
      <h3 className="text-center text-fontGray sm:text-xl text-base">
        آکادمی فوق تخصصی کدنویسی و برنامه‌نویسی
        <br className="sm:hidden" /> از سنین کودکی تا بزرگسالی
      </h3>
    </>
  );
};

export default Introduction;
