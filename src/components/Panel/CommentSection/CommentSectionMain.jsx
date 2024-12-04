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
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="بخش اخبار" className=" dark:text-primaryWhite " />
        <Tab label="بخش دوره ها" className=" dark:text-primaryWhite " />
      </Tabs>
      {value === 0 && <NewsComments />}
      {value === 1 && <CourseComments />}
    </div>
  );
};

export default CommentSectionMain;
