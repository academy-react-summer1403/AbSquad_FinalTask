import React from "react";
import SuccessBar from "./SuccessBar";
import ReserveVisual from "./ReserveVisual";
import { NavLink } from "react-router-dom";
import Button from "../../Common/Button/Button";
const ReserveCourseModal = ({ setReserveModalOpen }) => {
  const handleReserveModalClose = () => {
    setReserveModalOpen("close");
  };
  return (
    <>
      {/* Black Div */}
      <div className=" absolute top-0 left-0 w-screen h-full z-40 bg-black bg-opacity-50">
        {/* Reserve Modal */}
        <div className="flex flex-col items-center justify-start absolute top-0 rounded-3xl bg-primaryWhite right-[30%] p-6 gap-8 max-sm:w-full max-sm:right-0  ">
          {/* Success Bar */}
          <SuccessBar />
          <ReserveVisual />
          <h3 className="sm:text-xl text-base text-fontGray text-center">
            بعد از تایید ادمین مربوط دوره شما به{" "}
            <NavLink className="text-primaryBlack underline">دوره من </NavLink>
            <br />
            اضافه خواهد شد
          </h3>
          <div className="text-xl flex flex-row w-full justify-between items-center h-14 gap-5">
            <Button
              text={"لیست رزرو های من"}
              phoneStyle={"basis-8/12 h-full max-sm:text-base"}
            />
            <Button
              text={"باشه"}
              phoneStyle={
                "basis-4/12 h-full !bg-primaryWhite !text-primaryBlack border border-primaryGray max-sm:text-base"
              }
              onClick={handleReserveModalClose}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveCourseModal;
