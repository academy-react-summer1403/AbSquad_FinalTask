import React from "react";
import { CourseItems } from "./CourseItems";

const CourseBox = ({ func }) => {
  return (
    <>
      <CourseItems func={func} statusId={1} />
      <CourseItems func={func} statusId={2} />
      <CourseItems func={func} statusId={3} />
    </>
  );
};

export { CourseBox };
