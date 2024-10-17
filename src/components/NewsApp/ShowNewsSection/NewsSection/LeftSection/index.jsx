import React, { useEffect, useState } from "react";
import Button from "../../../../Common/Button/Button.jsx";
import HambMenu from "../../../../Common/HambMenu/index.jsx";
import NewsFieldsSection from "./NewsFieldsSection";
const LeftSection = () => {
  const [newsFilterOpen, setNewsFilterOpen] = useState("close");
  const handleNewsFilterOpen = () => {
    setNewsFilterOpen("open");
  };
  return (
    <>
      <div className="basis-12 w-full px-4 order-1 my-5 xl:order-2 xl:basis-1/4 xl:flex-col  dark:bg-primaryBlack dark:text-primaryWhite">
        <Button
          text={"ترتیب و فیلتر"}
          phoneStyle="xl:hidden h-12 float-left"
          onClick={handleNewsFilterOpen}
        />
        {<NewsFieldsSection style={"hidden"} newsFilterOpen={newsFilterOpen} />}
        {newsFilterOpen == "open" && (
          <HambMenu
            navOpen={newsFilterOpen}
            setNavOpen={setNewsFilterOpen}
            Component={NewsFieldsSection}
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

export { LeftSection };
