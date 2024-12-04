import React, { useEffect, useState } from "react";
import { CourseItems } from "./CourseItems";
import { GetReserve } from "../../../../../core/Services/Api/Student/AddReserve/get.reserve.api";

const CourseBox = ({ func }) => {
  // Getting All Course Reserves
  const [reservedCourses, setReservedCourses] = useState([]);
  const handleGetReservedCourses = async () => {
    const res = await GetReserve();
    setReservedCourses(res);
  };
  useEffect(() => {
    handleGetReservedCourses();
  }, []);

  return (
    <>
      {reservedCourses.length === 0 ? (
        <p>Nothing to map</p>
      ) : (
        reservedCourses.map((it, index) => (
          <CourseItems
            key={index}
            func={func}
            statusId={it.accept}
            courseId={it.courseId}
          />
        ))
      )}
    </>
  );
};

export { CourseBox };
