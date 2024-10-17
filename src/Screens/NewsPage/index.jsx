import React from "react";
import NewsApp from "../../components/NewsApp";
import { motion } from "framer-motion";
const NewsPage = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.1 }}
      >
        <NewsApp />
      </motion.div>
    </>
  );
};

export default NewsPage;
