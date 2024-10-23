import React from "react";
import { Top } from "./Top";
import { Mid } from "./Mid";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full justify-start items-center pt-5  monitor:pt-10 gap-y-8">
      <Top />
      <Mid />
      <div></div>
    </div>
  );
};

export default Dashboard;
