import React, { useEffect, useState } from "react";
// Student exclusive API
import { AddFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/add.fav.api";
import { GetAllFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/getFavNews.api";
import { DeleteFavArticle } from "../../../core/Services/Api/Student/AddDeleteFavNews/delete.fav.api";
const LikeDislikeCircle = ({ Icon, iconSize, style = "", newsId }) => {
  const [favArticles, setFavArticles] = useState([]);
  const [isFavBtn, setIsFavBtn] = useState("deactive");

  const handleAddFav = async (id) => {
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
  };
  const handleGetAllFavArticle = async () => {
    const res = await GetAllFavArticle();
    setFavArticles(res.myFavoriteNews);
  };
  useEffect(() => {
    handleGetAllFavArticle();
  }, []);

  // Button Activing
  const handleIsFavBtn = (id) => {
    const foundArticle = favArticles.find((it) => {
      return it.newsId == id;
    });
    if (foundArticle == undefined) {
      setIsFavBtn("deactive");
    } else {
      setIsFavBtn("active");
    }
  };
  useEffect(() => {
    if (favArticles) {
      handleIsFavBtn(newsId);
    }
  }, [favArticles]);

  return (
    <>
      <div
        onClick={() => {
          handleAddFav(newsId);
        }}
        className={`p-4 rounded-full border border-primaryGray flex justify-center items-center ${style} cursor-pointer ${
          isFavBtn == "active" ? "!bg-primaryBlue border-none" : ""
        }`}
      >
        <Icon size={`${iconSize}`} className={`dark:text-primaryWhite`} />
      </div>
    </>
  );
};

export default LikeDislikeCircle;
