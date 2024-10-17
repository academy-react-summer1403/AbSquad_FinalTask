import React from "react";

const LikeDislikeCircle = ({ Icon, iconSize, style = "" }) => {
  return (
    <>
      <div
        className={`p-4 rounded-full border border-primaryGray flex justify-center items-center ${style}`}
      >
        <Icon size={`${iconSize}`} className={`dark:text-primaryWhite`} />
      </div>
    </>
  );
};

export default LikeDislikeCircle;
