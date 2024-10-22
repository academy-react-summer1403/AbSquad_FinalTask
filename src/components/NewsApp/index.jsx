import React from "react";
import NewsPageMainTitleSection from "./NewsPageMainTitleSection";
import ShowNewsSection from "./ShowNewsSection";
import { AnimatePresence, motion } from "framer-motion";
const NewsApp = () => {
  return (
    <div className="h-full">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <NewsPageMainTitleSection />
      </motion.div>
      <AnimatePresence>
        <motion.div
          key={"News"}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          <ShowNewsSection />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewsApp;
