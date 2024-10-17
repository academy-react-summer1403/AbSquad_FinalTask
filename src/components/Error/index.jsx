import React from "react";
import Error from "./Error";
import Header from "../Common/Header/Header";

const ErrorPage = () => {
  return (
    <>
      <div className="lg:w-[1428px] lg:px-0 px-[2.5%] m-auto ">
        <Header />
        <Error />
      </div>
    </>
  );
};

export default ErrorPage;
