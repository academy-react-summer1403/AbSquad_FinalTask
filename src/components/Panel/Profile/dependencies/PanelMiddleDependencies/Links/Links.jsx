import React from "react";
import SocialLinks from "./SocialLinks";

const Links = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <SocialLinks SocialName="تلگرام" />
      <SocialLinks SocialName="لینکدین" />
    </div>
  );
};

export default Links;
