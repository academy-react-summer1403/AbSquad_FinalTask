import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineTableRows } from "react-icons/md";
const GridAndTable = ({ setShowType }) => {
  const [typeIsActive, setTypeIsActive] = useState("off");
  return (
    <>
      <div className="flex flex-row basis-32 border-l border-primaryBlack h-full gap-3 justify-center items-center dark:border-primaryWhite dark:text-primaryWhite">
        <CiGrid41
          onClick={() => {
            setShowType("Grid");
            setTypeIsActive("Grid");
          }}
          className={`h-7 w-7 cursor-pointer hover:text-primaryBlue ${
            typeIsActive == "Grid" ? "text-primaryBlue" : ""
          }`}
        />
        <MdOutlineTableRows
          onClick={() => {
            setShowType("Table");
            setTypeIsActive("Table");
          }}
          className={`h-7 w-7 cursor-pointer hover:text-primaryBlue ${
            typeIsActive == "Table" ? "text-primaryBlue" : ""
          }`}
        />
      </div>
    </>
  );
};

export default GridAndTable;
