import React from "react";
import { Outlet } from "react-router-dom";
import RightSection from "../RightSection/RightSection";
import LeftSection from "../LeftSection/LeftSection";
const RootPanel = () => {
  return (
    <>
      <div className="flex gap-5 bg-primaryGray max-md:flex-col dark:bg-black h-full px-3">
        <RightSection />
        <div className="w-full ml-5">
          <LeftSection />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default RootPanel;
