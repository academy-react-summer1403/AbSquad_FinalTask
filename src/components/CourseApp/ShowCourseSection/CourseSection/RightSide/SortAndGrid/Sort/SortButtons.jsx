import React, { useEffect, useState } from "react";
import { SortOptions } from "../../../../../../../core/utilities/SortOptions/sort.utils";
const SortButtons = ({ deleteActive, setDeleteActive, setPopUpDelete }) => {
  // For Clicking On Sort Buttons
  const [sortActive, setSortActive] = useState(
    "bg-primaryBlue text-primaryWhite shadow-none"
  );
  const [activeIndex, setActiveIndex] = useState("0");
  const handleSortIsActive = (index) => {
    setActiveIndex(index);
    setSortActive("bg-primaryBlue text-primaryWhite shadow-none");
  };

  useEffect(() => {
    // For Deleting The Sorts
    if (deleteActive == "on") {
      setActiveIndex("-1");
      setDeleteActive("off");
    }
  }, [deleteActive]);

  return (
    <>
      {SortOptions[0].label.map((it, index) => {
        return (
          <div
            onClick={() => {
              handleSortIsActive(index);
              setPopUpDelete("Pop");
            }}
            key={index}
            className={`flex flex-row  justify-center items-center h-full rounded-blueButton text-primaryBlack py-[9px] px-4 cursor-pointer  dark:text-primaryWhite ${
              index == activeIndex
                ? sortActive
                : "dark:hover:text-primaryBlue hover:text-primaryBlue shadow-[0_0_0px_1px_#e4e4e4]"
            }`}
          >
            {it.name}
          </div>
        );
      })}
    </>
  );
};

export default SortButtons;
