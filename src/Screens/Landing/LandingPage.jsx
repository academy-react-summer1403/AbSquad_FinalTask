import React from "react";
import LandingApp from "../../components/Landing/index.jsx";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <>
      <motion.div>
        <LandingApp />
      </motion.div>
    </>
  );
};

export default LandingPage;
