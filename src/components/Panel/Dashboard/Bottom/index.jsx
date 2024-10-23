import React, { useEffect, useState } from "react";
import ShowAllHeader from "../../../Common/Panel/ShowAllHeader";
import ListSection from "../ListSection";
import { Modal } from "../Modal";
import AllNewCourses from "../AllNewCourses";
const Bottom = () => {
  const [openAll, setOpenAll] = useState("close");
  const handleOpenAll = () => {
    setOpenAll("open");
  };
  const handleCloseAll = () => {
    setOpenAll("close");
  };
  return (
    <>
      <div className="w-full h-full bg-primaryWhite py-5 rounded-2xl flex flex-col  gap-y-10">
        {/* Intro Top Part */}
        <ShowAllHeader title={"جدیدترین دوره ها"} funcs={handleOpenAll} />
        <ListSection />
        {openAll == "open" && <AllNewCourses />}
      </div>
      {/* {openAll && <Modal />} */}
    </>
  );
};

export { Bottom };
