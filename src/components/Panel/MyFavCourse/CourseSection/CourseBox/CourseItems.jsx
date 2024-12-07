import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { LuBookDown } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import "react-circular-progressbar/dist/styles.css";
import { GetCourseDetail } from "../../../../../core/Services/Api/CourseDetail/course.detail.api";
import { handleDateFormat } from "../../../../../core/utilities/DateConverter/data.convert.utils";
import { DeleteFavCourse } from "../../../../../core/Services/Api/Student/AddDeleteFavCourse/delete.fav.course.api";
import { GetAllFavCourse } from "../../../../../core/Services/Api/Student/AddDeleteFavCourse/GetAllCourse.api";
import PopUpMessages from "../../../../Common/PopUpMessages/PopUpMessages";
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const CourseItems = ({
  func,
  courseId,
  title,
  image,
  favId,
  handleGetAllFavCourse,
}) => {
  const nav = useNavigate();
  const [detailCourse, setDetailCourse] = useState({});
  const [favCourse, setFavCourse] = useState([]);

  const handleDetailCourse = async (id) => {
    const res = await GetCourseDetail("CourseId=" + id);
    setDetailCourse(res);
  };
  useEffect(() => {
    if (courseId) handleDetailCourse(courseId);
  }, [courseId]);

  // Converting Dates ********************************************************************
  const [formattedDateStart, setFormattedDateStart] = useState("");
  useEffect(() => {
    if (detailCourse.startTime !== undefined)
      setFormattedDateStart(handleDateFormat(detailCourse.startTime));
  }, [detailCourse.startTime]);

  // Delete Button Handle
  const handleDelete = async (id) => {
    const formData = new FormData();
    formData.append("CourseFavoriteId", id);
    await DeleteFavCourse({ data: formData });
    handleGetAllFavCourse();
  };

  // Is Open For Modal Deleting Things
  const [isOpen, setIsOpen] = useState("deactive");

  //Function for Pop Up Message
  const PopUpFuncs = {
    delete: () => {
      handleDelete(favId);
    },
    close: () => {
      setIsOpen("deactive");
    },
  };

  // Render Start ***********************************************************************
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="w-full flex flex-row justify-start items-start flex-nowrap border-b py-3 2xl:border-none rounded-2xl hover:bg-primaryGray "
      >
        {/* Whole Rect */}
        <div className="basis-full flex flex-row gap-y-1 2xl:flex-row 2xl:items-center">
          {/* Course Image */}
          <div className="2xl:basis-[17.66666%] h-full basis-1/2 2xl:pr-5">
            <img
              className=" w-11/12 2xl:w-4/5 2xl:h-[80px] h-20 rounded-lg border"
              src={image ? image : "/ErrImg.jpg"}
              alt=""
            />
          </div>
          {/* Second Part Of the Div */}
          <div className="grow 2xl:basis-full flex flex-col gap-y-1 2xl:flex-row 2xl:items-center">
            {/* Name Of The Course */}
            <div className="text-base 2xl:text-xl 2xl:basis-[18%]">{title}</div>
            {/* Teachers */}
            <div className="2xl:basis-[18%]">
              <textarea
                maxLength={10}
                readOnly
                disabled
                value={detailCourse.teacherName}
                className="text-fontGray text-sm 2xl:text-base 2xl:text-primaryBlack resize-none bg-transparent truncate h-7 2xl:basis-[21.33338%] 2xl:w-[70%]"
              />
            </div>
            {/* Date Of Course */}
            <div className="text-sm text-fontGray 2xl:text-primaryBlack 2xl:text-base 2xl:basis-[17.5%]">
              {formattedDateStart}
            </div>
            {/* Price of Course */}
            <div className="hidden 2xl:flex 2xl:text-base 2xl:basis-[16.66666%]">
              <span className="text-xl">
                {parseInt(detailCourse.cost).toLocaleString()}
              </span>{" "}
              تومان
            </div>
            {/* Icons */}
            <div className="hidden 2xl:flex justify-end  items-center 2xl:text-base 2xl:grow">
              {/* Eye Button */}
              <div className="flex justify-end">
                <div className="flex justify-center items-center gap-3 h-full rounded-full p-2">
                  <IoEyeOutline
                    onClick={() => {
                      nav(`/CourseDetail/CourseId=${detailCourse.courseId}`);
                    }}
                    size="24px"
                    className="text-fontGray hover:text-primaryBlue cursor-pointer"
                  />
                  <LuBookDown
                    size="24px"
                    className="text-fontGray hover:text-primaryBlue cursor-pointer"
                  />
                  <RxCross1
                    onClick={() => setIsOpen("active")}
                    size="24px"
                    className="text-instaRed cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Modal */}
      {isOpen == "active" && (
        <div className="absolute top-0 right-0 bg-primaryBlack bg-opacity-50 w-screen h-screen z-[70]  ">
          <PopUpMessages
            OnclickRight={PopUpFuncs.delete}
            OnclickLeft={PopUpFuncs.close}
            TopSpan={"آیا از حذف دوره مطمئن هستید؟"}
            BottomSpan={
              "در صورت تایید این دوره از لیست علاقه‌مندی دوره شما حذف خواهد شد"
            }
            IconComponent={BsTrash3}
            RightPhoneStyle={"!w-40 !h-14 bg-instaRed text-xl"}
            RightIconComponent={undefined}
            RightText={"حذف دوره"}
            LeftIconComponent={undefined}
            LeftPhoneStyle={
              "bg-instaRed text-xl !bg-[#F0F0F0] !text-primaryBlack"
            }
            LeftText={"انصراف"}
          />
        </div>
      )}
    </>
  );
};

export { CourseItems };
