import React from "react";

import GridAndTable from "./GridAndTable";
import Sort from "./Sort";
const SortAndGrid = ({ setShowType, page = "" }) => {
  return (
    <>
      <div className="hidden xl:flex xl:flex-row xl:justify-start xl:items-center xl:w-full  xl:basis-10">
        {page != "News" && <GridAndTable setShowType={setShowType} />}
        <Sort />
      </div>
    </>
  );
};

export default SortAndGrid;
