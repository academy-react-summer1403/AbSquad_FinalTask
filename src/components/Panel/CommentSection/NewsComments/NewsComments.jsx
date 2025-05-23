import React, { useEffect, useState } from "react";
import PageTitle from "./dependencies/PageTitle";
import { GetMyNewsComments } from "../../../../core/Services/Api/GetCommentsForNewsAndCourse/GetNewsComments";
import Header from "./dependencies/Header";
import NewsMapping from "./dependencies/NewsMapping";

const NewsComments = () => {
  const [newsComments, setNewsComments] = useState({ myNewsCommetDtos: [] }); // Default structure with empty array

  const FetchNewsComments = async () => {
    try {
      const res = await GetMyNewsComments();
      setNewsComments(res || { myNewsCommetDtos: [] }); // Ensure fallback to default structure
      console.log(res);
    } catch (error) {
      console.error("Error fetching news comments", error);
      setNewsComments({ myNewsCommetDtos: [] }); // Handle errors gracefully
    }
  };

  useEffect(() => {
    FetchNewsComments();
  }, []);

  return (
    <div className="h-[640px] dark:bg-primaryBlack dark:text-primaryWhite">
      <div className="flex flex-col bg-primaryWhite rounded-2xl p-3 mt-2 mb-5 dark:bg-primaryBlack dark:text-primaryWhite">
        <PageTitle />
        <Header newsComments={newsComments} />
      </div>
      <div className="flex flex-col bg-primaryWhite rounded-2xl p-3 dark:bg-primaryBlack dark:text-primaryWhite">
        <NewsMapping newsComments={newsComments.myNewsCommetDtos} />
      </div>
    </div>
  );
};

export default NewsComments;
