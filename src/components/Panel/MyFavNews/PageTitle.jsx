import React from "react";
import Button from "../../Common/Button/Button";
const PageTitle = ({ handleOpenFilter }) => {
  return (
    <div className="flex justify-between w-full mb-7">
      <h1 className="monitor:text-4xl text-2xl">علاقه‌مندی مقالات</h1>
      <Button
        text={"فیلتر"}
        phoneStyle={"monitor:hidden h-10"}
        onClick={handleOpenFilter}
      />
    </div>
  );
};

export default PageTitle;
