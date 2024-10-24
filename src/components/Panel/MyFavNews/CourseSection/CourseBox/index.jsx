import React from "react";
import { CourseItems } from "./CourseItems";
const CourseBox = ({ func }) => {
  return (
    <>
      {/* Items   */}
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
      <CourseItems func={func} />
    </>
  );
};

export { CourseBox };
