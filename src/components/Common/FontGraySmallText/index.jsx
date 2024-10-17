import React from "react";

const FontGraySmallText = ({ text, style = "" }) => {
  return (
    <div className={`text-fontGray text-sm sm:text-base${style}`}>{text}</div>
  );
};

export default FontGraySmallText;
