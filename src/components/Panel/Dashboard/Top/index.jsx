﻿import React from "react";
import { WelcomeMessage } from "./WelcomeMessage";
import { Time } from "./Time";
import { DashboardDate } from "./Date";
const Top = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center basis-10 w-full flex-wrap gap-y-8">
        <WelcomeMessage name={"پارسا"} />
        <Time />
        <DashboardDate />
      </div>
    </>
  );
};

export { Top };
