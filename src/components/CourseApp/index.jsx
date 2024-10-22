import React from "react";
import PageMainTitleSection from "./PageMainTitleSection";
import ShowCourseSection from "./ShowCourseSection";
import { motion } from "framer-motion";
const CourseApp = () => {
  return (
    <div className="h-full">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <PageMainTitleSection />
      </motion.div>
      <motion.div
        key={"News"}
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        <ShowCourseSection />
      </motion.div>
    </div>
  );
};

export default CourseApp;
