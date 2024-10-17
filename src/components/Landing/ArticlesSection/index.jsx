import React, { useEffect, useState } from "react";
import LandingMainTitle from "../../Common/LandingMainTitle";
import MainBox from "../../Common/MainCourseBox";
import CourseImgCon from "../../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../../components/Common/MainCourseBox/Info";
import { GetNewsPagination } from "../../../core/Services/Api/News/news.pagination.api.js";

const ArticlesSection = () => {
  const [popularArticles, setPopularArticles] = useState([]);
  const GetTeacher = async () => {
    const res = await GetNewsPagination();
    setPopularArticles(res.news);
  };

  // Get API AND SET SEARCH WHEN MOUNTED
  useEffect(() => {
    GetTeacher();
  }, []);
  return (
    <>
      {/* New And Articles Title */}
      <div className="flex flex-col gap-5 justify-center items-center mt-40 mb-10">
        <LandingMainTitle
          title="اخبار و مقالات هفته"
          desc="خبر ها و مقاله هایی که در این هفته منتشر شدند"
        />
      </div>
      {/* News Components */}
      <div className="grid grid-cols-1 gap-8   xl:grid-cols-4 sm:grid-cols-2">
        {popularArticles.map((it, index) => {
          return (
            index < 4 && (
              <MainBox
                ImageContainer={CourseImgCon}
                Info={CourseInfo}
                key={index}
                course={it}
                type="LandingNews"
                style={"cursor-pointer flex-col h-[528px]"}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default ArticlesSection;
