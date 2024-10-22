import { motion } from "framer-motion";
import React from "react";
import Aiden from "../../../assets/CoderPics/Aiden.avif";
import WatchDogsLogo from "../../../assets/CoderPics/WatchDOgsLogo.png";
const CoderComps = () => {
  return (
    // The Circle
    <motion.div
      className={`border-4 border-dashed border-primaryBlue rounded-full w-96 h-96 relative mx-auto flex flex-col justify-start items-center gap-3 pt-12 dark:text-primaryWhite`}
    >
      {/* Profile Pic */}
      <motion.div className="w-32 h-32 rounded-full border overflow-hidden ">
        <img src={Aiden} className="w-full h-full" />
      </motion.div>

      <div className="text-3xl">Aiden Pearce</div>
      <span className="text-2xl">0912999444</span>
      <span className="text-2xl">Telegram Id</span>
    </motion.div>
  );
};

export default CoderComps;
