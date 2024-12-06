import React, { useEffect, useState } from "react";
import { MdOutlineBookmarkRemove } from "react-icons/md";
// Student exclusive API
import { AddFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/add.fav.api";
import { AddFavCourse } from "../../../core/Services/Api/Student/AddDeleteFavCourse/add.fav.Course.api";
import { GetAllFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/getFavNews.api";
import { GetAllFavCourse } from "../../../core/Services/Api/Student/AddDeleteFavCourse/GetAllCourse.api";
import { DeleteFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/delete.fav.api";
import { DeleteFavCourse } from "../../../core/Services/Api/Student/AddDeleteFavCourse/delete.fav.course.api";
import { toast } from "react-hot-toast";
const LikeDislikeCircle = ({
  Icon,
  iconSize,
  style = "",
  newsId,
  courseId,
  type,
  btnType = "",
  onClickFunc,
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
        const res = await AddFavArticle(id);
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
        const res = await AddFavCourse({ courseId: courseId });
        if (res?.success) {
          // Success Toast
          toast.success("دوره به علاقه مندی ها اضافه شد!", {
            icon: "🌟", // A star icon for favorites
            style: {
              border: "2px solid #4caf50", // Green border for success
              padding: "16px",
              color: "#155724", // Dark green text
              background: "#d4edda", // Light green background
              borderRadius: "8px", // Rounded corners
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
            },
          });
        }
      } else if (foundCourse != undefined) {
        const formData = new FormData();
        formData.append("CourseFavoriteId", foundCourse.favoriteId);
        const res = await DeleteFavCourse({ data: formData });
        if (res?.success) {
          // Success Toast (with red theme for deletion)
          toast.success("دوره از علاقه مندی حذف شد!", {
            icon: "🗑️", // Trash icon for deletion
            style: {
              border: "2px solid #f44336", // Red border for success (to indicate deletion)
              padding: "16px",
              color: "#721c24", // Dark red text
              background: "#f8d7da", // Light red background
              borderRadius: "8px", // Rounded corners
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
            },
          });
        }
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
          if (btnType == "bookMark") handleAddFav(newsId, courseId, type);

          if (btnType == "like") onClickFunc();

          if (btnType == "disLike") onClickFunc();
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
