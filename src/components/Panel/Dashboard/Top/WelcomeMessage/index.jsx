import React from "react";

const WelcomeMessage = ({ name }) => {
  return (
    <h1 className=" text-2xl dark:text-primaryWhite basis-full 2xl:basis-1/2 2xl:text-3xl">
      سلام، صبح بخیر {name} 😍
    </h1>
  );
};

export { WelcomeMessage };
