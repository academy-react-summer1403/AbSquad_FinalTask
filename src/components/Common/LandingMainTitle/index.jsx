import React from "react";

const LandingMainTitle = ({ title, desc }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl dark:text-primaryWhite">{title}</h1>
      <h3 className="text-sm w-3/5 text-center text-fontGray sm:text-xl">
        {desc}
      </h3>
    </>
  );
};

export default LandingMainTitle;
