import React from "react";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
const Root = () => {
  return (
    <>
      <div className="mx-auto px-[2.5%] w-[95%] 2xl:w-[1428px] monitor:w-[1820px] xl:w-[1280px] 2xl:px-0 pb-16 lg:w-[1000px] sm:w-full overflow-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Root;
