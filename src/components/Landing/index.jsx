import React from "react";
import HeroSection from "./HeroSection";
import Licences from "../../components/Landing/Licences";
import PopularCoursesSection from "./PopularCoursesSection";
import TeacherSection from "./TeacherSection";
import ArticlesSection from "./ArticlesSection";
const LandingApp = () => {
  return (
    <>
      <div className="my-10">
        <HeroSection />
        <Licences />
        <PopularCoursesSection />
        <TeacherSection />
        <ArticlesSection />
      </div>
    </>
  );
};

export default LandingApp;
