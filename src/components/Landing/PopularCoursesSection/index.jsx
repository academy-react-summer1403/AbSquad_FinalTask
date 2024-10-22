import React, { useEffect, useState } from "react";
import LandingMainTitle from "../../../components/Common/LandingMainTitle";
import CourseImgCon from "../../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../../components/Common/MainCourseBox/Info";
import MainBox from "../../../components/Common/MainCourseBox";
import { GetPopularCourse } from "../../../core/Services/Api/course.api.js";
import { motion } from "framer-motion";
const PopularCoursesSection = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const GetCourse = async () => {
    const res = await GetPopularCourse();
    setPopularCourses(res);
  };
  useEffect(() => {
    GetCourse();
  }, []);
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1 }}
        className="flex flex-col gap-5 justify-center items-center mt-40 mb-10"
      >
        <LandingMainTitle
          title="محبوب ترین دوره ها"
          desc="دوره هایی که بین دانشجو های ما محبوبیت بالایی داشتند"
        />
      </motion.div>
      <motion.div
        initial={{ x: "-99%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.1 }}
        viewport={{ amount: 0 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"
      >
        {popularCourses.map((it, index) => {
          return (
            index !== 3 && (
              <MainBox
                ImageContainer={CourseImgCon}
                Info={CourseInfo}
                key={index}
                course={it}
                style={"cursor-pointer flex-col h-[528px]"}
              />
            )
          );
        })}
      </motion.div>
    </>
  );
};

export default PopularCoursesSection;
