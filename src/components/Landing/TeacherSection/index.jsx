import React, { useEffect, useState } from "react";
import TeacherComp from "./TeacherComp";
import LandingMainTitle from "../../../components/Common/LandingMainTitle";
import { GetPopularTeacher } from "../../../core/Services/Api/teacher.landing.api.js";

const TeacherSection = () => {
  const [popularTeachers, setPopularTeachers] = useState([]);
  const GetTeacher = async () => {
    const res = await GetPopularTeacher();
    setPopularTeachers(res);
  };
  useEffect(() => {
    GetTeacher();
  }, []);
  return (
    <>
      {/* Best Teachers Title */}
      <div className="flex flex-col gap-5 justify-center items-center mt-40 mb-10">
        <LandingMainTitle
          title="برترین اساتید هفته"
          desc="اساتیدی که با نظرسنجی در دوره ها به انها بیشترین رای مثبت را دادند"
        />
      </div>
      {/* Best Teachers Section */}
      <div className="grid grid-cols-1 my-40 sm:flex gap-16 sm:flex-row sm:justify-center sm:items-center sm:gap-16 sm:my-0">
        {popularTeachers.map((it, index) => {
          return (
            index < 3 && (
              <TeacherComp
                key={index}
                name={it.fullName}
                pic={it.pictureAddress}
                courseCount={it.courseCounts}
                linkDein={it.linkdinProfileLink}
                rank={["🥈", "🥇", "🥉"]}
                index={index}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default TeacherSection;
