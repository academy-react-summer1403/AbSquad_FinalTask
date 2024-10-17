import React, { useEffect, useState } from "react";
import FieldsSection from "./FieldsSection.jsx";
import Button from "../../../../Common/Button/Button.jsx";
import HambMenu from "../../../../Common/HambMenu/index.jsx";
const LeftSide = () => {
  const [filterOpen, setFilterOpen] = useState("close");
  const handleFilterOpen = () => {
    setFilterOpen("open");
  };
  return (
    <>
      <div className="basis-12 w-full px-4 order-1 my-5 xl:order-2 xl:basis-1/4 xl:flex-col  dark:bg-primaryBlack dark:text-primaryWhite">
        <Button
          text={"ترتیب و فیلتر"}
          phoneStyle="xl:hidden h-12 float-left"
          onClick={handleFilterOpen}
        />
        {<FieldsSection style={"hidden"} filterOpen={filterOpen} />}

        {filterOpen == "open" && (
          <HambMenu
            navOpen={filterOpen}
            setNavOpen={setFilterOpen}
            Component={FieldsSection}
            compWrapperStyle="sm:mx-auto sm:w-[600px] sm:rounded-2xl"
            compBg="bg-transparent"
            title="ترتیب و فیلتر"
            hambMenuStyle="xl:hidden "
          />
        )}
      </div>
    </>
  );
};

export default LeftSide;
