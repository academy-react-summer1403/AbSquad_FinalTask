import React, { useEffect, useState } from "react";
import { CourseItems } from "./CourseItems";
import { GetAllFavArticle } from "../../../../../core/Services/Api/Student/AddDeleteFavNews/getFavNews.api";

const CourseBox = ({ func }) => {
  // Getting All Favorited News
  const [favArticles, setFavArticles] = useState([]);
  const handleGetAllFavArticle = async () => {
    const res = await GetAllFavArticle();
    setFavArticles(res.myFavoriteNews);
  };
  useEffect(() => {
    handleGetAllFavArticle();
  }, []);
  // Getting Details Of The Favorited News

  return (
    <>
      {/* Items   */}
      {favArticles.map((it, index) => {
        return (
          <CourseItems
            key={index}
            func={func}
            newsId={it.newsId}
            title={it.title}
            image={it.currentImageAddressTumb}
          />
        );
      })}
    </>
  );
};

export { CourseBox };
