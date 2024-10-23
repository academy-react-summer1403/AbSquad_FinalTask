import React from "react";
import { Top } from "./Top";
import { Mid } from "./Mid";
import { Bottom } from "./Bottom";
const Dashboard = () => {
  return (
    <div className="flex flex-col w-full justify-start items-center pt-5  monitor:pt-10 gap-y-8">
      <Top />
      <Mid />
      <Bottom />
    </div>
  );
};

export default Dashboard;
