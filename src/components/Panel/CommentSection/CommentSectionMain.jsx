import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import NewsComments from "./NewsComments/NewsComments";
import CourseComments from "./CourseComments/CourseComments";
const CommentSectionMain = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="dark:bg-primaryBlack dark:text-primaryWhite mt-3 rounded-e-xl">
      <Tabs value={value} onChange={handleChange}>
        <Tab
          label="بخش اخبار"
          className="  dark:bg-primaryBlack dark:text-primaryWhite rounded-2xl"
        />
        <Tab
          label="بخش دوره ها"
          className=" dark:bg-primaryBlack dark:text-primaryWhite rounded-2xl"
        />
      </Tabs>
      {value === 0 && <NewsComments />}
      {value === 1 && <CourseComments />}
    </div>
  );
};

export default CommentSectionMain;
