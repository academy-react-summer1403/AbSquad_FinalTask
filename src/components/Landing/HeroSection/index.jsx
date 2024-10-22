import React from "react";
import Introduction from "./Introduction";
import Button from "../../../components/Common/Button/Button";
import QuickAccess from "./QuickAccess";
import BlueStrap from "./BlueStrap";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <>
      <Introduction />
      <Button
        text="شروع یادگیری"
        phoneStyle="py-2 m-auto mt-5 text-base sm:text-lg"
      />

      <QuickAccess />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <BlueStrap />
      </motion.div>
    </>
  );
};

export default HeroSection;
