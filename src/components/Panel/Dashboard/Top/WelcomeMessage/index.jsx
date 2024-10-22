import React from "react";

const WelcomeMessage = ({ name }) => {
  return (
    <h1 className="text-2xl dark:text-primaryWhite basis-full monitor:basis-1/2 monitor:text-3xl">
      سلام، صبح بخیر {name} 😍
    </h1>
  );
};

export { WelcomeMessage };
