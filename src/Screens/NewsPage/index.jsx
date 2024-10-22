import React from "react";
import NewsApp from "../../components/NewsApp";
import { AnimatePresence, motion } from "framer-motion";
const NewsPage = () => {
  return (
    <>
      <AnimatePresence>
        <NewsApp />
      </AnimatePresence>
    </>
  );
};

export default NewsPage;
