import React from "react";
import { CourseItems } from "./CourseItems";
import { GetAllFavArticle } from "../../../../../core/Services/Api/Student/AddDeleteFavNews/getFavNews.api";
const CourseBox = ({ func }) => {
  return (
    <>
      {/* Items   */}
      <CourseItems func={func} />
    </>
  );
};

export { CourseBox };
