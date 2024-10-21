import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { delay, motion } from "framer-motion";
const Title = ({ name, linkDein }) => {
  return (
    <>
      <div className="flex flex-col justify-end items-center basis-28">
        <h1 className="text-xl dark:text-primaryWhite sm:text-2xl text-nowrap">
          {name}
        </h1>
        <a
          className="relative cursor-pointer  w-[30px] h-[30px]"
          href={linkDein}
        >
          <AiFillLinkedin className="text-[#0077b5]" size="30px" />
        </a>
      </div>
    </>
  );
};

export default Title;
