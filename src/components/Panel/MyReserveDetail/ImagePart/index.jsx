import React from "react";
import RoundedDiv from "../../../Common/MainCourseBox/Info/RoundedDiv";
import CourseStatus from "../../../Common/MainCourseBox/CourseStatus";
const ImagePart = () => {
  return (
    <>
      {/* Image Part */}
      <div
        className={`shadow-md h-[287px] flex flex-col justify-between bg-[#FF9090] rounded-3xl relative overflow-hidden w-full`}
      >
     <div className="flex flex-row gap-2 px-2 z-10">
     <div className="flex flex-row gap-2 px-2 pt-2 z-10">
            <RoundedDiv text={"مبتدی"} />
            <RoundedDiv text={"مبتدی"} />
          </div>
          <img
            className="absolute right-0 -z-10 h-full w-full "
            src={"/ErrImg.jpg"}
          />
        </div>
        <CourseStatus course={{ statusName: "درحال برگذاری" }} />
      </div>
    </>
  );
};

export { ImagePart };
