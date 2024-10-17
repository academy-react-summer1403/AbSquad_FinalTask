import Title from "../../Common/MainCourseBox/Info/Title";
import RoundedDiv from "../../Common/MainCourseBox/Info/RoundedDiv";
import LittleRect from "../../Common/MainCourseLittleRect";
import { CgCalendarDates } from "react-icons/cg";
import LikeDislikeCircle from "../../Common/LikeDislikeCircle";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { handleDateFormat } from "../../../core/utilities/DateConverter/data.convert.utils";
import ProfileComp from "../../Common/ProfileComp";
import FontGraySmallText from "../../Common/FontGraySmallText";

// import ProfileComp from "../../../Common/ProfileComp";
const RightSection = ({ newsDetail }) => {
  const [formattedDates, setFormattedDates] = useState("");
  useEffect(() => {
    if (newsDetail.insertDate !== undefined)
      setFormattedDates(handleDateFormat(newsDetail.insertDate));
  }, [newsDetail.insertDate]);

  return (
    // Right Side Container
    <div className="xl:basis-2/5">
      {/* Gray Box */}
      <div className="grayBox flex flex-col gap-0 px-5 py-3 top-0 ">
        <Title title={newsDetail.title} style="text-[28px]" />
        <div className="flex flex-row items-center justify-start gap-2">
          <RoundedDiv text={newsDetail.newsCatregoryName} />
          <RoundedDiv text={newsDetail.newsCatregoryName} />
        </div>
        <div className="flex flex-col gap-3 my-5">
          <LittleRect
            title={formattedDates}
            Icon={CgCalendarDates}
            iconSize="24px"
          />
          <LittleRect
            title={newsDetail.currentView}
            Icon={IoEyeOutline}
            iconSize="24px"
          />
        </div>
        <FontGraySmallText text={"منتشرکننده"} />
        <div className="flex flex-row items-center sm:gap-10 gap-2 sm:h-17 h-12 mt-5">
          {/* Profile Place */}
          <div className="flex flex-col items-start justify-start basis-1/2">
            <ProfileComp name={newsDetail.addUserFullName} />
          </div>
          {/* End Of Profile Place */}
          <div className="flex flex-row justify-center gap-1 sm:gap-10 basis-1/2 h-full">
            <LikeDislikeCircle
              Icon={MdOutlineBookmarkAdd}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
            />
            <LikeDislikeCircle
              Icon={AiOutlineLike}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
            />
            <LikeDislikeCircle
              Icon={AiOutlineDislike}
              iconSize={"24px"}
              style={"max-sm:!h-12 max-sm:!p-0 max-sm:w-12 "}
            />
          </div>
        </div>
      </div>
      {/* End OF Gray Box */}
    </div>
  );
};

export default RightSection;
