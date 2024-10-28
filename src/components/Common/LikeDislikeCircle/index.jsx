import React, { useEffect, useState } from "react";
import { MdOutlineBookmarkRemove } from "react-icons/md";
// Student exclusive API
import { AddFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/add.fav.api";
import { AddFavCourse } from "../../../core/Services/Api/Student/AddDeleteFavCourse/add.fav.Course.api";
import { GetAllFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/getFavNews.api";
import { GetAllFavCourse } from "../../../core/Services/Api/Student/AddDeleteFavCourse/GetAllCourse.api";
import { DeleteFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/delete.fav.api";
import { DeleteFavCourse } from "../../../core/Services/Api/Student/AddDeleteFavCourse/delete.fav.course.api";

const LikeDislikeCircle = ({
  Icon,
  iconSize,
  style = "",
  newsId,
  courseId,
  type,
}) => {
  const [favArticles, setFavArticles] = useState([]);
  const [favCourse, setFavCourse] = useState([]);
  const [isFavBtn, setIsFavBtn] = useState("deactive");
  // Step 1 : Getting ALl The Courses or News
  const handleGetAllFavCourse = async () => {
    const res = await GetAllFavCourse();
    setFavCourse(res.favoriteCourseDto);
  };
  const handleGetAllFavArticle = async () => {
    const res = await GetAllFavArticle();
    setFavArticles(res.myFavoriteNews);
  };
  useEffect(() => {
    if (type == "news" && newsId) {
      handleGetAllFavArticle();
    }
    if (type == "course" && courseId) {
      handleGetAllFavCourse();
    }
  }, [courseId, newsId]);

  // For News And Courses Adding Apis
  const handleAddFav = async (id, courseId, type) => {
    // News Section
    if (type == "news") {
      const foundArticle = favArticles.find((it) => {
        return it.newsId == id;
      });
      if (foundArticle == undefined) {
        await AddFavArticle(id);
      } else if (foundArticle != undefined) {
        await DeleteFavArticle({
          data: { deleteEntityId: foundArticle.favoriteId },
        });
      }
      await handleGetAllFavArticle();
    }
    // CourseSection
    else if (type == "course") {
      const foundCourse = favCourse.find((it) => {
        return it.courseId == courseId;
      });
      if (foundCourse == undefined) {
        await AddFavCourse({ courseId: courseId });
      } else if (foundCourse != undefined) {
        const formData = new FormData();
        formData.append("CourseFavoriteId", foundCourse.favoriteId);
        await DeleteFavCourse({ data: formData });
      }
      await handleGetAllFavCourse();
    }
  };

  // Button Activing
  const handleIsFavBtn = (id, type) => {
    if (type == "news") {
      const foundArticle = favArticles.find((it) => {
        return it.newsId == id;
      });
      if (foundArticle == undefined) {
        setIsFavBtn("deactive");
      } else {
        setIsFavBtn("active");
      }
    }
    if (type == "course") {
      const foundCourse = favCourse.find((it) => {
        return it.courseId == id;
      });

      if (foundCourse == undefined) {
        setIsFavBtn("deactive");
      } else {
        setIsFavBtn("active");
      }
    }
  };
  useEffect(() => {
    if (type == "course" && favCourse) {
      handleIsFavBtn(courseId, type);
    }
  }, [favCourse, courseId]);
  useEffect(() => {
    if (type == "news" && favArticles) {
      handleIsFavBtn(newsId, type);
    }
  }, [favArticles, newsId]);

  return (
    <>
      <div
        onClick={() => {
          handleAddFav(newsId, courseId, type);
        }}
        className={`p-4 rounded-full border border-primaryGray flex justify-center items-center ${style} cursor-pointer ${
          isFavBtn == "active" ? "!bg-primaryBlue border-none" : ""
        }`}
      >
        {isFavBtn == "deactive" && (
          <Icon size={`${iconSize}`} className={`dark:text-primaryWhite`} />
        )}
        {isFavBtn == "active" && (
          <MdOutlineBookmarkRemove
            size={`${iconSize}`}
            className={`dark:text-primaryWhite ${
              isFavBtn == "active" ? "text-primaryWhite" : ""
            }`}
          />
        )}
      </div>
    </>
  );
};

export default LikeDislikeCircle;
