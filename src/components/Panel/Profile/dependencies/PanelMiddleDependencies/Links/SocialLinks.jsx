import React from "react";
import { PiFadersHorizontal } from "react-icons/pi";
const SocialLinks = ({ SocialName }) => {
  return (
    <div className="flex flex-col gap-4">
      <span>{SocialName}</span>
      <div className="flex items-center gap-4">
        <div>
          <PiFadersHorizontal />
        </div>
        <span className="text-gray-400  dark:text-primaryWhite">
          لینک {SocialName} خود را وارد کنید{" "}
        </span>
      </div>
    </div>
  );
};

export default SocialLinks;
