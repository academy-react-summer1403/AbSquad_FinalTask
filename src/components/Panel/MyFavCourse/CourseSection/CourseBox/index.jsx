import React, { useEffect, useState } from "react";
import { CourseItems } from "./CourseItems";
import { GetAllFavCourse } from "../../../../../core/Services/Api/Student/AddDeleteFavCourse/GetAllCourse.api";
const CourseBox = ({ func }) => {
  // Getting All Favorited News
  const [favCourse, setFavCourse] = useState([]);
  const handleGetAllFavCourse = async () => {
    const res = await GetAllFavCourse();
    setFavCourse(res.favoriteCourseDto);
  };
  useEffect(() => {
    handleGetAllFavCourse();
  }, []);

  return (
    <>
      {/* Items   */}
      {favCourse.map((it, index) => {
        return (
          <CourseItems
            key={index}
            func={func}
            courseId={it.courseId}
            title={it.courseTitle}
            image={it.tumbImageAddress}
            favId={it.favoriteId}
            handleGetAllFavCourse={handleGetAllFavCourse}
          />
        );
      })}
    </>
  );
};

export { CourseBox };
