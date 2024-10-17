import React from "react";
import LandingApp from "../../components/Landing/index.jsx";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.1 }}
      >
        <LandingApp />
      </motion.div>
    </>
  );
};

export default LandingPage;
