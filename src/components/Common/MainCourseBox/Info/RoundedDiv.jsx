import React from "react";
const RoundedDiv = ({ text }) => {
  return (
    <>
      <div className="text-xs bg-primaryBlue rounded-blueButton py-[6px] px-3 text-primaryWhite sm:text-sm">
        {text}
      </div>
    </>
  );
};

export default RoundedDiv;
