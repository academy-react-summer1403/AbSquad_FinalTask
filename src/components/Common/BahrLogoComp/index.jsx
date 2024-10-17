import React from "react";
import BahrLogo from "../../../assets/Svgs/Header/bahrLogo/Logo.png";
import BahrLogoText from "../../../assets/Svgs/Header/bahrLogo/LogoText.png";
const BahrLogoComp = () => {
  return (
    <>
      <img className="w-[50px] pl-1 " src={BahrLogo} alt="Logo" />
      <img
        className="h-[40px] max-lg:hidden"
        src={BahrLogoText}
        alt="LogoText"
      />
    </>
  );
};
export default BahrLogoComp;
