import React from "react";
const Rank = ({ rank, courseCount, index }) => {
  // "text-3xl text-primaryBlue sm:text-4xl"
  return (
    <>
      <div className="flex flex-row justify-center items-center basis-1/12">
        <span
          className={
            rank == "🥇"
              ? "text-3xl text-primaryBlue sm:text-4xl"
              : "text-3xl sm:text-4xl dark:text-primaryWhite"
          }
        >
          {courseCount}
        </span>
        <span className="text-4xl sm:text-5xl">{rank[index]}</span>
      </div>
    </>
  );
};

export default Rank;
