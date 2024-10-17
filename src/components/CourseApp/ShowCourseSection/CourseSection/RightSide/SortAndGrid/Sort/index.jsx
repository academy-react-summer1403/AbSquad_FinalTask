import React, { useState } from "react";
import SortButtons from "./SortButtons";
import SortDeleteButton from "./SortDeleteButton";

const Sort = () => {
  const [deleteActive, setDeleteActive] = useState("off");
  const [popUpDelete, setPopUpDelete] = useState("notPop");
  return (
    <>
      <div className="grow flex flex-row justify-start items-center gap-3 pr-10  h-full">
        <span className="text-fontGray text-[18px]">ترتیب</span>
        <SortButtons
          deleteActive={deleteActive}
          setDeleteActive={setDeleteActive}
          setPopUpDelete={setPopUpDelete}
        />
        {popUpDelete == "Pop" && (
          <span className="border-l border-fontGray h-[22px] mr-2 ml-4 dark:border-primaryWhite"></span>
        )}

        {popUpDelete == "Pop" && (
          <SortDeleteButton
            title="حذف"
            deleteActive={deleteActive}
            setDeleteActive={setDeleteActive}
            setPopUpDelete={setPopUpDelete}
          />
        )}
      </div>
    </>
  );
};

export default Sort;
