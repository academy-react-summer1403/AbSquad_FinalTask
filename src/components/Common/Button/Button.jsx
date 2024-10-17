import React from "react";

const Button = ({
  text,
  phoneStyle,
  onClick,
  Icon,
  iconSize = "",
  iconStyle = "",
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`rounded-[64px] px-6  flex items-center justify-center bg-primaryBlue text-primaryWhite text-nowrap hover:shadow-buttonShadow  dark:hover:shadow-darkButtonShadow ${phoneStyle}`}
      >
        {Icon !== undefined ? (
          <Icon className={iconStyle} size={iconSize} />
        ) : (
          ""
        )}
        {text}
      </button>
    </>
  );
};

export default Button;
